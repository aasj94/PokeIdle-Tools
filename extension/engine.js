/*
 * PokeIdle Auto-Compra - motor (roda no mundo da página, "MAIN").
 *
 * Como o mercado do jogo funciona (observado no WebSocket wss://pokeidle.io/):
 *  - lista de um item:   {"t":"market.atualizar","pedidos":[{"t":"market.item","itemId":23,"moeda":"gold"}]}
 *      resposta:         {"t":"market","aba":"item","itemId":23,"moeda":"gold","linhas":[{id,qtd,preco,estado,compravelEm,vendedor,ficha:{nome}}]}
 *      LIMITE: o servidor só responde a 3 pedidos por requisição e ignora requisições muito seguidas.
 *  - todos os itens:     {"t":"market.itens","elementos":[],"categoria":""}  → resumo por itemId (anúncios, menor preço) + médias de 7 dias
 *  - histórico:          {"t":"market.historicoCompras","pagina":0,"seq":N} → {"t":"market","aba":"historicoCompras","linhas":[...]}
 *  - comprar:            {"t":"market.comprar","id":<anuncio>,"qtd":1,"preco":<preco>,"moeda":"gold","sorteioUi":1}
 *  - a compra NÃO é imediata: quem pediu entra num sorteio (janela de ~3 s) e só quem leva paga.
 *  - o resultado aparece numa atualização de estado: o estoque do item (estado.items[itemId]) sobe.
 *
 * Esta extensão não clica em nada na tela e não tenta contornar o anti-bot (Turnstile):
 * se o jogo pedir verificação, ela se desliga sozinha e avisa.
 */
(() => {
  'use strict';
  if (window.__pokeAuto) return;

  const CH = 'pokeidle-auto';
  const NativeWS = window.WebSocket;
  const MAX_PEDIDOS = 3; // limite do servidor por requisição
  // O jogo responde "Devagar aí — muitas mensagens" quando se pede rápido demais:
  // a 3 s por requisição ~36% foram recusadas; a 5 s, nenhuma. Por isso o mínimo é 4 s.
  const MIN_INTERVAL = typeof window.__PM_MIN_INTERVAL === 'number' ? window.__PM_MIN_INTERVAL : 4000;

  const DEFAULTS = {
    enabled: false,     // flag global: liga/desliga as compras automáticas (sempre começa desligada)
    intervalMs: 5000,   // intervalo entre requisições de lista (uma requisição = até 3 itens)
    inflightMs: 8000,   // quanto tempo espera o resultado de um sorteio antes de considerar perdido
    cooldownMs: 6000,   // não pede o mesmo anúncio de novo antes disso
    rules: []           // [{id, itemId, nome, min, max, qtd, simult, ativo}]
  };

  const S = {
    cfg: Object.assign({}, DEFAULTS),
    ws: null,
    leader: true,
    offset: 0,
    offsetSamples: [],
    stock: {},
    stockInit: false,
    progress: {},
    compras: [],
    tentativas: [],   // cada pedido de compra: pendente → ganhou / perdeu / erro, com o motivo
    attN: 0,
    inflight: {},
    cooldown: new Map(),
    timers: new Map(),
    rows: {},
    catalog: {},
    market: {},
    nameTries: {},
    history: { total: 0, porPagina: 30, pages: {}, updated: 0 },
    urgent: [], lastUrg: 0,
    lastList: {},
    queue: [],
    rotor: 0,
    reqN: 0,
    seq: 100,
    scanned: false,
    connectedAt: 0,
    seenTypes: new Set(),
    log: [],
    stats: { pedidos: 0, compradas: 0, listas: 0, limites: 0, ganhas: 0, perdidas: 0, erros: 0 },
    lastReq: 0,
    bridgeAt: Date.now(), // último sinal da extensão (ponte)
    penalty: 0,        // atraso extra (ms) aplicado depois de um aviso de limite do jogo
    rlHits: [],        // horários dos avisos "Devagar aí" recentes
    dirty: true,
    lastEmit: 0
  };

  // ---------- utilidades ----------
  const fmt = (n) => Number(n).toLocaleString('pt-BR');
  const num = (v, d) => (Number.isFinite(Number(v)) ? Number(v) : d);

  function log(msg, lvl) {
    S.log.push({ t: Date.now(), lvl: lvl || 'info', msg });
    if (S.log.length > 100) S.log.shift();
    S.dirty = true;
  }

  function normalizeCfg(c) {
    c = c || {};
    const rules = Array.isArray(c.rules) ? c.rules : [];
    return {
      enabled: c.enabled === true,
      intervalMs: Math.max(MIN_INTERVAL, num(c.intervalMs, DEFAULTS.intervalMs)),
      inflightMs: Math.max(1000, num(c.inflightMs, DEFAULTS.inflightMs)),
      cooldownMs: Math.max(0, num(c.cooldownMs, DEFAULTS.cooldownMs)),
      rules: rules
        .map((r) => ({
          id: String(r.id),
          itemId: num(r.itemId, 0),
          nome: r.nome || '',
          min: num(r.min, 0),
          max: num(r.max, 0),
          qtd: Math.max(0, Math.floor(num(r.qtd, 0))),
          // 0 = entra no sorteio de TODOS os anúncios da faixa até a meta (padrão). Regras antigas (sem v:2) migram para 0.
          simult: r.v === 2 ? Math.max(0, Math.floor(num(r.simult, 0))) : 0,
          v: 2,
          ativo: r.ativo !== false
        }))
        .filter((r) => r.itemId > 0)
    };
  }

  const nameOfItem = (itemId) => (S.catalog[itemId] && S.catalog[itemId].nome) || ('item ' + itemId);
  const ruleName = (r) => r.nome || nameOfItem(r.itemId);
  const progOf = (r) => S.progress[r.id] || 0;
  const remainingOf = (r) => Math.max(0, r.qtd - progOf(r));
  const ruleFor = (itemId) => S.cfg.rules.find((r) => r.itemId === itemId && r.ativo);
  const srvNow = () => Date.now() + S.offset;

  function activeRules() {
    if (!S.cfg.enabled || !S.leader) return [];
    return S.cfg.rules.filter((r) => r.ativo && r.max > 0 && remainingOf(r) > 0);
  }

  // ---------- pedidos em andamento (sorteios) ----------
  // ---------- tentativas (registro de cada pedido de compra) ----------
  function newAttempt(r, row, qtd) {
    const a = {
      n: ++S.attN, t: Date.now(), ruleId: r.id, itemId: r.itemId, nome: ruleName(r), anuncio: row.id,
      qtd, preco: row.preco, vendedor: row.vendedor || '', status: 'pendente', motivo: 'aguardando o sorteio (~3 s)',
      vencedor: '', frames: []
    };
    S.tentativas.push(a);
    if (S.tentativas.length > 300) S.tentativas.shift();
    return a;
  }

  function closeAttempt(a, status, motivo) {
    if (!a || a.status !== 'pendente') return;
    a.status = status;
    a.fim = Date.now();
    if (motivo) a.motivo = motivo;
    if (status === 'ganhou') S.stats.ganhas++;
    else if (status === 'perdeu') S.stats.perdidas++;
    else if (status === 'erro') S.stats.erros++;
    S.dirty = true;
  }

  // procura no quadro do jogo quem levou o sorteio (nome do campo ainda não confirmado: busca genérica)
  function findWinner(obj, depth) {
    if (!obj || typeof obj !== 'object' || depth > 3) return '';
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      if (typeof v === 'string' && /venc|ganh|winner|levou|comprador/i.test(k) && v) return v;
      if (typeof v === 'string') { const mm = v.match(/(\S+)\s+levou/i); if (mm) return mm[1]; }
      if (v && typeof v === 'object') { const w = findWinner(v, depth + 1); if (w) return w; }
    }
    return '';
  }

  // quadros do jogo que chegam logo depois de um pedido ficam anexados à tentativa (para entender o motivo)
  function attachFrame(m, d) {
    const now = Date.now();
    const pend = S.tentativas.filter((a) => a.status === 'pendente' && now - a.t < 10000);
    if (!pend.length) return;
    const winner = findWinner(m, 0);
    const mentionsId = (a) => d.indexOf(String(a.anuncio)) >= 0;
    const targets = pend.filter(mentionsId);
    for (const a of (targets.length ? targets : [pend[pend.length - 1]])) {
      if (a.frames.length < 4) a.frames.push({ ms: now - a.t, t: m.t, txt: d.slice(0, 220) });
      if (winner && !a.vencedor) a.vencedor = winner;
    }
  }

  function finalizeExpired() {
    const now = Date.now();
    for (const a of S.tentativas) {
      if (a.status !== 'pendente' || now - a.t < S.cfg.inflightMs) continue;
      closeAttempt(a, 'perdeu', a.vencedor
        ? 'outro jogador levou: ' + a.vencedor
        : 'você não levou — outro jogador ganhou o sorteio ou o anúncio já tinha sido vendido');
    }
  }

  function pruneInflight(r) {
    const now = Date.now();
    const list = S.inflight[r.id] || [];
    const keep = list.filter((x) => x.expira > now);
    if (keep.length !== list.length) {
      log('Sorteio sem resposta (provavelmente perdido) — ' + ruleName(r), 'info');
    }
    S.inflight[r.id] = keep;
    return keep;
  }

  // Quantas unidades ainda posso pedir agora para essa regra.
  function allowedQty(r) {
    const list = pruneInflight(r);
    const rem = remainingOf(r);
    if (rem <= 0) return 0;
    if (r.simult === 0) return rem; // participa de todos os anúncios na faixa; para quando a meta é atingida
    if (r.simult === 1) {
      // modo estrito: pedidos em aberto + comprado nunca passam da quantidade
      const units = list.reduce((a, x) => a + x.qtd, 0);
      return Math.max(0, rem - units);
    }
    // vários sorteios ao mesmo tempo: mais chances, mas pode passar da quantidade
    return list.length < r.simult ? rem : 0;
  }

  // ---------- envio ----------
  function send(obj) {
    const ws = S.ws;
    if (!ws || ws.readyState !== 1) return false;
    try {
      NativeWS.prototype.send.call(ws, JSON.stringify(obj));
      return true;
    } catch (e) {
      log('Falha ao enviar: ' + e, 'erro');
      return false;
    }
  }

  function trySend(ruleId, row) {
    const r = S.cfg.rules.find((x) => x.id === ruleId);
    if (!r || !S.cfg.enabled || !S.leader || !r.ativo) return;
    if (row.preco < r.min || row.preco > r.max) return;
    if ((S.cooldown.get(row.id) || 0) > Date.now()) return;
    const allow = allowedQty(r);
    if (allow <= 0) return;
    const qtd = Math.min(row.qtd, allow);
    if (qtd <= 0) return;

    S.cooldown.set(row.id, Date.now() + S.cfg.cooldownMs);
    const desc = qtd + '× ' + ruleName(r) + ' a ' + fmt(row.preco) + ' (' + (row.vendedor || '?') + ')';

    const ok = send({ t: 'market.comprar', id: row.id, qtd, preco: row.preco, moeda: 'gold', sorteioUi: 1 });
    if (!ok) return;
    S.lastReq = Date.now(); // separa a próxima consulta da compra, para não estourar o limite do jogo
    const att = newAttempt(r, row, qtd);
    (S.inflight[r.id] = S.inflight[r.id] || []).push({
      id: row.id, qtd, preco: row.preco, vendedor: row.vendedor || '', expira: Date.now() + S.cfg.inflightMs, att
    });
    S.stats.pedidos++;
    log('Pedido enviado: ' + desc);
  }

  // ---------- lista de anúncios ----------
  function handleList(itemId, moeda, linhas) {
    if (moeda !== 'gold' || !Array.isArray(linhas)) return;
    S.stats.listas++;
    if (S.penalty > 0) S.penalty = Math.max(0, S.penalty - 500); // resposta normal: vai voltando ao ritmo configurado
    S.rows[itemId] = linhas;
    S.lastList[itemId] = { t: Date.now(), n: linhas.length };
    const first = linhas.find((l) => l && l.ficha && l.ficha.nome);
    if (first) S.catalog[itemId] = { nome: first.ficha.nome };
    S.dirty = true;

    const r = ruleFor(itemId);
    if (!r || !S.cfg.enabled || !S.leader || remainingOf(r) <= 0) return;

    const cand = linhas
      .filter((l) => l && l.estado === 'aberto' && l.qtd > 0 && l.preco >= r.min && l.preco <= r.max)
      .sort((a, b) => a.preco - b.preco || (a.compravelEm || 0) - (b.compravelEm || 0));

    const sNow = srvNow();
    for (const row of cand) {
      const wait = (row.compravelEm || 0) - sNow;
      if (wait > 0) {
        // ainda "Retido": agenda o pedido para o instante em que libera
        if (wait <= 20000 && !S.timers.has(row.id)) {
          const key = row.id;
          S.timers.set(
            key,
            setTimeout(() => {
              S.timers.delete(key);
              const cur = (S.rows[itemId] || []).find((x) => x.id === key);
              if (cur && cur.estado === 'aberto') trySend(r.id, cur);
            }, wait + 30)
          );
        }
      } else {
        trySend(r.id, row);
      }
    }
  }

  // ---------- resumo de todos os itens (descoberta) ----------
  function handleResumo(m) {
    if (!m.resumo || typeof m.resumo !== 'object') return;
    for (const id of Object.keys(m.resumo)) {
      const x = m.resumo[id] || {};
      const med = m.medias && m.medias[id] && m.medias[id].gold;
      S.market[id] = {
        anuncios: x.anuncios || 0,
        unidades: x.unidades || 0,
        minGold: x.minGold == null ? null : x.minGold,
        minOrb: x.minOrb == null ? null : x.minOrb,
        mediaGold: med && med.media ? med.media : (S.market[id] && S.market[id].mediaGold) || null
      };
    }
    // itens à venda em coins que ainda não têm nome: pede a lista deles para aprender o nome
    const unnamed = Object.keys(S.market)
      .filter((id) => S.market[id].minGold != null && !(S.catalog[id] && S.catalog[id].nome) && (S.nameTries[id] || 0) < 3)
      .map(Number);
    for (let i = 0; i < unnamed.length; i += MAX_PEDIDOS) {
      const chunk = unnamed.slice(i, i + MAX_PEDIDOS);
      chunk.forEach((id) => { S.nameTries[id] = (S.nameTries[id] || 0) + 1; });
      S.queue.push({ t: 'market.atualizar', pedidos: chunk.map((id) => ({ t: 'market.item', itemId: id, moeda: 'gold' })) });
    }
    S.dirty = true;
  }

  function requestScan(front) {
    const msg = { t: 'market.itens', elementos: [], categoria: '' };
    if (front) S.queue.unshift(msg); else S.queue.push(msg);
  }

  // ---------- histórico de compras do jogo ----------
  function requestHistory(pagina, front) {
    const msg = { t: 'market.historicoCompras', pagina: pagina || 0, seq: ++S.seq };
    // pedido feito pelo usuário (botões Atualizar / Carregar mais): sai logo, sem esperar a vez das compras
    if (front) S.urgent.push(msg); else S.queue.push(msg);
  }

  function handleHistory(m) {
    if (!Array.isArray(m.linhas)) return;
    S.history.total = m.total || 0;
    S.history.porPagina = m.porPagina || 30;
    S.history.pages[m.pagina || 0] = m.linhas.map((l) => ({
      id: l.id,
      desc: l.descricao,
      pago: l.bruto != null ? l.bruto : l.valor,
      moeda: l.moeda,
      vendedor: l.vendedor,
      em: l.em,
      tipo: l.tipo
    }));
    S.history.updated = Date.now();
    S.dirty = true;
  }

  // ---------- estoque = resultado das compras ----------
  function handleStock(items) {
    // O jogo manda o mapa completo de itens; item ausente = 0. Guardo sempre o mapa inteiro,
    // para já ter a linha de base quando uma regra for criada/ligada depois.
    const before = S.stock;
    const had = S.stockInit;
    S.stock = Object.assign({}, items);
    S.stockInit = true;
    for (const r of S.cfg.rules) {
      const cur = Number(items[r.itemId] || 0);
      const prev = had ? Number(before[r.itemId] || 0) : undefined;
      if (prev === undefined || cur <= prev || !S.leader) continue;
      const list = S.inflight[r.id] || [];
      if (!list.length) continue;
      const pend = list.reduce((a, x) => a + x.qtd, 0);
      let credit = Math.min(cur - prev, pend);
      if (credit <= 0) continue;
      S.progress[r.id] = progOf(r) + credit;
      S.stats.compradas += credit;
      log('✔ Comprou ' + credit + '× ' + ruleName(r) + ' (' + S.progress[r.id] + '/' + r.qtd + ')', 'ok');
      while (credit > 0 && list.length) {
        const head = list[0];
        const got = Math.min(head.qtd, credit);
        S.compras.push({
          t: Date.now(), itemId: r.itemId, nome: ruleName(r), qtd: got,
          preco: head.preco, total: head.preco * got, vendedor: head.vendedor
        });
        if (S.compras.length > 300) S.compras.shift();
        credit -= got;
        closeAttempt(head.att, 'ganhou', 'você levou o sorteio e pagou ' + fmt(head.preco * got) + ' coins');
        if (head.qtd <= got) list.shift(); else head.qtd -= got;
      }
      if (remainingOf(r) <= 0) log('Meta concluída: ' + ruleName(r), 'ok');
      // atualiza o histórico do jogo logo depois da compra
      setTimeout(() => requestHistory(0, true), 3000);
    }
  }

  // ---------- mensagens do jogo ----------
  function onGameMessage(ev) {
    const d = ev.data;
    if (typeof d !== 'string') return;
    // quadros de combate chegam várias vezes por segundo: nem parseia
    if (d.startsWith('{"t":"campo"') || d.startsWith('{"t":"batalha"') || d.startsWith('{"t":"chat"') || d.startsWith('{"t":"pong"')) return;
    let m;
    try { m = JSON.parse(d); } catch (e) { return; }
    if (!m || typeof m.t !== 'string') return;

    if (!S.seenTypes.has(m.t)) {
      S.seenTypes.add(m.t);
      if (!/^(estado|market)$/.test(m.t)) log('Tipo de mensagem novo: ' + m.t + ' ' + d.slice(0, 160), 'debug');
    }

    if (m.t === 'estado' && m.estado) {
      const e = m.estado;
      if (typeof e.servidorAgora === 'number') {
        // a latência faz a diferença parecer menor; o maior valor recente é o mais fiel
        S.offsetSamples.push(e.servidorAgora - Date.now());
        if (S.offsetSamples.length > 12) S.offsetSamples.shift();
        S.offset = Math.max.apply(null, S.offsetSamples);
      }
      if (e.items && typeof e.items === 'object') handleStock(e.items);
      const ks = Object.keys(e).filter((k) => /sorteio|market|compra/i.test(k));
      if (ks.length) log('estado[' + ks.join(',') + '] ' + JSON.stringify(ks.map((k) => e[k])).slice(0, 260), 'debug');
      return;
    }

    if (m.t === 'market') {
      if (/turnstile|captcha/i.test(d)) return pauseForChallenge();
      if (m.aba === 'item') return handleList(m.itemId, m.moeda, m.linhas);
      if (m.aba === 'itens') return handleResumo(m);
      if (m.aba === 'historicoCompras') return handleHistory(m);
      attachFrame(m, d);
      log('market: ' + d.slice(0, 260), 'debug');
      return;
    }

    if (/turnstile|captcha/i.test(d)) return pauseForChallenge();
    if (/^market/.test(m.t)) log('market: ' + d.slice(0, 260), 'debug');
    if (m.t === 'erro' && /devagar|muitas mensagens/i.test(d)) { attachFrame(m, d); return onRateLimit(); }
    if (m.t === 'erro' || m.erro) {
      // erro logo depois de um pedido: o jogo recusou (anúncio vendido, saldo, etc.)
      const now = Date.now();
      const last = S.tentativas.filter((a) => a.status === 'pendente' && now - a.t < 4000).pop();
      if (last) {
        attachFrame(m, d);
        closeAttempt(last, 'erro', 'o jogo recusou o pedido: ' + (m.msg || d.slice(0, 120)));
        for (const k of Object.keys(S.inflight)) S.inflight[k] = (S.inflight[k] || []).filter((x) => x.att !== last);
      }
    } else if (!/^(estado|pong)$/.test(m.t)) attachFrame(m, d);
    if (m.t === 'erro' || m.erro) log('Jogo respondeu erro: ' + d.slice(0, 260), 'erro');
  }

  // O jogo avisou que estamos mandando mensagens demais: recua, e se insistir, desliga sozinho.
  function onRateLimit() {
    const now = Date.now();
    S.rlHits = S.rlHits.filter((t) => now - t < 60000);
    S.rlHits.push(now);
    S.penalty = Math.min(15000, S.penalty + 2000);
    S.lastReq = now;
    S.stats.limites++;
    log('Aviso do jogo: "Devagar aí — muitas mensagens". Intervalo aumentado para ' +
      ((S.cfg.intervalMs + S.penalty) / 1000) + ' s.', 'erro');
    if (S.rlHits.length >= 6 && S.cfg.enabled) {
      S.cfg.enabled = false;
      log('O jogo avisou 6 vezes em 1 minuto. Compra automática DESLIGADA por segurança — aumente o intervalo e ligue de novo.', 'erro');
      post({ type: 'pause' });
    }
  }

  function pauseForChallenge() {
    if (!S.cfg.enabled) return;
    S.cfg.enabled = false;
    log('O jogo pediu verificação (anti-bot). Compra automática DESLIGADA — resolva no jogo e ligue de novo.', 'erro');
    post({ type: 'pause' });
  }

  // ---------- captura do WebSocket do jogo ----------
  // Barramento para os outros módulos (captura.js): recebe toda mensagem crua do jogo e a conexão atual.
  const BUS = (window.__PM_BUS = window.__PM_BUS || { subs: [], on(f) { this.subs.push(f); }, ws: () => S.ws });
  function attach(ws) {
    ws.addEventListener('message', (ev) => { for (const f of BUS.subs) { try { f(ev.data); } catch (err) { /* ignora */ } } });
    S.ws = ws;
    S.scanned = false;
    S.connectedAt = Date.now();
    ws.addEventListener('message', onGameMessage);
    ws.addEventListener('close', () => { if (S.ws === ws) S.ws = null; S.dirty = true; });
    ws.addEventListener('open', () => { S.dirty = true; });
    S.dirty = true;
  }

  window.WebSocket = new Proxy(NativeWS, {
    construct(target, args, newTarget) {
      const ws = Reflect.construct(target, args, newTarget);
      try { if (/pokeidle\.io/i.test(String(ws.url))) attach(ws); } catch (e) { /* ignora */ }
      return ws;
    }
  });

  // ---------- laço principal ----------
  // Escolhe até 3 itens (limite do servidor), em rodízio entre as regras ativas.
  function nextChunk(rules) {
    const ids = [];
    rules.forEach((r) => { if (ids.indexOf(r.itemId) < 0) ids.push(r.itemId); });
    if (!ids.length) return null;
    const take = Math.min(MAX_PEDIDOS, ids.length);
    const start = S.rotor % ids.length;
    let picks = ids.slice(start, start + take);
    if (picks.length < take) picks = picks.concat(ids.slice(0, take - picks.length));
    S.rotor = (start + take) % ids.length;
    return picks;
  }

  function tick() {
    const now = Date.now();
    finalizeExpired();
    const open = S.ws && S.ws.readyState === 1;

    // uma vez por conexão: descobre todos os itens e carrega o histórico (só leitura)
    if (open && S.leader && !S.scanned && now - S.connectedAt > 6000) {
      S.scanned = true;
      requestScan(false);
      requestHistory(0, false);
    }

    if (open && S.leader && S.urgent.length && now - S.lastUrg >= 1200) {
      if (send(S.urgent.shift())) S.lastUrg = now;
    }

    if (open && S.leader && now - S.lastReq >= S.cfg.intervalMs + S.penalty) {
      const rules = activeRules();
      const useQueue = S.queue.length && (!rules.length || S.reqN % 4 === 3);
      if (useQueue) {
        if (send(S.queue.shift())) { S.lastReq = now; S.reqN++; }
      } else if (rules.length) {
        const ids = nextChunk(rules);
        if (ids && send({ t: 'market.atualizar', pedidos: ids.map((id) => ({ t: 'market.item', itemId: id, moeda: 'gold' })) })) {
          S.lastReq = now; S.reqN++;
        }
      }
    }
    if (S.cfg.enabled && now - S.bridgeAt > 15000) {
      S.cfg.enabled = false;
      log('Perdi a ligação com a extensão (ela foi recarregada ou atualizada). Compra automática DESLIGADA — recarregue a página (F5).', 'erro');
    }
    if (now - S.lastEmit > 2000) S.dirty = true; // batimento: o painel sabe que o motor está vivo
    if (S.dirty && now - S.lastEmit > 800) emitState();
  }

  function emitState() {
    S.dirty = false;
    S.lastEmit = Date.now();
    if (!S.leader) return;
    post({
      type: 'state',
      state: {
        updated: Date.now(),
        conectado: !!(S.ws && S.ws.readyState === 1),
        leader: S.leader,
        offset: S.offset,
        progress: S.progress,
        aplicado: { enabled: S.cfg.enabled, intervalMs: S.cfg.intervalMs, rules: S.cfg.rules.map((r) => ({ id: r.id, min: r.min, max: r.max, qtd: r.qtd, ativo: r.ativo })) },
        compras: S.compras.slice(-200),
        tentativas: S.tentativas.slice(-150),
        catalog: S.catalog,
        market: S.market,
        history: S.history,
        lastList: S.lastList,
        stats: S.stats,
        log: S.log.slice(-60)
      }
    });
  }

  // ---------- ponte (bridge.js, mundo isolado) ----------
  function post(o) {
    window.postMessage(Object.assign({ ch: CH, from: 'engine' }, o), '*');
  }

  function onBridge(e) {
    const m = e.data;
    if (e.source !== window || !m || m.ch !== CH || m.from !== 'bridge') return;
    if (m.type === 'ping') { S.bridgeAt = Date.now(); return; }
    S.bridgeAt = Date.now();
    if (m.type === 'init') {
      if (m.progress && typeof m.progress === 'object') S.progress = Object.assign({}, m.progress);
      if (Array.isArray(m.compras) && !S.compras.length) S.compras = m.compras.slice(-300);
      if (Array.isArray(m.tentativas) && !S.tentativas.length) {
        // o que ficou pendente de uma sessão anterior não tem como ser confirmado
        S.tentativas = m.tentativas.slice(-300).map((a) => (a.status === 'pendente' ? Object.assign(a, { status: 'perdeu', motivo: 'sem confirmação (página recarregada)' }) : a));
        S.attN = S.tentativas.reduce((x, a) => Math.max(x, a.n || 0), 0);
      }
      if (m.catalog && typeof m.catalog === 'object') S.catalog = Object.assign({}, m.catalog, S.catalog);
      if (m.cfg) S.cfg = normalizeCfg(m.cfg);
      S.dirty = true;
    } else if (m.type === 'config') {
      const was = S.cfg.enabled;
      S.cfg = normalizeCfg(m.cfg);
      if (S.cfg.enabled && !was) { S.lastReq = 0; log('Compra automática LIGADA'); }
      if (!S.cfg.enabled && was) log('Compra automática desligada');
      S.dirty = true;
    } else if (m.type === 'cmd' && m.cmd) {
      const c = m.cmd;
      if (c.type === 'reset' && c.ruleId) { S.progress[c.ruleId] = 0; S.inflight[c.ruleId] = []; log('Contagem zerada'); }
      if (c.type === 'resetAll') { S.progress = {}; S.inflight = {}; log('Todas as contagens zeradas'); }
      if (c.type === 'history') {
        // "todas": recarrega todas as páginas já carregadas (Atualizar); senão, só a página pedida (Carregar mais)
        const n = c.todas ? Math.max(1, Object.keys(S.history.pages).length) : 1;
        for (let i = 0; i < n; i++) requestHistory(c.todas ? i : Math.max(0, num(c.pagina, 0)), true);
      }
      if (c.type === 'scan') { S.nameTries = {}; requestScan(true); log('Atualizando catálogo de itens…'); }
      if (c.type === 'clearCompras') { S.compras = []; log('Lista de compras da extensão limpa'); }
      if (c.type === 'clearTentativas') { S.tentativas = []; S.stats.ganhas = 0; S.stats.perdidas = 0; S.stats.erros = 0; S.stats.pedidos = 0; log('Lista de tentativas limpa'); }
      S.dirty = true;
    }
  }
  window.addEventListener('message', onBridge);

  // Só uma aba do jogo compra por vez (evita pedido duplicado).
  try {
    if (typeof navigator !== 'undefined' && navigator.locks) {
      S.leader = false;
      navigator.locks.request('pokeidle-auto-compra', { ifAvailable: true }, (lock) => {
        if (!lock) return;
        S.leader = true;
        S.dirty = true;
        return new Promise(() => {});
      });
    }
  } catch (e) { S.leader = true; }

  setInterval(tick, 100);
  post({ type: 'hello' });
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('DOMContentLoaded', () => post({ type: 'hello' }));
  }

  window.__pokeAuto = { S, tick, handleList, handleStock, onGameMessage };
})();
