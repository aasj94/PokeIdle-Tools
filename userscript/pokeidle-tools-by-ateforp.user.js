// ==UserScript==
// @name         PokeIdle Tools by Ateforp
// @namespace    https://pokeidle.io/
// @version      2.3.52
// @icon         data:image/png;base64,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
// @description  Configurações de PvE, PvP, compras, tudo automático e num painel só.
// @match        https://pokeidle.io/*
// @run-at       document-start
// @noframes
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
'use strict';

/* ---- camada de compatibilidade: o userscript usa localStorage no lugar do chrome.storage da extensão ---- */
(() => {
  'use strict';
  if (window.chrome && window.chrome.storage && window.chrome.storage.local) return;
  const KEY = 'ateforp_store';
  const listeners = [];
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } };
  const write = (o) => { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { /* cheio/bloqueado */ } };
  window.addEventListener('storage', (ev) => {   // outra aba do jogo mudou algo
    if (ev.key !== KEY) return;
    let a = {}, b = {};
    try { a = JSON.parse(ev.oldValue || '{}') || {}; b = JSON.parse(ev.newValue || '{}') || {}; } catch (e) { return; }
    const ch = {};
    Object.keys(b).forEach((k) => { if (JSON.stringify(a[k]) !== JSON.stringify(b[k])) ch[k] = { oldValue: a[k], newValue: b[k] }; });
    if (Object.keys(ch).length) listeners.slice().forEach((f) => { try { f(ch, 'local'); } catch (e) { /* ignora */ } });
  });
  window.chrome = window.chrome || {};
  window.chrome.runtime = { id: 'userscript', onMessage: { addListener() {} } };
  window.chrome.storage = { local: {
    get(keys, cb) {
      const all = read(), o = {};
      (Array.isArray(keys) ? keys : [keys]).forEach((k) => { if (k in all) o[k] = JSON.parse(JSON.stringify(all[k])); });
      setTimeout(() => cb(o), 0);
    },
    set(obj) {
      const all = read(), ch = {};
      for (const k of Object.keys(obj)) {
        const nv = JSON.parse(JSON.stringify(obj[k]));
        ch[k] = { oldValue: all[k], newValue: nv };
        all[k] = nv;
      }
      write(all);
      setTimeout(() => listeners.slice().forEach((f) => { try { f(ch, 'local'); } catch (e) { /* ignora */ } }), 0);
    } },
    onChanged: { addListener: (f) => listeners.push(f) } };
})();

/* ===== motor do Mercado ===== */
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

/* ===== ponte ===== */
/*
 * PokeIdle Auto-Compra - ponte (mundo isolado da extensão).
 * Liga o chrome.storage (onde o popup grava a configuração) ao motor que roda na página.
 */
(() => {
  'use strict';
  const CH = 'pokeidle-auto';
  let cfg = null;
  let progress = {};
  let compras = [];
  let tentativas = [];
  let catalog = {};
  let alive = true;

  // Batimento: enquanto a ponte estiver ligada à extensão, avisa o motor. Se a extensão for recarregada
  // sem recarregar a página, o contexto morre, o batimento para e o motor desliga a compra sozinho.
  setInterval(() => {
    try { if (alive && chrome.runtime && chrome.runtime.id) post({ type: 'ping' }); else alive = false; } catch (e) { alive = false; }
  }, 3000);

  const post = (o) => window.postMessage(Object.assign({ ch: CH, from: 'bridge' }, o), '*');
  const sendInit = () => post({ type: 'init', cfg, progress, compras, tentativas, catalog });

  chrome.storage.local.get(['cfg', 'estado'], (d) => {
    cfg = d.cfg || null;
    const e = d.estado || {};
    progress = e.progress || {};
    compras = e.compras || [];
    tentativas = e.tentativas || [];
    catalog = e.catalog || {};
    sendInit();
  });

  chrome.storage.onChanged.addListener((ch, area) => {
    if (area !== 'local') return;
    if (ch.cfg) {
      cfg = ch.cfg.newValue;
      post({ type: 'config', cfg });
    }
    if (ch.cmd && ch.cmd.newValue) post({ type: 'cmd', cmd: ch.cmd.newValue });
  });

  window.addEventListener('message', (e) => {
    const m = e.data;
    if (e.source !== window || !m || m.ch !== CH || m.from !== 'engine') return;
    if (m.type === 'hello') {
      sendInit();
    } else if (m.type === 'state') {
      try { chrome.storage.local.set({ estado: m.state }); } catch (err) { alive = false; }
    } else if (m.type === 'pause') {
      chrome.storage.local.get('cfg', (d) => {
        const c = d.cfg || {};
        c.enabled = false;
        chrome.storage.local.set({ cfg: c });
      });
    }
  });
})();

/* ===== captura / estoque ===== */
/*
 * PokeIdle Tools by Ateforp — módulo Auto Captura + Reposição de estoque (roda na página, junto do jogo).
 * Portado do userscript "Pokeidle Auto Captura (Gyarados)": clica nos Pokémon caídos, fecha o popup do
 * Discord, repõe bolas/poções/revives pela API do jogo (shop.buy) e destrava o jogo quando ele trava.
 * Usa a mesma conexão do jogo que o Mercador (window.__PM_BUS, criado pelo engine.js).
 * A interface fica no painel (ui.js/panel.js): este módulo só guarda a configuração, executa e publica o estado.
 */
(() => {
  'use strict';
  if (window.__ateforpCatch) return;
  window.__ateforpCatch = true;

  const CH = 'ateforp';
  const CHAVE = 'autocaptura_ativo';
  const CHAVE_CFG = 'autocaptura_cfg3';
  const PADRAO = { ativo: true, intervaloMs: 2000 };
  const CFG_PADRAO = { autoLigar: false, captura: { bolaTela: 0, bolaShiny: 0, hudEco: true, hudSec: { recursos: true, captura: true, pvp: true, compras: true } }, estoque: { ativo: false, intervaloMin: 5, itens: {}, beast: { ativo: false, abaixo: 0, ate: 0 } } };
  const INICIO = Date.now();

  // ---------- configuração ----------
  function lerAtivo() {
    try { const v = localStorage.getItem(CHAVE); return v === null ? PADRAO.ativo : v === '1'; } catch (e) { return PADRAO.ativo; }
  }
  function lerCfg() {
    try {
      const s = JSON.parse(localStorage.getItem(CHAVE_CFG) || 'null') || {};
      return {
        autoLigar: !!s.autoLigar,
        captura: { bolaTela: Number(s.captura && s.captura.bolaTela) || 0, bolaShiny: Number(s.captura && s.captura.bolaShiny) || 0, hudEco: !(s.captura && s.captura.hudEco === false), hudSec: { recursos: !(s.captura && s.captura.hudSec && s.captura.hudSec.recursos === false), captura: !(s.captura && s.captura.hudSec && s.captura.hudSec.captura === false), pvp: !(s.captura && s.captura.hudSec && s.captura.hudSec.pvp === false), compras: !(s.captura && s.captura.hudSec && s.captura.hudSec.compras === false) } },
        estoque: {
          ...CFG_PADRAO.estoque, ...(s.estoque || {}),
          itens: { ...((s.estoque && s.estoque.itens) || {}) },
          beast: { ...CFG_PADRAO.estoque.beast, ...((s.estoque && s.estoque.beast) || {}) }
        }
      };
    } catch (e) { return JSON.parse(JSON.stringify(CFG_PADRAO)); }
  }
  // limite de cada campo da reposição (o jogo recusa pedidos maiores); valores antigos acima disso são reduzidos
  const LIMITE_ITEM = 9999;
  (function limitarSalvos() {
    const c = lerCfg();
    const lim = (x) => { if (x && Number(x.ate) > LIMITE_ITEM) x.ate = LIMITE_ITEM; if (x && Number(x.abaixo) > LIMITE_ITEM) x.abaixo = LIMITE_ITEM; };
    Object.values(c.estoque.itens).forEach(lim); lim(c.estoque.beast);
    try { localStorage.setItem(CHAVE_CFG, JSON.stringify(c)); } catch (e) { /* ignora */ }
  })();
  let ativo = false;                 // o Gyarados sempre começa DESLIGADO; só liga sozinho se "Ligar automaticamente ao se logar" estiver marcado
  let cfg2 = lerCfg();
  const salvarCfg2 = () => { try { localStorage.setItem(CHAVE_CFG, JSON.stringify(cfg2)); } catch (e) { /* ignora */ } };
  const salvarAtivo = () => { try { localStorage.setItem(CHAVE, ativo ? '1' : '0'); } catch (e) { /* ignora */ } };

  // ---------- dados do jogo (pela mesma conexão do Mercador) ----------
  const mobsInfo = new Map();
  let cacando = null;   // último Pokémon visto em campo (nome + nível)
  const stats = { vistos: 0, derrotados: 0, capturados: 0, escaparam: 0, fugiram: 0, shinyVistos: 0, lendariosVistos: 0, desde: Date.now() };
  let modoTela = false, viuCapturado = false;
  const ultLancado = { slot: undefined, em: 0 };   // slot -> { nome, level, shiny } (montado a partir dos quadros do campo)
  const dados = { campo: null, campoEm: 0, w: null, campos: null, welcomeEm: 0, ultMsg: 0, itensCat: null };
  const BUS = window.__PM_BUS;
  const getWs = () => (BUS && BUS.ws ? BUS.ws() : null);

  let jaLogou = false;
  // "Ligar ao se logar": não depende de pegar uma única mensagem. Uma vigia confere de 1 em 1 s e liga assim que o jogo está
  // conectado e logado; cada conexão nova (reconexão) é um novo login e liga de novo.
  let wsVisto = null, logado = false, autoFeito = false;
  function sincronizarConexao() { const w = getWs(); if (w !== wsVisto) { wsVisto = w; logado = false; autoFeito = false; } }
  setInterval(() => {
    sincronizarConexao();
    const w = getWs();
    if (cfg2.autoLigar && !autoFeito && logado && w && w.readyState === 1) {
      autoFeito = true;
      if (!ativo) { definirCaptura(true); console.log('[PokeIdle Tools by Ateforp] captura ligada automaticamente ao logar'); }
    }
  }, 1000);
  function mesclar(p) {
    if (!p) return;
    const { cheio, pokemons, pkMud, pkFora, dexMud, dexFora, ...resto } = p;   // só o que interessa (sem lista de pokémons)
    if (cheio || !dados.campos) dados.campos = resto;
    else Object.assign(dados.campos, resto);
  }

  function aoMensagem(txt) {
    sincronizarConexao();
    if (!logado && typeof txt === 'string' && /"t":"(welcome|estado|campo|campo\.init|pvp)"/.test(txt.slice(0, 200))) logado = true;
    if (typeof txt !== 'string') return;
    dados.ultMsg = Date.now();                       // qualquer mensagem do servidor = o jogo está vivo
    if (txt.indexOf('"t":"erro"') !== -1) {            // guarda o último erro do servidor (a compra de estoque lê a razão)
      try { const e = JSON.parse(txt); dados.ultErro = { em: Date.now(), txt: String((e && (e.msg || e.erro || e.mensagem || e.texto || e.message)) || '') }; } catch (err) { /* ignora */ }
    }
    // eventos de batalha (é por onde o jogo avisa quando um Pokémon aparece, cai ou é capturado): alimenta a contagem e a captura direta
    if ((ativo || cfg2.captura.hudEco) && txt.indexOf('"t":"batalha"') === 1 && txt.length < 60000
        && (txt.indexOf('"k":"spawn"') !== -1 || txt.indexOf('"k":"morte"') !== -1 || txt.indexOf('"k":"capturado"') !== -1 || txt.indexOf('"k":"bola"') !== -1 || txt.indexOf('"k":"fugiu"') !== -1)) {
      try {
        const f = JSON.parse(txt);
        for (const ev of f.ev || []) {
          if (!ev) continue;
          if (ev.k === 'spawn' && ev.slot !== undefined) {
            const novo = !mobsInfo.has(ev.slot);
            const e = mobsInfo.get(ev.slot) || {};
            const recente = !novo && e.visto && (Date.now() - e.visto < 1500) && e.nome === ev.nome && !e.morto;   // quadro repetido do mesmo spawn
            e.nome = ev.nome; e.level = ev.level; e.shiny = !!(ev.shiny || ev.sh); e.morto = false; e.expira = 0; e.tent = 0; e.doEvento = true;
            if (!recente) e.visto = Date.now();
            mobsInfo.set(ev.slot, e);
            cacando = { nome: ev.nome, level: ev.level, shiny: e.shiny, em: Date.now() };
            if (!recente) { stats.vistos++; if (e.shiny) stats.shinyVistos++; if (typeof window.__ateforpEhLendario === 'function' && window.__ateforpEhLendario(ev.nome)) stats.lendariosVistos++; }
          } else if (ev.k === 'morte' && ev.quem === 'selvagem' && ev.slot !== undefined) {
            const conhecido = mobsInfo.has(ev.slot);
            const e = mobsInfo.get(ev.slot) || { nome: ev.nome };
            if (!e.morto) { stats.derrotados++; if (!conhecido) stats.vistos++;   // morreu sem a gente ter visto o spawn: conta como visto também
 e.morto = true; e.expira = Date.now() + 30000; e.doEvento = true; }   // fica 30 s no chão (TEMPO_CHAO do jogo)
            mobsInfo.set(ev.slot, e);
          } else if (ev.k === 'bola' && ev.slot !== undefined) {
            mobsInfo.delete(ev.slot);                  // a bola resolveu: capturou ('capturado') ou o Pokémon fugiu ('fugiu') — de qualquer jeito sai do chão
            capEsp.vistos.delete(ev.slot);
          } else if (ev.k === 'fugiu') {
            stats.fugiram++;
          } else if (ev.k === 'capturado' && ev.pokemon) {
            stats.capturados++; viuCapturado = true;
            const s = ev.slot !== undefined ? ev.slot : ((Date.now() - ultLancado.em < 4000) ? ultLancado.slot : undefined);
            if (s !== undefined) mobsInfo.delete(s);   // capturado: sai da lista
          }
        }
      } catch (err) { /* ignora */ }
    }
    if ((ativo || cfg2.captura.hudEco) && txt.indexOf('"t":"campo') === 1) {   // quadros do campo (campo / campo.init): guarda quem é shiny, pois o jogo manda isso só uma vez (delta)
      if (txt.length < 80000 && (txt.indexOf('"mobs"') !== -1 || txt.indexOf('"fora"') !== -1)) {
        try {
          const f = JSON.parse(txt);
          const ehInit = f.t === 'campo.init';
          if (ehInit) mobsInfo.clear();
          for (const b of f.mobs || []) {
            if (!b || b.s === undefined) continue;
            const novo = !mobsInfo.has(b.s);
            const e = mobsInfo.get(b.s) || {};
            if (b.n !== undefined) e.nome = b.n;
            if (b.nv !== undefined) e.level = b.nv;
            if (b.sh !== undefined) e.shiny = !!b.sh;
            if (novo && b.n !== undefined) {
              if (ehInit) e.contado = true;                       // já estava no campo antes de começarmos a contar
              else {
                stats.vistos++;
                if (b.sh) stats.shinyVistos++;
                if (typeof window.__ateforpEhLendario === 'function' && window.__ateforpEhLendario(b.n)) stats.lendariosVistos++;
              }
            }
            if (b.x !== undefined) { const m2 = !!b.x; if (m2 && !e.morto) stats.derrotados++; e.morto = m2; }   // caído no chão (dá pra capturar)
            if (b.xr !== undefined) e.expira = Date.now() + Number(b.xr);   // tempo que resta no chão
            mobsInfo.set(b.s, e);
          }
          for (const s of f.fora || []) {
            const e = mobsInfo.get(s);
            if (e && e.morto) { if (e.expira && e.expira - Date.now() > 1500) { if (!viuCapturado) stats.capturados++; } else stats.escaparam++; }   // saiu do chão antes de acabar o tempo = capturado
            mobsInfo.delete(s);
          }
          dados.campoEm = Date.now();
        } catch (err) { /* ignora */ }
      }
      return;
    }
    const ehWelcome = txt.indexOf('"t":"welcome"') !== -1;
    if (!ehWelcome && txt.indexOf('"t":"estado"') === -1) return;
    let m;
    try { m = JSON.parse(txt); } catch (e) { return; }
    if (!m) return;
    if (m.t === 'welcome') {
      dados.w = {
        hunts: m.hunts || [], catalogoBolas: m.catalogoBolas || [],
        itensCompraveis: m.itensCompraveis || [], itensNossos: m.itensNossos || [],
        lojaProdutos: m.lojaProdutos || []
      };
      dados.campos = null;
      mesclar(m.estado);
      dados.welcomeEm = Date.now();
      logado = true;   // (a vigia acima liga a captura quando o jogo estiver pronto)
      montarListaEstoque();
    } else if (m.t === 'estado') {
      mesclar(m.estado);
    }
  }
  if (BUS) BUS.on(aoMensagem);

  function enviarJogo(obj) {
    const ws = getWs();
    if (!ws || ws.readyState !== 1) return false;
    try { ws.send(JSON.stringify(obj)); return true; } catch (e) { return false; }
  }

  const eu = () => dados.campos || null;
  const pronto = () => !!(dados.w && eu());
  const hora = () => new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

  const status = { estoque: 'Parado.' };
  function setStatus(txt) { status.estoque = txt; sujo = true; console.log('[PokeIdle Tools by Ateforp] estoque: ' + txt); }

  // ---------- auto captura (clica no Pokémon caído) ----------
  let timerCaptura = null;
  function pararCaptura() { if (timerCaptura) clearInterval(timerCaptura); timerCaptura = null; if (typeof timerEspecial !== 'undefined' && timerEspecial) { clearInterval(timerEspecial); timerEspecial = null; } }
const capEsp = { vistos: new Map() };   // último lançamento por slot (evita lançar duas vezes seguidas)
// Sem a lista da tela (modo Economia / Ultra do jogo escondem ou não desenham os caídos): captura direto pela conexão,
// com os dados do campo que o próprio jogo envia. A bola é a que você escolheu aqui (ou a 1ª com estoque, como o jogo faz).
let ultSemTela = 0;
function bolaNormal(bolas, shiny) {
  const sh = cfg2.captura.bolaShiny;
  if (shiny && sh && (Number(bolas[sh]) || 0) > 0) return sh;   // shiny: só há uma tentativa (se falhar, ele foge), então usa a bola que você escolheu para isso
  const esc = cfg2.captura.bolaTela;
  if (esc && (Number(bolas[esc]) || 0) > 0) return esc;
  const cat = (dados.w && dados.w.catalogoBolas) || [];
  const b = cat.find((x) => (Number(bolas[x.id]) || 0) > 0);
  return b ? b.id : null;
}
// Shiny com a lista de caídos visível: o clique do jogo lança a bola que está selecionada na tela do jogo.
// Se você escolheu uma "Bola para shiny", lançamos direto pela conexão (uma única vez por Pokémon) com ela.
function capturarShinyEscolhido() {
  const sh = cfg2.captura.bolaShiny; if (!sh) return false;
  const agora = Date.now(); const e = eu(); const bolas = (e && e.balls) || {};
  if ((Number(bolas[sh]) || 0) <= 0) return false;
  for (const [slot, m] of mobsInfo) {
    if (!m.shiny || !m.morto || (m.tentShiny || 0) >= 1) continue;
    if (m.expira && m.expira - agora < 500) continue;
    if (!enviarJogo({ t: 'ball.throw', ballId: sh, slot })) return false;
    m.tentShiny = 1; m.tent = (m.tent || 0) + 1; capEsp.vistos.set(slot, agora); ultLancado.slot = slot; ultLancado.em = agora;
    try { console.info('[Ateforp] shiny: lancei a bola ' + sh + ' no slot ' + slot); } catch (e2) { /* ignora */ }
    sujo = true; return true;
  }
  return false;
}
function shinyPendenteEscolhido() {
  const sh = cfg2.captura.bolaShiny; if (!sh) return false;
  const e = eu(); const bolas = (e && e.balls) || {};
  if ((Number(bolas[sh]) || 0) <= 0) return false;
  for (const m of mobsInfo.values()) if (m.shiny && m.morto && (m.tentShiny || 0) < 1) return true;
  return false;
}
function capturarSemTela() {
  const agora = Date.now();
  if (agora - ultSemTela < Math.max(500, PADRAO.intervaloMs)) return false;
  const e = eu(); const bolas = (e && e.balls) || {};
  const cand = [];
  for (const [slot, m] of mobsInfo) {
    if (m.expira && m.expira < agora - 5000) { mobsInfo.delete(slot); continue; }   // limpeza
    if (!m.morto) continue;
    if (m.expira && m.expira - agora < 700) continue;
    if (agora - (capEsp.vistos.get(slot) || 0) < 1800) continue;
    if ((m.tent || 0) >= 10) continue;                       // não insiste para sempre num que o jogo não aceita
    cand.push({ slot, m, resta: m.expira || 0 });
  }
  if (!cand.length) return false;
  cand.sort((a, b) => ((a.m.tent || 0) - (b.m.tent || 0)) || (a.resta - b.resta));   // quem ainda não foi tentado primeiro; depois quem some antes
  const { slot, m } = cand[0];
  const ballId = bolaNormal(bolas, !!m.shiny);
  if (!ballId) return false;
  if (!enviarJogo({ t: 'ball.throw', ballId, slot })) return false;
  m.tent = (m.tent || 0) + 1;
  ultSemTela = agora; capEsp.vistos.set(slot, agora); capSemTela.lancadas++; ultLancado.slot = slot; ultLancado.em = agora;
  sujo = true;
  return true;
}
const capSemTela = { lancadas: 0 };
// Quadro de recursos nos modos Economia/Ultra do jogo: a tela fica quase vazia, então mostra aqui quanto resta de cada bola,
// se a captura está ligada e o que já foi lançado. Atualiza sozinho conforme o estoque muda.
let hudEl = null, hudTxt = '';
// o que os outros módulos (PvP e Mercado) mandam pela janela: guardado só para mostrar no quadro
const hudPvp = { s: null }, hudMerc = { n: 0, gasto: 0, ult: '' };
window.addEventListener('message', (ev) => {
  const m = ev.data;
  if (ev.source !== window || !m || typeof m !== 'object') return;
  if (m.ch === 'ateforp-pvp' && m.from === 'pvp' && m.type === 'state') hudPvp.s = m.state;
  else if (m.ch === 'pokeidle-auto' && m.from === 'engine' && m.type === 'state' && m.state && Array.isArray(m.state.compras)) {
    const cs = m.state.compras; hudMerc.n = cs.length; hudMerc.gasto = cs.reduce((a, x) => a + (Number(x.total) || 0), 0);
    const u = cs[cs.length - 1]; hudMerc.ult = u ? (u.qtd + '× ' + u.nome) : '';
  }
});
function numeroDe(obj, chaves) { for (const k of Object.keys(obj || {})) if (chaves.test(k) && typeof obj[k] === 'number') return obj[k]; return null; }
function limparMobs() {
  const agora = Date.now();
  for (const [slot, m] of mobsInfo) {
    if (m.expira && m.expira < agora - 2000) { if (m.morto && m.doEvento) stats.escaparam++; mobsInfo.delete(slot); }
  }
}
function atualizarHud() {
  limparMobs();
  const modo = document.documentElement.classList.contains('modo-ultra') || document.documentElement.classList.contains('modo-economia');
  modoTela = modo;
  if (!cfg2.captura.hudEco || !modo) { if (hudEl) { hudEl.remove(); hudEl = null; hudTxt = ''; } return; }
  const sec = cfg2.captura.hudSec || {};
  const fmt = (n) => Number(n).toLocaleString('pt-BR');
  const e = eu(); const bolas = (e && e.balls) || {};
  const blocos = [];
  if (sec.recursos !== false) {
    const cat = (dados.w && dados.w.catalogoBolas) || [];
    const partes = cat.map((b) => ({ n: String(b.nome || b.name || 'Bola ' + b.id).replace(/\s*Ball$/i, ''), q: Number(bolas[b.id]) || 0 }));
    const gold = numeroDe(e, /^(gold|ouro)$/i), diam = numeroDe(e, /^(diamantes|diamonds|gems|gemas)$/i);
    const l = [];
    l.push({ t: partes.length ? partes.map((p) => p.n + ' ' + fmt(p.q)).join('  ·  ') : 'aguardando dados do jogo…', alerta: partes.some((p) => p.q === 0) && partes.length > 0, forte: true });
    const extra = [];
    if (gold !== null) extra.push('Gold ' + fmt(gold)); if (diam !== null) extra.push('Diamantes ' + fmt(diam));
    if (extra.length) l.push({ t: extra.join('  ·  ') });
    blocos.push({ titulo: 'Recursos', linhas: l });
  }
  if (sec.captura !== false) {
    const l = [{ t: 'Auto captura ' + (ativo ? 'LIGADA' : 'desligada') + (capSemTela.lancadas ? '  ·  lançadas sem a lista: ' + capSemTela.lancadas : '') }];
    const tent = stats.capturados + stats.fugiram;
    const taxa = tent ? Math.round(stats.capturados / tent * 1000) / 10 : null;
    if (cacando) l.push({ t: 'Caçando: ' + cacando.nome + (cacando.level ? ' · nível ' + fmt(cacando.level) : '') + (cacando.shiny ? ' ✨ shiny' : '') });
    l.push({ t: 'Vistos ' + fmt(stats.vistos) + '  ·  derrotados ' + fmt(stats.derrotados) + '  ·  capturados ' + fmt(stats.capturados) + '  ·  fugiram ' + fmt(stats.fugiram) + '  ·  expiraram no chão ' + fmt(stats.escaparam) + (taxa !== null ? '  ·  taxa de captura ' + String(taxa).replace('.', ',') + '%' : '') });
    l.push({ t: 'shiny vistos ' + fmt(stats.shinyVistos) + '  ·  lendários vistos ' + fmt(stats.lendariosVistos) + '  ·  contado pela extensão desde ' + new Date(stats.desde).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) + ' (taxa de captura = capturados ÷ (capturados + fugiram); fugiu = a bola não segurou)' });
    blocos.push({ titulo: 'Captura · contagem da extensão nesta sessão', linhas: l });
  }
  if (sec.pvp !== false) {
    const p = hudPvp.s;
    const l = [];
    if (!p) l.push({ t: 'sem dados do PvP ainda' });
    else {
      const estado = !p.ativo ? 'desligado' : p.naFila ? 'na fila' + (p.tamanho ? ' (' + p.tamanho + ' jogadores)' : '') : 'ligado';
      l.push({ t: 'PvP ' + estado + '  ·  partidas ' + fmt(p.partidas || 0) + '  ·  vitórias ' + fmt(p.vitorias || 0) + '  ·  derrotas ' + fmt(p.derrotas || 0) + (p.delta ? '  ·  saldo ' + (p.delta > 0 ? '+' : '') + fmt(p.delta) : '') });
      const r = p.rank;
      if (r && r.pontos != null) l.push({ t: 'Rank: ' + fmt(r.pontos) + ' pontos' + (r.posicao ? '  ·  posição ' + fmt(r.posicao) : '') + (p.ultima ? '  ·  última: ' + (p.ultima.venci ? 'vitória' : 'derrota') + (p.ultima.oponente ? ' vs ' + p.ultima.oponente : '') : '') });
    }
    blocos.push({ titulo: 'PvP', linhas: l });
  }
  if (sec.compras !== false) {
    const l = [{ t: 'Reposição: ' + (cfg2.estoque.ativo ? (status.estoque || 'ligada') : 'desligada') }];
    l.push({ t: 'Mercado: ' + fmt(hudMerc.n) + ' compras' + (hudMerc.gasto ? '  ·  gasto ' + fmt(hudMerc.gasto) : '') + (hudMerc.ult ? '  ·  última: ' + hudMerc.ult : '') });
    blocos.push({ titulo: 'Compras', linhas: l });
  }
  const txt = JSON.stringify(blocos);
  if (txt === hudTxt && hudEl) return;
  hudTxt = txt;
  if (!hudEl) criarHud();
  const corpo = hudEl.__corpo;
  corpo.innerHTML = '';
  for (const b of blocos) {
    const cx = document.createElement('div'); cx.style.cssText = 'margin-top:5px;padding-top:4px;border-top:1px solid rgba(255,255,255,.1)';
    const h = document.createElement('div'); h.style.cssText = 'font-size:10px;opacity:.65;text-transform:uppercase;letter-spacing:.05em'; h.textContent = b.titulo; cx.append(h);
    for (const ln of b.linhas) { const d = document.createElement('div'); d.style.cssText = 'font-size:' + (ln.forte ? '13px' : '11.5px') + (ln.alerta ? ';color:#ffd27a' : ''); d.textContent = ln.t; cx.append(d); }
    corpo.append(cx);
  }
  if (hudEl.__semAltura && !hudEl.__min) { const alvo = Math.min(Math.round(innerHeight * 0.8), hudEl.__corpo.scrollHeight + 8 + 32); hudEl.style.height = alvo + 'px'; hudEl.__hAntes = alvo; hudEl.__semAltura = false; }
}
// quadro movível / redimensionável / minimizável; nasce no canto esquerdo para não cobrir a tela do jogo
const HUD_POS_KEY = 'ateforp-hud-pos';
function hudLerPos() { try { const o = JSON.parse(localStorage.getItem(HUD_POS_KEY) || 'null'); if (o && typeof o === 'object') return o; } catch (e) { /* ignora */ } return {}; }
function hudSalvarPos() {
  if (!hudEl) return;
  try {
    const o = hudLerPos(); const r = hudEl.getBoundingClientRect();
    o.x = Math.round(r.left); o.y = Math.round(r.top); o.min = !!hudEl.__min; o.fix = !!hudEl.__fix;
    if (hudEl.__min) { const q = hudEl.__pre; if (q) { o.pre = { x: Math.round(q.x), y: Math.round(q.y), w: Math.round(q.w), h: Math.round(q.h) }; o.w = o.pre.w; o.h = o.pre.h; } }
    else { o.w = Math.round(r.width); o.h = Math.round(r.height); delete o.pre; }
    localStorage.setItem(HUD_POS_KEY, JSON.stringify(o));
  } catch (e) { /* ignora */ }
}
function hudAjustar() {   // mantém o quadro inteiro dentro da janela
  if (!hudEl) return;
  const r = hudEl.getBoundingClientRect();
  const x = Math.max(0, Math.min(r.left, innerWidth - Math.min(r.width, 80)));
  const y = Math.max(0, Math.min(r.top, innerHeight - 30));
  hudEl.style.left = x + 'px'; hudEl.style.top = y + 'px';
}
function criarHud() {
  const p = hudLerPos();
  hudEl = document.createElement('div');
  hudEl.id = 'ateforp-hud-eco';
  const temH = Number(p.h) > 0;
  const LARG_MIN = 230;
  const w = p.min ? LARG_MIN : Math.max(220, Math.min(Number(p.w) || 400, innerWidth - 16));
  const h = temH ? Math.max(90, Math.min(Number(p.h), innerHeight - 16)) : 0;   // sem altura salva: ajusta ao conteúdo
  const x0 = Number.isFinite(p.x) ? p.x : Math.max(10, Math.round(innerWidth * 0.04));
  const y0 = Number.isFinite(p.y) ? p.y : Math.max(10, Math.round(innerHeight * 0.27));
  hudEl.style.cssText = 'position:fixed;left:' + x0 + 'px;top:' + y0 + 'px;z-index:2147483000;width:' + w + 'px;' + (h ? 'height:' + h + 'px;' : '') + 'min-width:200px;min-height:34px;max-width:96vw;max-height:96vh;overflow:hidden;display:flex;flex-direction:column;box-sizing:border-box;border-radius:10px;background:rgba(18,26,40,.95);border:1px solid #3a557a;color:#e8eef8;font:600 12px/1.45 system-ui,sans-serif;text-align:left;pointer-events:auto;box-shadow:0 4px 14px rgba(0,0,0,.5)';
  const topo = document.createElement('div');
  topo.style.cssText = 'flex:none;display:flex;align-items:center;gap:6px;padding:6px 8px 4px 12px;background:rgba(18,26,40,.98);cursor:move;touch-action:none;user-select:none';
  const tit = document.createElement('div'); tit.style.cssText = 'flex:1;font-size:10px;letter-spacing:.06em;opacity:.75;text-transform:uppercase'; tit.textContent = 'PokeIdle Tools by Ateforp';
  const bt = document.createElement('button'); bt.type = 'button'; bt.title = 'Minimizar / restaurar';
  bt.style.cssText = 'cursor:pointer;width:22px;height:20px;border:1px solid #3a557a;border-radius:5px;background:#1f3150;color:#e8eef8;font:700 12px/1 system-ui;padding:0';
  const pin = document.createElement('button'); pin.type = 'button'; pin.title = 'Fixar: trava a posição e o tamanho';
  pin.style.cssText = bt.style.cssText;
  topo.append(tit, pin, bt);
  const rolagem = document.createElement('div'); rolagem.style.cssText = 'flex:1 1 auto;min-height:0;overflow:auto;padding:0 12px 8px';
  const corpo = document.createElement('div'); rolagem.append(corpo);
  hudEl.append(topo, rolagem);
  hudEl.__corpo = corpo; hudEl.__rolagem = rolagem; hudEl.__min = !!p.min; hudEl.__fix = !!p.fix; hudEl.__hAntes = h || (p.pre && p.pre.h) || 0; hudEl.__semAltura = !h && !p.min; hudEl.__pre = (p.min && p.pre) ? p.pre : null;
  // alças de redimensionamento: 4 lados + 4 cantos
  const alcas = [];
  const defs = { n: 'top:-3px;left:10px;right:10px;height:7px;cursor:ns-resize', s: 'bottom:-3px;left:10px;right:10px;height:7px;cursor:ns-resize', w: 'left:-3px;top:10px;bottom:10px;width:7px;cursor:ew-resize', e: 'right:-3px;top:10px;bottom:10px;width:7px;cursor:ew-resize', nw: 'left:-3px;top:-3px;width:12px;height:12px;cursor:nwse-resize', ne: 'right:-3px;top:-3px;width:12px;height:12px;cursor:nesw-resize', sw: 'left:-3px;bottom:-3px;width:12px;height:12px;cursor:nesw-resize', se: 'right:-3px;bottom:-3px;width:12px;height:12px;cursor:nwse-resize' };
  for (const k in defs) {
    const a = document.createElement('div'); a.dataset.alca = k; a.style.cssText = 'position:absolute;z-index:2;touch-action:none;' + defs[k];
    let st = null;
    a.addEventListener('pointerdown', (e) => {
      if (hudEl.__fix || hudEl.__min || (e.button !== undefined && e.button !== 0)) return;
      const r = hudEl.getBoundingClientRect(); st = { x: e.clientX, y: e.clientY, l: r.left, t: r.top, w: r.width, h: r.height };
      try { a.setPointerCapture(e.pointerId); } catch (x) { /* ignora */ }
      e.preventDefault(); e.stopPropagation();
    });
    a.addEventListener('pointermove', (e) => {
      if (!st) return;
      const dx = e.clientX - st.x, dy = e.clientY - st.y, MW = 200, MH = 90;
      let l = st.l, t = st.t, w = st.w, h = st.h;
      if (k.includes('e')) w = Math.max(MW, st.w + dx);
      if (k.includes('s')) h = Math.max(MH, st.h + dy);
      if (k.includes('w')) { w = Math.max(MW, st.w - dx); l = st.l + (st.w - w); }
      if (k.includes('n')) { h = Math.max(MH, st.h - dy); t = st.t + (st.h - h); }
      hudEl.style.left = l + 'px'; hudEl.style.top = t + 'px'; hudEl.style.width = w + 'px'; hudEl.style.height = h + 'px';
      hudEl.__semAltura = false;
    });
    const fim = () => { if (!st) return; st = null; hudAjustar(); hudSalvarPos(); };
    a.addEventListener('pointerup', fim); a.addEventListener('pointercancel', fim);
    hudEl.append(a); alcas.push(a);
  }
  hudEl.__alcas = alcas;
  const aplicarFix = () => {
    pin.textContent = '📌'; pin.style.opacity = hudEl.__fix ? '1' : '.45'; pin.style.background = hudEl.__fix ? '#3a557a' : '#1f3150';
    topo.style.cursor = hudEl.__fix ? 'default' : 'move';
    for (const a of alcas) a.style.display = (hudEl.__fix || hudEl.__min) ? 'none' : '';
  };
  pin.addEventListener('click', (e) => { e.stopPropagation(); hudEl.__fix = !hudEl.__fix; aplicarFix(); hudSalvarPos(); });
  pin.addEventListener('pointerdown', (e) => e.stopPropagation());
  const aplicarMin = (inicio) => {
    rolagem.style.display = hudEl.__min ? 'none' : '';
    bt.textContent = hudEl.__min ? '▢' : '–';
    if (hudEl.__min) {
      if (!hudEl.__pre) { const r = hudEl.getBoundingClientRect(); hudEl.__pre = { x: r.left, y: r.top, w: r.width, h: r.height }; if (r.height > 60) hudEl.__hAntes = r.height; }
      hudEl.style.height = 'auto'; hudEl.style.width = LARG_MIN + 'px';
      if (!inicio) {   // minimizou agora: vai para o canto inferior direito da tela
        const bh = hudEl.getBoundingClientRect().height || 34;
        hudEl.style.left = Math.max(0, innerWidth - LARG_MIN - 12) + 'px'; hudEl.style.top = Math.max(0, innerHeight - bh - 12) + 'px';
      }
    } else {
      const q = hudEl.__pre; hudEl.__pre = null;
      if (q) { hudEl.style.left = q.x + 'px'; hudEl.style.top = q.y + 'px'; hudEl.style.width = q.w + 'px'; hudEl.__hAntes = q.h; }
      if (hudEl.__hAntes) hudEl.style.height = Math.max(90, hudEl.__hAntes) + 'px'; else hudEl.style.height = '';
    }
    aplicarFix();
  };
  bt.addEventListener('click', (e) => { e.stopPropagation(); hudEl.__min = !hudEl.__min; aplicarMin(); hudAjustar(); hudSalvarPos(); });
  bt.addEventListener('pointerdown', (e) => e.stopPropagation());
  let arr = null;
  topo.addEventListener('pointerdown', (e) => {
    if (hudEl.__fix || (e.button !== undefined && e.button !== 0)) return;
    const r = hudEl.getBoundingClientRect(); arr = { dx: e.clientX - r.left, dy: e.clientY - r.top };
    try { topo.setPointerCapture(e.pointerId); } catch (x) { /* ignora */ }
  });
  topo.addEventListener('pointermove', (e) => { if (!arr) return; hudEl.style.left = (e.clientX - arr.dx) + 'px'; hudEl.style.top = (e.clientY - arr.dy) + 'px'; });
  const solta = () => { if (!arr) return; arr = null; hudAjustar(); hudSalvarPos(); };
  topo.addEventListener('pointerup', solta); topo.addEventListener('pointercancel', solta);
  topo.addEventListener('dblclick', () => bt.click());
  addEventListener('resize', () => { try { hudAjustar(); } catch (x) { /* ignora */ } });
  document.documentElement.appendChild(hudEl);   // no <html>, porque o modo Ultra dá display:none em tudo que é filho direto do <body>
  aplicarMin(true); aplicarFix(); hudAjustar();
}
setInterval(() => { try { atualizarHud(); } catch (err) { /* ignora */ } }, 1000);
let timerEspecial = null;
function iniciarCaptura() {
  pararCaptura();
  if (timerEspecial) { clearInterval(timerEspecial); timerEspecial = null; }
  if (!ativo) return;
  timerCaptura = setInterval(() => {
    const linhas = Array.from(document.querySelectorAll('#caidos-lista .caido'));
    const b = linhas[0];
    if (!b || b.offsetParent === null) return;       // sem a lista visível, quem captura é a vigia rápida (por conexão)
    if (shinyPendenteEscolhido()) return;            // há um shiny caído: a vigia rápida lança a bola escolhida para ele
    b.click();
  }, Math.max(500, PADRAO.intervaloMs));
  // vigia rápida (0,2 s): sem a lista na tela (modo Economia/Ultra), captura pela conexão
  timerEspecial = setInterval(() => {
    const linhas = Array.from(document.querySelectorAll('#caidos-lista .caido'));
    const visivel = linhas.length && linhas[0].offsetParent !== null;
    try {
      if (capturarShinyEscolhido()) return;
      if (!visivel) capturarSemTela();
    } catch (err) { /* ignora */ }
  }, 200);
}
function definirCaptura(v) {
    ativo = !!v;
    salvarAtivo();
    iniciarCaptura();
    sujo = true;
  }

  // ---------- reposição de estoque (shop.buy) ----------
  let listaEstoque = [];
  let ultEstoque = 0;
  let emCompra = false;

  const SPRITE_BOLA = { 1: 'site/assets/ui/ball-poke.png', 2: 'site/assets/ui/ball-great.png', 3: '/img/ball-super.png', 4: 'site/assets/ui/ball-ultra.png', 5: '/img/ball-beast.png' };
  const ICONES_ITEM_FIXOS = { 70070: '/img/itens/golden-potion.png' };
  const srcIcone = (rel) => (rel ? (String(rel).startsWith('/') ? rel : '/assets/' + rel) : '');
  const caminhoIcone = (icon) => (!icon ? null : icon.startsWith('site/') ? icon : icon.startsWith('/') ? 'site' + icon : 'site/assets/items/' + icon);

  async function montarListaEstoque() {
    const w = dados.w;
    if (!w) return;
    const L = [];
    for (const b of w.catalogoBolas) {
      if (!b || b.id == null || !b.compravel) continue;   // ex.: Beast Ball só existe na loja VIP (diamantes)
      const preco = Number(b.priceGold) || 1;
      L.push({ chave: 'ball:' + b.id, grupo: 'Bolas', nome: b.nome || b.name || String(b.id), kind: 'ball', id: b.id, ordem: preco, icone: srcIcone(SPRITE_BOLA[b.id]) });
    }
    if (!dados.itensCat) {
      try {
        const r = await fetch('/assets/items.json');
        const j = r.ok ? await r.json() : null;
        dados.itensCat = (j && j.items) || [];
      } catch (e) { dados.itensCat = []; }
    }
    const porId = new Map();
    for (const i of [...dados.itensCat, ...(w.itensNossos || []), ...(w.itensCompraveis || [])]) if (i && i.id != null) porId.set(i.id, { ...(porId.get(i.id) || {}), ...i });
    for (const i of porId.values()) {
      if (!i || i.id == null || !(i.npcPrice > 0)) continue;
      if (i.category !== 'heal' && i.category !== 'revive') continue;
      L.push({ chave: 'item:' + i.id, grupo: i.category === 'revive' ? 'Revives' : 'Poções', nome: i.name || String(i.id), kind: 'item', id: i.id, ordem: i.npcPrice, icone: ICONES_ITEM_FIXOS[i.id] ? srcIcone(ICONES_ITEM_FIXOS[i.id]) : srcIcone(caminhoIcone(i.icon)) });
    }
    const ORDEM = ['Bolas', 'Poções', 'Revives'];
    L.sort((a, b) => (ORDEM.indexOf(a.grupo) - ORDEM.indexOf(b.grupo)) || (a.ordem - b.ordem));
    listaEstoque = L;
    sujo = true;
  }

  const quantidade = (it) => {
    const e = eu();
    if (!e) return null;
    return Number(((it.kind === 'ball' ? e.balls : e.items) || {})[it.id]) || 0;
  };

  // Beast Ball (loja VIP, paga com diamantes) — trava dura de 10 pacotes por sessão da página
  const BEAST_BOLA_ID = 5;
  const BEAST_PRODUTO = 'beast500';
  const BEAST_POR_PACOTE = 500;
  const BEAST_MAX_PACOTES = 10;
  let beastComprados = 0;
  const produtoBeast = () => ((dados.w && dados.w.lojaProdutos) || []).find((p) => p && p.id === BEAST_PRODUTO) || null;

  async function reporBeast() {
    const b = cfg2.estoque.beast;
    if (!b.ativo || !(b.ate > 0)) return null;
    const prod = produtoBeast();
    if (!prod || !(Number(prod.preco) > 0)) return 'Beast Ball: pacote não encontrado na loja (nada comprado).';
    const e = eu();
    const tem = Number((e.balls || {})[BEAST_BOLA_ID]) || 0;
    const gatilho = b.abaixo > 0 ? b.abaixo : b.ate;
    if (tem >= gatilho || tem >= b.ate) return null;
    const restante = BEAST_MAX_PACOTES - beastComprados;
    if (restante <= 0) return 'Beast Ball: limite de ' + BEAST_MAX_PACOTES + ' pacotes desta sessão atingido (recarregue a página para liberar).';
    const porDiamantes = Math.floor((Number(e.diamonds) || 0) / Number(prod.preco));
    const pacotes = Math.min(Math.ceil((b.ate - tem) / BEAST_POR_PACOTE), restante, porDiamantes);
    if (pacotes <= 0) return 'Beast Ball: diamantes insuficientes.';
    let feitos = 0;
    for (let i = 0; i < pacotes; i++) {
      if (!enviarJogo({ t: 'loja.comprar', id: BEAST_PRODUTO })) break;
      feitos++;
      beastComprados++;
      await esperar(700);
    }
    await esperar(1500);
    const ganho = (Number((eu().balls || {})[BEAST_BOLA_ID]) || 0) - tem;
    return 'Beast Ball +' + ganho + ' (' + feitos + ' pacote(s), ' + beastComprados + '/' + BEAST_MAX_PACOTES + ' na sessão)';
  }

  // Compra "até N": o servidor aceita quantidades grandes, mas se recusar ou limitar, a extensão aprende o tamanho aceito,
  // compra em lotes e, se o jogo tiver um teto de estoque, ajusta o "compra até" na tela para esse teto.
  const capLote = {};                  // item -> maior quantidade aceita de uma vez (aprendida)
  const MAX_LOTES = 60;                // lotes por item a cada conferência (o resto continua na próxima)
  async function comprarAte(it, c, tem0) {
    const inicio = tem0;
    let tem = tem0, lotes = 0, nota = '', semGanho = 0, tentativa = null;
    while (tem < c.ate && lotes < MAX_LOTES) {
      const falta = c.ate - tem;
      let qtd = Math.min(falta, capLote[it.chave] || falta, tentativa || falta);
      if (!(qtd >= 1)) break;
      dados.ultErro = null;
      if (!enviarJogo({ t: 'shop.buy', kind: it.kind, id: it.id, qty: qtd })) return { erroConexao: true, ganhou: tem - inicio };
      lotes++;
      await esperar(lotes === 1 ? 1000 : 600);
      let novo = quantidade(it);
      for (let k = 0; k < 6; k++) {    // espera o estado do jogo assentar (chega aos poucos); só então mede o quanto entrou
        await esperar(450);
        const n2 = quantidade(it);
        if (n2 === novo && (novo > tem || k >= 1)) break;
        novo = n2;
      }
      const ganho = novo - tem;
      if (ganho >= qtd) { tem = novo; tentativa = null; continue; }
      if (ganho > 0) {                 // o servidor aceitou menos do que o pedido: aprende o lote
        tem = novo; tentativa = null; semGanho = 0;   // não aprende o lote aqui: ganho parcial pode ser só falta de ouro (aprender isso travaria as compras de 1 em 1)
        if (ganho < qtd && c.ate - tem > 0 && (!dados.ultErro || /ouro|gold|moeda|coin|dinheiro|saldo|insuficiente/i.test(dados.ultErro.txt))) { nota = 'ouro acabou?'; }
        continue;
      }
      // ganho == 0
      const err = dados.ultErro ? dados.ultErro.txt : '';
      if (!err) { await esperar(1500); if (quantidade(it) > tem) { continue; } nota = 'o jogo não confirmou a compra'; break; }   // sem erro e sem ganho: pode ser só atraso do estado; não repete (evita comprar em dobro)
      if (/ouro|gold|moeda|coin|dinheiro|saldo|insuficiente/i.test(err)) { nota = 'sem ouro suficiente'; break; }
      const porCompra = /por (compra|vez|pedido|transa)|de uma vez|por clique/i.test(err);
      if (!porCompra && /m[aá]x|limite|cheio|teto|capacidade|estoque/i.test(err) && tem > 0 && tem < c.ate) {   // teto de estoque do jogo: o que já tem é o limite
        c.ate = tem; salvarCfg2(); sujo = true; nota = 'o jogo não aceita mais que ' + tem + '; "compra até" ajustado na tela'; break;
      }
      if (qtd > 1) {                   // limite por compra (ou recusa sem motivo claro): usa o número da mensagem, se houver, ou reduz pela metade
        const n = parseInt(String((err.match(/(\d[\d.]*)/) || [])[1] || '').replace(/\./g, ''), 10);
        tentativa = n >= 1 && n < qtd ? n : Math.max(1, Math.floor(qtd / 2));
        if (porCompra && n >= 1 && n < qtd) capLote[it.chave] = n;
        semGanho++; if (semGanho > 24) break; continue;
      }
      nota = err.slice(0, 60);
      break;
    }
    if (lotes >= MAX_LOTES && tem < c.ate) nota = (nota ? nota + ' · ' : '') + 'continua na próxima conferência';
    return { ganhou: tem - inicio, nota };
  }

  async function reporEstoque(manual) {
    if (emCompra || (!manual && !cfg2.estoque.ativo)) return;
    emCompra = true;
    ultEstoque = Date.now();
    try {
      if (!pronto()) { setStatus('Aguardando o jogo conectar…'); ultEstoque = Date.now() - 270000; return; }
      const partes = [];
      const enviados = [];
      for (const it of listaEstoque) {
        const c = cfg2.estoque.itens[it.chave];
        if (!c || !(c.ate > 0)) continue;
        let tem = quantidade(it);
        const gatilho = c.abaixo > 0 ? c.abaixo : c.ate;
        if (tem >= gatilho || tem >= c.ate) continue;
        const r = await comprarAte(it, c, tem);
        if (r.erroConexao) { setStatus('Sem conexão com o jogo.'); return; }
        enviados.push({ it, antes: tem, ganhou: r.ganhou, nota: r.nota });
      }
      const msgBeast = await reporBeast();
      if (msgBeast) partes.push(msgBeast);
      if (!enviados.length) { setStatus(partes.length ? partes.join(' · ') + ' · ' + hora() : 'Estoque ok · ' + hora()); return; }
      for (const x of enviados) partes.push((x.ganhou > 0 ? x.it.nome + ' +' + x.ganhou : x.it.nome + ' (não comprou)') + (x.nota ? ' — ' + x.nota : ''));
      setStatus(partes.join(' · ') + ' · ' + hora());
    } catch (e) {
      setStatus('Erro: ' + (e && e.message ? e.message : e));
    } finally {
      emCompra = false;
    }
  }

  // ---------- fecha o popup "Entre na comunidade" (Discord) ----------
  const TITULO_POPUP = 'ENTRE NA COMUNIDADE';
  const BOTAO_POPUP = 'ENTRAR NO DISCORD';
  let ultimoFechar = 0, ultimaBusca = 0, tentativas = 0;
  const normalizar = (t) => (t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();

  function clicarDeVerdade(el) {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const temPonteiro = typeof PointerEvent === 'function';
    [['pointerover', 0], ['mouseover', 0], ['pointerdown', 1], ['mousedown', 1], ['pointerup', 0], ['mouseup', 0], ['click', 0]].forEach(([tipo, botoes]) => {
      const ehPonteiro = tipo.indexOf('pointer') === 0;
      const init = { bubbles: true, cancelable: true, composed: true, view: window, clientX: cx, clientY: cy, screenX: cx, screenY: cy, button: 0, buttons: botoes };
      if (ehPonteiro && temPonteiro) { init.pointerType = 'mouse'; init.isPrimary = true; init.pointerId = 1; }
      el.dispatchEvent(new (ehPonteiro && temPonteiro ? PointerEvent : MouseEvent)(tipo, init));
    });
  }
  function enviarEsc() {
    ['keydown', 'keyup'].forEach((tipo) => {
      const ev = { key: 'Escape', code: 'Escape', keyCode: 27, which: 27, bubbles: true, cancelable: true };
      [document.activeElement, document, window].forEach((alvo) => { if (alvo) alvo.dispatchEvent(new KeyboardEvent(tipo, ev)); });
    });
  }
  function acharPopupDiscord() {
    if (!document.body) return null;
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) {
      const v = w.currentNode.nodeValue;
      if (!v || v.length > 60 || normalizar(v).indexOf(TITULO_POPUP) === -1) continue;
      let el = w.currentNode.parentElement;
      while (el && el !== document.body) {
        if (normalizar(el.textContent).indexOf(BOTAO_POPUP) !== -1) {
          const dialogo = el.closest('[role="dialog"], .modal');
          if (dialogo) el = dialogo;
          while (el && el !== document.body && el.getBoundingClientRect().width === 0) el = el.parentElement;
          return el && el !== document.body && el.getClientRects().length > 0 ? el : null;
        }
        el = el.parentElement;
      }
    }
    return null;
  }
  function acharBotaoFechar(card) {
    const ehX = /^[x×✕✖✗╳]$/i;
    const rotulo = (e) => (e.getAttribute('aria-label') || '') + ' ' + (e.title || '') + ' ' + (e.getAttribute('class') || '') + ' ' + (e.id || '');
    const proibido = (e) => { const t = normalizar(e.textContent); return t.indexOf('DISCORD') !== -1 || t.indexOf('DENTRO') !== -1; };
    for (const seletor of ['button, [role="button"], a', 'div, span, i']) {
      for (const e of card.querySelectorAll(seletor)) {
        if (proibido(e)) continue;
        if (ehX.test((e.textContent || '').trim()) || /fechar|close/i.test(rotulo(e))) return e;
      }
    }
    const cr = card.getBoundingClientRect();
    for (const d of [24, 16, 32, 40, 12]) {
      const el = document.elementFromPoint(cr.right - d, cr.top + d);
      if (!el || el === card || !card.contains(el) || proibido(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.width <= 64 && r.height <= 64) return el;
    }
    for (const b of card.querySelectorAll('button, [role="button"]')) {
      if (proibido(b)) continue;
      const r = b.getBoundingClientRect();
      if (r.width > 0 && r.width <= 64 && r.height <= 64 && r.top - cr.top < 80 && cr.right - r.right < 80) return b;
    }
    return null;
  }
  function clicarNoX(el, origem) {
    tentativas++;
    ultimoFechar = Date.now();
    console.log('[PokeIdle Tools by Ateforp] Fechando popup do Discord (' + origem + ', tentativa ' + tentativas + ')');
    clicarDeVerdade(el);
    if (tentativas >= 2) enviarEsc();
  }
  function fecharPopupDiscord() {
    const popup = document.getElementById('discord-popup');
    if (popup) {
      const aberto = !popup.classList.contains('hidden') && popup.getAttribute('aria-hidden') !== 'true' && popup.getClientRects().length > 0;
      if (!aberto) { tentativas = 0; return; }
      if (Date.now() - ultimoFechar < 2000) return;
      const x = document.getElementById('discord-popup-fechar');
      if (x) { clicarNoX(x, 'direto'); return; }
    }
    if (Date.now() - ultimaBusca < 60000) return;
    ultimaBusca = Date.now();
    const card = acharPopupDiscord();
    if (!card) { if (!popup) tentativas = 0; return; }
    const x = acharBotaoFechar(card);
    if (x) clicarNoX(x, 'busca');
  }

  // ---------- destravar o jogo (aba otimizada / página recém-atualizada travada) ----------
  let ultTick = Date.now(), ultCutucada = 0, degrauCarga = 0;
  const ESCADA_CARGA = [2, 5, 9, 14, 20, 30, 45, 60, 90];

  function cutucarJogo(motivo) {
    const alvo = document.body;
    if (!alvo) return;
    ultCutucada = Date.now();
    const base = { bubbles: true, cancelable: true, composed: true, view: window, clientX: 4, clientY: 4, button: 0 };
    for (const t of ['pointermove', 'mousemove', 'pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click']) {
      const Ctor = t.indexOf('pointer') === 0 && typeof PointerEvent === 'function' ? PointerEvent : MouseEvent;
      try { alvo.dispatchEvent(new Ctor(t, { ...base, pointerId: 1, pointerType: 'mouse', isPrimary: true })); } catch (e) { /* ignora */ }
    }
    try { window.dispatchEvent(new Event('focus')); } catch (e) { /* ignora */ }
    console.log('[PokeIdle Tools by Ateforp] destravar: clique no fundo da página (' + motivo + ')');
  }

  function conferirTravamento() {
    const agora = Date.now();
    const atraso = agora - ultTick;
    ultTick = agora;
    if (!dados.w) {
      if (degrauCarga < ESCADA_CARGA.length && agora - INICIO >= ESCADA_CARGA[degrauCarga] * 1000) {
        degrauCarga++;
        cutucarJogo('carregando o jogo ' + degrauCarga + '/' + ESCADA_CARGA.length);
      }
      return;
    }
    if (agora - ultCutucada < 30000) return;
    const ws = getWs();
    const silencio = !!(ws && ws.readyState === 1 && dados.ultMsg && agora - dados.ultMsg > 30000);
    if (silencio) cutucarJogo('sem mensagens do servidor há ' + Math.round((agora - dados.ultMsg) / 1000) + ' s');
    else if (atraso > 12000) cutucarJogo('aba ficou parada ' + Math.round(atraso / 1000) + ' s');
  }
  window.addEventListener('load', () => setTimeout(() => { if (!dados.w) cutucarJogo('página carregada'); }, 1500));
  window.addEventListener('pageshow', (ev) => { if (ev.persisted) setTimeout(() => cutucarJogo('página reaberta'), 800); });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') setTimeout(() => cutucarJogo('voltou para a aba'), 600); });

  // ---------- ocultar a janela "Sorteio da liberação" (opção do Mercado) ----------
  // O jogo abre essa janela sempre que um pedido de compra entra no sorteio. Com a opção ligada ela é escondida na hora
  // (a participação continua normal, só a tela some) e fechada pelo próprio botão ✕ depois que o sorteio encerra.
  const CHAVE_MERC = 'ateforp_mercado';
  const lerMerc = () => { try { return JSON.parse(localStorage.getItem(CHAVE_MERC) || '{}') || {}; } catch (e) { return {}; } };
  let ocultarSorteio = !!lerMerc().ocultarSorteio;
  const salvarMerc = () => { try { localStorage.setItem(CHAVE_MERC, JSON.stringify({ ocultarSorteio })); } catch (e) { /* ignora */ } };
  const TITULO_SORTEIO = 'SORTEIO DA LIBERACAO';
  const sorteiosVistos = new Map();   // janela -> { desde, fechou }

  function janelaDoTitulo(no) {
    // sobe do título até o cartão da janela (largura de janela, não da página inteira)
    let el = no.parentElement, card = el;
    while (el && el !== document.body && el !== document.documentElement) {
      const r = el.getBoundingClientRect();
      if (el.getAttribute('role') === 'dialog' || /modal|dialog|popup/i.test(el.getAttribute('class') || '')) { card = el; break; }
      if (r.width > 560 || r.height > innerHeight * 0.95) break;
      card = el;
      el = el.parentElement;
    }
    // se o cartão está dentro de uma camada fixa só dele (fundo/overlay), esconde a camada toda
    const pai = card && card.parentElement;
    if (pai && pai !== document.body && pai.children.length === 1 && getComputedStyle(pai).position === 'fixed') return pai;
    return card;
  }

  function esconder(el) {
    el.style.setProperty('visibility', 'hidden', 'important');
    el.style.setProperty('pointer-events', 'none', 'important');
  }

  function varrerSorteio(raiz) {
    if (!ocultarSorteio || !document.body) return;
    const w = document.createTreeWalker(raiz || document.body, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) {
      const v = w.currentNode.nodeValue;
      if (!v || v.length > 60 || normalizar(v).indexOf(TITULO_SORTEIO) === -1) continue;
      const janela = janelaDoTitulo(w.currentNode);
      if (!janela) continue;
      esconder(janela);
      if (!sorteiosVistos.has(janela)) sorteiosVistos.set(janela, { desde: Date.now(), fechou: false });
    }
  }

  function cuidarSorteios() {
    const agora = Date.now();
    for (const [janela, st] of sorteiosVistos) {
      if (!janela.isConnected) { sorteiosVistos.delete(janela); continue; }
      if (!ocultarSorteio) continue;
      esconder(janela);
      const encerrou = normalizar(janela.textContent).indexOf('SORTEIO ENCERRADO') !== -1;
      if (!encerrou) { if (st.fechou) { st.fechou = false; st.desde = agora; } }   // outro sorteio na mesma janela
      if (!st.fechou && (encerrou || agora - st.desde > 8000)) {
        st.fechou = true;
        const x = acharBotaoFechar(janela);
        if (x) clicarDeVerdade(x); else janela.style.setProperty('display', 'none', 'important');
      }
    }
  }

  function iniciarObservadorSorteio() {
    const alvo = document.body || document.documentElement;
    // junta os nós novos/alterados e confere no próximo quadro (antes de a tela ser pintada, então a janela não aparece);
    // cada nó entra uma vez só por quadro, o que mantém o custo baixo mesmo com a página mudando toda hora
    const fila = new Set();
    let agendado = false;
    const processar = () => {
      agendado = false;
      const lote = Array.from(fila).slice(0, 150); fila.clear();
      if (!ocultarSorteio) return;
      for (const n of lote) {
        const el = n.nodeType === 1 ? n : n.parentElement;
        if (!el || !el.isConnected) continue;
        const t = el.textContent;
        if (!t || t.length > 4000) continue;
        if (normalizar(t).indexOf(TITULO_SORTEIO) !== -1) { varrerSorteio(el); return; }
      }
    };
    new MutationObserver((muts) => {
      if (!ocultarSorteio) return;
      for (const m of muts) {
        if (m.type === 'attributes') fila.add(m.target);
        else for (const n of m.addedNodes) if (n.nodeType === 1 || n.nodeType === 3) fila.add(n);
      }
      if (!agendado && fila.size) { agendado = true; requestAnimationFrame(processar); }
    }).observe(alvo, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'hidden', 'style'] });
    setInterval(cuidarSorteios, 300);
  }

  // ---------- agendador (leve) ----------
  function ciclo() {
    conferirTravamento();
    if (!pronto()) return;
    if (cfg2.estoque.ativo && Date.now() - ultEstoque >= (Number(cfg2.estoque.intervaloMin) || 5) * 60000) reporEstoque(false);
  }
  function tarefas() {
    for (const passo of [fecharPopupDiscord, ciclo]) {
      try { passo(); } catch (e) { console.error('[PokeIdle Tools by Ateforp] erro em ' + passo.name + ':', e); }
    }
  }

  // ---------- conversa com o painel (postMessage) ----------
  let sujo = true, ultEmit = 0;
  let ultSig = '';
  // só manda o estado quando algo mudou (a tela não precisa ser redesenhada à toa)
  const post = (o) => {
    if (o.type === 'state') { let s = ''; try { s = JSON.stringify(o.state); } catch (e) { /* ignora */ } if (s && s === ultSig) return; ultSig = s; }
    window.postMessage(Object.assign({ ch: CH, from: 'catch' }, o), '*');
  };

  function emitir() {
    sujo = false;
    ultEmit = Date.now();
    const ws = getWs();
    post({
      type: 'state',
      state: {
        ativo, autoLigar: !!cfg2.autoLigar, capBolaTela: cfg2.captura.bolaTela, capBolaShiny: cfg2.captura.bolaShiny, capHud: !!cfg2.captura.hudEco, capHudSec: cfg2.captura.hudSec, capSemTela: capSemTela.lancadas,
        conectado: !!(ws && ws.readyState === 1),
        pronto: pronto(),
        estoque: { ativo: cfg2.estoque.ativo, intervaloMin: cfg2.estoque.intervaloMin, itens: cfg2.estoque.itens, beast: cfg2.estoque.beast, status: status.estoque },
        ocultarSorteio,
        beastDisponivel: !!produtoBeast(),
        beastMax: BEAST_MAX_PACOTES, beastPorPacote: BEAST_POR_PACOTE,
        lista: listaEstoque.map((it) => ({ chave: it.chave, grupo: it.grupo, nome: it.nome, icone: it.icone, tem: quantidade(it) })),
        beastTem: eu() ? Number((eu().balls || {})[BEAST_BOLA_ID]) || 0 : null
      }
    });
  }

  window.addEventListener('message', (e) => {
    const m = e.data;
    if (e.source !== window || !m || m.ch !== CH || m.from !== 'ui') return;
    const num = (v) => Math.min(LIMITE_ITEM, Math.max(0, Math.floor(Number(v) || 0)));
    switch (m.type) {
      case 'hello': sujo = true; ultSig = ''; break;
      case 'captura': definirCaptura(m.value); break;
      case 'cap-hud': cfg2.captura.hudEco = !!m.value; salvarCfg2(); sujo = true; atualizarHud(); break;
      case 'cap-hud-sec': if (cfg2.captura.hudSec && m.chave in cfg2.captura.hudSec) { cfg2.captura.hudSec[m.chave] = !!m.value; salvarCfg2(); sujo = true; atualizarHud(); } break;
      case 'cap-bola': cfg2.captura.bolaTela = Math.max(0, Math.floor(Number(m.value)) || 0); salvarCfg2(); sujo = true; break;
      case 'cap-bola-shiny': cfg2.captura.bolaShiny = Math.max(0, Math.floor(Number(m.value)) || 0); salvarCfg2(); sujo = true; break;
      case 'auto-ligar': cfg2.autoLigar = !!m.value; salvarCfg2(); sujo = true; break;
      case 'estoque-ativo': cfg2.estoque.ativo = !!m.value; ultEstoque = 0; salvarCfg2(); setStatus(m.value ? 'Ligado: confere já.' : 'Desligado.'); break;
      case 'estoque-intervalo': cfg2.estoque.intervaloMin = [1, 2, 5, 10, 30].includes(Number(m.value)) ? Number(m.value) : 5; salvarCfg2(); break;
      case 'estoque-item': {
        const c = cfg2.estoque.itens[m.chave] || (cfg2.estoque.itens[m.chave] = { abaixo: 0, ate: 0 });
        c.abaixo = num(m.abaixo); c.ate = num(m.ate); salvarCfg2(); break;
      }
      case 'beast-ativo': cfg2.estoque.beast.ativo = !!m.value; salvarCfg2(); break;   // a confirmação é feita no painel
      case 'beast-cfg': cfg2.estoque.beast.abaixo = num(m.abaixo); cfg2.estoque.beast.ate = num(m.ate); salvarCfg2(); break;
      case 'estoque-run': reporEstoque(true); break;
      case 'sorteio-ocultar': ocultarSorteio = !!m.value; salvarMerc(); if (ocultarSorteio) varrerSorteio(); else for (const j of sorteiosVistos.keys()) { j.style.removeProperty('visibility'); j.style.removeProperty('pointer-events'); } break;
      case 'reload': location.reload(); break;
      default: return;
    }
    sujo = true;
  });

  function comecar() {
    iniciarCaptura();
    iniciarObservadorSorteio();
    setInterval(tarefas, 3000);
    setInterval(() => { if (sujo || Date.now() - ultEmit > 1500) emitir(); }, 500);
    tarefas();
  }
  if (document.body) comecar();
  else document.addEventListener('DOMContentLoaded', comecar);

  window.__ateforpCatchInfo = () => ({
    conectado: !!(getWs() && getWs().readyState === 1), welcome: !!dados.w, nivel: eu() && eu().level,
    itens: listaEstoque.map((i) => i.chave + ':' + i.nome + '=' + quantidade(i))
  });
})();

/* ===== venda automatica ===== */
/*
 * PokeIdle Tools by Ateforp - venda automática de Pokémon do Depósito (Market do jogo, venda ao NPC).
 *
 * Como o jogo guarda os dados (observado):
 *   - lista de Pokémon: welcome.estado.pokemons e estado.pokemons / pkMud (alterados) / pkFora (removidos)
 *   - equipe = slot 0..4; Depósito = slot null e id fora de estado.automation.pokemonTravado; Coleção = ids "travados"
 *   - vender: {"t":"shop.sellPokemon","pokemonId":ID}   (o servidor calcula o valor; irreversível)
 * Regras do usuário (P = potência, IV = soma dos IVs, Q = qualidade, N = nota) decidem: Coleção, vender ou manter.
 * Desligado por padrão e começa em "só simular" (não vende, só mostra a prévia).
 * O comando de "Enviar para a Coleção" ainda não foi descoberto: até lá a extensão só vende e mostra quem iria para a Coleção.
 */
(() => {
  'use strict';
  if (window.__ateforpVenda) return;
  window.__ateforpVenda = true;

  const CH = 'ateforp-venda';
  const CHAVE = 'ateforp_autovenda';
  const BUS = window.__PM_BUS;
  const getWs = () => (BUS && BUS.ws ? BUS.ws() : null);
  const COLECAO_CMD = (id) => ({ t: 'colecao.mover', pokemonId: id, para: 'colecao' });   // frame do botão "Enviar para a Coleção" (capturado no jogo)

  // lendários e míticos (o servidor não manda essa marca na lista de Pokémon, então usamos os nomes)
  const LENDARIOS = 'Articuno Zapdos Moltres Mewtwo Mew Raikou Entei Suicune Lugia Ho-Oh Celebi Regirock Regice Registeel Latias Latios Kyogre Groudon Rayquaza Jirachi Deoxys Uxie Mesprit Azelf Dialga Palkia Heatran Regigigas Giratina Cresselia Phione Manaphy Darkrai Shaymin Arceus Victini Cobalion Terrakion Virizion Tornadus Thundurus Reshiram Zekrom Landorus Kyurem Keldeo Meloetta Genesect Xerneas Yveltal Zygarde Diancie Hoopa Volcanion Silvally Tapu-Koko Tapu-Lele Tapu-Bulu Tapu-Fini Cosmog Cosmoem Solgaleo Lunala Necrozma Magearna Marshadow Zeraora Meltan Melmetal Nihilego Buzzwole Pheromosa Xurkitree Celesteela Kartana Guzzlord Poipole Naganadel Stakataka Blacephalon Zacian Zamazenta Eternatus Kubfu Urshifu Zarude Regieleki Regidrago Glastrier Spectrier Calyrex Enamorus Chien-Pao Ting-Lu Chi-Yu Wo-Chien Koraidon Miraidon Okidogi Munkidori Fezandipiti Ogerpon Terapagos Pecharunt'.toLowerCase().split(' ').map((s) => s.replace(/-/g, ' '));
  const nomeNorm = (n) => String(n || '').toLowerCase().replace(/[-_]/g, ' ');
  let extras = [];
  window.__ateforpEhLendario = (nome) => ehLendario({ nome });   // usado pela captura (Beast Ball em lendário)
  const ehLendario = (p) => { const n = nomeNorm(p.nome); return LENDARIOS.some((l) => n.indexOf(l) !== -1) || extras.some((l) => l && n.indexOf(l) !== -1); };

  const PADRAO = {
    simular: false,
    shiny: 'colecao',                 // 'colecao' | 'manter' | 'regras' | 'vender'
    lendario: 'colecao',              // idem, para lendários e míticos
    extras: '',                       // nomes extras tratados como lendários (separados por vírgula)
    colecao: { ligada: true, modo: 'ou', p: null, iv: null, q: null, n: null },   // vai para a Coleção se atingir (>=)
    venda: { ligada: true, modo: 'e', p: null, iv: null, q: null, n: null, resto: false },   // vende se ficar abaixo (<=)
    maxPorMin: 20
  };
  let cfg = JSON.parse(JSON.stringify(PADRAO));
  try { const c = JSON.parse(localStorage.getItem(CHAVE) || 'null'); if (c) cfg = mesclar(cfg, c); } catch (e) { /* ignora */ }
  const atualizarExtras = () => { extras = String(cfg.extras || '').split(',').map((s) => nomeNorm(s).trim()).filter(Boolean); };
  atualizarExtras();
  let ativo = false;                  // sempre desligado depois de recarregar a página

  function mesclar(base, c) {
    const out = JSON.parse(JSON.stringify(base));
    const num = (v) => (v === null || v === '' || v === undefined || !isFinite(Number(v)) ? null : Number(v));
    out.simular = false;   // não existe mais modo de teste
    if (['colecao', 'manter', 'regras', 'vender'].indexOf(c.shiny) !== -1) out.shiny = c.shiny;
    if (['colecao', 'manter', 'regras', 'vender'].indexOf(c.lendario) !== -1) out.lendario = c.lendario;
    if (typeof c.extras === 'string') out.extras = c.extras.slice(0, 300);
    for (const k of ['colecao', 'venda']) {
      const s = c[k]; if (!s || typeof s !== 'object') continue;
      if (typeof s.ligada === 'boolean') out[k].ligada = s.ligada;
      if (s.modo === 'e' || s.modo === 'ou') out[k].modo = s.modo;
      for (const f of ['p', 'iv', 'q', 'n']) if (f in s) out[k][f] = num(s[f]);
      if (k === 'venda' && typeof s.resto === 'boolean') out.venda.resto = s.resto;
    }
    if (c.maxPorMin >= 1 && c.maxPorMin <= 60) out.maxPorMin = Math.floor(c.maxPorMin);
    return out;
  }
  const salvar = () => { try { localStorage.setItem(CHAVE, JSON.stringify(cfg)); } catch (e) { /* ignora */ } };

  const mapa = new Map();             // id -> pokémon
  let travados = new Set();
  let temLista = false;
  let sujo = true, ultEmit = 0, ver = 1, cacheAn = null, ultSig = '';
  let hist = [];                      // últimas ações (guardadas no navegador)
  try { const h = JSON.parse(localStorage.getItem(CHAVE + '_hist') || '[]'); if (Array.isArray(h)) hist = h.slice(0, 200); } catch (e) { /* ignora */ }
  const snap = (p) => ({ nome: p.nome, level: p.level, shiny: !!p.shiny, lend: ehLendario(p), p: p.potencia, iv: ivTotal(p), q: milesimos(p.quality), n: milesimos(p.nota) });
  function registrar(tipo, pend, extra) {
    hist.unshift(Object.assign({ em: Date.now(), tipo, id: pend.id }, pend.snap || {}, { motivo: pend.motivo || null }, extra || {}));
    hist = hist.slice(0, 200);
    try { localStorage.setItem(CHAVE + '_hist', JSON.stringify(hist)); } catch (e) { /* ignora */ }
  }
  const S = { vendidos: 0, coletados: 0, falhas: 0, pend: null, ultAcao: 0, janela: [], pausaAte: 0, msg: 'Desligado.' };

  // Q e N chegam do jogo como decimais (ex.: 1.445); o jogo mostra e o usuário digita em milésimos (1.445 → 1445)
  const milesimos = (v) => Math.round((Number(v) || 0) * 1000);
  const ehPoke = (o) => o && typeof o === 'object' && o.id != null && o.speciesId != null && o.ivs;
  const ivTotal = (p) => Object.values(p.ivs || {}).reduce((a, b) => a + (Number(b) || 0), 0);

  function aoMensagem(txt) {
    if (typeof txt !== 'string') return;
    if (txt.indexOf('"t":"erro"') !== -1) {
      if (S.pend && /devagar|muitas mensagens/i.test(txt)) { S.pausaAte = Date.now() + 60000; S.pend = null; S.msg = 'Servidor pediu calma; pausa de 60 s.'; sujo = true; }
      return;
    }
    const ehWelcome = txt.indexOf('"t":"welcome"') !== -1;
    if (!ehWelcome && txt.indexOf('"t":"estado"') === -1) return;
    let m; try { m = JSON.parse(txt); } catch (e) { return; }
    const e = m && m.estado; if (!e) return;
    if (Array.isArray(e.pokemons)) {
      if (e.cheio || ehWelcome) mapa.clear();
      e.pokemons.forEach((p) => { if (ehPoke(p)) mapa.set(p.id, p); });
      temLista = true; ver++;
    }
    if (Array.isArray(e.pkMud)) { ver++; e.pkMud.forEach((p) => { if (ehPoke(p)) mapa.set(p.id, Object.assign(mapa.get(p.id) || {}, p)); }); }
    if (Array.isArray(e.pkFora) && e.pkFora.length) ver++;
    if (Array.isArray(e.pkFora)) e.pkFora.forEach((id) => { mapa.delete(id); if (S.pend && S.pend.id === id) { S.vendidos++; registrar('vendido', S.pend); S.pend = null; } });
    if (e.automation && Array.isArray(e.automation.pokemonTravado)) { const nt = e.automation.pokemonTravado; if (nt.length !== travados.size || nt.some((id) => !travados.has(id))) { travados = new Set(nt); ver++; } }
    sujo = true;
  }
  if (BUS) BUS.on(aoMensagem);

  // ---------- regras ----------
  const atinge = (reg, p, cmp) => {
    const vals = { p: p.potencia, iv: ivTotal(p), q: milesimos(p.quality), n: milesimos(p.nota) };
    const ts = ['p', 'iv', 'q', 'n'].filter((f) => reg[f] !== null);
    if (!ts.length) return null;                       // sem limites = regra sem critério
    const res = ts.map((f) => cmp(Number(vals[f]), reg[f]));
    return reg.modo === 'e' ? res.every(Boolean) : res.some(Boolean);
  };
  const ACAO_TXT = { colecao: 'Coleção', manter: 'manter', vender: 'vender' };
  function avaliar(p) {
    if (p.shiny && ['colecao', 'manter', 'vender'].indexOf(cfg.shiny) !== -1) return { acao: cfg.shiny, motivo: 'Shiny → ' + ACAO_TXT[cfg.shiny] };
    if (ehLendario(p) && ['colecao', 'manter', 'vender'].indexOf(cfg.lendario) !== -1) return { acao: cfg.lendario, motivo: 'Lendário → ' + ACAO_TXT[cfg.lendario] };
    if (cfg.colecao.ligada && atinge(cfg.colecao, p, (v, t) => v >= t) === true) return { acao: 'colecao', motivo: 'Bateu a regra da Coleção' };
    if (cfg.venda.ligada) {
      if (atinge(cfg.venda, p, (v, t) => v <= t) === true) return { acao: 'vender', motivo: 'Bateu a regra de venda' };
      if (cfg.venda.resto) return { acao: 'vender', motivo: 'Resto (nenhuma regra pegou)' };   // "vender todo o resto"
    }
    return { acao: 'manter', motivo: 'Nenhuma regra pegou — decidir' };
  }
  const decidir = (p) => avaliar(p).acao;
  const noDeposito = (p) => p.slot == null && !travados.has(p.id);

  // a análise percorre todo o Depósito; só refaz quando os dados ou as regras mudaram
  function analisar() {
    if (cacheAn && cacheAn.ver === ver) return cacheAn;
    const dep = Array.from(mapa.values()).filter(noDeposito);
    const c = { vender: 0, colecao: 0, manter: 0 };
    const itens = dep.map((p) => { const r = avaliar(p); return { p, acao: r.acao, motivo: r.motivo }; });
    itens.forEach((x) => c[x.acao]++);
    cacheAn = { ver, dep, itens, c };
    return cacheAn;
  }

  function passo() {
    if (!ativo || cfg.simular) return;
    const agora = Date.now();
    const ws = getWs();
    if (!ws || ws.readyState !== 1) { S.msg = 'Sem conexão com o jogo.'; sujo = true; return; }
    if (agora < S.pausaAte) return;
    if (S.pend && S.pend.col && (travados.has(S.pend.id) || !mapa.has(S.pend.id))) { S.coletados++; registrar('colecao', S.pend); S.pend = null; sujo = true; }
    if (S.pend) {
      if (agora - S.pend.em > 8000) { S.falhas++; registrar('falha', S.pend); S.msg = 'O servidor não confirmou a ação com ' + S.pend.nome + '.'; S.pend = null; sujo = true; if (S.falhas >= 3) { ativo = false; S.msg = 'Desligado: 3 vendas sem confirmação.'; } }
      return;
    }
    if (agora - S.ultAcao < 2000) return;
    S.janela = S.janela.filter((t) => agora - t < 60000);
    if (S.janela.length >= cfg.maxPorMin) { S.msg = 'Limite por minuto atingido.'; return; }
    const prox = analisar().itens.find((x) => x.acao === 'vender' || (x.acao === 'colecao' && COLECAO_CMD));
    if (!prox) { S.msg = 'Nada a fazer agora.'; return; }
    try {
      if (prox.acao === 'vender') ws.send(JSON.stringify({ t: 'shop.sellPokemon', pokemonId: prox.p.id }));
      else ws.send(JSON.stringify(COLECAO_CMD(prox.p.id)));
      S.ultAcao = agora; S.janela.push(agora); S.pend = { id: prox.p.id, nome: prox.p.nome, em: agora, col: prox.acao !== 'vender', snap: snap(prox.p), motivo: avaliar(prox.p).motivo };
      S.msg = (prox.acao === 'vender' ? 'Vendendo ' : 'Enviando para a Coleção: ') + prox.p.nome + '…'; sujo = true;
    } catch (e) { S.falhas++; }
  }

  const post = (o) => window.postMessage(Object.assign({ ch: CH, from: 'venda' }, o), '*');
  function emitir() {
    sujo = false; ultEmit = Date.now();
    const ws = getWs();
    const a = analisar();
    const ordem = { vender: 0, colecao: 1, manter: 2 };
    const porAcao = (ac) => a.itens.filter((x) => x.acao === ac).slice(0, 40);   // até 40 de cada grupo: vender, Coleção e sem ação
    const previa = [].concat(porAcao('vender'), porAcao('colecao'), porAcao('manter'))
      .map((x) => ({ id: x.p.id, nome: x.p.nome, level: x.p.level, shiny: !!x.p.shiny, lend: ehLendario(x.p), p: x.p.potencia, iv: ivTotal(x.p), q: milesimos(x.p.quality), n: milesimos(x.p.nota), acao: x.acao, motivo: x.motivo }));
    const sobra = a.itens.filter((x) => x.acao === 'manter').slice(0, 40).map((x) => Object.assign({ id: x.p.id }, snap(x.p), { motivo: x.motivo }));
    const estado = { hist: hist.slice(0, 60), sobra, ativo, cfg, conectado: !!(ws && ws.readyState === 1), temLista, deposito: a.dep.length, equipe: Array.from(mapa.values()).filter((p) => p.slot != null).length, colecaoN: travados.size,
      contagem: a.c, previa, vendidos: S.vendidos, coletados: S.coletados, falhas: S.falhas, msg: ativo ? S.msg : (S.vendidos ? S.msg : 'Desligado.'), colecaoCmd: !!COLECAO_CMD, pendente: S.pend ? S.pend.nome : null };
    const sig = JSON.stringify(estado);
    if (sig === ultSig) return;          // nada mudou: não manda de novo (evita redesenhar a tela à toa)
    ultSig = sig;
    post({ type: 'state', state: estado });
  }

  window.addEventListener('message', (e) => {
    const m = e.data;
    if (e.source !== window || !m || m.ch !== CH || m.from !== 'ui') return;
    if (m.type === 'hello') { sujo = true; ultEmit = 0; ultSig = ''; }
    else if (m.type === 'cfg') { cfg = mesclar(cfg, m.cfg || {}); atualizarExtras(); salvar(); ver++; sujo = true; ultEmit = 0; }
    else if (m.type === 'ativo') { ativo = !!m.value; S.falhas = 0; S.pend = null; S.pausaAte = 0; S.msg = ativo ? (cfg.simular ? 'Ligado em modo simulação (nada é vendido).' : 'Ligado.') : 'Desligado.'; sujo = true; }
    else if (m.type === 'zerar') { S.vendidos = 0; S.coletados = 0; S.falhas = 0; hist = []; try { localStorage.removeItem(CHAVE + '_hist'); } catch (e) { /* ignora */ } sujo = true; }
  });

  setInterval(passo, 1000);
  setInterval(() => { const t = Date.now() - ultEmit; if ((sujo && t >= 1500) || t > 5000) emitir(); }, 500);
  window.__ateforpVendaInfo = () => ({ total: mapa.size, travados: travados.size, cfg });
})();

/* ===== pvp ===== */
/*
 * PokeIdle Tools by Ateforp - busca contínua de partida no PvP (mundo da página).
 * Protocolo observado no jogo:
 *   envia   {"t":"pvp.fila.entrar"}
 *   recebe  {"t":"pvp","fila":{"na":bool,"desde":ts,"tamanho":n,"cooldownMs":n}}   (estado da fila / espera)
 *           {"t":"pvp","partida":{..., "venci":bool,"delta":n,"motivo":"..","duracaoMs":n,"oponente":{nick,pontos}}}  (luta pronta)
 *           {"t":"pvp","rank":{pontos,vitorias,derrotas,partidas,...}}
 *   cancelar a espera: {"t":"pvp.fila.sair"} (só vale enquanto está na fila; luta já iniciada não dá para cancelar)
 * Desligado por padrão. Nada é mostrado na tela do jogo: só o painel da extensão acompanha.
 */
(() => {
  'use strict';
  if (window.__ateforpPvp) return;
  window.__ateforpPvp = true;

  const CH = 'ateforp-pvp';
  const CHAVE = 'ateforp_pvp';
  const BUS = window.__PM_BUS;
  const getWs = () => (BUS && BUS.ws ? BUS.ws() : null);

  const FOLGA = 3000;                 // folga depois do cooldown do servidor
  const INTERVALO_MIN = 10000;        // nunca enviar "entrar" mais de 1 vez a cada 10 s
  const SEM_RESPOSTA = 8000;          // sem resposta da fila neste prazo => tenta de novo mais tarde
  const BACKOFF = 30000;
  const BACKOFF_MAX = 300000;         // a espera cresce a cada falha seguida (30 s, 60 s, 2 min, 5 min), mas a busca NUNCA se desliga sozinha

  let ativo = false;                  // sempre começa desligado depois de recarregar a página
  let autoLigar = false;              // liga sozinho depois do login (opcional)
  let ocultarLuta = true;             // fecha a janela do replay da luta (só com o PvP automático ligado)
  let esperaPosS = 10;                // segundos entre o resultado da luta e a próxima busca
  try { const c = JSON.parse(localStorage.getItem(CHAVE) || '{}'); if (c.esperaPosS >= 3 && c.esperaPosS <= 600) esperaPosS = c.esperaPosS; if (c.ocultarLuta === false) ocultarLuta = false; if (c.autoLigar === true) autoLigar = true; } catch (e) { /* ignora */ }

  const S = {
    naFila: false, desde: 0, tamanho: 0, cooldownAte: 0, proximo: 0, ultEnvio: 0, aguardandoResp: 0,
    falhas: 0, rank: null, partidas: 0, vitorias: 0, derrotas: 0, delta: 0, ultima: null, msg: 'Desligado.'
  };
  let hist = [];                      // últimas partidas (guardadas no navegador)
  try { const h = JSON.parse(localStorage.getItem(CHAVE + '_hist') || '[]'); if (Array.isArray(h)) hist = h.slice(0, 30); } catch (e) { /* ignora */ }
  let sujo = true, ultEmit = 0;

  function salvar() { try { localStorage.setItem(CHAVE, JSON.stringify({ esperaPosS, ocultarLuta, autoLigar })); } catch (e) { /* ignora */ } }

  let jaLogou = false;
  // "Ligar ao se logar": vigia que confere de 1 em 1 s e liga assim que o jogo está conectado e logado (também a cada reconexão)
  let wsVisto = null, logado = false, autoFeito = false;
  function sincronizarConexao() { const w = getWs(); if (w !== wsVisto) { wsVisto = w; logado = false; autoFeito = false; } }
  setInterval(() => {
    sincronizarConexao();
    const w = getWs();
    if (autoLigar && !autoFeito && logado && w && w.readyState === 1) {
      autoFeito = true;
      if (!ativo) { ligar(true); S.proximo = 0; console.log('[PokeIdle Tools by Ateforp] PvP ligado automaticamente ao logar'); }
    }
  }, 1000);
  function ligar(v) {
    ativo = !!v; S.falhas = 0; S.aguardandoResp = 0;
    if (ativo) { const w = getWs(); try { if (w && w.readyState === 1) w.send(JSON.stringify({ t: 'pvp.mensal', pagina: 0 })); } catch (e) { /* ignora */ } }
    S.msg = ativo ? 'Ligado.' : 'Desligado.';
    salvar(); sujo = true;
  }
  let offset = 0;                     // hora do servidor menos hora deste computador (ms)
  function aoMensagem(txt) {
    if (typeof txt === 'string' && txt.indexOf('"servidorAgora":') !== -1) {
      const k = txt.indexOf('"servidorAgora":'); const n = parseInt(txt.slice(k + 16, k + 31), 10);
      if (n > 1e12) { offset = n - Date.now(); sujo = true; }
    }
    sincronizarConexao();
    if (!logado && typeof txt === 'string' && /"t":"(welcome|estado|campo|campo\.init|pvp)"/.test(txt.slice(0, 200))) logado = true;
    if (typeof txt === 'string' && txt.indexOf('"t":"pvpMensal"') !== -1) {
      let mm; try { mm = JSON.parse(txt); } catch (e) { mm = null; }
      const eu = mm && mm.eu;
      if (eu && typeof eu === 'object' && (!S.rank || S.rank.doMensal)) {
        S.rank = { doMensal: true, tier: S.rank && S.rank.tier || null, div: S.rank && S.rank.div || null, pontos: eu.pontos, vitorias: eu.vitorias, derrotas: eu.derrotas, partidas: eu.partidas, posicao: eu.pos != null ? eu.pos : null, sequencia: S.rank && S.rank.sequencia != null ? S.rank.sequencia : null };
        sujo = true;
      }
      return;
    }
    if (typeof txt !== 'string' || txt.indexOf('"t":"pvp"') === -1) {
      if (ativo && typeof txt === 'string' && txt.indexOf('"t":"erro"') !== -1 && S.aguardandoResp) {
        let m; try { m = JSON.parse(txt); } catch (e) { return; }
        S.aguardandoResp = 0; S.falhas++; S.proximo = Date.now() + Math.min(BACKOFF_MAX, BACKOFF * Math.pow(2, Math.min(S.falhas - 1, 4)));
        S.msg = 'Servidor recusou: ' + String((m && (m.msg || m.erro || m.mensagem || m.texto)) || 'erro') + ' — tentando de novo em ' + Math.round((S.proximo - Date.now()) / 1000) + ' s (falha ' + S.falhas + ').';
        sujo = true;
      }
      return;
    }
    let m; try { m = JSON.parse(txt); } catch (e) { return; }
    if (!m || m.t !== 'pvp') return;
    const agora = Date.now();
    if (m.fila) {
      S.naFila = !!m.fila.na; S.desde = m.fila.desde || 0; S.tamanho = m.fila.tamanho || 0;
      S.cooldownAte = (m.fila.cooldownMs > 0) ? agora + m.fila.cooldownMs : 0;
      S.aguardandoResp = 0; S.falhas = 0;
      S.msg = S.naFila ? 'Na fila (' + S.tamanho + ' jogadores).' : (S.cooldownAte ? 'Em espera antes da próxima busca.' : 'Fora da fila.');
      sujo = true;
    }
    if (m.rank && typeof m.rank === 'object') {
      const r = m.rank;
      S.rank = { doMensal: false, tier: r.tierId || null, div: r.divisaoNum || null, pontos: r.pontos, pico: r.pico, de: r.de, ate: r.ate, progresso: r.progresso, posicao: m.posicao != null ? m.posicao : r.posicao, vitorias: r.vitorias, derrotas: r.derrotas, partidas: r.partidas, sequencia: r.sequencia };
      sujo = true;
    }
    if (m.partida && typeof m.partida === 'object') {
      const p = m.partida;
      S.naFila = false; S.partidas++; if (p.venci) S.vitorias++; else S.derrotas++;
      S.delta += Number(p.delta) || 0;
      hist.unshift({ em: agora, venci: !!p.venci, delta: Number(p.delta) || 0, pontos: p.pontos, antes: p.antes, motivo: p.motivo || null, oponente: p.oponente ? p.oponente.nick : null, opPontos: p.oponente ? p.oponente.pontos : null, durMs: p.duracaoMs || 0 });
      hist = hist.slice(0, 30);
      try { localStorage.setItem(CHAVE + '_hist', JSON.stringify(hist)); } catch (e) { /* ignora */ }
      S.ultima = { venci: !!p.venci, delta: p.delta, motivo: p.motivo, oponente: p.oponente && p.oponente.nick, em: agora };
      // busca de novo X segundos depois do resultado (padrão 10 s)
      S.proximo = agora + esperaPosS * 1000;
      S.msg = 'Partida ' + (p.venci ? 'ganha' : 'perdida') + ' (' + (p.delta > 0 ? '+' : '') + p.delta + ').';
      sujo = true;
    }
  }
  if (BUS) BUS.on(aoMensagem);

  function passo() {
    const agora = Date.now();
    if (!ativo) return;
    const ws = getWs();
    if (!ws || ws.readyState !== 1) { S.msg = 'Sem conexão com o jogo.'; sujo = true; return; }
    if (S.aguardandoResp && agora - S.aguardandoResp > SEM_RESPOSTA) {
      S.aguardandoResp = 0; S.falhas++; const esp = Math.min(BACKOFF_MAX, BACKOFF * Math.pow(2, Math.min(S.falhas - 1, 4))); S.proximo = agora + esp; S.msg = 'Sem resposta da fila; tentando de novo em ' + Math.round(esp / 1000) + ' s (falha ' + S.falhas + ').'; sujo = true;
      return;
    }
    if (S.naFila || S.aguardandoResp) return;
    if (agora < S.proximo || agora < S.cooldownAte + FOLGA * (S.cooldownAte ? 1 : 0) || agora - S.ultEnvio < INTERVALO_MIN) return;
    try {
      ws.send(JSON.stringify({ t: 'pvp.fila.entrar' }));
      S.ultEnvio = agora; S.aguardandoResp = agora; S.msg = 'Entrando na fila…'; sujo = true;
    } catch (e) { S.falhas++; }
  }

  let ultSig = '';
  // só manda o estado quando algo mudou (a tela não precisa ser redesenhada à toa)
  const post = (o) => {
    if (o.type === 'state') { let s = ''; try { s = JSON.stringify(o.state); } catch (e) { /* ignora */ } if (s && s === ultSig) return; ultSig = s; }
    window.postMessage(Object.assign({ ch: CH, from: 'pvp' }, o), '*');
  };
  function emitir() {
    sujo = false; ultEmit = Date.now();
    const ws = getWs();
    post({ type: 'state', state: { ativo, autoLigar, conectado: !!(ws && ws.readyState === 1), naFila: S.naFila, desde: S.desde, offset, ocultarLuta, rank: S.rank, hist, esperaPosS, tamanho: S.tamanho, partidas: S.partidas, vitorias: S.vitorias, derrotas: S.derrotas, delta: S.delta, ultima: S.ultima, msg: ativo || S.partidas ? S.msg : 'Desligado.', espera: Math.max(0, Math.max(S.proximo, S.cooldownAte) - Date.now()) } });
  }

  window.addEventListener('message', (e) => {
    const m = e.data;
    if (e.source !== window || !m || m.ch !== CH || m.from !== 'ui') return;
    if (m.type === 'hello') { sujo = true; ultSig = ''; }
    else if (m.type === 'ocultar-luta') { ocultarLuta = !!m.value; salvar(); sujo = true; }
    else if (m.type === 'espera') {
      const v = Math.floor(Number(m.value));
      if (v >= 3 && v <= 600) { esperaPosS = v; salvar(); sujo = true; }
    } else if (m.type === 'ativo') {
      ligar(m.value);
    } else if (m.type === 'auto-ligar') {
      autoLigar = !!m.value; salvar(); sujo = true;
    } else if (m.type === 'sair') {
      // sai da fila e desliga a busca automática (senão ela entraria de novo na hora)
      ativo = false; S.aguardandoResp = 0;
      const w = getWs(); try { if (w && w.readyState === 1) w.send(JSON.stringify({ t: 'pvp.fila.sair' })); } catch (e) { /* ignora */ }
      S.msg = 'Saiu da fila; busca automática desligada.'; S.naFila = false; salvar(); sujo = true;
    } else if (m.type === 'zerar') { S.partidas = S.vitorias = S.derrotas = S.delta = 0; S.ultima = null; hist = []; try { localStorage.removeItem(CHAVE + '_hist'); } catch (e) { /* ignora */ } sujo = true; }
  });

  // janela do replay ("PVP RANQUEADO — CONTRA fulano"): o jogo a abre quando a partida começa; aqui ela é fechada (o resultado já chegou)
  const ehJanelaLuta = (el) => /^\s*PVP RANQUEADO\s*[—–-]\s*CONTRA/i.test((el.innerText || '').slice(0, 90));
  function cuidarLuta() {
    if (!ativo || !ocultarLuta || !document.body) return;
    const caixas = document.querySelectorAll('.modal-caixa');
    for (const cx of caixas) {
      if (!cx.offsetParent || !ehJanelaLuta(cx)) continue;
      const fundo = cx.closest('.modal') || cx;
      fundo.style.visibility = 'hidden';            // some na hora, sem piscar
      const x = cx.querySelector('.modal-acoes button') || Array.from(cx.querySelectorAll('button')).find((b) => /^[×✕x]$/i.test((b.textContent || '').trim()));
      if (x) { try { x.click(); } catch (e) { /* ignora */ } }
      setTimeout(() => { try { fundo.style.visibility = ''; } catch (e) { /* ignora */ } }, 600);
    }
  }
  // só olha a tela quando o PvP automático está ligado, e no máximo a cada 150 ms
  let agLuta = false;
  try { new MutationObserver(() => { if (!ativo || !ocultarLuta || agLuta) return; agLuta = true; setTimeout(() => { agLuta = false; cuidarLuta(); }, 150); }).observe(document.documentElement, { childList: true, subtree: true }); } catch (e) { /* ignora */ }
  setInterval(cuidarLuta, 500);

  setInterval(passo, 1000);
  setInterval(() => { if (sujo || Date.now() - ultEmit > 2000) emitir(); }, 500);
})();

/* ===== compra de pokemon (RMT) ===== */
/*
 * PokeIdle Tools by Ateforp - compra de Pokémon no Mercado (RMT) (mundo da página).
 *
 * Duas funções, separadas da compra de itens:
 *   1) Compra automática por filtros (regras): P (potência), IV (soma), Q (qualidade), N (nota), preço máximo,
 *      espécie e shiny. Cada regra pode exigir TODOS os critérios (E) ou QUALQUER UM (OU). O preço máximo
 *      vale sempre. Anúncio que bate numa regra e ainda está em retenção é agendado para o instante da liberação.
 *   2) Compra Imediata: o usuário escolhe um anúncio específico que está em retenção; a extensão acompanha o
 *      tempo e manda o pedido no instante em que ele é liberado.
 *
 * Protocolo observado no jogo (somente o que o jogador já faz pela tela):
 *   lista:    {"t":"market.listar","tipo":"pokemon","moeda":"gold","ordem":"recentes","pagina":0 (a primeira página é 0),"precoMax":"..",...}
 *   resposta: {"t":"market","aba":"vitrine","total":N,"pagina":P,"porPagina":24,"linhas":[ {id, vendedor, pokemonId, qtd,
 *             ficha:{nome,level,shiny,ivTotal,quality,nota,potencia,speciesId,...}, preco, moeda, estado:"aberto",
 *             criadoEm, compravelEm (fim da retenção), expiraEm } ]}
 *   comprar:  {"t":"market.comprar","id":<anuncio>,"qtd":1,"preco":<preco>,"moeda":"gold","sorteioUi":1}
 * Q e N chegam como decimais (1.717 / 3.694) e o painel usa milésimos (1717 / 3694), como na Venda automática.
 * Desligado por padrão. Não tenta contornar o anti-bot: se o jogo pedir verificação, desliga e avisa.
 */
(() => {
  'use strict';
  if (window.__ateforpRmtPoke) return;
  window.__ateforpRmtPoke = true;

  const CH = 'ateforp-rmtpoke';
  const CHAVE = 'ateforp_rmtpoke';
  const BUS = window.__PM_BUS;
  const getWs = () => (BUS && BUS.ws ? BUS.ws() : null);

  const INTERVALO_MIN = 4;            // s entre consultas (o jogo recusa pedidos muito seguidos)
  const COOLDOWN_ANUNCIO = 20000;     // não pede o mesmo anúncio de novo antes disso
  const CONFIRMA_MS = 14000;          // espera pela confirmação da compra
  const RETENTA_MS = 350;             // intervalo entre novas tentativas se o jogo recusar na hora da liberação
  const MAX_TENTATIVAS = 4;
  const REFRESCO_MS = 9000;           // antes da liberação, confere de novo o preço do anúncio escolhido

  // ---------- configuração ----------
  const PADRAO = { intervaloS: 5, antecipaMs: 0, regras: [], renova: [], simular: false };
  let cfg = JSON.parse(JSON.stringify(PADRAO));
  const num = (v) => (v === null || v === '' || v === undefined || !isFinite(Number(v)) ? null : Number(v));
  function normRegra(r) {
    r = r || {};
    return {
      id: String(r.id || 'r' + Date.now().toString(36) + Math.floor(Math.random() * 1000)),
      nome: String(r.nome || '').slice(0, 40),
      ativo: r.ativo !== false,
      especie: String(r.especie || '').slice(0, 40),
      modo: r.modo === 'ou' ? 'ou' : 'e',
      outland: r.outland === 'incluir' || r.outland === 'so' ? r.outland : 'omitir',
      p: num(r.p), iv: num(r.iv), q: num(r.q), n: num(r.n), nivMin: num(r.nivMin), nivMax: num(r.nivMax),
      ivs: { hp: num(r.ivs && r.ivs.hp), atk: num(r.ivs && r.ivs.atk), def: num(r.ivs && r.ivs.def), spAtk: num(r.ivs && r.ivs.spAtk), spDef: num(r.ivs && r.ivs.spDef), speed: num(r.ivs && r.ivs.speed) },
      shiny: !!r.shiny,
      precoMax: Math.max(0, Math.floor(num(r.precoMax) || 0)),
      qtd: Math.max(1, Math.min(999, Math.floor(num(r.qtd) || 1))),
      comprados: Math.max(0, Math.floor(num(r.comprados) || 0))
    };
  }
  function normRen(r) {
    r = r || {};
    const i = (v) => { const n = num(v); return n == null ? 0 : Math.floor(n); };
    return {
      id: i(r.id), nome: String(r.nome || '').slice(0, 40), a: i(r.a), b: i(r.b),
      intervaloMin: Math.max(30, Math.min(1440, i(r.intervaloMin) || 30)), ativo: r.ativo !== false,
      renovacoes: Math.max(0, i(r.renovacoes)), ultima: Math.max(0, i(r.ultima))
    };
  }
  const renValida = (r) => r.ativo && r.id > 0 && r.a >= 2 && r.b >= 2 && r.a !== r.b;
  function normCfg(c) {
    const o = JSON.parse(JSON.stringify(PADRAO));
    c = c || {};
    if (num(c.intervaloS) >= INTERVALO_MIN && num(c.intervaloS) <= 600) o.intervaloS = num(c.intervaloS);
    if (num(c.antecipaMs) >= 0 && num(c.antecipaMs) <= 1000) o.antecipaMs = Math.floor(num(c.antecipaMs));
    if (Array.isArray(c.regras)) o.regras = c.regras.slice(0, 20).map(normRegra);
    if (Array.isArray(c.renova)) o.renova = c.renova.slice(0, 30).map(normRen);
    return o;
  }
  try { const c = JSON.parse(localStorage.getItem(CHAVE) || 'null'); if (c) cfg = normCfg(c); } catch (e) { /* ignora */ }
  const salvar = () => { try { localStorage.setItem(CHAVE, JSON.stringify(cfg)); } catch (e) { /* ignora */ } };

  // ---------- estado ----------
  let ativo = false;                  // sempre desligado depois de recarregar a página
  let lider = true;
  const S = { msg: 'Desligado.', consultas: 0, vistos: 0, pedidos: 0, comprados: 0, falhas: 0, ultConsulta: 0, limites: 0 };
  let hist = [];                      // compras tentadas (guardadas no navegador)
  try { const h = JSON.parse(localStorage.getItem(CHAVE + '_hist') || '[]'); if (Array.isArray(h)) hist = h.slice(0, 100); } catch (e) { /* ignora */ }
  const salvarHist = () => { try { localStorage.setItem(CHAVE + '_hist', JSON.stringify(hist.slice(0, 100))); } catch (e) { /* ignora */ } };
  let logs = [];                      // registro detalhado (guardado no navegador)
  try { const l = JSON.parse(localStorage.getItem(CHAVE + '_log') || '[]'); if (Array.isArray(l)) logs = l.slice(-200); } catch (e) { /* ignora */ }
  let logSujo = false;
  function log(msg, lvl) {
    logs.push({ t: Date.now(), lvl: lvl || 'info', msg: String(msg).slice(0, 400) });
    if (logs.length > 200) logs.shift();
    logSujo = true; sujo = true;
  }
  setInterval(() => { if (logSujo) { logSujo = false; try { localStorage.setItem(CHAVE + '_log', JSON.stringify(logs)); } catch (e) { /* ignora */ } } }, 3000);
  const alvos = new Map();            // id do anúncio -> alvo agendado (Compra Imediata ou regra)
  const simVistos = new Set();
  const tentado = new Map();          // id do anúncio -> quando foi pedido
  let busca = { rows: [], em: 0, carregando: false, total: 0, msg: '' };
  let cons = { rows: [], carregando: false, total: 0, msg: '', em: 0, regra: null, pag: 0, pags: 0, extra: null };
  let fila = [];                      // consultas pendentes da busca da tela
  let rotor = 0;
  let ultReq = 0, penalidade = 0, limitesRec = [];
  let offsetAmostras = [], offset = 0;
  let sujo = true, ultEmit = 0;
  let pendConsulta = null;            // { tipo:'regra'|'busca'|'refresco', em }

  const agora = () => Date.now() + offset;       // relógio do servidor
  const eng = () => (window.__pokeAuto && window.__pokeAuto.S) || null;
  const milesimos = (v) => Math.round((Number(v) || 0) * 1000);
  const nomeNorm = (n) => String(n || '').toLowerCase().replace(/[-_]/g, ' ').trim();
  const fmtN = (n) => Number(n || 0).toLocaleString('pt-BR');

  function ln(l) {
    const f = l.ficha || {};
    return {
      id: l.id, pokemonId: l.pokemonId, nome: f.nome || '?', level: f.level || 0, shiny: !!f.shiny, speciesId: f.speciesId || 0,
      vendedor: l.vendedor || '', preco: Number(l.preco) || 0, moeda: l.moeda || 'gold', estado: l.estado || '',
      compravelEm: Number(l.compravelEm) || 0, expiraEm: Number(l.expiraEm) || 0, criadoEm: Number(l.criadoEm) || 0,
      ivs: { hp: Number(f.ivs && f.ivs.hp), atk: Number(f.ivs && f.ivs.atk), def: Number(f.ivs && f.ivs.def), spAtk: Number(f.ivs && f.ivs.spAtk), spDef: Number(f.ivs && f.ivs.spDef), speed: Number(f.ivs && f.ivs.speed) },
      p: Number(f.potencia) || 0, iv: Number(f.ivTotal) || 0, q: milesimos(f.quality), n: milesimos(f.nota)
    };
  }

  const ordemOk = (v) => (v === 'baratos' || v === 'caros' ? v : 'recentes');
  const IMED = { ativo: false, limite: 5, comprados: 0 };

  // ---------- regras ----------
  const IVS = ['hp', 'atk', 'def', 'spAtk', 'spDef', 'speed'];
  const temFiltro = (r) => IVS.some((k) => r.ivs && r.ivs[k] != null) || r.p != null || r.iv != null || r.q != null || r.n != null || !!r.especie || r.shiny;
  const regraValida = (r) => r.ativo && r.precoMax > 0 && temFiltro(r) && r.comprados < r.qtd;
  function casa(r, a) {
    if (a.moeda !== 'gold' || a.preco <= 0 || a.preco > r.precoMax) return false;
    if (r.especie && nomeNorm(a.nome).indexOf(nomeNorm(r.especie)) === -1) return false;
    if (r.shiny && !a.shiny) return false;
    if (r.nivMin != null && !(a.level >= r.nivMin)) return false;
    if (r.nivMax != null && !(a.level <= r.nivMax)) return false;
    if (r.outland === 'so' && a.speciesId < 2001) return false;
    if (r.outland === 'omitir' && a.speciesId >= 2001) return false;
    const testes = [];
    if (r.p != null) testes.push(a.p >= r.p);
    if (r.iv != null) testes.push(a.iv >= r.iv);
    if (r.q != null) testes.push(a.q >= r.q);
    if (r.n != null) testes.push(a.n >= r.n);
    for (const k of IVS) if (r.ivs && r.ivs[k] != null) testes.push(a.ivs && a.ivs[k] >= r.ivs[k]);
    if (!testes.length) return true;
    return r.modo === 'ou' ? testes.some(Boolean) : testes.every(Boolean);
  }
  const resumoRegra = (r) => (r.nome || r.especie || 'regra') + ' ≤ ' + fmtN(r.precoMax);

  // ---------- envio ----------
  function enviar(obj) {
    const ws = getWs();
    if (!ws || ws.readyState !== 1) return false;
    try { Object.getPrototypeOf(ws).send.call(ws, JSON.stringify(obj)); return true; } catch (e) { return false; }
  }
  function podeConsultar(usuario) {
    const e = eng();
    if (usuario) { // busca pedida na tela: respeita só o meu intervalo e uma folga curta após o motor de itens
      const agoraMs = Date.now();
      return agoraMs - ultReq >= INTERVALO_MIN * 1000 + penalidade && agoraMs - (e ? e.lastReq || 0 : 0) >= 1200;
    }
    const base = Math.max(INTERVALO_MIN, cfg.intervaloS) * 1000;
    const ult = Math.max(ultReq, e ? e.lastReq || 0 : 0);
    const pen = penalidade + (e ? e.penalty || 0 : 0);
    return Date.now() - ult >= base + pen;
  }
  function marcarReq() { ultReq = Date.now(); const e = eng(); if (e) e.lastReq = ultReq; }
  function pedidoLista(extra) {
    return Object.assign({
      t: 'market.listar', tipo: 'pokemon', moeda: 'gold', busca: '', ordem: 'recentes', criterios: [], elementos: [], tiposUnidos: true,
      categoria: '', soShiny: false, soP5: false, soMega: false, soLendario: false, soTmElemental: false, soTmAoe: false, semOutland: true,
      nivelMin: '', nivelMax: '', potenciaMin: '', potenciaMax: '', qualidadeMin: '', qualidadeMax: '', notaMin: '', notaMax: '',
      precoMin: '', precoMax: '', ivHpMin: '', ivHpMax: '', ivAtkMin: '', ivAtkMax: '', ivDefMin: '', ivDefMax: '', ivSpAtkMin: '', ivSpAtkMax: '',
      ivSpDefMin: '', ivSpDefMax: '', ivSpdMin: '', ivSpdMax: '', pagina: 0, especieId: 0
    }, extra || {});
  }

  // ---------- registro de compras ----------
  function registrar(a, status, motivo) {
    const x = { em: Date.now(), id: a.id, nome: a.nome, level: a.level, preco: a.preco, vendedor: a.vendedor, origem: a.origem, regra: a.regraNome || '', status, motivo: motivo || '', p: a.p, iv: a.iv, q: a.q, n: a.n, shiny: !!a.shiny };
    hist.unshift(x); hist = hist.slice(0, 100); salvarHist(); sujo = true;
    return x;
  }

  // ---------- compra ----------
  const emVoo = new Map();            // id -> { alvo, em, tentativas, reg }
  function dispararCompra(alvo, motivo) {
    if (!ativoOuImediata(alvo)) return;
    const ja = emVoo.get(alvo.id);
    const tent = ja ? ja.tentativas + 1 : 1;
    if (!enviar({ t: 'market.comprar', id: alvo.id, qtd: 1, preco: alvo.preco, moeda: 'gold', sorteioUi: 1 })) {
      alvo.status = 'erro'; alvo.msg = 'sem conexão com o jogo'; sujo = true; return;
    }
    marcarReq();
    S.pedidos++;
    tentado.set(alvo.id, Date.now());
    const reg = ja ? ja.reg : registrar(alvo, 'pendente', 'pedido enviado' + (motivo ? ' (' + motivo + ')' : ''));
    emVoo.set(alvo.id, { alvo, em: Date.now(), tentativas: tent, reg });
    log('Pedido de compra enviado: ' + alvo.nome + ' Nv ' + alvo.level + ' (anúncio ' + alvo.id + ') por ' + fmtN(alvo.preco) + ' — ' + (alvo.origem === 'regra' ? 'regra ' + (alvo.regraNome || '') : 'Compra Imediata') + (tent > 1 ? ', tentativa ' + tent : '') + (motivo ? ' [' + motivo + ']' : ''), 'info');
    alvo.status = 'pedido'; alvo.msg = 'pedido enviado' + (tent > 1 ? ' (tentativa ' + tent + ')' : '') + ', aguardando o resultado';
    alvo.enviadoEm = Date.now();
    sujo = true;
  }
  const ativoOuImediata = (alvo) => alvo.origem === 'imediata' || ativo;

  function resolver(id, status, motivo) {
    const v = emVoo.get(id);
    if (!v) return;
    emVoo.delete(id);
    v.reg.status = status; v.reg.motivo = motivo || ''; v.reg.ms = Date.now() - v.reg.em;
    log((status === 'comprado' ? 'COMPRADO: ' : 'Compra não concluída: ') + v.alvo.nome + ' Nv ' + v.alvo.level + ' (anúncio ' + id + ') — ' + (motivo || status), status === 'comprado' ? 'ok' : 'erro');
    const a = v.alvo;
    a.status = status === 'comprado' ? 'comprado' : 'falhou'; a.msg = motivo || (status === 'comprado' ? 'comprado!' : '');
    if (status === 'comprado') {
      S.comprados++; if (a.origem === 'imediata') IMED.comprados++;
      if (a.regraId) { const r = cfg.regras.find((x) => x.id === a.regraId); if (r) { r.comprados++; salvar(); } }
    } else S.falhas++;
    salvarHist(); sujo = true;
  }

  // ---------- agendamento (retenção) ----------
  function agendar(a, origem, extra) {
    if (alvos.has(a.id)) return alvos.get(a.id);
    const alvo = Object.assign({}, a, extra || {}, { origem, status: 'agendado', msg: '', refrescado: false, criadoLocal: Date.now() });
    alvo.precoMax = alvo.precoMax > 0 ? alvo.precoMax : a.preco;
    alvos.set(alvo.id, alvo); sujo = true;
    log((origem === 'regra' ? 'Regra ' + (alvo.regraNome || '') + ' bateu: ' : 'Compra Imediata armada: ') + alvo.nome + ' Nv ' + alvo.level + ' P' + alvo.p + ' IV ' + alvo.iv + (alvo.ivs ? ' [' + IVS.map((k) => alvo.ivs[k]).join('/') + ']' : '') + ' Q ' + alvo.q + ' N ' + alvo.n + ' — ' + fmtN(alvo.preco) + ' (máx. ' + fmtN(alvo.precoMax) + ') de ' + (alvo.vendedor || '?') + (alvo.compravelEm - agora() > 0 ? '; libera em ' + Math.round((alvo.compravelEm - agora()) / 1000) + ' s' : '; já liberado'), 'info');
    return alvo;
  }
  function pump() {
    const t = agora();
    for (const alvo of alvos.values()) {
      if (alvo.status === 'agendado') {
        if (alvo.estado && alvo.estado !== 'aberto') { alvo.status = 'falhou'; alvo.msg = 'anúncio não está mais aberto'; log('Cancelado ' + alvo.nome + ' (anúncio ' + alvo.id + '): não está mais aberto (' + alvo.estado + ')', 'erro'); sujo = true; continue; }
        const falta = alvo.compravelEm - t;
        if (alvo.origem === 'imediata' && !IMED.ativo) { if (alvo.msg !== 'Compra Imediata desligada: não vou comprar') { alvo.msg = 'Compra Imediata desligada: não vou comprar'; sujo = true; } continue; }
        if (alvo.origem === 'imediata' && IMED.comprados >= IMED.limite) { alvo.status = 'falhou'; alvo.msg = 'limite de ' + IMED.limite + ' compra(s) atingido'; log('Cancelado ' + alvo.nome + ' (anúncio ' + alvo.id + '): ' + alvo.msg, 'info'); sujo = true; continue; }
        if (falta <= cfg.antecipaMs) {
          if (alvo.preco > alvo.precoMax) { alvo.status = 'falhou'; alvo.msg = 'preço subiu acima do máximo (' + fmtN(alvo.preco) + ')'; log('Cancelado ' + alvo.nome + ' (anúncio ' + alvo.id + '): ' + alvo.msg, 'erro'); sujo = true; continue; }
          dispararCompra(alvo, falta > 0 ? 'liberação em ' + Math.max(0, Math.round(falta)) + ' ms' : 'liberado');
        } else if (!alvo.refrescado && falta <= REFRESCO_MS && podeConsultar() && getWs() && getWs().readyState === 1) {
          alvo.refrescado = true;
          if (enviar(pedidoLista({ busca: alvo.nome, precoMax: String(alvo.precoMax) }))) { marcarReq(); pendConsulta = { tipo: 'refresco', em: Date.now() }; S.consultas++; }
        }
      } else if (alvo.status === 'pedido') {
        const v = emVoo.get(alvo.id);
        if (v && Date.now() - v.em > CONFIRMA_MS) resolver(alvo.id, 'sem-confirmacao', 'sem confirmação: outro jogador pode ter levado, ou o anúncio saiu do ar');
      }
    }
    // limpeza
    for (const [id, a] of alvos) if ((a.status === 'comprado' || a.status === 'falhou') && Date.now() - (a.enviadoEm || a.criadoLocal) > 120000) { alvos.delete(id); sujo = true; }
  }

  // ---------- quadros do jogo ----------
  function tratarLista(m) {
    const linhas = (m.linhas || []).filter((l) => l && l.ficha && l.pokemonId != null && l.tipo !== 'item').map(ln);
    S.vistos += linhas.length; S.ultConsulta = Date.now();
    if (pendConsulta && pendConsulta.tipo === 'busca') log('Busca: ' + linhas.length + ' anúncio(s) na página ' + (m.pagina || '?') + ' (total ' + (m.total || 0) + ')', 'info');
    if (penalidade > 0) penalidade = Math.max(0, penalidade - 500);
    const t = agora();
    // atualiza os anúncios já agendados (o vendedor pode ter mexido no preço)
    for (const a of linhas) {
      const alvo = alvos.get(a.id);
      if (alvo && alvo.status === 'agendado') {
        if (alvo.preco !== a.preco) { alvo.msg = 'preço mudou: ' + fmtN(alvo.preco) + ' → ' + fmtN(a.preco); log('Preço mudou no anúncio ' + a.id + ' (' + alvo.nome + '): ' + fmtN(alvo.preco) + ' → ' + fmtN(a.preco) + (a.preco > alvo.precoMax ? ' — acima do máximo, não vou comprar' : ''), 'erro'); alvo.preco = a.preco; sujo = true; }
        alvo.compravelEm = a.compravelEm || alvo.compravelEm; alvo.estado = a.estado;
      }
    }
    // consulta de disponibilidade (aba Consulta): lista tudo que bate nos filtros, sem comprar
    if (pendConsulta && pendConsulta.tipo === 'cons' && Date.now() - pendConsulta.em < 10000 && (m.ordem === undefined || m.ordem === cons.extra.ordem) && (m.pagina === undefined || Number(m.pagina) === cons.pag - 1)) {
      pendConsulta = null; cons.tent = 0;
      const ids = new Set(cons.rows.map((r) => r.id));
      for (const a of linhas) if (a.estado === 'aberto' && !ids.has(a.id) && casa(cons.regra, a)) cons.rows.push(a);
      cons.total += linhas.length;
      if (cons.extra.ordem === 'caros') cons.rows.sort((x, y) => y.preco - x.preco); else if (cons.extra.ordem === 'baratos') cons.rows.sort((x, y) => x.preco - y.preco);
      const cheio = cons.rows.length >= cons.limite; if (cheio) cons.rows.length = cons.limite;
      const tot = Number(m.total) || 0, pp = Number(m.porPagina) || 24;
      if (!cheio && cons.pag < cons.pags && cons.pag * pp < tot && linhas.length) cons.msg = 'Consultando… página ' + cons.pag + ' · ' + cons.rows.length + ' encontrado(s).';
      else { cons.carregando = false; cons.msg = !cons.rows.length ? (tot === 0 ? 'Nenhum Pokémon disponível com esses filtros no mercado agora.' : 'Nenhum Pokémon disponível com esses filtros (olhei ' + cons.total + ' anúncios' + (tot > cons.total ? ' de ' + tot : '') + ').') : cons.rows.length + ' Pokémon encontrado(s)' + (cheio ? ' (parei no limite de ' + cons.limite + ')' : '') + ' · ' + cons.total + ' anúncios vistos' + (tot > cons.total ? ' de ' + tot : '') + '.'; log('Consulta concluída: ' + cons.msg, 'info'); }
      sujo = true; return;
    }
    // resultados da busca da tela
    if (pendConsulta && pendConsulta.tipo === 'busca' && Date.now() - pendConsulta.em < 8000) {
      pendConsulta = null;
      const ret = linhas.filter((a) => a.estado === 'aberto' && a.compravelEm > t && !(busca.outland === 'so' && a.speciesId < 2001) && !(busca.outland === 'omitir' && a.speciesId >= 2001));
      const ids = new Set(busca.rows.map((r) => r.id));
      for (const a of ret) if (!ids.has(a.id) && busca.rows.length < busca.limite) busca.rows.push(a);
      if (busca.rows.length >= busca.limite) fila = [];
      busca.total = (busca.total || 0) + linhas.length;
      if (fila.length) busca.msg = 'Buscando… ' + busca.rows.length + ' em retenção até agora.';
      else { busca.carregando = false; busca.em = Date.now(); busca.msg = busca.rows.length ? busca.rows.length + ' anúncio(s) em retenção (de ' + busca.total + ' vistos).' : 'Nenhum anúncio em retenção nas páginas olhadas (' + busca.total + ' vistos).'; }
    } else if (pendConsulta && pendConsulta.tipo === 'regra' && Date.now() - pendConsulta.em < 8000) pendConsulta = null;
    else if (pendConsulta && pendConsulta.tipo === 'refresco' && Date.now() - pendConsulta.em < 8000) pendConsulta = null;
    // compra automática por regras
    if (ativo && lider) {
      for (const a of linhas) {
        if (a.estado !== 'aberto' || alvos.has(a.id) || (tentado.get(a.id) || 0) > Date.now() - COOLDOWN_ANUNCIO || simVistos.has(a.id)) continue;
        const r = cfg.regras.find((x) => regraValida(x) && casa(x, a));
        if (!r) continue;
        const pendentes = [...alvos.values()].filter((x) => x.regraId === r.id && (x.status === 'agendado' || x.status === 'pedido')).length;
        if (r.comprados + pendentes >= r.qtd) continue;
        if (cfg.simular) {
          simVistos.add(a.id);
          log('SIMULAÇÃO (não comprei): a regra ' + (r.nome || r.especie || 'sem nome') + ' compraria ' + a.nome + ' Nv ' + a.level + ' P' + a.p + ' IV ' + a.iv + ' [' + IVS.map((k) => a.ivs[k]).join('/') + '] Q ' + a.q + ' N ' + a.n + ' por ' + fmtN(a.preco) + ' (máx. ' + fmtN(r.precoMax) + ')', 'ok');
          S.simulados = (S.simulados || 0) + 1; S.msg = 'SIMULAÇÃO: acharia ' + a.nome + ' por ' + fmtN(a.preco) + ' (nada foi comprado)'; sujo = true; continue;
        }
        const alvo = agendar(a, 'regra', { regraId: r.id, regraNome: r.nome || r.especie || 'regra', precoMax: r.precoMax });
        alvo.msg = a.compravelEm > t ? 'bateu na regra; compra na liberação' : 'bateu na regra';
        S.msg = 'Achei: ' + a.nome + ' Nv ' + a.level + ' por ' + fmtN(a.preco) + ' (' + resumoRegra(r) + ')';
      }
    }
    sujo = true;
  }

  function aoMensagem(d) {
    if (typeof d !== 'string') return;
    // relógio do servidor
    const mo = d.length < 400000 && d.indexOf('servidorAgora') !== -1 ? /"servidorAgora":(\d+)/.exec(d) : null;
    if (mo) { offsetAmostras.push(Number(mo[1]) - Date.now()); if (offsetAmostras.length > 12) offsetAmostras.shift(); offset = Math.max.apply(null, offsetAmostras); }
    if (d.charCodeAt(0) !== 123) return;
    const m6 = d.slice(0, 24);
    if (m6.indexOf('"t":"market"') === 1 || d.indexOf('"t":"market"') === 1) {
      if (/turnstile|captcha/i.test(d)) { ativo = false; S.msg = 'O jogo pediu verificação (anti-bot). Compra automática DESLIGADA — resolva no jogo e ligue de novo.'; log(S.msg, 'erro'); sujo = true; return; }
      if (d.indexOf('"aba":"meus"') !== -1) { try { aoMeus(JSON.parse(d)); } catch (e) { /* ignora */ } return; }
      if (d.indexOf('"linhas"') !== -1 && (d.indexOf('"pokemonId"') !== -1 || d.indexOf('"linhas":[]') !== -1)) { try { tratarLista(JSON.parse(d)); } catch (e) { /* ignora */ } }
      else if (emVoo.size) for (const v of emVoo.values()) { if (d.indexOf(String(v.alvo.id)) !== -1) v.alvo.frame = d.slice(0, 200); }
      return;
    }
    if (ren.voo.size && (d.indexOf('"t":"erro"') === 1 || /"t":"erro"/.test(d.slice(0, 40))) && !/devagar|muitas mensagens/i.test(d)) renErro(d);
    if (emVoo.size) {
      // confirmação: o Pokémon comprado aparece no estado do jogador
      if (d.indexOf('"estado"') !== -1 || d.indexOf('"pkMud"') !== -1 || d.indexOf('"pokemons"') !== -1) {
        for (const [id, v] of emVoo) {
          const pid = v.alvo.pokemonId;
          if (pid != null && (d.indexOf('"id":' + pid + ',') !== -1 || d.indexOf('"id":' + pid + '}') !== -1) && Date.now() - v.em > 80) { resolver(id, 'comprado', 'o Pokémon entrou na sua conta'); }
        }
      }
      if (/"t":"erro"|"erro":/.test(d.slice(0, 40)) || d.indexOf('"t":"erro"') === 1) {
        if (/devagar|muitas mensagens/i.test(d)) { aoLimite(); return; }
        let txt = d.slice(0, 160); try { const j = JSON.parse(d); txt = j.msg || j.erro || j.mensagem || txt; } catch (e) { /* ignora */ }
        log('Jogo respondeu erro: ' + String(txt).slice(0, 200), 'erro');
        // o erro é do pedido de compra mais recente
        let ult = null; for (const v of emVoo.values()) if (!ult || v.em > ult.em) ult = v;
        if (ult && Date.now() - ult.em < 5000) {
          const a = ult.alvo;
          const cedo = /ret|libera|aguard|cedo|ainda|espera|dispon/i.test(String(txt)) && !/vendid|inexist|n[aã]o encontr|indispon/i.test(String(txt));
          if (cedo && ult.tentativas < MAX_TENTATIVAS && a.compravelEm - agora() < 5000) {
            a.msg = 'o jogo recusou (' + String(txt).slice(0, 80) + '); tentando de novo…'; ult.reg.motivo = a.msg;
            ult.em = Date.now() + RETENTA_MS; log('Recusado por estar cedo; nova tentativa em ' + RETENTA_MS + ' ms', 'info');
            setTimeout(() => { const v = emVoo.get(a.id); if (v) { dispararCompra(a, 'nova tentativa'); } }, RETENTA_MS);
          } else resolver(a.id, 'recusado', 'o jogo recusou: ' + String(txt).slice(0, 140));
        }
      }
    }
  }
  function aoLimite() {
    S.limites++; limitesRec = limitesRec.filter((t) => Date.now() - t < 60000); limitesRec.push(Date.now());
    penalidade = Math.min(15000, penalidade + 2000); ultReq = Date.now();
    if (cons.carregando && pendConsulta && pendConsulta.tipo === 'cons') { pendConsulta = null; cons.pag = Math.max(0, cons.pag - 1); }
    S.msg = 'O jogo avisou "Devagar aí". Aumentei o intervalo em ' + (penalidade / 1000) + ' s.'; log(S.msg, 'erro');
    if (limitesRec.length >= 6 && ativo) { ativo = false; S.msg = 'O jogo avisou 6 vezes em 1 minuto. Compra de Pokémon DESLIGADA por segurança — aumente o intervalo e ligue de novo.'; }
    sujo = true;
  }

  // filtros que o próprio servidor aplica (como no front-end do jogo): evita varrer páginas inteiras.
  // Só valem no modo "todos os critérios (E)"; a conferência final continua sendo feita aqui (casa).
  function filtrosServidor(r) {
    const x = {};
    if (r.modo !== 'ou') {
      if (r.p != null && r.p > 0) x.potenciaMin = String(Math.floor(r.p));
      const mp = { hp: 'ivHpMin', atk: 'ivAtkMin', def: 'ivDefMin', spAtk: 'ivSpAtkMin', spDef: 'ivSpDefMin', speed: 'ivSpdMin' };
      for (const k of IVS) if (r.ivs && r.ivs[k] != null && r.ivs[k] > 0) x[mp[k]] = String(Math.floor(r.ivs[k]));
    }
    if (r.nivMin != null) x.nivelMin = String(r.nivMin);
    if (r.nivMax != null) x.nivelMax = String(r.nivMax);
    return x;
  }
  // ---------- laço principal ----------
  function consultaRegra() {
    const regras = cfg.regras.filter(regraValida);
    if (!regras.length) return false;
    const r = regras[rotor % regras.length]; rotor++;
    const extra = { precoMax: String(r.precoMax) };
    if (r.shiny) extra.soShiny = true;
    Object.assign(extra, filtrosServidor(r));
    extra.semOutland = r.outland === 'omitir';
    if (r.especie) extra.busca = r.especie;
    if (!enviar(pedidoLista(extra))) return false;
    marcarReq(); S.consultas++; pendConsulta = { tipo: 'regra', em: Date.now() };
    return true;
  }
  function tick() {
    const ws = getWs(); const aberto = !!(ws && ws.readyState === 1);
    pump(); renTick();
    if (busca.carregando && !fila.length && (!pendConsulta || pendConsulta.tipo !== 'busca' || Date.now() - pendConsulta.em > 10000)) { busca.carregando = false; busca.msg = busca.rows.length + ' anúncio(s) em retenção (algumas páginas não responderam).'; pendConsulta = null; sujo = true; }
    if (cons.carregando && !fila.length && pendConsulta && pendConsulta.tipo === 'cons' && Date.now() - pendConsulta.em > 10000) {
      pendConsulta = null; cons.tent = (cons.tent || 0) + 1;
      if (cons.tent <= 3) { cons.pag--; cons.msg = 'A página ' + (cons.pag + 1) + ' demorou; tentando de novo (' + cons.tent + '/3)…'; log('Consulta: sem resposta da página ' + (cons.pag + 1) + ', tentando de novo (' + cons.tent + '/3)', 'info'); }
      else { cons.carregando = false; cons.msg = 'O jogo não respondeu à consulta (página ' + (cons.pag + 1) + '). Tente de novo em instantes; se persistir, veja o Registro.'; log(cons.msg, 'erro'); }
      sujo = true;
    }
    if (aberto && lider && cons.carregando && !fila.length && !pendConsulta && cons.pag < cons.pags && podeConsultar(true)) {
      cons.pag++;
      if (enviar(pedidoLista(Object.assign({}, cons.extra, { pagina: cons.pag - 1 })))) { marcarReq(); S.consultas++; pendConsulta = { tipo: 'cons', em: Date.now() }; } else cons.pag--;
    } else if (aberto && lider && fila.length && podeConsultar(true)) {
      const q = fila.shift();
      if (enviar(q)) { marcarReq(); S.consultas++; pendConsulta = { tipo: 'busca', em: Date.now() }; }
    } else if (aberto && lider && podeConsultar()) {
      if (fila.length) {
        const q = fila.shift();
        if (enviar(q)) { marcarReq(); S.consultas++; pendConsulta = { tipo: 'busca', em: Date.now() }; }
      } else if (ativo) {
        const ocupado = [...alvos.values()].some((a) => a.status === 'agendado' && a.compravelEm - agora() < 3000);
        if (!ocupado) consultaRegra();
      }
    }
    if (ativo && !cfg.regras.some(regraValida)) S.msg = 'Ligado, mas nenhuma regra válida (precisa de preço máximo e de pelo menos um filtro).';
    else if (ativo && !aberto) S.msg = 'Sem conexão com o jogo.';
    else if (ativo && S.msg.indexOf('Achei') !== 0 && S.msg.indexOf('Devagar') === -1 && S.msg.indexOf('avisou') === -1) S.msg = 'Procurando… ' + cfg.regras.filter(regraValida).length + ' regra(s) ativa(s).';
    if (Date.now() - ultEmit > 2000) sujo = true;
    if (sujo && Date.now() - ultEmit > 400) emitir();
  }

  // ---------- renovação automática de anúncios (Meus anúncios) ----------
  // O jogo só deixa mudar o preço de novo 30 min depois; a edição leva o anúncio ao topo dos recentes.
  const ren = { ativo: false, meus: [], em: 0, pend: 0, forcar: false, msg: 'Desligada.', voo: new Map(), renovadas: 0 };
  function aoMeus(m) {
    ren.pend = 0; ren.em = Date.now();
    const linhas = (m.linhas || []).filter((l) => l && l.tipo === 'pokemon').map((l) => Object.assign(ln(l), { editavelEm: Number(l.editavelEm) || 0, qtd: l.qtd || 1 }));
    ren.meus = linhas;
    const ids = new Set(linhas.map((l) => l.id));
    // confirmações e anúncios que sumiram
    for (const [id, v] of [...ren.voo]) {
      const l = linhas.find((x) => x.id === id);
      if (l && l.preco === v.preco) {
        ren.voo.delete(id);
        const r = cfg.renova.find((x) => x.id === id);
        if (r) { r.renovacoes++; r.ultima = Date.now(); salvar(); }
        ren.renovadas++;
        log('Anúncio renovado: ' + l.nome + ' Nv ' + l.level + ' (' + id + ') agora por ' + fmtN(l.preco) + (r ? ' · renovações: ' + r.renovacoes : ''), 'ok');
      }
    }
    for (const r of cfg.renova) {
      if (r.ativo && r.id && !ids.has(r.id) && !r.sumiu) { r.sumiu = true; log('Anúncio ' + (r.nome || r.id) + ' não está mais em "Meus anúncios" (vendido, removido ou expirou). Renovação encerrada para ele.', 'info'); }
    }
    sujo = true;
  }
  function renTick() {
    if (!ren.ativo || !lider) return;
    const ws = getWs(); if (!ws || ws.readyState !== 1) { ren.msg = 'Sem conexão com o jogo.'; return; }
    const regras = cfg.renova.filter((r) => renValida(r) && !r.sumiu);
    if (!regras.length) { ren.msg = 'Ligada, mas nenhum anúncio configurado (precisa de Preço A e Preço B diferentes, mínimo 2).'; return; }
    const agoraSrv = agora();
    // 1) renova o que já pode
    for (const r of regras) {
      const l = ren.meus.find((x) => x.id === r.id);
      if (!l || l.estado !== 'aberto') continue;
      const v = ren.voo.get(r.id);
      if (v && Date.now() - v.em < 25000) continue;
      const devido = Math.max(l.editavelEm, (l.criadoEm || 0) + r.intervaloMin * 60000) + 1500;
      if (agoraSrv < devido) continue;
      if (!podeConsultar(true)) continue;
      const alvoPreco = l.preco === r.a ? r.b : r.a;
      if (alvoPreco < 2) continue;
      if (enviar({ t: 'market.editar', id: r.id, preco: alvoPreco, moeda: l.moeda || 'gold' })) {
        marcarReq(); ren.voo.set(r.id, { em: Date.now(), preco: alvoPreco });
        log('Renovando ' + l.nome + ' Nv ' + l.level + ' (' + r.id + '): ' + fmtN(l.preco) + ' → ' + fmtN(alvoPreco), 'info');
        ren.em = 0; // pede a lista de novo logo em seguida para confirmar
        return;
      }
    }
    // 2) mantém a lista de anúncios atualizada
    const proximo = regras.map((r) => { const l = ren.meus.find((x) => x.id === r.id); return l ? Math.max(l.editavelEm, (l.criadoEm || 0) + r.intervaloMin * 60000) - agoraSrv : 0; });
    const urgente = ren.voo.size > 0 || proximo.some((p) => p <= 0 && !ren.meus.length);
    const espera = ren.forcar || urgente ? 3000 : 60000;
    if (!ren.pend && Date.now() - ren.em >= espera && podeConsultar(true)) {
      if (enviar({ t: 'market.meus' })) { marcarReq(); ren.pend = Date.now(); ren.forcar = false; }
    } else if (ren.pend && Date.now() - ren.pend > 12000) ren.pend = 0;
    const minP = Math.min.apply(null, proximo.concat([Infinity]));
    ren.msg = ren.meus.length ? 'Ligada · próxima renovação em ' + (minP <= 0 ? 'instantes' : Math.ceil(minP / 60000) + ' min') + ' · renovados: ' + ren.renovadas : 'Ligada · carregando seus anúncios…';
  }
  function renErro(d) {
    if (!ren.voo.size) return false;
    let txt = d.slice(0, 160); try { const j = JSON.parse(d); txt = j.msg || j.erro || j.mensagem || txt; } catch (e) { /* ignora */ }
    let ult = null; for (const [id, v] of ren.voo) if (!ult || v.em > ult.v.em) ult = { id, v };
    if (!ult || Date.now() - ult.v.em > 8000) return false;
    ren.voo.delete(ult.id);
    log('O jogo recusou a renovação do anúncio ' + ult.id + ': ' + String(txt).slice(0, 200), 'erro');
    ren.em = 0; ren.forcar = true;
    return true;
  }

  // ---------- painel ----------
  function emitir() {
    sujo = false; ultEmit = Date.now();
    window.postMessage({
      ch: CH, from: 'rmtpoke', type: 'state', state: {
        ativo, lider, conectado: !!(getWs() && getWs().readyState === 1), offset, cfg, msg: S.msg, stats: S,
        hist: hist.slice(0, 40), log: logs.slice(-80), busca, imed: { ativo: IMED.ativo, limite: IMED.limite, comprados: IMED.comprados }, ren: { ativo: ren.ativo, msg: ren.msg, em: ren.em, meus: ren.meus.slice(0, 60), renovadas: ren.renovadas }, cons: { rows: cons.rows.slice(0, 150), carregando: cons.carregando, msg: cons.msg, total: cons.total },
        alvos: [...alvos.values()].map((a) => ({ id: a.id, nome: a.nome, level: a.level, shiny: a.shiny, vendedor: a.vendedor, preco: a.preco, precoMax: a.precoMax, compravelEm: a.compravelEm, p: a.p, iv: a.iv, q: a.q, n: a.n, origem: a.origem, regraNome: a.regraNome || '', status: a.status, msg: a.msg || '' }))
      }
    }, '*');
  }
  function consultar(o) {
    o = o || {};
    if (cons.carregando) return;
    const r = normRegra(Object.assign({}, o, { id: 'consulta', ativo: true, qtd: 1 }));
    r.precoMax = r.precoMax > 0 ? r.precoMax : 1e15;
    const extra = {};
    if (r.especie) extra.busca = r.especie;
    if (r.precoMax < 1e15) extra.precoMax = String(r.precoMax);
    if (r.shiny) extra.soShiny = true;
    Object.assign(extra, filtrosServidor(r));
    extra.semOutland = r.outland === 'omitir'; extra.ordem = ordemOk(o.ordem);
    cons = { rows: [], carregando: true, total: 0, msg: 'Consultando…', em: Date.now(), regra: r, pag: 0, pags: Math.max(1, Math.min(40, Math.floor(num(o.paginas) || 10))), limite: Math.max(1, Math.min(500, Math.floor(num(o.limite) || 20))), extra };
    pendConsulta = null; fila = [];
    log('Consulta iniciada: ' + (r.especie || 'todas as espécies') + (r.precoMax < 1e15 ? ' até ' + fmtN(r.precoMax) : '') + ', até ' + cons.pags + ' página(s)', 'info');
    sujo = true;
  }
  function buscar(o) {
    o = o || {};
    if (busca.carregando) return;
    busca = { rows: [], em: Date.now(), carregando: true, total: 0, msg: 'Buscando…' };
    busca.limite = Math.max(1, Math.min(100, Math.floor(num(o.limite) || 5))); IMED.comprados = 0; IMED.limite = busca.limite;
    fila = []; busca.outland = o.outland === 'incluir' || o.outland === 'so' ? o.outland : 'omitir';
    const pags = Math.max(1, Math.min(4, Math.floor(num(o.paginas) || 2)));
    for (let p = 0; p < pags; p++) {
      const extra = { pagina: p };
      if (o.nome) extra.busca = String(o.nome).slice(0, 40);
      if (num(o.precoMax) > 0) extra.precoMax = String(Math.floor(num(o.precoMax)));
      extra.semOutland = o.outland !== 'incluir' && o.outland !== 'so'; extra.ordem = ordemOk(o.ordem);
      fila.push(pedidoLista(extra));
    }
    sujo = true;
  }
  window.addEventListener('message', (ev) => {
    const m = ev.data;
    if (ev.source !== window || !m || m.ch !== CH || m.from !== 'ui') return;
    if (m.type === 'hello') { sujo = true; }
    else if (m.type === 'ativo') {
      ativo = !!m.value; S.msg = ativo ? 'Ligado.' : 'Desligado.'; log(ativo ? 'Compra automática de Pokémon LIGADA (' + cfg.regras.filter(regraValida).length + ' regra(s) válida(s))' : 'Compra automática de Pokémon desligada', 'info'); if (ativo) ultReq = 0; sujo = true;
    } else if (m.type === 'cfg') {
      { const rv = cfg.renova, sm = cfg.simular; cfg = normCfg(m.cfg); if (!m.cfg || !Array.isArray(m.cfg.renova)) cfg.renova = rv; if (!m.cfg || m.cfg.simular === undefined) cfg.simular = sm; }
      // preserva a contagem de comprados que a tela não conhece
      salvar(); sujo = true;
    } else if (m.type === 'zerar-contagens') { cfg.regras.forEach((r) => { r.comprados = 0; }); salvar(); sujo = true; }
    else if (m.type === 'buscar') buscar(m);
    else if (m.type === 'consultar') consultar(m.filtros);
    else if (m.type === 'imed-ativo') { IMED.ativo = !!m.value; if (num(m.limite) > 0) IMED.limite = Math.floor(num(m.limite)); log(IMED.ativo ? 'Compra Imediata LIGADA (até ' + IMED.limite + ' compra(s))' : 'Compra Imediata desligada', 'info'); sujo = true; }
    else if (m.type === 'imed-limite') { if (num(m.limite) > 0) IMED.limite = Math.floor(num(m.limite)); sujo = true; }
    else if (m.type === 'simular') { /* modo simulação removido */ }
    else if (m.type === 'simular-antigo') { cfg.simular = !!m.value; salvar(); log(cfg.simular ? 'Modo SIMULAÇÃO ligado: as regras só avisam, não compram' : 'Modo SIMULAÇÃO desligado: as regras COMPRAM de verdade', 'info'); sujo = true; }
    else if (m.type === 'ren-ativo') { ren.ativo = !!m.value; ren.msg = ren.ativo ? 'Ligada.' : 'Desligada.'; if (ren.ativo) { ren.forcar = true; cfg.renova.forEach((r) => { r.sumiu = false; }); } log(ren.ativo ? 'Renovação automática LIGADA (' + cfg.renova.filter(renValida).length + ' anúncio(s))' : 'Renovação automática desligada', 'info'); sujo = true; }
    else if (m.type === 'ren-carregar') { ren.forcar = true; ren.em = 0; if (!ren.ativo) { const ws = getWs(); if (ws && ws.readyState === 1 && podeConsultar(true) && enviar({ t: 'market.meus' })) { marcarReq(); ren.pend = Date.now(); } } sujo = true; }
    else if (m.type === 'ren-cfg') { cfg.renova = (Array.isArray(m.regras) ? m.regras : []).slice(0, 30).map(normRen); salvar(); sujo = true; }
    else if (m.type === 'armar') {
      const a = busca.rows.find((r) => r.id === m.id);
      if (!a) return;
      const pm = num(m.precoMax);
      agendar(a, 'imediata', { precoMax: pm > 0 ? Math.floor(pm) : a.preco });
      S.msg = 'Compra Imediata armada: ' + a.nome + ' Nv ' + a.level;
      sujo = true;
    } else if (m.type === 'desarmar') { const a = alvos.get(m.id); if (a && a.status === 'agendado') { alvos.delete(m.id); log('Compra cancelada pelo usuário: ' + a.nome + ' (anúncio ' + a.id + ')', 'info'); } sujo = true; }
    else if (m.type === 'limpar-hist') { hist = []; salvarHist(); sujo = true; }
    else if (m.type === 'limpar-log') { logs = []; logSujo = true; sujo = true; }
  });

  // ---------- ligação com o jogo ----------
  if (BUS && BUS.on) BUS.on(aoMensagem);
  try {
    if (typeof navigator !== 'undefined' && navigator.locks) {
      lider = false;
      navigator.locks.request('ateforp-rmtpoke', { ifAvailable: true }, (lock) => { if (!lock) return; lider = true; sujo = true; return new Promise(() => {}); });
    }
  } catch (e) { lider = true; }

  // O relógio roda também num Worker: abas em segundo plano seguram os temporizadores da página, o Worker não.
  let usouWorker = false;
  try {
    const w = new Worker(URL.createObjectURL(new Blob(['setInterval(function(){postMessage(1)},20)'], { type: 'text/javascript' })));
    w.onmessage = () => { try { pump(); } catch (e) { /* ignora */ } };
    usouWorker = true;
  } catch (e) { /* o jogo pode bloquear Workers: fica só o setInterval abaixo */ }
  setInterval(() => { try { tick(); } catch (e) { /* ignora */ } }, usouWorker ? 250 : 50);
  window.__ateforpRmtPokeDbg = { cfg: () => cfg, alvos, emVoo, tick, pump, casa, ln };
})();

/* ===== shiny monitor ===== */
/*
 * PokeIdle Tools by Ateforp - Shiny Monitor (mundo da página). SOMENTE OBSERVA.
 * Não envia nada ao servidor: lê os mesmos quadros que o jogo já manda ao jogador (aparecimento, bola, fuga, captura, dex)
 * e guarda no navegador dados sobre os encontros com Pokémon shiny, para estudar como a captura de shiny funciona.
 * Quadros usados: batalha.ev {k: spawn|bola|fugiu|capturado|morte} e estado {dexMud, balls, selvagem, kick}.
 */
(() => {
  'use strict';
  if (window.__ateforpShiny) return;
  window.__ateforpShiny = true;

  const CH = 'ateforp-shiny';
  const CHAVE = 'ateforp_shinymon';
  const BUS = window.__PM_BUS;
  if (!BUS || !BUS.on) return;

  const MAX_ENC = 300;
  const novo = () => ({ desde: Date.now(), spawns: 0, spawnsDesdeShiny: 0, shinyVistos: 0, shinyCapturados: 0, shinyFugidos: 0, shinySemCaptura: 0, capturas: 0, bolas: {}, especies: {}, dex: {}, encontros: [] });
  let ligado = true;
  let D = novo();
  try {
    const s = JSON.parse(localStorage.getItem(CHAVE) || 'null');
    if (s) { if (s.ligado === false) ligado = false; if (s.D && Array.isArray(s.D.encontros)) D = Object.assign(novo(), s.D); }
  } catch (e) { /* ignora */ }
  let sujo = false, salvarSujo = false, ultEmit = 0;
  const salvar = () => { try { localStorage.setItem(CHAVE, JSON.stringify({ ligado, D })); } catch (e) { /* ignora */ } };

  const mobs = new Map();               // slot -> {nome, sid, level, shiny, t, enc}
  let ctx = { kickShiny: null, bolas: null };
  const faixa = (l) => (l >= 400 ? '400+' : l >= 200 ? '200-399' : l >= 100 ? '100-199' : l >= 50 ? '50-99' : '1-49');
  const esp = (sid, nome) => { const k = String(sid || 0); return D.especies[k] || (D.especies[k] = { n: nome || '?', sp: 0, sh: 0, shCap: 0 }); };

  function abrirEncontro(m, detectadoPor) {
    if (m.enc) return m.enc;
    const e = { t: Date.now(), slot: m.slot, nome: m.nome, sid: m.sid, level: m.level, antes: D.spawnsDesdeShiny, via: detectadoPor, kickShiny: ctx.kickShiny, bolasTinha: ctx.bolas, tent: [], fim: '', ms: 0 };
    D.shinyVistos++; esp(m.sid, m.nome).sh++; D.spawnsDesdeShiny = 0;
    D.encontros.push(e); if (D.encontros.length > MAX_ENC) D.encontros.shift();
    m.enc = e; return e;
  }
  function fechar(e, fim) { if (e && !e.fim) { e.fim = fim; e.ms = Date.now() - e.t; if (fim === 'capturado') { D.shinyCapturados++; esp(e.sid, e.nome).shCap++; } else if (fim === 'fugiu') D.shinyFugidos++; else D.shinySemCaptura++; } }

  function evento(ev) {
    if (!ev) return;
    if (ev.k === 'spawn' && ev.slot !== undefined) {
      const ex = mobs.get(ev.slot);
      if (ex && Date.now() - ex.t < 1500 && ex.nome === ev.nome) { if ((ev.shiny || ev.sh) && !ex.shiny) { ex.shiny = true; abrirEncontro(ex, 'spawn-repetido'); } return; }   // quadro repetido do mesmo spawn
      const m = { slot: ev.slot, nome: ev.nome, sid: ev.speciesId, level: ev.level, shiny: !!(ev.shiny || ev.sh), t: Date.now(), enc: null };
      mobs.set(ev.slot, m);
      D.spawns++; D.spawnsDesdeShiny++; esp(m.sid, m.nome).sp++;
      if (m.shiny) abrirEncontro(m, 'spawn');
      sujo = salvarSujo = true;
    } else if (ev.k === 'bola') {
      const m = mobs.get(ev.slot) || { slot: ev.slot, nome: '?', sid: 0, level: 0, shiny: false, t: Date.now(), enc: null };
      const sh = !!(ev.shiny || m.shiny);
      if (sh && !m.shiny) { m.shiny = true; }
      if (sh) abrirEncontro(m, 'bola');
      const chave = ev.ballId + '|' + (sh ? 1 : 0) + '|' + faixa(m.level || 0);
      const b = D.bolas[chave] || (D.bolas[chave] = { n: 0, ok: 0, soma: 0 });
      b.n++; if (ev.sucesso) b.ok++; b.soma += Number(ev.chance) || 0;
      if (m.enc) m.enc.tent.push({ b: ev.ballId, c: Number(ev.chance) || 0, ok: !!ev.sucesso, ms: Date.now() - m.enc.t });
      if (ev.sucesso) D.capturas++;
      sujo = salvarSujo = true;
    } else if (ev.k === 'capturado') {
      const p = ev.pokemon || {};
      const m = [...mobs.values()].reverse().find((x) => x.enc && !x.enc.fim && (p.nome ? x.nome === p.nome : true));
      if (m && (p.shiny || p.lookShiny || m.shiny)) fechar(m.enc, 'capturado');
      sujo = salvarSujo = true;
    } else if (ev.k === 'fugiu') {
      const m = [...mobs.values()].reverse().find((x) => x.enc && !x.enc.fim && x.nome === ev.nome);
      if (m && (ev.shiny || m.shiny)) fechar(m.enc, 'fugiu');
      else if (ev.shiny) { const e = abrirEncontro({ slot: -1, nome: ev.nome, sid: 0, level: ev.level, shiny: true, enc: null }, 'fugiu'); fechar(e, 'fugiu'); }
      sujo = salvarSujo = true;
    } else if (ev.k === 'morte' && ev.quem === 'selvagem') {
      const m = mobs.get(ev.slot); if (m && m.enc && !m.enc.morreuEm) { m.enc.morreuEm = Date.now() - m.enc.t; sujo = salvarSujo = true; }
    }
  }

  function aoQuadro(f) {
    if (!ligado || typeof f !== 'string' || f.charCodeAt(0) !== 123) return;
    if (f.indexOf('"t":"batalha"') === 1 && f.length < 80000) {
      if (f.indexOf('"k":"spawn"') === -1 && f.indexOf('"k":"bola"') === -1 && f.indexOf('"k":"fugiu"') === -1 && f.indexOf('"k":"capturado"') === -1 && f.indexOf('"k":"morte"') === -1) return;
      try { for (const ev of JSON.parse(f).ev || []) evento(ev); } catch (e) { /* ignora */ }
    } else if (f.indexOf('"t":"estado"') === 1 && f.length < 400000) {
      if (f.indexOf('"dexMud"') === -1 && f.indexOf('"balls"') === -1 && f.indexOf('"selvagem"') === -1 && f.indexOf('"kick"') === -1) return;
      try {
        const e = JSON.parse(f).estado || {};
        if (e.balls) ctx.bolas = Object.assign({}, ctx.bolas || {}, e.balls);
        if (e.kick && e.kick.bonus && e.kick.bonus.shiny !== undefined) ctx.kickShiny = e.kick.bonus.shiny;
        if (e.dexMud) for (const k of Object.keys(e.dexMud)) { const x = e.dexMud[k]; if (x) D.dex[k] = { k: x.k, c: x.c, sv: x.sv }; }
        const s = e.selvagem;
        if (s && s.shiny && s.slot !== undefined) { const m = mobs.get(s.slot); if (m && !m.shiny) { m.shiny = true; abrirEncontro(m, 'estado.selvagem'); sujo = salvarSujo = true; } }
        sujo = salvarSujo = true;
      } catch (err) { /* ignora */ }
    }
  }
  BUS.on(aoQuadro);

  function resumo() {
    const dias = Math.max(0.01, (Date.now() - D.desde) / 86400000);
    return { desde: D.desde, spawns: D.spawns, spawnsDesdeUltimoShiny: D.spawnsDesdeShiny, shinyVistos: D.shinyVistos, shinyCapturados: D.shinyCapturados, shinyFugidos: D.shinyFugidos, shinySemCaptura: D.shinySemCaptura, umShinyACada: D.shinyVistos ? Math.round(D.spawns / D.shinyVistos) : null, spawnsPorDia: Math.round(D.spawns / dias) };
  }
  function relatorio() {
    const bolas = Object.keys(D.bolas).sort().map((k) => { const [b, sh, fx] = k.split('|'); const x = D.bolas[k]; return { bola: Number(b), shiny: sh === '1', faixaNivel: fx, tentativas: x.n, sucessos: x.ok, chanceMediaInformada: x.n ? Number((x.soma / x.n).toFixed(4)) : 0, taxaReal: x.n ? Number((x.ok / x.n).toFixed(4)) : 0 };});
    const especies = Object.keys(D.especies).map((k) => Object.assign({ id: Number(k) }, D.especies[k])).sort((a, b) => b.sp - a.sp).slice(0, 25);
    const dex = Object.keys(D.dex).map((k) => ({ id: Number(k), nome: (D.especies[k] || {}).n || '', k: D.dex[k].k, c: D.dex[k].c, sv: D.dex[k].sv })).filter((x) => x.sv > 0).sort((a, b) => b.sv - a.sv).slice(0, 40);
    return { relatorio: 'Shiny Monitor (PokeIdle Tools by Ateforp)', geradoEm: new Date().toISOString(), observacao: 'dex: k/c/sv são os campos brutos de dexMud do jogo (provavelmente abates/capturas/shinies); bolas: faixaNivel = nível do selvagem', resumo: resumo(), bolas, especiesMaisVistas: especies, dexComShiny: dex, ultimosEncontrosShiny: D.encontros.slice(-30) };
  }
  function emitir() {
    sujo = false; ultEmit = Date.now();
    const R = relatorio();
    window.postMessage({ ch: CH, from: 'shiny', type: 'state', state: { ligado, resumo: resumo(), encontros: D.encontros.slice(-12), bolas: R.bolas, texto: JSON.stringify(R) } }, '*');
  }
  window.addEventListener('message', (ev) => {
    const m = ev.data;
    if (ev.source !== window || !m || m.ch !== CH || m.from !== 'ui') return;
    if (m.type === 'hello') sujo = true;
    else if (m.type === 'ligar') { ligado = !!m.value; salvar(); sujo = true; }
    else if (m.type === 'limpar') { D = novo(); mobs.clear(); salvar(); sujo = true; }
  });
  setInterval(() => {
    const agora = Date.now();
    for (const [s, m] of mobs) {
      if (m.enc && !m.enc.fim && agora - m.t > 90000) { fechar(m.enc, 'sem-desfecho'); salvarSujo = sujo = true; }
      if (agora - m.t > 600000) mobs.delete(s);
    }
    if (salvarSujo) { salvarSujo = false; salvar(); }
    if (sujo && agora - ultEmit > 1000) emitir();
  }, 1000);
  window.__ateforpShinyDbg = { D: () => D, relatorio, evento, aoQuadro };
})();

/* ===== shiny hunt ===== */
/*
 * PokeIdle Tools by Ateforp - Shiny Hunt (mundo da página).
 * Percorre os mapas (hunts) que a SUA conta já liberou, um depois do outro, usando só as ações que o próprio jogo oferece
 * ao jogador: escolher o mapa (hunt.select) e "Ir para o Centro Pokémon" (centro.ir). Em cada mapa olha os Pokémon que
 * o jogo mostra; se houver um shiny, fica no mapa (o herói derrota e a Auto Captura tenta capturar); se não houver, sai
 * na hora e segue para o próximo. Não forja nada: respeita os avisos do servidor (erro, "Devagar aí", anti-bot) e para.
 * Outland não entra (não tem shiny). Começa DESLIGADO sempre.
 * Também coloca o botão "Escape imediato" (igual ao do jogo) abaixo de "Desistir do Combate".
 */
(() => {
  'use strict';
  if (window.__ateforpHunt) return;
  window.__ateforpHunt = true;

  const CH = 'ateforp-hunt';
  const CHAVE = 'ateforp_hunt';
  const BUS = window.__PM_BUS;
  if (!BUS || !BUS.on) return;

  // Liberação dos mapas por região (nível da conta) e faixa de espécies de cada região
  const REGIOES = [
    { n: 'Kanto', nivel: 1, de: 1, ate: 151 }, { n: 'Johto', nivel: 200, de: 152, ate: 251 }, { n: 'Hoenn', nivel: 500, de: 252, ate: 386 },
    { n: 'Sinnoh', nivel: 1000, de: 387, ate: 493 }, { n: 'Unova', nivel: 5000, de: 494, ate: 649 }, { n: 'Kalos', nivel: 10000, de: 650, ate: 721 },
    { n: 'Alola', nivel: 25000, de: 722, ate: 809 }, { n: 'Galar', nivel: 40000, de: 810, ate: 905 }, { n: 'Paldea', nivel: 75000, de: 906, ate: 1025 }
  ];
  const PADRAO = { passoMs: 1000, olharMs: 300, parar: false, centro: false, autoLigar: false };

  let cfg = Object.assign({}, PADRAO);
  let idx = 0;
  try { const s = JSON.parse(localStorage.getItem(CHAVE) || 'null'); if (s) { cfg = Object.assign({}, PADRAO, s.cfg || {}); idx = Number(s.idx) || 0; } } catch (e) { /* ignora */ }
  let avistados = 0, desde = Date.now();
  let niveis = {};   // slug -> 'min-max' do nível dos Pokémon vistos no mapa
  try { const s2 = JSON.parse(localStorage.getItem(CHAVE) || 'null'); if (s2 && s2.niveis) niveis = s2.niveis; if (s2 && s2.avistados) avistados = Number(s2.avistados) || 0; if (s2 && s2.desde) desde = Number(s2.desde) || desde; } catch (e) { /* ignora */ }
  const salvar = () => { try { localStorage.setItem(CHAVE, JSON.stringify({ cfg, idx, niveis, avistados, desde })); } catch (e) { /* ignora */ } };

  const num = (v) => { const n = Number(v); return Number.isFinite(n) ? n : null; };
  const getWs = () => { try { return BUS.ws && BUS.ws(); } catch (e) { return null; } };
  const aberto = () => { const w = getWs(); return !!(w && w.readyState === 1); };
  function enviar(obj) {
    const ws = getWs();
    if (!ws || ws.readyState !== 1) return false;
    try { Object.getPrototypeOf(ws).send.call(ws, JSON.stringify(obj)); return true; } catch (e) { return false; }
  }

  // ---------- dados do jogo ----------
  let hunts = [];            // mapas normalizados
  let brutoAmostra = null;   // para diagnóstico
  let nivel = null;
  const mapas = { total: 0, semSlug: 0, semRegiao: 0, outland: 0 };

  function regiaoDe(h) {
    const txt = String(h.regiao || h.region || h.regiaoNome || h.mapa || '').toLowerCase();
    if (txt) { const r = REGIOES.find((x) => txt.indexOf(x.n.toLowerCase()) !== -1); if (r) return r; }
    const sid = h.sid;
    if (sid != null) return REGIOES.find((x) => sid >= x.de && sid <= x.ate) || null;
    return null;
  }
  function normalizar(lista) {
    hunts = []; mapas.total = 0; mapas.semSlug = 0; mapas.semRegiao = 0; mapas.outland = 0;
    if (!Array.isArray(lista)) return;
    brutoAmostra = lista.length ? lista[0] : null;
    for (const h of lista) {
      if (!h || typeof h !== 'object') continue;
      mapas.total++;
      const slug = h.slug != null ? String(h.slug) : '';
      if (!slug) { mapas.semSlug++; continue; }
      let sid = null;
      for (const k of ['speciesId', 'especieId', 'pokemonId', 'sid', 'pid', 'id']) { const v = num(h[k]); if (v != null) { sid = v; break; } }
      const nome = String(h.nome || h.name || h.pokemon || h.especie || slug);
      const txtRegiao = String(h.regiao || h.region || '').toLowerCase();
      const area = String(h.area || '').toLowerCase();
      const outland = (sid != null && sid >= 2001) || /outland/.test(txtRegiao) || /outland/.test(area) || /^outland/.test(slug);
      const x = { slug, nome, sid, outland };
      const r = regiaoDe(x.sid != null || txtRegiao ? Object.assign({}, h, { sid }) : h);
      x.regiao = r ? r.n : (area ? area.charAt(0).toUpperCase() + area.slice(1) : '');
      let req = null;
      for (const k of Object.keys(h)) if (/^(nivel|nivelReq|reqNivel|nivelMin|minNivel|minLevel|levelReq|requiredLevel|unlockLevel|liberaNivel)$/i.test(k) && num(h[k]) != null) { req = num(h[k]); break; }
      x.req = req != null ? req : (r ? r.nivel : null);
      if (outland) { mapas.outland++; }
      else if (x.req == null) mapas.semRegiao++;
      hunts.push(x);
    }
  }
  const elegiveis = () => hunts.filter((h) => !h.outland && h.req != null && nivel != null && nivel >= h.req);

  // ---------- estado ----------
  let ligado = false;     // sempre começa desligado
  let est = 'parado';     // parado | olhando | cacando | espera
  let msg = 'Desligado.';
  let atual = null;       // mapa em que estamos
  let logs = [];
  let ultEnvio = 0, tEntrada = 0, maxSlotAntes = 0, maxSlot = 0, tPrimeiro = 0;
  let passoExtra = 0, errosSeguidos = 0, ultAcao = '', ultAcaoEm = 0;
  let visitados = 0, rodadas = 0, shinies = { achados: 0, capturados: 0, fugiram: 0 };
  let alvoShiny = new Set(), tShiny = 0;
  const mobs = new Map();   // slot -> {n, sh, em}
  let sujo = true, ultEmit = 0;
  let tentouCentro = 0, confirmou = false;
  let noCentro = false, bloqueioAte = 0, trocaLivreAt = 0, offSrv = 0;   // regras do servidor: sem combate ~3 s para sair; ~10 s entre trocas de mapa

  const log = (txt, lvl) => { logs.push({ t: Date.now(), msg: txt, lvl: lvl || 'info' }); if (logs.length > 120) logs.shift(); sujo = true; try { console.log('[Ateforp Shiny Hunt] ' + txt); } catch (e) { /* ignora */ } };
  function parar(motivo) { ligado = false; est = 'parado'; msg = motivo || 'Desligado.'; log(motivo || 'Shiny Hunt desligado', 'info'); sujo = true; }
  const gate = () => Date.now() - ultEnvio >= cfg.passoMs + passoExtra;
  function mandar(obj, rotulo) { if (!enviar(obj)) return false; ultEnvio = Date.now(); ultAcao = rotulo; ultAcaoEm = ultEnvio; return true; }

  // ---------- quadros do jogo ----------
  function aoMensagem(d) {
    if (typeof d !== 'string' || d.charCodeAt(0) !== 123) return;
    if (d.indexOf('"t":"welcome"') === 1) {
      { const a = /"servidorAgora":(\d+)/.exec(d); if (a) offSrv = Number(a[1]) - Date.now(); const c = /"noCentro":(true|false)/.exec(d); if (c) noCentro = c[1] === 'true'; }
      try { const m = JSON.parse(d); normalizar(m.hunts); const lv = m.estado && num(m.estado.level); if (lv != null) nivel = lv; sujo = true; } catch (e) { /* ignora */ }
      return;
    }
    if (d.indexOf('"t":"estado"') === 1) {
      const a = /"servidorAgora":(\d+)/.exec(d); if (a) offSrv = Number(a[1]) - Date.now();
      const c = /"noCentro":(true|false)/.exec(d); if (c) { noCentro = c[1] === 'true'; sujo = true; }
    }
    if (d.indexOf('"t":"estado"') === 1 && d.indexOf('"level"') !== -1 && d.length < 200000) {
      try { const m = JSON.parse(d); const lv = m.estado && num(m.estado.level); if (lv != null && lv !== nivel) { nivel = lv; sujo = true; } } catch (e) { /* ignora */ }
    }
    if (d.indexOf('"t":"campo') === 1 && d.indexOf('"mobs"') !== -1 && d.length < 120000) {
      try {
        const f = JSON.parse(d);
        for (const b of f.mobs || []) {
          if (!b || b.s === undefined) continue;
          const e = mobs.get(b.s) || { em: Date.now() };
          if (b.n !== undefined) e.n = b.n;
          if (b.nv !== undefined) e.nv = Number(b.nv);
          if (b.sh !== undefined) e.sh = !!b.sh;
          mobs.set(b.s, e);
          if (b.s > maxSlot) maxSlot = b.s;
        }
        for (const sl of f.fora || []) { if (alvoShiny.delete(sl)) log('O shiny saiu de campo.', 'info'); }
        if (mobs.size > 400) for (const k of [...mobs.keys()].slice(0, 200)) mobs.delete(k);
      } catch (e) { /* ignora */ }
      return;
    }
    if (d.indexOf('"t":"batalha"') === 1) {
      try {
        const j = JSON.parse(d); let ult = null;
        for (const e of j.ev || []) {
          if (e.k === 'ataque' && cfg.centro) { bloqueioAte = Math.max(bloqueioAte, Date.now() + 2900); }   // o servidor só deixa sair ~2,8 s depois do último dano dado ou levado
          if (e.k === 'aviso' && typeof e.msg === 'string') {
            const w = /espere\s+([\d.]+)\s*s/i.exec(e.msg);
            if (w && /combate/i.test(e.msg)) { tentouCentro = 0; if (est === 'olhando' && !confirmou && ligado) { est = 'espera'; idx = Math.max(0, idx - 1); visitados = Math.max(0, visitados - 1); mobs.clear(); } bloqueioAte = Date.now() + Number(w[1]) * 1000 + 250; sujo = true; }
          } else if (e.k === 'hunt' && e.trocaLivreEm) { trocaLivreAt = Number(e.trocaLivreEm) - offSrv + 150; mobs.clear(); confirmou = true; }
          else if (e.k === 'centro') { noCentro = true; }
          if (e.k === 'spawn' && e.slot !== undefined) { if (e.slot > maxSlot) maxSlot = e.slot; if (!mobs.has(e.slot)) mobs.set(e.slot, { em: Date.now(), n: e.nome, nv: e.level !== undefined ? Number(e.level) : undefined }); if (e.shiny || e.sh) mobs.get(e.slot).sh = true; }
          else if (e.k === 'bola') { ult = e.slot; if (e.shiny && alvoShiny.has(e.slot)) { if (e.sucesso) { /* o "capturado" vem em seguida */ } } }
          else if (e.k === 'capturado' && e.slot !== undefined && alvoShiny.has(e.slot)) { alvoShiny.delete(e.slot); shinies.capturados++; log('✨ SHINY CAPTURADO! (' + (e.pokemon && e.pokemon.nome || '') + ')', 'ok'); }
          else if (e.k === 'fugiu' && ult != null && alvoShiny.has(ult)) { alvoShiny.delete(ult); shinies.fugiram++; log('O shiny fugiu depois da tentativa de captura.', 'erro'); }
        }
      } catch (e) { /* ignora */ }
      return;
    }
    if (/turnstile|captcha/i.test(d.slice(0, 400)) && ligado) { parar('O jogo pediu verificação (anti-bot). Shiny Hunt DESLIGADO — resolva no jogo.'); return; }
    if (ligado && d.indexOf('"t":"erro"') === 1) {
      let txt = d.slice(0, 160); try { const j = JSON.parse(d); txt = j.msg || j.erro || j.mensagem || txt; } catch (e) { /* ignora */ }
      if (/devagar|muitas mensagens/i.test(d)) { passoExtra = Math.min(8000, passoExtra + 1000); log('O jogo avisou "Devagar aí": aumentei o intervalo (+' + passoExtra / 1000 + ' s)', 'erro'); return; }
      if (Date.now() - ultAcaoEm < 5000) {
        errosSeguidos++; log('O jogo recusou "' + ultAcao + '": ' + String(txt).slice(0, 140), 'erro');
        if (errosSeguidos >= 3) { parar('O jogo recusou 3 vezes seguidas. Shiny Hunt DESLIGADO por segurança.'); return; }
        if (est === 'olhando') { est = 'espera'; passoExtra = Math.min(8000, passoExtra + 1000); }
      }
    }
  }
  BUS.on(aoMensagem);

  function faixaNivel(lista) {
    const v = lista.map(([, m]) => m.nv).filter((x) => Number.isFinite(x));
    if (!v.length) return '';
    const a = Math.min(...v), b = Math.max(...v);
    return a === b ? String(a) : a + '-' + b;
  }
  // ---------- laço ----------
  function proximoMapa() {
    const lista = elegiveis();
    if (!lista.length) { parar(hunts.length ? 'Nenhum mapa liberado para o nível da conta (' + (nivel != null ? nivel : '?') + ').' : 'O jogo ainda não mandou a lista de mapas (recarregue a página do jogo).'); return null; }
    if (idx >= lista.length) { idx = 0; rodadas++; log('Rodada ' + rodadas + ' completa (' + lista.length + ' mapas)', 'info'); }
    const h = lista[idx]; idx++; salvar();
    return h;
  }
  function tick() {
    if (!ligado || !aberto()) return;
    const agora = Date.now();
    if (est === 'cacando') {
      if (!alvoShiny.size) { est = 'espera'; log('Shiny resolvido; voltando à lista de mapas', 'info'); if (cfg.parar) { parar('Parado após o shiny (opção "parar ao achar shiny").'); return; } }
      else if (agora - tShiny > 180000) { alvoShiny.clear(); est = 'espera'; log('Passou 3 minutos no mapa do shiny; seguindo a lista', 'erro'); }
      msg = est === 'cacando' ? 'SHINY em ' + (atual ? atual.nome : '?') + ' — derrotando e capturando…' : msg;
      return;
    }
    if (est === 'espera' && !cfg.centro && atual) {
      // esperando a troca de mapa liberar (sem sair pelo Centro): se aparecer um shiny nas ondas seguintes, fica
      const sh = [...mobs.entries()].filter(([, m]) => m.sh);
      if (sh.length) { alvoShiny = new Set(sh.map(([s]) => s)); tShiny = agora; shinies.achados += sh.length; est = 'cacando'; errosSeguidos = 0; log('✨ SHINY achado em ' + atual.nome + ' (' + (sh[0][1].n || '?') + ')! Ficando no mapa para derrotar e capturar.', 'ok'); return; }
    }
    if (!gate()) return;
    if (est === 'olhando' && !confirmou) {
      if (agora - tEntrada > 5000) { est = 'espera'; idx = Math.max(0, idx - 1); visitados = Math.max(0, visitados - 1); log('O jogo não confirmou a troca para ' + (atual ? atual.nome : '?') + '; tentando de novo', 'erro'); }
      return;
    }
    if (est === 'olhando') {
      const novos = [...mobs.entries()];
      if (novos.length) {
        if (!tPrimeiro) tPrimeiro = agora;
        const sh = novos.filter(([, m]) => m.sh);
        if (sh.length) {
          alvoShiny = new Set(sh.map(([s]) => s)); tShiny = agora; shinies.achados += sh.length; est = 'cacando'; errosSeguidos = 0; avistados += novos.length;
          log('✨ SHINY achado em ' + (atual ? atual.nome : '?') + ' (' + (sh[0][1].n || '?') + ') entre ' + novos.length + ' avistados' + (faixaNivel(novos) ? ' (Nv ' + faixaNivel(novos) + ')' : '') + '! Ficando no mapa para derrotar e capturar.', 'ok'); return;
        }
        if (agora - tPrimeiro >= cfg.olharMs) { errosSeguidos = 0; log((atual ? atual.nome : '?') + ': ' + novos.length + ' Pokémon avistados' + (faixaNivel(novos) ? ' (Nv ' + faixaNivel(novos) + ')' : '') + ', nenhum shiny — saindo', 'info'); if (atual && faixaNivel(novos)) { niveis[atual.slug] = faixaNivel(novos); salvar(); } est = 'espera'; avistados += novos.length; sujo = true; }
      } else if (agora - tEntrada > 12000) { log((atual ? atual.nome : '?') + ': nenhum Pokémon avistado em 12 s — saindo', 'info'); est = 'espera'; sujo = true; }
      return;
    }
    // espera/parado: 1) sair do mapa (Centro) quando o servidor deixar (sem combate); 2) esperar a troca de mapa liberar; 3) entrar no próximo
    if (agora < bloqueioAte) { msg = 'Esperando o combate acabar para sair…'; return; }
    if (cfg.centro && !noCentro) {
      // se já estávamos no Centro, o servidor não responde ao centro.ir: sem aviso em ~2,5 s, consideramos que já saímos
      if (tentouCentro && agora - tentouCentro > 2500 && ultAcao === 'centro.ir' && agora >= bloqueioAte) { noCentro = true; tentouCentro = 0; log('Já estava no Centro Pokémon', 'info'); return; }
      if (mandar({ t: 'centro.ir' }, 'centro.ir')) { msg = 'Saindo do mapa…'; bloqueioAte = agora + 900; if (!tentouCentro) tentouCentro = agora; } return;
    }
    tentouCentro = 0;
    if (agora < trocaLivreAt) { msg = 'Esperando a troca de mapa liberar (' + Math.ceil((trocaLivreAt - agora) / 1000) + ' s)…'; return; }
    const h = proximoMapa(); if (!h) return;
    mobs.clear(); confirmou = false; tPrimeiro = 0; tEntrada = agora; atual = h; visitados++;
    if (mandar({ t: 'hunt.select', slug: h.slug }, 'hunt.select ' + h.slug)) { est = 'olhando'; noCentro = false; msg = 'Olhando ' + h.nome + '…'; sujo = true; }
    else { idx--; visitados--; }
  }
  setInterval(tick, 200);
  // "Ligar automaticamente ao se logar": liga sozinho quando o jogo está conectado e mandou a lista de mapas e o nível (cada reconexão é um novo login)
  let wsVisto = null, autoFeito = false;
  setInterval(() => {
    const w = getWs(); if (w !== wsVisto) { wsVisto = w; autoFeito = false; }
    if (!cfg.autoLigar || autoFeito || ligado || !aberto() || !hunts.length || nivel == null || !elegiveis().length) return;
    autoFeito = true;
    ligado = true; est = 'espera'; errosSeguidos = 0; passoExtra = 0; msg = 'Ligado.';
    log('Shiny Hunt LIGADO automaticamente ao logar: ' + elegiveis().length + ' mapa(s) liberado(s) (nível ' + nivel + ')', 'info'); sujo = true;
  }, 1000);

  // ---------- botão "Escape imediato" (igual ao do jogo) ----------
  const porTexto = (re) => { for (const b of document.querySelectorAll('button')) if (re.test((b.textContent || '').trim())) return b; return null; };
  function garantirEscape() {
    const d = porTexto(/^Desistir do Combate$/i);
    const antigo = document.querySelector('.ateforp-escape');
    if (!d) { if (antigo) antigo.remove(); return; }
    if (antigo && antigo.parentNode === d.parentNode) return;
    if (antigo) antigo.remove();
    const c = document.createElement('button');
    c.className = d.className + ' ateforp-escape'; c.type = 'button'; c.textContent = 'Escape imediato';
    c.title = 'Igual ao "Ir para o Centro Pokémon": sai do combate na hora';
    c.addEventListener('click', (ev) => {
      ev.preventDefault(); ev.stopPropagation();
      const g = porTexto(/^Ir para o Centro Pok[eé]mon$/i);
      if (g) g.click(); else enviar({ t: 'centro.ir' });
    });
    d.parentNode.insertBefore(c, d.nextSibling);
  }
  setInterval(() => { try { garantirEscape(); } catch (e) { /* ignora */ } }, 1500);

  // ---------- painel ----------
  function diag() {
    return { nivel, mapas, elegiveis: elegiveis().length, chavesDoMapa: brutoAmostra ? Object.keys(brutoAmostra) : [], exemplo: brutoAmostra, primeiros: hunts.slice(0, 5), regioes: [...new Set(hunts.map((h) => h.regiao || '?'))] };
  }
  function emitir() {
    sujo = false; ultEmit = Date.now();
    const el = elegiveis(); const elSet = new Set(el);
    window.postMessage({ ch: CH, from: 'hunt', type: 'state', state: {
      ligado, est, msg, nivel, conectado: aberto(), atual: atual ? atual.nome : '', visitados, rodadas, shinies, cfg,
      mapas: { total: mapas.total, elegiveis: el.length, outland: mapas.outland, semRegiao: mapas.semRegiao, semSlug: mapas.semSlug, regioes: [...new Set(el.map((h) => h.regiao))] },
      avistados, desde, rota: el.map((h) => [h.nome, h.regiao, niveis[h.slug] || '']), prox: idx >= el.length ? 0 : idx, cur: (est === 'olhando' || est === 'cacando') ? idx - 1 : -1,
      bloqueados: (() => { const g = {}; for (const h of hunts) { if (h.outland || elSet.has(h)) continue; const k = (h.regiao || '?') + '|' + (h.req != null ? h.req : '?'); g[k] = (g[k] || 0) + 1; } return Object.keys(g).map((k) => { const [r, n] = k.split('|'); return { r, nivel: n === '?' ? null : Number(n), qtd: g[k] }; }); })(),
      log: logs.slice(-60)
    } }, '*');
  }
  setInterval(() => { if (sujo || Date.now() - ultEmit > 2000) emitir(); }, 400);
  window.addEventListener('message', (ev) => {
    const m = ev.data;
    if (ev.source !== window || !m || m.ch !== CH || m.from !== 'ui') return;
    if (m.type === 'hello') sujo = true;
    else if (m.type === 'ligar') {
      if (m.value) {
        if (!aberto()) { msg = 'Sem conexão com o jogo.'; log(msg, 'erro'); sujo = true; return; }
        if (!elegiveis().length) { msg = hunts.length ? 'Nenhum mapa liberado para o nível da conta.' : 'O jogo ainda não mandou a lista de mapas (recarregue a página do jogo).'; log(msg, 'erro'); sujo = true; return; }
        ligado = true; est = 'espera'; errosSeguidos = 0; passoExtra = 0; msg = 'Ligado.'; log('Shiny Hunt LIGADO: ' + elegiveis().length + ' mapa(s) liberado(s) (nível ' + nivel + '), sem Outland', 'info');
      } else parar('Shiny Hunt desligado.');
    } else if (m.type === 'cfg') {
      cfg = { passoMs: Math.max(1000, Math.min(10000, Math.floor(num(m.passoMs) || PADRAO.passoMs))), olharMs: Math.max(300, Math.min(5000, Math.floor(num(m.olharMs) || PADRAO.olharMs))), parar: !!m.parar, centro: !!m.centro, autoLigar: !!m.autoLigar };
      salvar(); sujo = true;
    } else if (m.type === 'limpar-log') { logs = []; sujo = true; }
    else if (m.type === 'resetar-rota') { idx = 0; if (ligado && est === 'olhando') est = 'espera'; log('Rota reiniciada do primeiro mapa', 'info'); sujo = true; salvar(); }
    else if (m.type === 'zerar') { idx = 0; visitados = 0; rodadas = 0; avistados = 0; desde = Date.now(); shinies = { achados: 0, capturados: 0, fugiram: 0 }; sujo = true; salvar(); }
    else if (m.type === 'diag') { window.postMessage({ ch: CH, from: 'hunt', type: 'diag', diag: diag() }, '*'); }
  });
  window.__ateforpHuntDbg = { diag, hunts: () => hunts, estado: () => ({ ligado, est, atual, idx }) };
})();

/* ===== painel ===== */
(function () {
  const start = () => {
    // Ícone do Gyarados (azul = desligado, vermelho/shiny = ligado), igual ao do Auto Captura.
    window.__ATE = window.__ATE || {};
    (() => {
      const COR_OFF = { corpo: '#2fa8e8', crista: '#1b4f94', barb: '#f2f7fb', creme: '#f3e4a6', olho: '#c4152b', linha: '#14202e' };
      const COR_ON = { corpo: '#cc3e47', crista: '#97343d', barb: '#ffffff', creme: '#efd89b', olho: '#b3121f', linha: '#2a0d10' };
      const svg = (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="30" height="30" style="pointer-events:none">
      <g><path d="M16 24 L0 19 L6.5 27 L0.5 33.5 L8 35 L3 44 L18 40 Z" fill="${c.barb}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M16 24 L0 19 L7.5 26 L17 28.5 Z" fill="${c.corpo}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/></g>
      <g transform="translate(64,0) scale(-1,1)"><path d="M16 24 L0 19 L6.5 27 L0.5 33.5 L8 35 L3 44 L18 40 Z" fill="${c.barb}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M16 24 L0 19 L7.5 26 L17 28.5 Z" fill="${c.corpo}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/></g>
      <path d="M20 41 C10 44 9 55 16.5 58 C20.5 59 22.5 56 20.5 54" fill="none" stroke="${c.linha}" stroke-width="4.6" stroke-linecap="round"/>
      <path d="M20 41 C10 44 9 55 16.5 58 C20.5 59 22.5 56 20.5 54" fill="none" stroke="${c.corpo}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M44 41 C54 44 55 55 47.5 58 C43.5 59 41.5 56 43.5 54" fill="none" stroke="${c.linha}" stroke-width="4.6" stroke-linecap="round"/>
      <path d="M44 41 C54 44 55 55 47.5 58 C43.5 59 41.5 56 43.5 54" fill="none" stroke="${c.corpo}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M32 9 C41 9 46 12 49 19 L51.5 27 C50.5 35 46 41 40 43 L24 43 C18 41 13.5 35 12.5 27 L15 19 C18 12 23 9 32 9 Z" fill="${c.corpo}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M17 24.5 L29 28.5 L28 32.5 L19.5 31 Z" fill="#fff" stroke="${c.linha}" stroke-width="1" stroke-linejoin="round"/>
      <path d="M47 24.5 L35 28.5 L36 32.5 L44.5 31 Z" fill="#fff" stroke="${c.linha}" stroke-width="1" stroke-linejoin="round"/>
      <circle cx="24" cy="30" r="2.5" fill="${c.olho}"/><circle cx="24.3" cy="30.2" r="1.1" fill="#1a0006"/>
      <circle cx="40" cy="30" r="2.5" fill="${c.olho}"/><circle cx="39.7" cy="30.2" r="1.1" fill="#1a0006"/>
      <path d="M23 36 Q32 32.5 41 36 L43 53 Q32 60 21 53 Z" fill="${c.creme}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M25.5 38 Q32 35.5 38.5 38 L39.5 51 Q32 55.5 24.5 51 Z" fill="#4a1620"/>
      <ellipse cx="32" cy="47.5" rx="5.8" ry="4.4" fill="#e07a7a"/>
      <path d="M26 38.2 L28.8 38 L27.2 44 Z" fill="#fff" stroke="${c.linha}" stroke-width=".6" stroke-linejoin="round"/>
      <path d="M38 38.2 L35.2 38 L36.8 44 Z" fill="#fff" stroke="${c.linha}" stroke-width=".6" stroke-linejoin="round"/>
      <path d="M5 11 L30 18.5 L32 30 L21 24 Z" fill="${c.crista}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M59 11 L34 18.5 L32 30 L43 24 Z" fill="${c.crista}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M32 0 L35.5 9 L35.5 22 L32 30 L28.5 22 L28.5 9 Z" fill="${c.crista}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
    </svg>`;
      window.__ATE.gyarados = (on, px) => {
        if (window.__ATE.gyaImg) {   // arte do Gyarados normal (desligado) e shiny vermelho (ligado)
          const im = document.createElement('img');
          im.src = on ? window.__ATE.gyaImg.on : window.__ATE.gyaImg.off; im.alt = on ? 'Gyarados shiny' : 'Gyarados'; im.draggable = false;
          im.style.cssText = 'height:' + (px || 30) + 'px;width:auto;max-width:' + Math.round((px || 30) * 1.4) + 'px;pointer-events:none;object-fit:contain';
          return im;
        }
        return window.__ATE.gyaSvg(on, px);
      };
      window.__ATE.gyaSvg = (on, px) => {
        const doc = new DOMParser().parseFromString(svg(on ? COR_ON : COR_OFF), 'image/svg+xml');
        const el = document.importNode(doc.documentElement, true);
        if (px) { el.setAttribute('width', String(px)); el.setAttribute('height', String(px)); }
        return el;
      };
    })();
    
    // Ícones do botão do Shiny Hunt na caixa de ferramentas (Shinx = desligado, Luxio = ligado).
    window.__ATE = window.__ATE || {};
    window.__ATE.shinx = { off: 'data:image/png;base64,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', on: 'data:image/png;base64,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' };
    window.__ATE.gyaImg = { off: 'data:image/png;base64,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', on: 'data:image/png;base64,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' };
    window.__ATE.pvpImg = { off: 'data:image/png;base64,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', on: 'data:image/png;base64,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' };
    
    /*! qrcode-generator 2.0.4 (c) Kazuhiko Arase, MIT license - http://www.d-project.com/ */
    var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1})},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(o*r,n*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var t=n("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&(module.exports=t())}(function(){return qrcode});
    // CSS do painel (aplicado dentro do Shadow DOM, por stylesheet construída — não depende do CSP do site).
    window.__PM_CSS = `
    :host { all: initial; }
    * { box-sizing: border-box; }
    [hidden] { display: none !important; }
    .root {
      --frame: #2f78c4; --frameD: #14355f; --luz: #bfe3ff; --base: #3d8fd6;
      --bg: #12233a; --card: #1a3252; --line: #2d4d7a; --txt: #eef7ff; --mut: #9db8d6;
      --acc: #3d8fd6; --ok: #6fd08a; --warn: #ffd166; --bad: #d8574a; --ouro: #ffd166;
      color: var(--txt); font: 13px/1.4 system-ui, -apple-system, "Segoe UI", sans-serif;
    }
    
    /* ---- painel ---- */
    .panel { position: fixed; z-index: 2147482999; width: 540px; overflow: hidden; display: flex; flex-direction: column; box-sizing: border-box;
      background: var(--frame); border: 3px solid var(--frameD); border-radius: 12px; padding: 8px;
      box-shadow: 0 10px 40px rgba(0,0,0,.6); }
    .corpo { background: var(--bg); border-radius: 9px; padding: 8px; }
    header { display: flex; align-items: center; gap: 8px; padding: 2px 4px 8px; cursor: move; user-select: none; touch-action: none; }
    #logo { display: inline-flex; }
    h1 { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 14px; margin: 0; flex: 1; min-width: 0; font-weight: 800; color: #fff; }
    h2 { font-size: 13px; margin: 12px 0 6px; display: flex; align-items: center; gap: 8px; font-weight: 800; letter-spacing: .4px; color: var(--ouro); }
    h2 small, .mut { color: var(--mut); font-weight: normal; }
    small { color: var(--mut); }
    .master { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 10px; display: grid; gap: 10px; }
    .pill { font-size: 11px; padding: 2px 8px; border-radius: 99px; border: 1px solid var(--line); white-space: nowrap; }
    .pill.on { color: var(--ok); border-color: var(--ok); }
    .pill.off { color: var(--mut); }
    .pill.warn { color: var(--warn); border-color: var(--warn); }
    
    .switch { display: flex; align-items: center; gap: 10px; cursor: pointer; }
    .switch input { display: none; }
    .slider { width: 38px; height: 22px; background: #3a5578; border-radius: 99px; position: relative; flex: none; transition: background .15s; }
    .slider::after { content: ""; position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; border-radius: 50%; background: #fff; transition: transform .15s; }
    .switch input:checked + .slider { background: var(--acc); }
    .switch input:checked + .slider::after { transform: translateX(16px); }
    .lbl { display: grid; }
    .lbl small { color: var(--mut); }
    .switch.big .lbl b { font-size: 14px; }
    
    .row.inline input { width: 60px; }
    input, select, button { font: inherit; color: var(--txt); background: #0f1d30; border: 1px solid var(--line); border-radius: 6px; padding: 4px 6px; }
    input:focus, select:focus { outline: 1px solid var(--acc); }
    button { cursor: pointer; background: linear-gradient(var(--luz) 0 3px, var(--base) 3px 100%); border: none; box-shadow: 0 2px 0 var(--frameD); color: #0c2340; font-weight: 700; padding: 6px 10px; border-radius: 6px; }
    button:disabled { opacity: .4; cursor: default; }
    button.link { background: none; box-shadow: none; border: none; color: var(--mut); font-weight: normal; text-decoration: underline; padding: 0; margin-left: auto; }
    a.icon { display: inline-block; text-decoration: none; background: none; border: 1px solid var(--line); color: var(--luz); padding: 3px 8px; font-weight: 600; border-radius: 6px; font-size: 12px; }
    a.icon[hidden] { display: none; }
    button.icon { background: none; box-shadow: none; border: 1px solid var(--line); color: var(--luz); padding: 3px 8px; font-weight: 600; }
    header button.icon { border-color: var(--frameD); background: rgba(10,30,60,.35); }
    
    .tabs { display: flex; gap: 2px; margin: 0 0 8px; flex-wrap: wrap; border-bottom: 1px solid var(--line); }
    .tabs button { background: none; box-shadow: none; border: none; border-bottom: 2px solid transparent; border-radius: 0; color: var(--mut); padding: 6px 9px; font-weight: 600; }
    .tabs button.on { color: var(--txt); border-bottom-color: var(--ouro); }
    
    .rule { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 8px 10px; margin: 8px 0; }
    .rule.done { opacity: .65; }
    .rule .top { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
    .rule .name { font-weight: 600; flex: 1; min-width: 0; }
    .rule .name small { font-weight: normal; }
    .rule .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
    .rule .grid label { display: grid; gap: 2px; color: var(--mut); font-size: 11px; }
    .rule .grid input { width: 100%; color: var(--txt); font-size: 13px; }
    .rule .info { color: var(--mut); font-size: 11px; margin-top: 6px; }
    .bar { height: 6px; background: #0f1d30; border-radius: 99px; overflow: hidden; margin-top: 8px; }
    .bar > i { display: block; height: 100%; background: var(--ok); }
    .prog { display: flex; justify-content: space-between; color: var(--mut); font-size: 11px; margin-top: 3px; }
    .empty { color: var(--mut); padding: 10px 0; }
    
    .picker { margin-top: 10px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 8px 10px; }
    .picker summary { cursor: pointer; font-weight: 600; }
    .pbar { display: flex; gap: 6px; margin: 8px 0; }
    .pbar input { flex: 1; min-width: 0; }
    .picklist { max-height: 210px; overflow-y: auto; border: 1px solid var(--line); border-radius: 8px; background: #0f1d30; }
    .picklist .grp { position: sticky; top: 0; background: #1d3556; color: var(--mut); font-size: 11px; padding: 3px 8px; text-transform: uppercase; letter-spacing: .04em; }
    .picklist .it { box-shadow: none; display: flex; justify-content: space-between; gap: 8px; width: 100%; text-align: left; background: none; border: none; border-bottom: 1px solid var(--line); border-radius: 0; color: var(--txt); font-weight: normal; padding: 6px 8px; }
    .picklist .it:hover { background: #1f3a5f; }
    .picklist .it.added { opacity: .45; cursor: default; }
    .picklist .it.gems { opacity: .55; }
    .picklist .it span:last-child { color: var(--mut); font-size: 11px; text-align: right; white-space: nowrap; }
    .manual { display: flex; gap: 6px; align-items: center; margin-top: 8px; color: var(--mut); }
    .manual input { width: 80px; }
    
    .hbar { display: flex; gap: 6px; align-items: center; margin-top: 8px; }
    .summary { color: var(--mut); font-size: 12px; margin-bottom: 6px; }
    .summary b { color: var(--txt); }
    .list { background: #0c1726; border: 1px solid var(--line); border-radius: 8px; max-height: 190px; overflow-y: auto; }
    .list .r { display: grid; grid-template-columns: 78px 1fr auto; gap: 8px; padding: 5px 8px; border-bottom: 1px solid #1d3556; font-size: 12px; }
    .list .r:last-child { border-bottom: none; }
    .list .r time { color: var(--mut); }
    .list .r .v { text-align: right; white-space: nowrap; }
    .list .r .s { color: var(--mut); font-size: 11px; }
    .list.tall { max-height: 300px; }
    .list .r.att { grid-template-columns: 62px 1fr auto; }
    .list .r .b { font-weight: 600; font-size: 11px; }
    .list .b.win { color: var(--ok); } .list .b.lose { color: var(--mut); } .list .b.err { color: var(--warn); } .list .b.pend { color: var(--txt); }
    .list .r.win { background: #14231a; }
    .list details.s summary { cursor: pointer; }
    .list .fr { font-family: monospace; font-size: 10px; word-break: break-all; color: var(--mut); }
    .list .none { color: var(--mut); padding: 10px; }
    
    .log { background: #0c1726; border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; height: 300px; overflow-y: auto; font: 11px/1.45 ui-monospace, Menlo, Consolas, monospace; }
    .log div { white-space: pre-wrap; word-break: break-word; }
    /* rota do Shiny Hunt */
    .rota { background: #0c1726; border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; max-height: 260px; overflow-y: auto; font: 12px/1.5 ui-monospace, Menlo, Consolas, monospace; margin: 6px 0; position: relative; }
    .rota .rt.feito { color: #4ade80; }
    .rota .rt.atual { color: #60a5fa; font-weight: 700; }
    .rota .rt.prox { color: #c084fc; font-weight: 700; }
    .rota .rt.falta { color: #facc15; }
    .log .ok { color: var(--ok); }
    .log .erro { color: var(--bad); }
    .log .debug { color: var(--mut); }
    .log time { color: var(--mut); margin-right: 6px; }
    
    .card { background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; margin-bottom: 8px; display: grid; gap: 8px; }
    .card h2 { margin: 0; }
    .card.master { gap: 10px; }
    .row2 { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .fld { display: grid; gap: 3px; }
    .fld label { color: var(--mut); font-size: 12px; font-weight: 600; }
    .fld input[type=text], .fld input[type=number], .fld select { width: 100%; box-sizing: border-box; }
    .fld button { width: 100%; }
    .rcab { justify-content: space-between; gap: 8px; }
    .rcab .rtit { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .rcorpo { display: grid; gap: 8px; }
    .rcorpo[hidden] { display: none; }
    .smlin { display: flex; flex-wrap: wrap; gap: 4px 8px; align-items: baseline; }
    .resumo { background: #0c2a1a; border: 1px solid #1f6b3a; color: #bfeccf; border-radius: 6px; padding: 6px 8px; font-size: 12px; line-height: 1.4; }
    .resumo.bad { background: #2a1210; border-color: #7a2a22; color: #f3b9b2; }
    .est4 { display: grid; grid-template-columns: auto 1fr auto 1fr; gap: 4px 6px; align-items: center; margin: 4px 0; }
    .est4 input { width: 100%; }
    .est4 span { color: var(--mut); font-size: 12px; }
    .row.inline select, .row.inline input[type=text] { max-width: 100%; }
    .est3 { display: grid; grid-template-columns: 1fr 74px 74px; gap: 4px 6px; align-items: center; margin: 2px 0; }
    .est3.head { color: var(--mut); font-size: 11px; margin-top: 0; }
    .est3 input { width: 100%; }
    .est3 .nm { display: flex; align-items: center; gap: 6px; min-width: 0; }
    .est3 .nm img { width: 22px; height: 22px; object-fit: cover; object-position: top left; image-rendering: pixelated; flex: none; }
    .est3 .q { color: var(--mut); }
    .grp { margin-top: 8px; font-weight: 700; color: var(--ouro); }
    .beast { margin-top: 6px; padding: 6px 8px; border: 1px solid #b8455a; border-radius: 8px; display: grid; gap: 6px; }
    .beast .bt { font-weight: 700; color: #ff9aa9; display: flex; align-items: center; gap: 6px; }
    .beast .bt img { width: 22px; height: 22px; image-rendering: pixelated; }
    .warnbox { padding: 6px 8px; background: #3a1620; border: 1px solid #ff6b81; border-radius: 6px; display: grid; gap: 6px; }
    .btns { display: flex; gap: 8px; align-items: center; }
    .stat { color: var(--luz); }
    .tabs.sub { margin: 0 0 8px; gap: 6px; border-bottom: none; }
    .tabs.sub button { flex: 1; border: 1px solid var(--line); border-radius: 8px; padding: 7px 10px; background: #0f1d30; }
    .tabs.sub button.on { background: linear-gradient(var(--luz) 0 3px, var(--base) 3px 100%); color: #0c2340; border-color: var(--frameD); box-shadow: 0 2px 0 var(--frameD); }
    .sep { height: 1px; background: var(--line); margin: 14px 0 4px; }
    button.icon.pinned { background: linear-gradient(var(--luz) 0 3px, var(--base) 3px 100%) !important; border-color: var(--ouro) !important; box-shadow: 0 0 8px rgba(255,209,102,.7) !important; }
    
    .pvstreak{margin:6px 0;padding:5px 9px;border-radius:7px;border:1px solid #2f4a78;background:#0e1a30;font-size:12px;font-weight:700;color:#8fa8d4}.pvstreak.hot{color:#ffd37a;border-color:#a8791f;background:#2a2008}
    .pvhist{display:flex;flex-direction:column;gap:3px;margin:8px 0;max-height:190px;overflow:auto}
    .pv{display:grid;grid-template-columns:22px 1fr auto auto auto;gap:8px;align-items:center;padding:4px 8px;border-radius:6px;border:1px solid #2f4a78;background:#0e1a30;font-size:11px}
    .pv .res{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:5px;font-size:11px}
    .pv.w .res{background:#1f6b3a;color:#d6ffe4}.pv.l .res{background:#7a2330;color:#ffdce1}
    .pv.w .dl{color:#6fe39a}.pv.l .dl{color:#ff8a98}
    .pv .op{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pv .pt,.pv time{color:#8fa8d4;font-size:10px}
    
    .rz { position: fixed; z-index: 2147483000; touch-action: none; }
    .rz[hidden] { display: none; }
    .rz-n, .rz-s { cursor: ns-resize; } .rz-e, .rz-w { cursor: ew-resize; }
    .rz-nw, .rz-se { cursor: nwse-resize; } .rz-ne, .rz-sw { cursor: nesw-resize; }
    .panel { min-width: 0; }
    .corpo { min-width: 0; }
    header .pill { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 0 1 auto; }
    header button.icon { flex: none; }
    .row.inline input[type=checkbox] { width: auto; }
    .row.inline label { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    .panel > .corpo { flex: 1 1 auto; min-height: 0; overflow-y: auto; overscroll-behavior: contain; }
    .panel > header { flex: none; }
    .subp[hidden] { display: none; }
    .addn { display: flex; gap: 6px; margin: 6px 0; } .addn input { flex: 1; min-width: 0; }
    .vfil { display: flex; flex-wrap: wrap; gap: 6px; margin: 4px 0; }
    .vfil .vf { padding: 3px 10px; font-size: 12px; }
    .vfil .vf.on { border-color: var(--ouro); color: var(--ouro); background: #1c3156; }
    .vb-vender { color: #ff8a98; } .vb-colecao { color: #8fd0ff; } .vb-manter { color: var(--mut); }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .chip { display: inline-flex; align-items: center; gap: 4px; background: #0f1d30; border: 1px solid var(--line); border-radius: 99px; padding: 2px 4px 2px 10px; font-size: 12px; }
    .chip .x { background: none; border: none; color: var(--mut); cursor: pointer; font-size: 15px; line-height: 1; padding: 0 5px; }
    .chip .x:hover { color: #ff8a98; }
    .vrsum{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:6px;margin-top:6px}
    .vrbox{display:flex;flex-direction:column;gap:1px;padding:6px 8px;border-radius:7px;border:1px solid #2f4a78;background:#0e1a30}.vrbox b{font-size:17px}.vrbox span{font-size:10px;color:#8fa8d4}
    .vrbox.v b{color:#ff9a8a}.vrbox.c b{color:#ffd37a}.vrbox.f b{color:#ff8a98}
    .vrhist{max-height:260px}
    .vr{display:grid;grid-template-columns:70px minmax(0,1.3fr) auto minmax(0,1.4fr) auto;gap:8px;align-items:center;padding:4px 8px;border-radius:6px;border:1px solid #2f4a78;background:#0e1a30;font-size:11px}
    .vr .res{display:inline-flex;align-items:center;justify-content:center;height:20px;border-radius:5px;font-size:10px;padding:0 4px}
    .vr.vendido .res{background:#7a2330;color:#ffdce1}.vr.colecao .res{background:#8a6a14;color:#fff1c9}.vr.falha .res{background:#5a3a8a;color:#ecdcff}.vr.manter .res{background:#26406b;color:#cfe0ff}
    .vr .op,.vr .mo{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr .pt,.vr time,.vr .mo{color:#8fa8d4;font-size:10px}
    .tabs .pixbtn { margin-left: auto; font-size: 16px; line-height: 1; padding: 3px 9px; border-bottom: 2px solid transparent; filter: saturate(.9); }
    .tabs .pixbtn:hover { background: #17294a; border-radius: 8px; }
    .pixbox { position: absolute; z-index: 5; right: 14px; top: 96px; width: min(320px, calc(100% - 28px)); background: #10213b; border: 1px solid #3f67a8; border-radius: 12px; padding: 12px 14px; box-shadow: 0 10px 30px #000a; }
    .pixbox[hidden] { display: none; }
    .dlg { position: absolute; inset: 0; z-index: 20; background: rgba(4,12,28,.72); display: flex; align-items: center; justify-content: center; padding: 14px; }
    .dlg[hidden] { display: none; }
    .dlgbox { width: min(340px, 100%); background: #10213b; border: 1px solid #3f67a8; border-radius: 12px; padding: 14px 16px; box-shadow: 0 10px 30px rgba(0,0,0,.6); }
    .dlgopc { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; }
    .dlgopc button { width: 100%; text-align: left; }
    .dlgbox .dlgt { font-weight: 800; color: var(--ouro); margin-bottom: 6px; }
    .dlgbox p { margin: 0 0 12px; font-size: 13px; line-height: 1.45; color: var(--txt); }
    .dlgbox .btns { display: flex; gap: 8px; justify-content: flex-end; }
    .dlgbox .dlgok { border-color: var(--ouro); color: var(--ouro); }
    .pixbox .pixt { font-weight: 800; color: var(--ouro); margin-bottom: 6px; }
    .pixbox p { margin: 0 0 8px; font-size: 12px; line-height: 1.45; color: var(--txt); }
    .pixbox .pixk { font-family: ui-monospace, monospace; font-size: 12px; background: #0a1527; border: 1px dashed #3f67a8; border-radius: 8px; padding: 8px; word-break: break-all; user-select: all; margin-bottom: 8px; }
    .pixqr { width: 200px; max-width: 100%; margin: 4px auto 6px; background: #fff; border-radius: 8px; padding: 4px; line-height: 0; }
    .pixqr[hidden] { display: none; }
    .pixqr svg { width: 100%; height: auto; display: block; }
    .pixh { text-align: center; margin-bottom: 6px; }
    
    `;
    
    // Resumo das versões (aba "Novidades"). A primeira entrada é a versão instalada.
    window.__ateforpReleases = [
     {"v": "2.3.52", "itens": ["Shiny Hunt: nova opção Ligar automaticamente ao se logar (desmarcada por padrão, igual à da Auto Captura e do PvP). Quando marcada, o Shiny Hunt liga sozinho assim que o jogo conecta e informa os mapas e o nível da conta, inclusive depois de uma reconexão."]},
     {"v": "2.3.51", "itens": ["Descrição da chave inglesa reformulada: mostra o que cada menu principal faz (PvE, PvP, Mercado RMT e Logs), o significado das cores e o que está ativo agora."]},
     {"v": "2.3.50", "itens": ["A chave inglesa agora fica vermelha só quando o jogo está conectado e há alguma função ativa além de PvP, Auto Captura e Shiny Hunt (compra de itens, reposição de itens, compra de Pokémon, compra imediata, renovação de anúncios ou venda de Pokémon). Sem isso fica verde; amarela se estiver aguardando o jogo ou houver aviso. O texto ao passar o mouse lista o que está ativo."]},
     {"v": "2.3.49", "itens": ["O ícone do PvP agora usa a arte do Zacian (espada) quando desligado e do Zamazenta (escudo) quando ligado."]},
     {"v": "2.3.48", "itens": ["Caixa de ferramentas em duas linhas: em cima Auto Captura (Gyarados) e Shiny Hunt; embaixo PvP (esquerda) e a chave (direita). Novo botão do Shiny Hunt com o Shinx brilhando quando desligado (borda azul) e o Luxio quando ligado (borda vermelha), liga sem alerta. O ícone da Auto Captura agora usa a arte do Gyarados normal (desligado) e do shiny vermelho (ligado). Shiny Hunt: contador de Pokémon avistados desde o último zerar (aparece com a data de início)."]},
     {"v": "2.3.47", "itens": ["Shiny Hunt: o painel agora explica, junto da opção do Centro Pokémon, que passar pelo Centro costuma ser um pouco mais rápido e constante."]},
     {"v": "2.3.46", "itens": ["Shiny Hunt: agora troca direto para o próximo mapa, sem passar pelo Centro Pokémon (testado no seu jogo: o servidor aceita a troca direta quando o herói está sem combater; quando recusa por combate, a extensão espera o tempo que o jogo pede e tenta de novo). Enquanto espera a troca liberar (~10 s), continua olhando os Pokémon do mapa e fica se aparecer shiny. O Centro virou opção (caixa no painel)."]},
     {"v": "2.3.45", "itens": ["Shiny Hunt: o registro e a rota mostram o nível dos Pokémon de cada mapa (por exemplo Nv 3-5; na rota aparece depois que o mapa é visitado). Compra de Pokémon: removido o modo simulação (use o botão Consultar Pokémon disponíveis para ver o que a regra pegaria). Ao ligar, a compra automática passa a comprar de verdade, sempre com a confirmação de antes."]},
     {"v": "2.3.44", "itens": ["Shiny Hunt: corrigido o erro que fazia esperar 12 s em cada mapa (o número de cada Pokémon recomeça em 1 a cada mapa; agora os avistados são contados certo e ele sai assim que vê que não há shiny). Rota esperada com cores: verde = já feito, azul = no mapa agora, roxo = próximo, amarelo = ainda não. Botão Resetar rota. O registro mostra quantos Pokémon foram avistados ao entrar em cada mapa. Painel mais limpo e contador de progresso (rodada e mapa X de N) coerente com a rota."]},
     {"v": "2.3.43", "itens": ["Shiny Hunt: nova seção Rota esperada (PvE > Captura > Shiny Hunt) com a lista de mapas na ordem em que serão visitados (marca o próximo e os já feitos), quantos mapas por região, o que ainda está bloqueado pelo nível da conta e botão para copiar a rota. Funciona para qualquer conta, com mais ou menos mapas liberados."]},
     {"v": "2.3.42", "itens": ["Shiny Hunt corrigido: a lista de mapas do jogo informa a área e o nível mínimo de cada mapa, e agora a extensão usa isso para saber quais estão liberados (antes só reconhecia parte deles). Também não trava mais quando você já está no Centro Pokémon ao ligar."]},
     {"v": "2.3.41", "itens": ["O Shiny Hunt agora fica dentro de PvE > Captura (no fim da página), em vez de ter aba própria."]},
     {"v": "2.3.40", "itens": ["Shiny Hunt: acompanha os ataques do combate e só tenta sair quando o jogo vai deixar (cerca de 3 s depois do último dano), sem insistir em pedidos que o servidor recusaria."]},
     {"v": "2.3.39", "itens": ["Shiny Hunt ajustado com o que o servidor do jogo realmente exige (testado na sua conta): só dá para sair do mapa depois de ~3 s sem batalhar (o Centro Pokémon também) e só dá para trocar de mapa a cada ~10 s. Agora a extensão entra no mapa, confere os Pokémon assim que aparecem, sai antes de o herói atacar quando não há shiny, espera a troca liberar e entra no próximo. Tempo de olhar padrão 0,3 s."]},
     {"v": "2.3.38", "itens": ["Shiny Hunt (PvE > Shiny Hunt, beta, desligado por padrão): percorre um por um os mapas que a sua conta já liberou pelo nível (Outland fica de fora, não tem shiny), usando as mesmas ações do jogo (escolher o mapa e Ir para o Centro Pokémon). Sem shiny, sai na hora e vai para o próximo; com shiny, fica para derrotar e a Auto Captura tenta capturar. Para se o jogo recusar ou avisar Devagar aí. Novo botão Escape imediato abaixo de Desistir do Combate. Não dá para saber o que nasce sem entrar no mapa: o servidor só informa o mapa atual."]},
     {"v": "2.3.37", "itens": ["Captura: nova opção \"Usar Beast Ball para capturar shiny\" (PvE > Captura, desligada por padrão). Um shiny só dá uma tentativa (se a bola falha ele foge), então, ligada, a extensão lança a Beast Ball nele, uma única vez, usando só as que você já tem. Os Pokémon comuns seguem com a bola normal. O Shiny Monitor registra o resultado."]},
     {"v": "2.3.35", "itens": ["Consulta e auto-compra mais rápidas: a extensão agora pede ao próprio servidor do jogo só os anúncios com a potência, os IVs individuais e o nível mínimos da regra (como o filtro do front-end do jogo), em vez de varrer dezenas de páginas. Vale no modo \"todos os critérios (E)\"; a conferência final continua sendo feita pela extensão."]},
     {"v": "2.3.34", "itens": ["Consulta: quando não há Pokémon com os filtros (por exemplo, shiny que não existe à venda), agora termina e mostra \"Nenhum Pokémon disponível com esses filtros\" em vez de ficar consultando para sempre. A quantidade máxima de resultados só limita o que é mostrado (a busca percorre até 30 páginas do mercado). A Consulta confere se a resposta do jogo é da página pedida."]},
     {"v": "2.3.33", "itens": ["Correção importante no mercado: o jogo conta as páginas a partir de 0 e a extensão pedia a partir de 1, então nunca via a primeira página (os anúncios mais baratos ou mais novos). Corrigido na Consulta, nas regras de auto-compra e na Compra Imediata."]},
     {"v": "2.3.32", "itens": ["Regras e Consulta: novo filtro de nível do Pokémon (mínimo e máximo). O botão da regra agora se chama \"Consultar Pokémon disponíveis\". Ao criar uma regra pela Consulta para um Pokémon que já tem regra, aparece um aviso: atualizar a regra existente, descartar a antiga (com novo nome) ou cancelar (com confirmação de zerar o filtro). A Consulta tenta de novo quando uma página do mercado demora a responder."]},
     {"v": "2.3.31", "itens": ["Regras de Pokémon: novo botão \"Ver o que casa agora\" em cada regra. Abre a Consulta já com os filtros da regra e mostra os anúncios que ela compraria, sem comprar nada. Quando a compra automática está desligada, o painel avisa que nem a simulação avalia anúncios."]},
     {"v": "2.3.30", "itens": ["Regras de compra de Pokémon: dá para recolher cada regra (fica só nome, botão ligada, resumo do que compra e quantos já comprou); o estado de aberta/fechada é lembrado. Corrigido o contador \"Comprados\" que não acompanhava a quantidade digitada."]},
     {"v": "2.3.29", "itens": ["Userscript: botão Atualizar userscript na aba Novidades (abre a tela de instalação do Tampermonkey: 1 clique para atualizar)."]},
     {"v": "2.3.28", "itens": ["Corrigido o botão Baixar atualização: agora baixa direto o ZIP da extensão (antes apontava para uma página de releases inexistente)."]},
     {"v": "2.3.27", "itens": ["Shiny Monitor: textos mais claros (resumo em linhas com legenda: desde quando monitora, quantos Pokémon apareceram, shinies, quantos seguidos sem shiny e média)."]},
     {"v": "2.3.26", "itens": ["Novidades: o botão Verificar atualização agora mostra \"Verificando…\", o resultado e a hora da última checagem, e aparece o botão Baixar atualização quando há versão nova."]},
     {"v": "2.3.25", "itens": ["Novo Shiny Monitor na aba Logs: só observa e guarda, no navegador, dados de cada Pokémon shiny que aparece (nível, bolas usadas, chance informada pelo jogo, resultado, quantos Pokémon apareceram antes), estatísticas das bolas e dados do dex. Botão para copiar o relatório (JSON) e colar na conversa. Base para um futuro Shiny Hunter."]},
     {"v": "2.3.24", "itens": ["Mercado RMT reorganizado: Itens | Pokémon | Histórico. Em Pokémon: Auto-compra (Consultar, Regras, Compra Imediata) e Renovar anúncios. Consulta e Compra Imediata com ordenação (menor preço, maior preço, recentes) e limite de quantidade; Compra Imediata com liga/desliga próprio; regras com resumo claro do que será comprado, modo simulação (só avisa) e confirmação antes de ligar; botão para criar regra a partir da consulta. Tudo em coins."]},
     {"v": "2.3.23", "itens": ["Nova aba Renovação (Mercado RMT): renova sozinha os seus anúncios de Pokémon, alternando o preço entre dois valores (Preço A e Preço B) a cada intervalo (mínimo 30 min, limite do jogo), até vender. Desligada por padrão, com explicação na tela e registro de cada renovação."]},
     {"v": "2.3.22", "itens": ["Nova aba Novidades com o resumo de cada versão. A extensão avisa quando há uma versão nova da própria extensão (ponto vermelho na aba, checagem a cada 3 horas). No userscript, o aviso é do Tampermonkey/Greasy Fork."]},
     {
      "v": "2.3.21",
      "itens": [
       "Compra de Pokémon: opção Outland (omitir, incluir ou somente Outland) em cada regra, na Compra Imediata e na Consulta. Antes, Outland era sempre omitido."
      ]
     },
     {
      "v": "2.3.20",
      "itens": [
       "Mercado — compra automática de Pokémon: nova configuração, separada da de itens, com regras por espécie, preço máximo, quantidade, shiny, potência, IV total, qualidade, nota e IV individual (HP, Atk, Def, SpAtk, SpDef, Spd). Modo \"todos os critérios\" (E) ou \"qualquer um\" (OU); campo vazio é ignorado.",
       "Compra Imediata: escolha um Pokémon em retenção; a extensão acompanha o relógio do servidor e envia a compra no instante da liberação.",
       "Consulta: lista o que há à venda segundo os filtros (sem comprar).",
       "Registro: log detalhado das compras (consultas, achados, pedidos, respostas do jogo, confirmações) e histórico. Tudo funciona só pela configuração, sem precisar da tela do jogo."
      ]
     },
     {
      "v": "2.3.19",
      "itens": [
       "Removida a opção \"Beast Ball em shiny e lendário\" da aba Captura. A captura nos modos Economia/Ultra continua igual, usando a bola escolhida. (A reposição de Beast Ball da loja VIP é outra função e continua.)"
      ]
     },
     {
      "v": "2.3.18",
      "itens": [
       "Reposição de estoque: corrigido o caso em que a reposição passava a comprar de 1 em 1. Um ganho parcial (por exemplo, falta de ouro naquele momento) não é mais tratado como limite por compra; o limite só é aprendido quando o jogo avisa por mensagem. Depois de cada compra, a extensão espera o estoque do jogo assentar antes de medir o que entrou.",
       "Ao atingir o mínimo, a compra continua sendo um único pedido até o valor de \"compra até\"."
      ]
     },
     {
      "v": "2.3.17",
      "itens": [
       "Estatísticas para modo economia: o quadro dos modos Economia/Ultra virou uma opção na aba Captura (ligar/desligar, com escolha das seções: bolas e gold, captura, PvP e compras).",
       "O quadro abre à esquerda da tela, pode ser movido, redimensionado por todas as bordas e cantos, minimizado (vai para o canto inferior direito) e fixado (trava posição e tamanho). Tudo fica salvo.",
       "Mostra o Pokémon que está sendo caçado.",
       "(2.3.14 a 2.3.16 foram versões internas deste mesmo ajuste.)"
      ]
     },
     {
      "v": "2.3.13",
      "itens": [
       "Captura nos modos Economia e Ultra Economia: a Auto Captura passa a funcionar mesmo sem a lista de Pokémon na tela, usando os avisos da batalha (derrotado, bola, fugiu, capturado).",
       "Quem fugiu depois de uma bola que não segurou não é mais lançado de novo; os outros derrotados são tentados em rodízio (shiny e lendários primeiro).",
       "Quadro em tempo real nos modos Economia/Ultra: recursos e bolas, gold, Pokémon sendo caçado, vistos/derrotados/capturados/fugiram/expiraram, PvP e compras. Pode ser ligado/desligado e por seções no painel (aba Captura).",
       "Ligar automaticamente ao logar (Captura e PvP) mais confiável; o PvP automático não se desliga mais sozinho após falhas (tenta de novo com espera crescente).",
       "Contagem de \"vistos\" corrigida."
      ]
     },
     {
      "v": "2.3.10",
      "itens": [
       "O painel da extensão fica com prioridade sobre o jogo; só a caixa de botões (Gyarados, PvP, Tools) fica atrás das janelas do jogo (ex.: Mercado).",
       "Correção na Venda automática: Q (qualidade) e N (nota) agora são comparados em milésimos, como o jogo mostra (Q 1.445 = 1445). Antes quase tudo \"batia\" a regra de venda.",
       "Venda automática: a lista mostra Vender, Coleção e Sem ação, com filtros, contagem e o motivo ao passar o mouse.",
       "Apoio ao criador: o código Pix foi trocado pelo link https://livepix.gg/ateforp.",
       "Ícone da ferramenta (chave inglesa) na extensão e no userscript."
      ]
     }
    ];
    
    (() => {
    'use strict';
    /*
     * Interface do painel (roda no mundo isolado da extensão, dentro de um Shadow DOM criado pelo panel.js).
     * Lê/grava a configuração no chrome.storage; o motor (engine.js) e a ponte (bridge.js) fazem o resto.
     */
    
    // Itens do mercado já mapeados: id -> [nome, categoria]. Itens novos são aprendidos automaticamente
    // (o motor procura no mercado do jogo) e aparecem na categoria "Outros".
    const SEED = {
      2: ['Ancient Stone', 'stone'], 23: ['Cocoon Stone', 'stone'], 31: ['Darkness Stone', 'stone'],
      40: ['Earth Stone', 'stone'], 45: ['Enigma Stone', 'stone'], 49: ['Feather Stone', 'stone'],
      53: ['Fire Stone', 'stone'], 66: ['Heart Stone', 'stone'], 71: ['Ice Stone', 'stone'],
      76: ['Leaf Stone', 'stone'], 87: ['Metal Stone', 'stone'], 106: ['Punch Stone', 'stone'],
      109: ['Rock Stone', 'stone'], 133: ['Thunder Stone', 'stone'], 139: ['Venom Stone', 'stone'],
      142: ['Water Stone', 'stone'], 209: ['Sun Stone', 'stone'],
      40530: ['AoE TM Disk Piece', 'fragment'], 59194: ['TM Disk Piece', 'fragment'],
      70011: ['Key Fragment', 'fragment'], 70012: ['Shiny Stone Fragment', 'fragment'],
      70013: ['', 'fragment'], 70014: ['Mega Stone Fragment', 'fragment'],
      70015: ['Mega Shiny Stone Fragment', 'fragment'], 70017: ['', 'fragment'],
      70000: ['Bronze Boss Token', 'boss'],
      70040: ['Common House', 'casa'], 70041: ['', 'casa'], 70042: ['', 'casa'],
      70080: ['', 'bicicleta'], 70081: ['Uncommon Bicycle', 'bicicleta'], 70082: ['', 'bicicleta'],
      70095: ['Safari Ticket', 'ticket']
    };
    const CATS = [['stone', 'Pedras'], ['fragment', 'Fragmentos'], ['boss', 'Boss Tokens'], ['casa', 'Casas'],
      ['bicicleta', 'Bicicletas'], ['ticket', 'Tickets'], ['outros', 'Outros']];
    
    const mil = (v) => { v = Number(v) || 0; return Math.round(v < 50 ? v * 1000 : v).toLocaleString('pt-BR'); };   // Q/N em milésimos, como o jogo mostra
    const fmt = (n) => Number(n || 0).toLocaleString('pt-BR');
    function short(n) {
      n = Number(n || 0);
      const f = (v, s) => (Math.round(v * 10) / 10).toLocaleString('pt-BR') + s;
      if (n >= 1e9) return f(n / 1e9, 'B');
      if (n >= 1e6) return f(n / 1e6, 'M');
      if (n >= 1e4) return f(n / 1e3, 'k');
      return fmt(n);
    }
    const when = (ms) => new Date(ms).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
    
    function parseNum(s) {
      s = String(s).trim().toLowerCase().replace(/\s/g, '');
      let mult = 1;
      const suf = s.slice(-1);
      if (suf === 'k' || suf === 'm' || suf === 'b') {
        mult = { k: 1e3, m: 1e6, b: 1e9 }[suf];
        s = s.slice(0, -1).replace(',', '.');
      } else {
        s = s.replace(/\./g, '').replace(',', '.');
      }
      const v = parseFloat(s);
      return Number.isFinite(v) ? Math.round(v * mult) : 0;
    }
    
    function createUI(root) {
      const $ = (id) => root.getElementById(id);
      let cfg = { enabled: false, intervalMs: 5000, rules: [] };
      let estado = null;
      let saveTimer = null;
      let storageDead = false;
      let mismatchSince = 0;
      let tab = 'captura';
      let sub = 'compras';
      let cs = null;            // estado do módulo de captura/estoque (catch.js)
      const listeners = [];
      const catchCmd = (o) => window.postMessage(Object.assign({ ch: 'ateforp', from: 'ui' }, o), '*');
    
      function save() {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(() => {
          saveTimer = null;
          try { chrome.storage.local.set({ cfg }); storageDead = false; } catch (err) { storageDead = true; renderStatus(); }
        }, 250);
      }
      const cmd = (o) => chrome.storage.local.set({ cmd: Object.assign({ ts: Date.now() }, o) });
    
      // ---------- catálogo ----------
      function itemInfo(id) {
        const learned = (estado && estado.catalog && estado.catalog[id] && estado.catalog[id].nome) || '';
        const seed = SEED[id];
        return { nome: learned || (seed && seed[0]) || '', cat: seed ? seed[1] : 'outros' };
      }
      const itemName = (id) => itemInfo(id).nome || ('Item #' + id);
      const marketOf = (id) => (estado && estado.market && estado.market[id]) || null;
    
      function allItemIds() {
        const ids = new Set(Object.keys(SEED).map(Number));
        if (estado) {
          Object.keys(estado.catalog || {}).forEach((i) => ids.add(Number(i)));
          Object.keys(estado.market || {}).forEach((i) => ids.add(Number(i)));
        }
        return [...ids];
      }
    
      function el(tag, props, ...kids) {
        const e = document.createElement(tag);
        Object.assign(e, props || {});
        for (const k of kids) e.append(k);
        return e;
      }
    
      // ---------- regras ----------
      function infoText(itemId) {
        const m = marketOf(itemId);
        if (!m) return 'sem dados do mercado ainda (abra o jogo)';
        if (m.minGold == null) return 'sem anúncios em coins agora' + (m.minOrb != null ? ' · só em gemas' : '');
        return 'menor agora ' + fmt(m.minGold) + (m.mediaGold ? ' · média 7 dias ' + fmt(m.mediaGold) : '') + ' · ' + fmt(m.anuncios) + ' anúncios';
      }
    
      function numField(label, value, onChange, opts) {
        const input = el('input', { type: 'text', value: opts && opts.raw ? String(value) : fmt(value) });
        input.addEventListener('change', () => {
          const v = parseNum(input.value);
          onChange(v);
          input.value = opts && opts.raw ? String(v) : fmt(v);
          save();
        });
        return el('label', {}, label, input);
      }
    
      const cur = (id) => cfg.rules.find((x) => x.id === id);
    
      function renderRules() {
        const box = $('rules');
        box.textContent = '';
        if (!cfg.rules.length) {
          box.append(el('div', { className: 'empty', textContent: 'Nenhum item configurado. Use "+ Adicionar item" abaixo.' }));
          return;
        }
        for (const r of cfg.rules) {
          const card = el('div', { className: 'rule', id: 'rule-' + r.id });
          const act = el('input', { type: 'checkbox', checked: r.ativo !== false, title: 'Ativar este item' });
          act.addEventListener('change', () => { const c = cur(r.id); if (c) c.ativo = act.checked; save(); });
          const reset = el('button', { className: 'icon', textContent: '↺', title: 'Zerar contagem deste item' });
          reset.addEventListener('click', () => cmd({ type: 'reset', ruleId: r.id }));
          const del = el('button', { className: 'icon', textContent: '✕', title: 'Remover item' });
          del.addEventListener('click', () => { cfg.rules = cfg.rules.filter((x) => x.id !== r.id); save(); renderRules(); renderPicker(); });
    
          const name = el('span', { className: 'name' }, itemName(r.itemId), el('small', { textContent: '  #' + r.itemId }));
          card.append(el('div', { className: 'top' }, act, name, reset, del));
          card.append(el('div', { className: 'grid' },
            numField('Preço mín.', r.min, (v) => { const c = cur(r.id); if (c) c.min = v; refreshRules(); }),
            numField('Preço máx.', r.max, (v) => { const c = cur(r.id); if (c) c.max = v; refreshRules(); }),
            numField('Quantidade', r.qtd, (v) => { const c = cur(r.id); if (c) c.qtd = v; refreshRules(); }),
            numField('Sorteios simult. (0 = todos)', r.simult || 0, (v) => { const c = cur(r.id); if (c) { c.simult = Math.max(0, v); c.v = 2; } }, { raw: true })
          ));
          card.append(el('div', { className: 'info', textContent: infoText(r.itemId) }));
          card.append(el('div', { className: 'bar' }, el('i', { className: 'fill' })));
          card.append(el('div', { className: 'prog' }, el('span', { className: 'got' }), el('span', { className: 'range' })));
          box.append(card);
        }
        refreshRules();
      }
    
      // atualiza barras, contagens e textos sem recriar os campos (não tira o foco de quem está digitando)
      function refreshRules() {
        const progress = (estado && estado.progress) || {};
        for (const r of cfg.rules) {
          const card = $('rule-' + r.id);
          if (!card) continue;
          const got = progress[r.id] || 0;
          const pct = r.qtd > 0 ? Math.min(100, Math.round((got / r.qtd) * 100)) : 0;
          card.classList.toggle('done', r.qtd > 0 && got >= r.qtd);
          card.querySelector('.fill').style.width = pct + '%';
          card.querySelector('.got').textContent = 'comprado ' + got + ' / ' + r.qtd;
          card.querySelector('.range').textContent = r.max > 0 ? 'faixa ' + fmt(r.min) + ' – ' + fmt(r.max) : 'defina o preço máximo';
          card.querySelector('.info').textContent = infoText(r.itemId);
        }
      }
    
      // ---------- seletor de itens ----------
      function addRule(itemId) {
        if (!itemId || cfg.rules.some((r) => r.itemId === itemId)) return;
        cfg.rules.push({ id: 'r' + Date.now().toString(36) + itemId, itemId, nome: itemInfo(itemId).nome, min: 0, max: 0, qtd: 1, simult: 0, v: 2, ativo: true });
        save(); renderRules(); renderPicker();
      }
    
      function renderPicker() {
        const q = $('search').value.trim().toLowerCase();
        const box = $('pickList');
        const keepScroll = box.scrollTop;
        box.textContent = '';
        const ids = allItemIds().filter((id) => !q || itemName(id).toLowerCase().includes(q) || String(id).includes(q));
        $('pickerCount').textContent = '(' + allItemIds().length + ' itens no mercado)';
        const added = new Set(cfg.rules.map((r) => r.itemId));
        for (const [cat, label] of CATS) {
          const inCat = ids.filter((id) => itemInfo(id).cat === cat).sort((a, b) => itemName(a).localeCompare(itemName(b)));
          if (!inCat.length) continue;
          box.append(el('div', { className: 'grp', textContent: label }));
          for (const id of inCat) {
            const m = marketOf(id);
            const gems = m && m.minGold == null;
            const btn = el('button', { className: 'it' + (added.has(id) ? ' added' : '') + (gems ? ' gems' : ''), type: 'button' },
              el('span', { textContent: itemName(id) }),
              el('span', { textContent: added.has(id) ? 'já adicionado' : m ? (gems ? 'só em gemas' : 'menor ' + short(m.minGold) + (m.mediaGold ? ' · média ' + short(m.mediaGold) : '')) : '#' + id }));
            btn.addEventListener('click', () => { if (!added.has(id)) addRule(id); });
            box.append(btn);
          }
        }
        if (!box.children.length) box.append(el('div', { className: 'empty', textContent: 'Nenhum item encontrado.' }));
        box.scrollTop = keepScroll;
      }
    
      // ---------- captura e estoque (módulo catch.js, por postMessage) ----------
      const fmtNum = (n) => {
        if (!Number.isFinite(n)) return '—';
        const f = (v, s) => (Math.round(v * 10) / 10).toLocaleString('pt-BR') + s;
        if (n >= 1e9) return f(n / 1e9, ' bi');
        if (n >= 1e6) return f(n / 1e6, ' mi');
        if (n >= 1e4) return f(n / 1e3, ' mil');
        return Math.round(n).toLocaleString('pt-BR');
      };
      let estSig = '';
    
      function renderCatch() {
        if (!cs) return;
        $('capOn').checked = !!cs.ativo;
        $('capAuto').checked = !!cs.autoLigar;
        if (root.activeElement !== $('capBolaTela')) $('capBolaTela').value = String(cs.capBolaTela || 0);
        $('capBeastShiny').checked = Number(cs.capBolaShiny) === 5;
        $('capHud').checked = cs.capHud !== false;
        root.querySelectorAll('#hudSec input').forEach((i) => { i.checked = !cs.capHudSec || cs.capHudSec[i.dataset.hs] !== false; });
        $('capTelaInfo').textContent = cs.capSemTela ? 'Capturas feitas sem a lista da tela: ' + cs.capSemTela : '';
        $('ocultarSorteio').checked = !!cs.ocultarSorteio;
        $('capHint').textContent = cs.ativo ? 'ligada' : 'desligada';
        $('conHint').textContent = cs.conectado ? (cs.pronto ? 'conectado' : 'conectado, carregando…') : 'sem conexão';
        const e = cs.estoque;
        $('estOn').checked = !!e.ativo;
        $('estHint').textContent = e.ativo ? 'ligado — confere a cada ' + e.intervaloMin + ' min' : 'desligado';
        if (root.activeElement !== $('estInt')) $('estInt').value = String(e.intervaloMin);
        $('estStatus').textContent = e.status || 'Parado.';
        $('beastPk').textContent = cs.beastPorPacote; $('beastMax').textContent = cs.beastMax;
        $('beastOn').checked = !!e.beast.ativo;
        $('beastTem').textContent = cs.beastTem != null ? '(' + fmtNum(cs.beastTem) + ')' : '';
        for (const [id, v] of [['beastBelow', e.beast.abaixo], ['beastUp', e.beast.ate]]) {
          if (root.activeElement !== $(id)) $(id).value = v ? String(v) : '';
        }
        // lista de itens: reconstrói só quando a lista muda (não pode roubar o foco de quem está digitando)
        const sig = (cs.lista || []).map((i) => i.chave).join(',');
        const box = $('estList');
        if (sig !== estSig) {
          estSig = sig;
          box.textContent = '';
          if (!cs.lista.length) box.append(el('div', { className: 'mut', textContent: 'A lista de itens aparece quando o jogo conectar.' }));
          let grupo = '';
          const ORDEM = ['Bolas', 'Poções', 'Revives'];
          const ordenada = cs.lista.map((x, i) => [x, i]).sort((a, b) => (ORDEM.indexOf(a[0].grupo) - ORDEM.indexOf(b[0].grupo)) || (a[1] - b[1])).map((x) => x[0]);
          for (const it of ordenada) {
            if (it.grupo !== grupo) {
              grupo = it.grupo;
              box.append(el('div', { className: 'grp', textContent: grupo }));
              box.append(el('div', { className: 'est3 head' }, el('span'), el('span', { textContent: 'abaixo de' }), el('span', { textContent: 'compra até' })));
            }
            const c = e.itens[it.chave] || { abaixo: 0, ate: 0 };
            const img = el('img', { alt: '' });
            if (it.icone) { img.src = it.icone; img.addEventListener('error', () => { img.style.visibility = 'hidden'; }); } else img.style.visibility = 'hidden';
            const below = el('input', { type: 'number', min: '0', max: '9999', step: '1', placeholder: '0', value: c.abaixo ? String(c.abaixo) : '' });
            const up = el('input', { type: 'number', min: '0', max: '9999', step: '1', placeholder: '0', value: c.ate ? String(c.ate) : '' });
            const lim = (inp) => { if (inp.value === '') return; const n = Math.min(9999, Math.max(0, Math.floor(Number(inp.value) || 0))); inp.value = String(n); };   // máximo 9999 por campo
            const send = () => { lim(below); lim(up); catchCmd({ type: 'estoque-item', chave: it.chave, abaixo: below.value, ate: up.value }); };
            below.addEventListener('change', send); up.addEventListener('change', send);
            for (const inp of [below, up]) inp.addEventListener('input', () => { if (Number(inp.value) > 9999) inp.value = '9999'; });   // passou de 9999: já fica no máximo na hora
            box.append(el('div', { className: 'est3' },
              el('span', { className: 'nm' }, img, el('span', { textContent: it.nome }), el('small', { className: 'q', id: 'q-' + it.chave.replace(/\W/g, '_') })),
              below, up));
          }
        }
        for (const it of cs.lista) {
          const q = root.getElementById('q-' + it.chave.replace(/\W/g, '_'));
          if (q) q.textContent = it.tem != null ? '  (' + fmtNum(it.tem) + ')' : '';
        }
        listeners.forEach((f) => f());
      }
    
      window.addEventListener('message', (ev) => {
        const m = ev.data;
        if (ev.source !== window || !m || m.ch !== 'ateforp' || m.from !== 'catch' || m.type !== 'state') return;
        cs = m.state;
        renderCatch();
      });
      catchCmd({ type: 'hello' });
    
      $('ocultarSorteio').addEventListener('change', (e) => catchCmd({ type: 'sorteio-ocultar', value: e.target.checked }));
      root.querySelectorAll('#hudSec input').forEach((i) => i.addEventListener('change', () => catchCmd({ type: 'cap-hud-sec', chave: i.dataset.hs, value: i.checked })));
      $('capHud').addEventListener('change', (e) => catchCmd({ type: 'cap-hud', value: e.target.checked }));
      $('capBolaTela').addEventListener('change', (e) => catchCmd({ type: 'cap-bola', value: Number(e.target.value) }));
      $('capBeastShiny').addEventListener('change', (e) => catchCmd({ type: 'cap-bola-shiny', value: e.target.checked ? 5 : 0 }));
      $('capAuto').addEventListener('change', (e) => catchCmd({ type: 'auto-ligar', value: e.target.checked }));
      $('capOn').addEventListener('change', (e) => catchCmd({ type: 'captura', value: e.target.checked }));
      $('estOn').addEventListener('change', (e) => catchCmd({ type: 'estoque-ativo', value: e.target.checked }));
      $('estInt').addEventListener('change', (e) => catchCmd({ type: 'estoque-intervalo', value: e.target.value }));
      $('estRun').addEventListener('click', () => catchCmd({ type: 'estoque-run' }));
      $('beastOn').addEventListener('change', (e) => {
        if (e.target.checked) { e.target.checked = false; $('beastWarn').hidden = false; return; }   // pede confirmação aqui mesmo
        catchCmd({ type: 'beast-ativo', value: false });
      });
      $('beastYes').addEventListener('click', () => { catchCmd({ type: 'beast-ativo', value: true }); $('beastWarn').hidden = true; $('beastOn').checked = true; });
      $('beastNo').addEventListener('click', () => { $('beastWarn').hidden = true; });
      const beastSend = () => { for (const id of ['beastBelow', 'beastUp']) { const i = $(id); if (i.value !== '') i.value = String(Math.min(9999, Math.max(0, Math.floor(Number(i.value) || 0)))); } catchCmd({ type: 'beast-cfg', abaixo: $('beastBelow').value, ate: $('beastUp').value }); };
      for (const id of ['beastBelow', 'beastUp']) $(id).addEventListener('input', (e) => { if (Number(e.target.value) > 9999) e.target.value = '9999'; });
      $('beastBelow').addEventListener('change', beastSend);
      $('beastUp').addEventListener('change', beastSend);
    
      // ---------- tentativas ----------
      const ST = { pendente: ['⏳', 'aguardando sorteio', 'pend'], ganhou: ['✔', 'GANHOU', 'win'], perdeu: ['✖', 'perdeu', 'lose'], erro: ['⚠', 'erro', 'err'] };
      const openDet = new Set();   // tentativas com "detalhes" abertos (só o usuário abre/fecha)
      let tentSig = '';
      function renderTentativas() {
        const list = ((estado && estado.tentativas) || []).slice().reverse();
        // nada mudou: não redesenha (não fecha detalhes, não pula a rolagem)
        const sig = JSON.stringify(list.map((a) => [a.n, a.status, a.motivo, a.vencedor, (a.frames || []).length]));
        if (sig === tentSig && $('tentList').childElementCount === list.length) return;
        tentSig = sig;
        const c = { ganhou: 0, perdeu: 0, erro: 0, pendente: 0 };
        list.forEach((a) => { c[a.status] = (c[a.status] || 0) + 1; });
        const sum = $('tentSummary');
        sum.textContent = '';
        sum.append(list.length
          ? el('span', {}, el('b', { textContent: list.length + (list.length === 1 ? ' tentativa' : ' tentativas') }), ' · ',
              el('b', { textContent: c.ganhou + (c.ganhou === 1 ? ' ganha' : ' ganhas') }), ' · ' + c.perdeu + ' perdidas · ' + c.erro + ' com erro' + (c.pendente ? ' · ' + c.pendente + ' aguardando' : ''))
          : el('span', { textContent: 'Nenhuma tentativa ainda. Cada vez que a extensão entrar num sorteio, aparece aqui com o resultado e o motivo.' }));
        const box = $('tentList');
        const rolagem = box.scrollTop;
        box.textContent = '';
        for (const a of list) {
          const s = ST[a.status] || ST.pendente;
          const det = el('details', { className: 's' }, el('summary', { textContent: 'detalhes' }),
            el('div', { textContent: 'anúncio #' + a.anuncio + ' · enviado ' + new Date(a.t).toLocaleTimeString('pt-BR') + (a.fim ? ' · resolvido em ' + ((a.fim - a.t) / 1000).toFixed(1) + ' s' : '') }));
          (a.frames || []).forEach((f) => det.append(el('div', { className: 'fr', textContent: '+' + (f.ms / 1000).toFixed(1) + ' s  ' + f.txt })));
          if (!(a.frames || []).length) det.append(el('div', { className: 'fr', textContent: 'o jogo não mandou nenhuma mensagem de resultado além do estoque' }));
          det.open = openDet.has(a.n);
          det.addEventListener('toggle', () => { if (det.open) openDet.add(a.n); else openDet.delete(a.n); });
          box.append(el('div', { className: 'r att ' + s[2] },
            el('time', { textContent: when(a.t) }),
            el('div', {}, a.qtd + '× ' + a.nome + ' a ' + fmt(a.preco),
              el('div', { className: 's', textContent: 'vendedor ' + (a.vendedor || '?') + ' — ' + a.motivo }), det),
            el('div', { className: 'v b ' + s[2], textContent: s[0] + ' ' + s[1] })));
        }
        box.scrollTop = rolagem;
      }
      $('clearTent').addEventListener('click', () => { openDet.clear(); tentSig = ''; cmd({ type: 'clearTentativas' }); });
    
      // ---------- histórico ----------
      function renderHistory() {
        const compras = ((estado && estado.compras) || []).slice().reverse();
        const totalGasto = compras.reduce((a, c) => a + (c.total || 0), 0);
        const unid = compras.reduce((a, c) => a + (c.qtd || 0), 0);
        const sum = $('summary');
        sum.textContent = '';
        sum.append(compras.length
          ? el('span', {}, el('b', { textContent: unid + ' unidades' }), ' em ' + compras.length + ' compras · gasto total ', el('b', { textContent: fmt(totalGasto) + ' coins' }))
          : el('span', { textContent: 'Nenhuma compra feita pela extensão ainda.' }));
    
        const cl = $('comprasList');
        cl.textContent = '';
        if (!compras.length) cl.append(el('div', { className: 'none', textContent: 'Quando a extensão ganhar um sorteio, aparece aqui.' }));
        for (const c of compras) {
          cl.append(el('div', { className: 'r' },
            el('time', { textContent: when(c.t) }),
            el('div', {}, c.qtd + '× ' + c.nome, el('div', { className: 's', textContent: 'de ' + (c.vendedor || '?') + ' · ' + fmt(c.preco) + ' cada' })),
            el('div', { className: 'v', textContent: fmt(c.total) })));
        }
    
        const h = (estado && estado.history) || { pages: {}, total: 0, porPagina: 30 };
        const rows = [];
        Object.keys(h.pages || {}).forEach((p) => rows.push(...h.pages[p]));
        rows.sort((a, b) => (b.em || 0) - (a.em || 0));
        const gl = $('gameHist');
        gl.textContent = '';
        if (!rows.length) gl.append(el('div', { className: 'none', textContent: h.updated ? 'Você ainda não tem compras no jogo.' : 'Ainda não carregou — clique em Atualizar.' }));
        for (const r of rows) {
          gl.append(el('div', { className: 'r' },
            el('time', { textContent: when(r.em) }),
            el('div', {}, r.desc || '', el('div', { className: 's', textContent: 'de ' + (r.vendedor || '?') })),
            el('div', { className: 'v', textContent: fmt(r.pago) + (r.moeda === 'gold' ? '' : ' gemas') })));
        }
        let info = rows.length ? 'mostrando ' + rows.length + ' de ' + (h.total || rows.length) : '';
        if (hWait && (h.updated || 0) > hWait) hWait = 0;
        const esperando = !!hWait && Date.now() - hWait < 10000;
        if (hWait && !esperando) { hWait = 0; info = 'sem resposta do jogo — tente de novo' + (info ? ' · ' + info : ''); }
        else if (esperando) info = 'carregando…' + (info ? ' · ' + info : '');
        $('hInfo').textContent = info;
        $('hRefresh').disabled = esperando;
        $('hMore').disabled = esperando || !(h.total && rows.length < h.total);
      }
    
      // ---------- status / registro / topo ----------
      // o que o motor está usando de fato, comparado ao que o painel mostra
      function appliedDiff() {
        const a = estado && estado.aplicado;
        if (!a) return '';
        if (!!a.enabled !== !!cfg.enabled) return 'chave de ligar';
        for (const r of cfg.rules) {
          const x = (a.rules || []).find((y) => y.id === r.id);
          if (!x) return 'item ' + itemName(r.itemId) + ' não chegou ao motor';
          if (x.min !== r.min || x.max !== r.max || x.qtd !== r.qtd || (x.ativo !== false) !== (r.ativo !== false)) {
            return itemName(r.itemId) + ': motor usa ' + fmt(x.min) + '–' + fmt(x.max) + ' qtd ' + x.qtd;
          }
        }
        return '';
      }
    
      function renderStatus() {
        const s = $('status');
        let diff = appliedDiff();
        if (diff && !saveTimer) { if (!mismatchSince) mismatchSince = Date.now(); } else mismatchSince = 0;
        if (storageDead || (diff && Date.now() - mismatchSince > 5000)) {
          s.className = 'pill warn';
          s.textContent = 'NÃO APLICADO — recarregue a página (F5)';
          s.title = storageDead ? 'A extensão foi atualizada: recarregue a aba do jogo.' : 'O motor está usando outra configuração: ' + diff;
          root.host.dataset.status = 'warn';
          listeners.forEach((f) => f());
          return;
        }
        s.title = '';
        const fresh = !!(estado && Date.now() - estado.updated < 6000);
        const connected = fresh && estado.conectado;
        if (!fresh) { s.className = 'pill off'; s.textContent = 'aguardando o jogo'; }
        else if (!estado.conectado) { s.className = 'pill warn'; s.textContent = 'jogo desconectado'; }
        else { s.className = 'pill on'; s.textContent = cfg.enabled ? 'ativo · comprando' : 'conectado · desligado'; }
        root.host.dataset.status = cfg.enabled ? (connected ? 'on' : 'warn') : 'off';
        listeners.forEach((f) => f());
      }
    
      function renderLog() {
        const box = $('log');
        const atBottom = box.scrollTop + box.clientHeight >= box.scrollHeight - 8;
        box.textContent = '';
        for (const l of ((estado && estado.log) || []).slice(-60)) {
          box.append(el('div', { className: l.lvl }, el('time', { textContent: new Date(l.t).toLocaleTimeString('pt-BR') }), l.msg));
        }
        if (atBottom) box.scrollTop = box.scrollHeight;
      }
    
      function renderMaster() {
        $('enabled').checked = !!cfg.enabled;
        $('intervalS').value = String((cfg.intervalMs || 5000) / 1000);
        $('enabledHint').textContent = cfg.enabled ? 'ligada — comprando de verdade' : 'desligada';
      }
    
      let navTop = 'compras', navPk = 'auto', navAu = 'cons';
      const calcSub = () => (navTop === 'pokemon' ? (navPk === 'ren' ? 'ren' : navAu) : navTop);
      function renderMercadoSub() {
        sub = calcSub();
        root.querySelectorAll('#subtabs button').forEach((b) => b.classList.toggle('on', b.dataset.sub === navTop));
        root.querySelectorAll('#pknav button').forEach((b) => b.classList.toggle('on', b.dataset.pk === navPk));
        root.querySelectorAll('#autonav button').forEach((b) => b.classList.toggle('on', b.dataset.au === navAu));
        $('sub-compras').hidden = navTop !== 'compras';
        $('sub-pokemon').hidden = navTop !== 'pokemon';
        $('pk-auto').hidden = navPk !== 'auto';
        $('sub-poke').hidden = sub !== 'poke';
        $('sub-imed').hidden = sub !== 'imed';
        $('sub-cons').hidden = sub !== 'cons';
        $('sub-ren').hidden = sub !== 'ren';
        $('sub-hist').hidden = sub !== 'hist';
        if (sub === 'hist') { renderHistory(); renderTentativas(); renderPkHist(); }
        if (sub === 'poke') renderPoke(true);
        if (sub === 'imed') renderImed();
        if (sub === 'cons') renderCons();
        if (sub === 'ren') renderRen(true);
        if (sub === 'poke' || sub === 'imed' || sub === 'ren') renderPkLog();
      }
    
      // ---------- Compra de Pokémon no Mercado (rmtpoke.js) ----------
      const rpCmd = (o) => window.postMessage(Object.assign({ ch: 'ateforp-rmtpoke', from: 'ui' }, o), '*');
      let rp = null;                    // estado vindo do módulo
      let rpRegras = null;              // cópia editável das regras
      let rpSig = '';
      let rpEnvio = null;
      const emFocoRp = () => { const a = root.activeElement; return !!(a && a.closest && a.closest('#pkRegras')); };
      const sigRegras = (rs) => JSON.stringify((rs || []).map((r) => Object.assign({}, r, { comprados: 0 })));
      function rpEnviarCfg() {
        clearTimeout(rpEnvio);
        rpEnvio = setTimeout(() => {
          rpEnvio = null;
          rpCmd({ type: 'cfg', cfg: { intervaloS: Number($('pkInt').value) || 5, antecipaMs: Number($('imAnte').value) || 0, regras: rpRegras } });
        }, 300);
      }
      const mmss = (ms) => { const s = Math.max(0, Math.ceil(ms / 1000)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
      const infoPoke = (a) => 'Nv ' + a.level + (a.shiny ? ' ✨' : '') + ' · P' + a.p + ' · IV ' + a.iv + ' · Q ' + fmt(a.q) + ' · N ' + fmt(a.n);
      function campoNum(r, k, rotulo, ph) {
        const inp = el('input', { type: 'number', step: '1', min: '0', placeholder: ph || '—', value: r[k] == null ? '' : String(r[k]) });
        inp.addEventListener('input', () => { r[k] = inp.value.trim() === '' ? null : Number(inp.value); rpEnviarCfg(); });
        return [el('span', { textContent: rotulo }), inp];
      }
      function resumoDe(r) {
        const rotIv = { hp: 'HP', atk: 'Atk', def: 'Def', spAtk: 'SpAtk', spDef: 'SpDef', speed: 'Spd' };
        const crit = [];
        if (r.p != null) crit.push('Potência ≥ ' + r.p);
        if (r.iv != null) crit.push('IV total ≥ ' + r.iv);
        for (const k of Object.keys(rotIv)) if (r.ivs[k] != null) crit.push('IV ' + rotIv[k] + ' ≥ ' + r.ivs[k]);
        if (r.q != null) crit.push('Qualidade ≥ ' + fmt(r.q));
        if (r.n != null) crit.push('Nota ≥ ' + fmt(r.n));
        const lvT = (r.nivMin != null || r.nivMax != null) ? ' Nível ' + (r.nivMin != null && r.nivMax != null ? 'entre ' + r.nivMin + ' e ' + r.nivMax : r.nivMin != null ? 'a partir de ' + r.nivMin : 'até ' + r.nivMax) + ' (obrigatório).' : '';
        const outT = r.outland === 'so' ? 'somente Outland' : r.outland === 'incluir' ? 'com ou sem Outland' : 'sem Outland';
        const txt = !(r.precoMax > 0) ? 'Falta o preço máximo.' : !(crit.length || r.especie || r.shiny || lvT) ? 'Falta pelo menos um filtro.' :
          'Vai comprar até ' + (r.qtd || 1) + ' ' + (r.especie || 'Pokémon de qualquer espécie') + (r.shiny ? ' shiny' : '') + ' (' + outT + ', só coins) ' +
          (crit.length ? (r.modo === 'ou' ? 'quando QUALQUER UM destes bater: ' : 'quando TODOS estes critérios baterem: ') + crit.join(' · ') + ' ' : '') +
          'por no máximo ' + fmt(r.precoMax) + ' coins cada.' + lvT + ' Gasto máximo: ' + fmt(r.precoMax * (r.qtd || 1)) + ' coins.';
        return { txt, ok: r.precoMax > 0 && (crit.length > 0 || !!r.especie || !!r.shiny || !!lvT) };
      }
      let rpCol = {}; try { rpCol = JSON.parse(localStorage.getItem('ateforp-rp-col') || '{}') || {}; } catch (e) { rpCol = {}; }
      function cartaoRegra(r, i) {
        const nome = el('input', { type: 'text', placeholder: 'ex.: Snorlax perfeito', value: r.nome || '' });
        nome.addEventListener('input', () => { r.nome = nome.value; rpEnviarCfg(); });
        const ativo = el('input', { type: 'checkbox', checked: r.ativo !== false });
        ativo.addEventListener('change', () => { r.ativo = ativo.checked; rpEnviarCfg(); });
        const esp = el('input', { type: 'text', placeholder: 'ex.: Dragonite', value: r.especie || '' });
        esp.addEventListener('input', () => { r.especie = esp.value; rpEnviarCfg(); });
        const modo = el('select', {}, el('option', { value: 'e', textContent: 'todos os critérios (E)' }), el('option', { value: 'ou', textContent: 'qualquer um dos critérios (OU)' }));
        modo.value = r.modo === 'ou' ? 'ou' : 'e';
        modo.addEventListener('change', () => { r.modo = modo.value; rpEnviarCfg(); });
        const outl = el('select', {}, el('option', { value: 'omitir', textContent: 'omitir Outland' }), el('option', { value: 'incluir', textContent: 'incluir Outland' }), el('option', { value: 'so', textContent: 'somente Outland' }));
        outl.value = r.outland || 'omitir';
        outl.addEventListener('change', () => { r.outland = outl.value; rpEnviarCfg(); });
        const shiny = el('input', { type: 'checkbox', checked: !!r.shiny });
        shiny.addEventListener('change', () => { r.shiny = shiny.checked; rpEnviarCfg(); });
        const preco = el('input', { type: 'text', placeholder: 'ex.: 30M', value: r.precoMax ? short(r.precoMax) : '' });
        preco.addEventListener('change', () => { r.precoMax = parseNum(preco.value); preco.value = r.precoMax ? short(r.precoMax) : ''; rpEnviarCfg(); });
        const qtd = el('input', { type: 'number', min: '1', max: '999', step: '1', value: String(r.qtd || 1) });
        qtd.addEventListener('input', () => { r.qtd = Math.max(1, Number(qtd.value) || 1); rpEnviarCfg(); });
        const est = el('div', { className: 'est4' });
        for (const [k, rot, ph] of [['p', 'P ≥', '1–5'], ['iv', 'IV ≥', '0–192'], ['q', 'Q ≥', '1700'], ['n', 'N ≥', '3500']]) for (const x of campoNum(r, k, rot, ph)) est.append(x);
        const estLv = el('div', { className: 'est4' });
        for (const [k, rot, ph] of [['nivMin', 'Nível ≥', 'mín.'], ['nivMax', 'Nível ≤', 'máx.']]) for (const x of campoNum(r, k, rot, ph)) estLv.append(x);
        r.ivs = r.ivs || {};
        const estIv = el('div', { className: 'est4' });
        for (const [k, rot] of [['hp', 'HP ≥'], ['atk', 'Atk ≥'], ['def', 'Def ≥'], ['spAtk', 'SpAtk ≥'], ['spDef', 'SpDef ≥'], ['speed', 'Spd ≥']]) {
          const inp = el('input', { type: 'number', step: '1', min: '0', max: '31', placeholder: '0–31', value: r.ivs[k] == null ? '' : String(r.ivs[k]) });
          inp.addEventListener('input', () => { r.ivs[k] = inp.value.trim() === '' ? null : Math.max(0, Math.min(31, Number(inp.value))); rpEnviarCfg(); });
          estIv.append(el('span', { textContent: rot }), inp);
        }
        const rem = el('button', { className: 'link', textContent: 'remover', onclick: () => { rpRegras.splice(i, 1); rpSig = ''; renderPoke(true); rpEnviarCfg(); } });
        const valida = r.precoMax > 0 && (['hp', 'atk', 'def', 'spAtk', 'spDef', 'speed'].some((k) => r.ivs[k] != null) || r.p != null || r.iv != null || r.q != null || r.n != null || r.nivMin != null || r.nivMax != null || r.especie || r.shiny);
        const rs0 = resumoDe(r); const resumoEl = el('div', { className: 'resumo' + (rs0.ok ? '' : ' bad'), textContent: rs0.txt });
        const compEl = el('div', { className: 'mut' });
        const textoComp = () => { compEl.textContent = 'Comprados: ' + (r.comprados || 0) + '/' + (r.qtd || 1); };
        textoComp();
        const fld = (rot, ...x) => el('div', { className: 'fld' }, el('label', {}, rot), ...x);
        const titulo = () => (r.nome || r.especie || 'Regra sem nome') + (r.especie && r.nome && r.nome !== r.especie ? ' · ' + r.especie : '');
        const tituloEl = el('b', { className: 'rtit', textContent: titulo() });
        const corpo = el('div', { className: 'rcorpo' },
          fld('Nome da regra (opcional)', nome),
          fld('Pokémon (vazio = qualquer espécie)', esp),
          fld('Comprar quando bater', modo),
          fld('Outland', outl),
          est, estLv,
          el('div', { className: 'mut', textContent: 'IV individual (31 = perfeito):' }), estIv,
          el('div', { className: 'fld' }, el('label', {}, shiny, ' ✨ só shiny')),
          fld('Preço máximo por Pokémon (coins)', preco),
          fld('Quantidade máxima a comprar', qtd),
          el('div', { className: 'btns' }, rem));
        const colapsada = () => (rpCol[r.id] === undefined ? valida : !!rpCol[r.id]);
        const seta = el('button', { className: 'icon rseta', title: 'Abrir/fechar os detalhes da regra' });
        const aplicaCol = () => { const c = colapsada(); corpo.hidden = c; seta.textContent = c ? '▸ editar' : '▾ fechar'; };
        seta.addEventListener('click', () => { rpCol[r.id] = !colapsada(); try { localStorage.setItem('ateforp-rp-col', JSON.stringify(rpCol)); } catch (e) { /* ignora */ } aplicaCol(); });
        aplicaCol();
        const ver = el('button', { className: 'icon', textContent: '🔍 Consultar Pokémon disponíveis', title: 'Faz uma consulta (sem comprar nada) com os filtros desta regra e mostra os anúncios que ela compraria', onclick: () => {
          const iv = {}; for (const k of ['hp', 'atk', 'def', 'spAtk', 'spDef', 'speed']) iv[k] = r.ivs[k] == null ? null : r.ivs[k];
          navTop = 'pokemon'; navPk = 'auto'; navAu = 'cons'; renderMercadoSub();
          const set = (id, v) => { const x = $(id); if (x) x.value = v == null ? '' : String(v); };
          set('csEsp', r.especie || ''); set('csPreco', r.precoMax ? short(r.precoMax) : ''); set('csOutl', r.outland || 'omitir'); set('csLim', 50);
          if ($('csShiny')) $('csShiny').checked = !!r.shiny;
          for (const k of ['p', 'iv', 'q', 'n']) set('cs_' + k, r[k]); set('cs_nivMin', r.nivMin); set('cs_nivMax', r.nivMax);
          for (const k of Object.keys(iv)) set('csiv_' + k, iv[k]);
          csSig = '';
          rpCmd({ type: 'consultar', filtros: { ordem: 'baratos', limite: 50, especie: r.especie || '', precoMax: r.precoMax || 0, shiny: !!r.shiny, outland: r.outland || 'omitir', modo: r.modo === 'ou' ? 'ou' : 'e', nivMin: r.nivMin, nivMax: r.nivMax, p: r.p, iv: r.iv, q: r.q, n: r.n, ivs: iv, paginas: 30 } });
        } });
        const cardEl = el('div', { className: 'card' + (valida ? '' : ' warn') },
          el('div', { className: 'row inline rcab' }, el('label', {}, ativo, ' ligada'), tituloEl, seta),
          resumoEl,
          compEl,
          el('div', { className: 'btns' }, ver),
          corpo);
        const refaz = () => { textoComp(); tituloEl.textContent = titulo(); const x = resumoDe(r); resumoEl.textContent = x.txt; resumoEl.className = 'resumo' + (x.ok ? '' : ' bad'); };
        cardEl.addEventListener('input', refaz); cardEl.addEventListener('change', refaz);
        return cardEl;
      }
      function renderPoke(force) {
        if (!rp && !rpRegras) return;
        if (rp) {
          $('pkOn').checked = !!rp.ativo;
          $('pkHint').textContent = rp.ativo ? 'ligada — comprando de verdade' : 'desligada — nada é avaliado';
          $('pkInfo').textContent = !rp.conectado ? 'Sem conexão com o jogo.' : !rp.lider ? 'Outra aba do jogo está cuidando das compras.' : (rp.msg || '') + (rp.stats && rp.stats.comprados ? ' · comprados: ' + rp.stats.comprados : '') + (rp.stats && rp.stats.falhas ? ' · falhas: ' + rp.stats.falhas : '');
          if (!emFocoRp() && root.activeElement !== $('pkInt')) $('pkInt').value = String(rp.cfg.intervaloS || 5);
          if (root.activeElement !== $('imAnte')) $('imAnte').value = String(rp.cfg.antecipaMs || 0);
          if (!rpRegras) rpRegras = JSON.parse(JSON.stringify(rp.cfg.regras || []));
          // quando o usuário não está editando e a configuração mudou por fora, adota a do módulo
          const sig = sigRegras(rp.cfg.regras);
          if (force !== true && !emFocoRp() && !rpEnvio && sig !== sigRegras(rpRegras)) rpRegras = JSON.parse(JSON.stringify(rp.cfg.regras || []));
          else if (rpRegras) rpRegras.forEach((r) => { const m = (rp.cfg.regras || []).find((x) => x.id === r.id); if (m) r.comprados = m.comprados; });
        }
        if (force === true || (!emFocoRp() && rpSig !== sigRegras(rpRegras))) {
          const box = $('pkRegras'); box.textContent = '';
          rpRegras.forEach((r, i) => box.append(cartaoRegra(r, i)));
          if (!rpRegras.length) box.append(el('div', { className: 'mut', textContent: 'Nenhuma regra. Clique em "+ Nova regra".' }));
          rpSig = sigRegras(rpRegras);
        }
      }
      function renderImed() {
        if (!rp) return;
        const off = rp.offset || 0;
        const agoraSrv = Date.now() + off;
        const b = rp.busca || { rows: [] };
        $('imMsg').textContent = b.msg || 'Clique em "Buscar em retenção" para listar os anúncios que ainda aguardam a liberação.';
        $('imBuscar').disabled = !!b.carregando || !rp.conectado;
        if (rp.imed) { $('imOn').checked = !!rp.imed.ativo; $('imHint').textContent = rp.imed.ativo ? 'LIGADA — compra de verdade · compradas: ' + rp.imed.comprados + '/' + rp.imed.limite : 'desligada — nada será comprado'; }
        const lista = $('imLista'); lista.textContent = '';
        const armados = new Set((rp.alvos || []).map((a) => a.id));
        for (const a of (b.rows || []).slice().sort((x, y) => x.compravelEm - y.compravelEm)) {
          const falta = a.compravelEm - agoraSrv;
          const btn = el('button', { className: 'icon', textContent: armados.has(a.id) ? 'armada' : 'Comprar ao liberar', disabled: armados.has(a.id) || falta <= -2000, onclick: () => {
            const pm = parseNum($('imPreco').value);
            rpCmd({ type: 'armar', id: a.id, precoMax: pm > 0 ? pm : a.preco });
          } });
          lista.append(el('div', { className: 'row-poke' },
            el('b', { textContent: a.nome }), el('span', { className: 'mut', textContent: ' ' + infoPoke(a) }),
            el('div', { textContent: fmt(a.preco) + ' coins · ' + (a.vendedor || '?') + ' · libera em ' + (falta > 0 ? mmss(falta) : 'agora') }), btn));
        }
        if (!(b.rows || []).length) lista.append(el('div', { className: 'mut', textContent: 'Nada listado.' }));
        const arm = $('imArmadas'); arm.textContent = '';
        const alvos = (rp.alvos || []).slice().sort((x, y) => x.compravelEm - y.compravelEm);
        $('imArmN').textContent = alvos.length ? '(' + alvos.length + ')' : '';
        for (const a of alvos) {
          const falta = a.compravelEm - agoraSrv;
          const st = a.status === 'agendado' ? (falta > 0 ? 'libera em ' + mmss(falta) + (falta < 10000 ? ' (' + (Math.max(0, falta) / 1000).toFixed(1) + ' s)' : '') : 'enviando…') : a.status === 'pedido' ? 'pedido enviado…' : a.status === 'comprado' ? 'COMPRADO ✔' : 'falhou';
          arm.append(el('div', { className: 'row-poke ' + (a.status === 'comprado' ? 'ok' : a.status === 'falhou' ? 'bad' : '') },
            el('b', { textContent: a.nome }), el('span', { className: 'mut', textContent: ' ' + infoPoke(a) + ' · ' + (a.origem === 'regra' ? 'regra: ' + a.regraNome : 'imediata') }),
            el('div', { textContent: fmt(a.preco) + ' coins (máx. ' + fmt(a.precoMax) + ') · ' + st + (a.msg ? ' · ' + a.msg : '') }),
            a.status === 'agendado' ? el('button', { className: 'link', textContent: 'cancelar', onclick: () => rpCmd({ type: 'desarmar', id: a.id }) }) : ''));
        }
        if (!alvos.length) arm.append(el('div', { className: 'mut', textContent: 'Nenhuma compra armada.' }));
        $('imHint').textContent = alvos.some((a) => a.status === 'agendado') ? 'armada' : '';
      }
      let rnRegras = null, rnSig = '', rnEnvio = null;
      const rnEnviar = () => { clearTimeout(rnEnvio); rnEnvio = setTimeout(() => rpCmd({ type: 'ren-cfg', regras: rnRegras }), 300); };
      const emFocoRn = () => { const a = root.activeElement; return !!(a && a.closest && a.closest('#rnLista')); };
      function renderRen(force) {
        if (!rp || !rp.ren) return;
        $('rnOn').checked = !!rp.ren.ativo;
        $('rnHint').textContent = rp.ren.ativo ? 'ligada' : 'desligada';
        $('rnInfo').textContent = rp.ren.msg || '';
        if (!rnRegras) rnRegras = JSON.parse(JSON.stringify((rp.cfg && rp.cfg.renova) || []));
        const sig = JSON.stringify(rp.ren.meus.map((l) => [l.id, l.preco, l.editavelEm, l.criadoEm])) + JSON.stringify(rnRegras.map((r) => [r.id, r.renovacoes]));
        if (!force && (emFocoRn() || sig === rnSig)) { rnTempos(); return; }
        rnSig = sig;
        const box = $('rnLista'); box.textContent = '';
        if (!rp.ren.meus.length) box.append(el('div', { className: 'card' }, el('div', { className: 'mut', textContent: 'Nenhum anúncio de Pokémon carregado. Clique em "Carregar meus anúncios".' })));
        for (const l of rp.ren.meus) {
          let r = rnRegras.find((x) => x.id === l.id);
          const on = el('input', { type: 'checkbox', checked: !!(r && r.ativo) });
          const a = el('input', { type: 'text', placeholder: 'Preço A', value: r && r.a ? String(r.a) : '' });
          const b = el('input', { type: 'text', placeholder: 'Preço B', value: r && r.b ? String(r.b) : '' });
          const iv = el('input', { type: 'number', min: '30', max: '1440', step: '5', value: String(r ? r.intervaloMin : 30) });
          const set = () => {
            if (!r) { r = { id: l.id, nome: l.nome + ' Nv ' + l.level, a: l.preco, b: Math.max(2, l.preco - 1), intervaloMin: 30, ativo: true, renovacoes: 0 }; rnRegras.push(r); a.value = String(r.a); b.value = String(r.b); }
            r.ativo = on.checked; r.a = Math.floor(parseNum(a.value)) || 0; r.b = Math.floor(parseNum(b.value)) || 0; r.intervaloMin = Math.max(30, Math.floor(Number(iv.value) || 30)); r.nome = l.nome + ' Nv ' + l.level;
            rnEnviar();
          };
          on.addEventListener('change', set); for (const x of [a, b, iv]) x.addEventListener('input', () => { if (r) set(); });
          const ok = r && r.ativo && r.a >= 2 && r.b >= 2 && r.a !== r.b;
          box.append(el('div', { className: 'card' + (r && r.ativo && !ok ? ' warn' : '') },
            el('div', { className: 'row inline' }, el('label', {}, on, ' renovar'), el('b', { textContent: l.nome + (l.shiny ? ' ✨' : '') }), el('span', { className: 'mut', textContent: ' ' + infoPoke(l) })),
            el('div', { textContent: 'Preço atual: ' + fmt(l.preco) + (l.moeda === 'gold' ? ' coins' : ' ' + l.moeda) }),
            el('div', { className: 'row inline' }, el('label', {}, 'Preço A ', a), el('label', {}, 'Preço B ', b), el('label', {}, 'Intervalo (min) ', iv)),
            el('div', { className: 'mut', id: 'rnT_' + l.id, 'data-id': String(l.id) }),
            el('div', { className: 'mut', textContent: r && r.ativo && !ok ? 'Preencha Preço A e Preço B (diferentes, mínimo 2).' : 'Renovações feitas: ' + (r ? r.renovacoes || 0 : 0) })));
        }
        rnTempos();
      }
      function rnTempos() {
        if (!rp || !rp.ren) return;
        const agoraSrv = Date.now() + (rp.offset || 0);
        for (const l of rp.ren.meus) {
          const t = root.getElementById ? root.getElementById('rnT_' + l.id) : $('rnT_' + l.id); if (!t) continue;
          const r = rnRegras && rnRegras.find((x) => x.id === l.id);
          const iv = r ? r.intervaloMin : 30;
          const dev = Math.max(l.editavelEm, (l.criadoEm || 0) + iv * 60000);
          t.textContent = (l.compravelEm > agoraSrv ? 'Em retenção (' + mmss(l.compravelEm - agoraSrv) + ') · ' : '') + (dev > agoraSrv ? 'próxima renovação em ' + mmss(dev - agoraSrv) : 'pode ser renovado agora');
        }
      }
      let csInit = false, csSig = '';
      function renderCons() {
        if (!csInit) {
          csInit = true;
          for (const [k, rot, ph] of [['p', 'P ≥', '1–5'], ['iv', 'IV total ≥', '0–192'], ['q', 'Q ≥', '1700'], ['n', 'N ≥', '3500'], ['nivMin', 'Nível ≥', 'mín.'], ['nivMax', 'Nível ≤', 'máx.']]) {
            $('csEst').append(el('span', { textContent: rot }), el('input', { type: 'number', step: '1', min: '0', placeholder: ph, id: 'cs_' + k }));
          }
          for (const [k, rot] of [['hp', 'HP ≥'], ['atk', 'Atk ≥'], ['def', 'Def ≥'], ['spAtk', 'SpAtk ≥'], ['spDef', 'SpDef ≥'], ['speed', 'Spd ≥']]) {
            $('csIv').append(el('span', { textContent: rot }), el('input', { type: 'number', step: '1', min: '0', max: '31', placeholder: '0–31', id: 'csiv_' + k }));
          }
          $('csRegra').addEventListener('click', async () => {
            const v = (id) => { const x = $(id).value.trim(); return x === '' ? null : Number(x); };
            const pm = parseNum($('csPreco').value) || 0;
            if (!(pm > 0)) { $('csMsg').textContent = 'Para criar a regra, defina o preço máximo (coins).'; return; }
            const ivs = {}; for (const k of ['hp', 'atk', 'def', 'spAtk', 'spDef', 'speed']) ivs[k] = v('csiv_' + k);
            if (!rpRegras) rpRegras = JSON.parse(JSON.stringify((rp && rp.cfg && rp.cfg.regras) || []));
            const esp = $('csEsp').value.trim();
            const filtros = { modo: 'e', outland: $('csOutl').value, nivMin: v('cs_nivMin'), nivMax: v('cs_nivMax'), p: v('cs_p'), iv: v('cs_iv'), q: v('cs_q'), n: v('cs_n'), ivs, shiny: $('csShiny').checked, precoMax: pm, qtd: Math.max(1, Math.min(999, Number($('csLim').value) || 1)) };
            const norm = (t) => String(t || '').trim().toLowerCase();
            const velha = esp ? rpRegras.find((x) => norm(x.especie) === norm(esp)) : null;
            let nome = esp, substitui = null, atualiza = null;
            if (velha) {
              for (;;) {
                const r1 = await escolher('Você já tem uma regra para ' + esp + ': "' + (velha.nome || velha.especie) + '". O que fazer com a nova?', 'Já existe uma regra',
                  [{ k: 'atualizar', t: 'Atualizar a regra existente com estes filtros' }, { k: 'descartar', t: 'Descartar a regra antiga e criar uma nova' }, { k: 'cancelar', t: 'Cancelar a criação' }]);
                if (r1.k === 'atualizar') { atualiza = velha; break; }
                if (r1.k === 'descartar') {
                  const r2 = await escolher('A regra antiga "' + (velha.nome || velha.especie) + '" será removida. Dê um nome para a nova regra:', 'Novo nome da regra',
                    [{ k: 'ok', t: 'Descartar a antiga e criar' }, { k: 'voltar', t: 'Voltar' }], { nome: '' });
                  if (r2.k === 'ok') { substitui = velha; nome = r2.nome; break; }
                  continue;
                }
                const r3 = await escolher('Se cancelar, os filtros da consulta serão ZERADOS (Pokémon, preço, níveis, IVs…). Deseja mesmo zerar ou prefere editar o filtro?', 'Cancelar e zerar o filtro?',
                  [{ k: 'zerar', t: 'Sim, zerar o filtro' }, { k: 'editar', t: 'Não, quero editar o filtro' }]);
                if (r3.k === 'zerar') {
                  for (const el0 of root.querySelectorAll('#sub-cons input, #sub-cons select')) { if (el0.type === 'checkbox') el0.checked = false; else if (el0.tagName === 'SELECT') el0.selectedIndex = 0; else el0.value = el0.id === 'csLim' ? '20' : ''; }
                  csSig = ''; $('csLista').textContent = ''; $('csMsg').textContent = 'Criação cancelada; filtros zerados.';
                } else $('csMsg').textContent = 'Criação cancelada. Edite o filtro e tente de novo.';
                return;
              }
            }
            if (atualiza) { Object.assign(atualiza, filtros, { comprados: atualiza.comprados || 0 }); rpCol[atualiza.id] = false; }
            else {
              if (substitui) rpRegras.splice(rpRegras.indexOf(substitui), 1);
              const nid2 = 'r' + Date.now().toString(36); rpCol[nid2] = false;
              rpRegras.push(Object.assign({ id: nid2, nome, ativo: true, especie: esp, comprados: 0 }, filtros));
            }
            rpSig = ''; rpEnviarCfg(); navTop = 'pokemon'; navPk = 'auto'; navAu = 'poke'; renderMercadoSub();
            $('pkInfo').textContent = atualiza ? 'Regra "' + (atualiza.nome || atualiza.especie) + '" atualizada com os filtros da consulta. Confira com o botão Consultar Pokémon disponíveis antes de ligar a compra.' : 'Regra criada a partir da consulta. Confira com o botão Consultar Pokémon disponíveis antes de ligar a compra.';
          });
          $('csGo').addEventListener('click', () => {
            const v = (id) => { const x = $(id).value.trim(); return x === '' ? null : Number(x); };
            const ivs = {}; for (const k of ['hp', 'atk', 'def', 'spAtk', 'spDef', 'speed']) ivs[k] = v('csiv_' + k);
            rpCmd({ type: 'consultar', filtros: { ordem: $('csOrdem').value, limite: Number($('csLim').value) || 20, especie: $('csEsp').value.trim(), precoMax: parseNum($('csPreco').value) || 0, shiny: $('csShiny').checked, outland: $('csOutl').value, modo: 'e', nivMin: v('cs_nivMin'), nivMax: v('cs_nivMax'), p: v('cs_p'), iv: v('cs_iv'), q: v('cs_q'), n: v('cs_n'), ivs, paginas: 30 } });
          });
        }
        const c = rp && rp.cons; if (!c) return;
        $('csGo').disabled = !!c.carregando || !rp.conectado;
        $('csMsg').textContent = c.msg || '';
        const sig = c.rows.map((r) => r.id + ':' + r.preco).join(',') + c.carregando;
        if (sig === csSig) return; csSig = sig;
        const box = $('csLista'); box.textContent = '';
        for (const a of c.rows) {
          const iv = a.ivs ? ' · IV ' + ['hp', 'atk', 'def', 'spAtk', 'spDef', 'speed'].map((k) => a.ivs[k]).join('/') : '';
          box.append(el('div', { className: 'row-poke' }, el('b', { textContent: a.nome + (a.shiny ? ' ✨' : '') }), el('span', { className: 'mut', textContent: ' ' + infoPoke(a) + iv }), el('div', { textContent: fmt(a.preco) + ' coins · ' + (a.vendedor || '?') + (a.compravelEm > Date.now() + (rp.offset || 0) ? ' · em retenção' : '') })));
        }
        if (!c.rows.length) box.append(el('div', { className: 'mut', textContent: c.carregando ? 'Consultando…' : 'Nada encontrado.' }));
      }
      function renderPkLog() {
        for (const id of ['pkLog', 'imLog', 'rnLog']) {
          const box = $(id); if (!box) continue;
          const lg = (rp && rp.log) || [];
          const sig = lg.length + ':' + (lg.length ? lg[lg.length - 1].t : 0);
          if (box.dataset.sig === sig) continue;
          box.dataset.sig = sig;
          const fim = box.scrollTop + box.clientHeight >= box.scrollHeight - 8;
          box.textContent = '';
          for (const l of lg) box.append(el('div', { className: l.lvl }, el('time', { textContent: new Date(l.t).toLocaleTimeString('pt-BR') }), l.msg));
          if (!lg.length) box.append(el('div', { className: 'mut', textContent: 'Sem registros ainda.' }));
          if (fim) box.scrollTop = box.scrollHeight;
        }
      }
      function copiarLogPk() {
        const t = ((rp && rp.log) || []).map((l) => new Date(l.t).toLocaleTimeString('pt-BR') + ' [' + l.lvl + '] ' + l.msg).join('\n');
        try { navigator.clipboard.writeText(t); } catch (e) { /* ignora */ }
      }
      function renderPkHist() {
        const box = $('pkHist'); if (!box) return;
        box.textContent = '';
        for (const x of ((rp && rp.hist) || [])) {
          box.append(el('div', { className: 'row-poke ' + (x.status === 'comprado' ? 'ok' : x.status === 'pendente' ? '' : 'bad') },
            el('time', { textContent: when(x.em) + ' ' }), el('b', { textContent: x.nome + ' Nv ' + x.level }),
            el('span', { className: 'mut', textContent: ' P' + x.p + ' · IV ' + x.iv + ' · Q ' + fmt(x.q) + ' · N ' + fmt(x.n) + (x.shiny ? ' ✨' : '') }),
            el('div', { textContent: fmt(x.preco) + ' coins · ' + (x.vendedor || '?') + ' · ' + (x.origem === 'regra' ? 'regra ' + x.regra : 'imediata') + ' · ' + x.status + (x.motivo ? ' — ' + x.motivo : '') })));
        }
        if (!box.firstChild) box.append(el('div', { className: 'mut', textContent: 'Nenhuma compra de Pokémon ainda.' }));
      }
      window.addEventListener('message', (ev) => {
        const m = ev.data;
        if (ev.source !== window || !m || m.ch !== 'ateforp-rmtpoke' || m.from !== 'rmtpoke' || m.type !== 'state') return;
        rp = m.state; listeners.forEach((f) => { try { f(); } catch (e2) { /* ignora */ } });
        if (sub === 'poke') renderPoke(false);
        if (sub === 'imed') renderImed();
        if (sub === 'hist') renderPkHist();
        if (sub === 'cons') renderCons();
        if (sub === 'ren') renderRen(false);
        if (sub === 'poke' || sub === 'imed' || sub === 'ren') renderPkLog();
      });
      rpCmd({ type: 'hello' });
      $('rnOn').addEventListener('change', (e) => rpCmd({ type: 'ren-ativo', value: e.target.checked }));
      $('rnCarregar').addEventListener('click', () => rpCmd({ type: 'ren-carregar' }));
      $('pkOn').addEventListener('change', async (e) => {
        const on = e.target.checked;
        if (on) {
          const regs = (rpRegras || []).filter((r) => r.ativo !== false && r.precoMax > 0);
          if (!regs.length) { e.target.checked = false; $('pkInfo').textContent = 'Crie ao menos uma regra com preço máximo e um filtro antes de ligar.'; return; }
          const total = regs.reduce((s, r) => s + r.precoMax * (r.qtd || 1), 0);
          const ok = await confirmar(regs.length + ' regra(s) ativa(s). Vou COMPRAR DE VERDADE Pokémon que atendam às regras. Gasto máximo possível: ' + fmt(total) + ' coins.', 'Ligar compra automática', 'Ligar');
          if (!ok) { e.target.checked = false; return; }
        }
        rpCmd({ type: 'ativo', value: on });
      });
      $('pkInt').addEventListener('change', rpEnviarCfg);
      $('imAnte').addEventListener('change', rpEnviarCfg);
      $('pkNova').addEventListener('click', () => { if (!rpRegras) rpRegras = []; { const nid = 'r' + Date.now().toString(36); rpCol[nid] = false; rpRegras.push({ id: nid, nome: '', ativo: true, especie: '', modo: 'e', outland: 'omitir', ivs: {}, p: null, iv: null, q: null, n: null, shiny: false, precoMax: 0, qtd: 1, comprados: 0 }); } rpSig = ''; renderPoke(true); rpEnviarCfg(); });
      $('pkZerar').addEventListener('click', () => { rpCmd({ type: 'zerar-contagens' }); rpRegras = null; });
      $('pkLimpar').addEventListener('click', () => rpCmd({ type: 'limpar-hist' }));
      for (const id of ['pkLogLimpar', 'imLogLimpar', 'rnLogLimpar']) $(id).addEventListener('click', () => rpCmd({ type: 'limpar-log' }));
      for (const id of ['pkLogCopiar', 'imLogCopiar', 'rnLogCopiar']) $(id).addEventListener('click', copiarLogPk);
      $('imBuscar').addEventListener('click', () => rpCmd({ type: 'buscar', outland: $('imOutl').value, ordem: $('imOrdem').value, limite: Number($('imLim').value) || 5, nome: $('imNome').value.trim(), precoMax: parseNum($('imPreco').value) || 0, paginas: 4 }));
      $('imLim').addEventListener('input', () => rpCmd({ type: 'imed-limite', limite: Number($('imLim').value) || 5 }));
      $('imOn').addEventListener('change', async (e) => {
        const on = e.target.checked;
        if (on) {
          const ok = await confirmar('Ligar a Compra Imediata? Qualquer Pokémon que você armar será COMPRADO de verdade (em coins) assim que for liberado, até o preço máximo informado e no máximo ' + (Number($('imLim').value) || 5) + ' compra(s).', 'Ligar Compra Imediata', 'Ligar');
          if (!ok) { e.target.checked = false; return; }
        }
        rpCmd({ type: 'imed-ativo', value: on, limite: Number($('imLim').value) || 5 });
      });
      setInterval(() => { if (sub === 'imed' && rp) renderImed(); }, 500);
    
    
      // ---------- PvP automático ----------
      const pvpCmd = (o) => window.postMessage(Object.assign({ ch: 'ateforp-pvp', from: 'ui' }, o), '*');
      let pvp = null;
      function renderPvp() {
        if (!pvp) return;
        $('pvpOn').checked = !!pvp.ativo;
        $('pvpHint').textContent = pvp.ativo ? (pvp.naFila ? 'na fila' : 'ligado') : 'desligado';
        const seg = Math.ceil((pvp.espera || 0) / 1000);
        const fila = pvp.naFila && pvp.desde ? Math.max(0, Math.floor((Date.now() + (pvp.offset || 0) - pvp.desde) / 1000)) : 0;
        const mmss = (s) => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
        $('pvpInfo').textContent = pvp.naFila ? 'Na fila há ' + mmss(fila) + ' · ' + (pvp.tamanho || 0) + ' jogadores' : (pvp.msg || '') + (pvp.ativo && seg > 0 ? ' Próxima busca em ' + seg + ' s.' : '');
        $('pvpSair').disabled = !pvp.naFila;
        $('pvpAuto').checked = !!pvp.autoLigar;
        $('pvpOcultar').checked = pvp.ocultarLuta !== false;
        if (document.activeElement !== $('pvpEspera') && root.activeElement !== $('pvpEspera')) $('pvpEspera').value = String(pvp.esperaPosS || 10);
        const hb = $('pvpHist'); const hs = JSON.stringify((pvp.hist || []).map((x) => x.em));
        if (hb.dataset.sig !== hs) {
          hb.dataset.sig = hs; hb.textContent = '';
          const ha = (ms) => { const s = Math.max(0, Math.floor((Date.now() - ms) / 1000)); return s < 60 ? 'agora' : s < 3600 ? Math.floor(s / 60) + ' min' : s < 86400 ? Math.floor(s / 3600) + ' h' : Math.floor(s / 86400) + ' d'; };
          for (const x of (pvp.hist || []).slice(0, 15)) {
            hb.append(el('div', { className: 'pv ' + (x.venci ? 'w' : 'l') },
              el('b', { className: 'res', textContent: x.venci ? 'V' : 'D' }),
              el('span', { className: 'op', textContent: (x.oponente || 'oponente') + (x.opPontos != null ? ' · ' + fmt(x.opPontos) : '') }),
              el('span', { className: 'dl', textContent: (x.delta > 0 ? '+' : '') + x.delta }),
              el('span', { className: 'pt', textContent: x.pontos != null ? fmt(x.pontos) + ' pts' : '' }),
              el('time', { textContent: ha(x.em) })));
          }
          if (!(pvp.hist || []).length) hb.append(el('div', { className: 'mut', textContent: 'Nenhuma partida ainda.' }));
        }
        const r = pvp.rank;
        const nomeTier = (t) => (t ? t.charAt(0).toUpperCase() + t.slice(1) : '—');
        $('pvpRank').textContent = r ? (r.tier ? nomeTier(r.tier) + (r.div ? ' ' + r.div : '') + ' · ' : '') + fmt(r.pontos) + ' pts' + (r.ate ? ' (' + (r.pontos - (r.de || 0)) + '/' + (r.ate - (r.de || 0)) + ' na faixa)' : '') + (r.posicao ? ' · posição ' + fmt(r.posicao) : '') + (r.vitorias != null ? ' · ' + r.vitorias + 'V/' + (r.derrotas || 0) + 'D' : '') : 'Rank: ligue a chave para carregar.';
        const u = pvp.ultima;
        const seq = pvp.rank && pvp.rank.sequencia != null && !pvp.rank.doMensal ? pvp.rank.sequencia : (() => { let n = 0; for (const x of (pvp.hist || [])) { if (x.venci) n++; else break; } return n; })();
        $('pvpStreak').textContent = '🔥 Sequência de vitórias: ' + seq;
        $('pvpStreak').classList.toggle('hot', seq >= 3);
        $('pvpStats').textContent = pvp.partidas ? pvp.partidas + ' partida(s) · ' + pvp.vitorias + 'V/' + pvp.derrotas + 'D · ' + (pvp.delta > 0 ? '+' : '') + pvp.delta + ' pts' + (u ? ' · última: ' + (u.venci ? 'ganhou' : 'perdeu') + (u.oponente ? ' de ' + u.oponente : '') : '') : '';
      }
      window.addEventListener('message', (ev) => {
        const m = ev.data;
        if (ev.source !== window || !m || m.ch !== 'ateforp-pvp' || m.from !== 'pvp' || m.type !== 'state') return;
        pvp = m.state; renderPvp(); listeners.forEach((f) => { try { f(); } catch (e) { /* ignora */ } });
      });
      pvpCmd({ type: 'hello' });
      $('pvpOn').addEventListener('change', (e) => pvpCmd({ type: 'ativo', value: e.target.checked }));
      $('pvpAuto').addEventListener('change', (e) => pvpCmd({ type: 'auto-ligar', value: e.target.checked }));
      $('pvpOcultar').addEventListener('change', (e) => pvpCmd({ type: 'ocultar-luta', value: e.target.checked }));
      $('pvpEspera').addEventListener('change', (e) => pvpCmd({ type: 'espera', value: e.target.value }));
      setInterval(() => { if (pvp && pvp.naFila) renderPvp(); }, 1000);
      $('pvpSair').addEventListener('click', () => pvpCmd({ type: 'sair' }));
      $('pvpReset').addEventListener('click', () => pvpCmd({ type: 'zerar' }));
    
      // ---------- Venda automática de Pokémon (Depósito) ----------
      const vdCmd = (o) => window.postMessage(Object.assign({ ch: 'ateforp-venda', from: 'ui' }, o), '*');
      let vd = null;
      const vdNum = (id) => { const v = $(id).value.trim(); return v === '' ? null : Number(v); };
      const vdCampos = ['vdColP', 'vdColIv', 'vdColQ', 'vdColN', 'vdVenP', 'vdVenIv', 'vdVenQ', 'vdVenN', 'vdMax'];
      let extras = [];
      const extrasDe = (s) => String(s || '').split(',').map((x) => x.trim()).filter(Boolean);
      function renderExtras() {
        const box = $('vdExtraLista'); box.textContent = '';
        if (!extras.length) { box.append(el('span', { className: 'mut', textContent: 'Nenhum nome extra.' })); return; }
        extras.forEach((n, i) => box.append(el('span', { className: 'chip' }, n, el('button', { className: 'x', title: 'Remover', textContent: '×', onclick: () => { extras.splice(i, 1); renderExtras(); enviarCfg(); } }))));
      }
      function addExtra() {
        const v = $('vdExtraNovo').value.trim().replace(/,/g, ' ');
        if (!v) return;
        if (!extras.some((x) => x.toLowerCase() === v.toLowerCase())) extras.push(v);
        $('vdExtraNovo').value = ''; renderExtras(); enviarCfg();
      }
      const emFoco = (id) => document.activeElement === $(id) || root.activeElement === $(id);
      let vdFiltro = 'todos';
      function renderVenda() {
        if (!vd) return;
        const c = vd.cfg || {};
        $('vdOn').checked = !!vd.ativo;
        $('vdHint').textContent = vd.ativo ? 'ligada' : 'desligada';
        const col = c.colecao || {}; const ven = c.venda || {};
        $('vdColOn').checked = col.ligada !== false; $('vdColModo').value = col.modo || 'ou';
        $('vdVenOn').checked = ven.ligada !== false; $('vdVenModo').value = ven.modo || 'e';
        $('vdResto').checked = !!ven.resto;
        $('vdShiny').value = c.shiny || 'colecao'; $('vdLend').value = c.lendario || 'colecao';
        const val = { vdColP: col.p, vdColIv: col.iv, vdColQ: col.q, vdColN: col.n, vdVenP: ven.p, vdVenIv: ven.iv, vdVenQ: ven.q, vdVenN: ven.n, vdMax: c.maxPorMin };
        if (JSON.stringify(extras) !== JSON.stringify(extrasDe(c.extras))) { extras = extrasDe(c.extras); renderExtras(); }
        for (const id of vdCampos) if (!emFoco(id)) $(id).value = val[id] == null ? '' : String(val[id]);
        $('vdInfo').textContent = !vd.conectado ? 'Sem conexão com o jogo.' : !vd.temLista ? 'Aguardando a lista de Pokémon do jogo…' : (vd.msg || '') + ((vd.vendidos ? ' · vendidos: ' + vd.vendidos : '') + (vd.coletados ? ' · enviados à Coleção: ' + vd.coletados : ''));
        const k = vd.contagem || {};
        $('vdResumo').textContent = vd.temLista ? 'Depósito: ' + vd.deposito + ' · vender: ' + (k.vender || 0) + ' · Coleção: ' + (k.colecao || 0) + ' · manter: ' + (k.manter || 0)  : '';
        // lista dos Pokémon do Depósito por destino: vender / Coleção / sem ação
        const fil = $('vdFiltro'); fil.textContent = '';
        const grupos = [['todos', 'Todos', (k.vender || 0) + (k.colecao || 0) + (k.manter || 0)], ['vender', 'Vender', k.vender || 0], ['colecao', 'Coleção', k.colecao || 0], ['manter', 'Sem ação', k.manter || 0]];
        for (const [id, nome, qtd] of grupos) {
          fil.append(el('button', { className: 'icon vf' + (vdFiltro === id ? ' on' : ''), type: 'button', textContent: nome + ' (' + qtd + ')', onclick: () => { vdFiltro = id; renderVenda(); } }));
        }
        const box = $('vdPrevia'); box.textContent = '';
        const ROT = { vender: 'VENDER', colecao: 'COLEÇÃO', manter: 'SEM AÇÃO' };
        const lista = (vd.previa || []).filter((x) => vdFiltro === 'todos' || x.acao === vdFiltro);
        for (const x of lista) {
          box.append(el('div', { className: 'r' + (x.acao === 'manter' ? '' : ' att'), title: x.motivo || '' }, el('b', { className: 'b vb-' + x.acao, textContent: ROT[x.acao] || x.acao }),
            el('span', { textContent: (x.shiny ? '✨ ' : '') + (x.lend ? '🌟 ' : '') + x.nome + ' Lv' + x.level }),
            el('span', { className: 's', textContent: 'P' + x.p + ' IV' + x.iv + ' Q' + mil(x.q) + ' N' + mil(x.n) })));
        }
        const totalGrupo = vdFiltro === 'todos' ? null : (k[vdFiltro] || 0);
        if (!lista.length) box.append(el('div', { className: 'mut', textContent: vdFiltro === 'manter' ? 'Nenhum Pokémon sem ação.' : 'Nada nesta lista com as regras atuais.' }));
        else if (totalGrupo != null && totalGrupo > lista.length) box.append(el('div', { className: 'mut', textContent: 'Mostrando ' + lista.length + ' de ' + totalGrupo + '.' }));
        else if (totalGrupo == null) box.append(el('div', { className: 'mut', textContent: 'Mostrando até 40 de cada grupo. Passe o mouse para ver o motivo.' }));
      }
      const haVd = (ms) => { const s = Math.max(0, Math.floor((Date.now() - ms) / 1000)); return s < 60 ? 'agora' : s < 3600 ? Math.floor(s / 60) + ' min' : s < 86400 ? Math.floor(s / 3600) + ' h' : Math.floor(s / 86400) + ' d'; };
      const statsVd = (x) => 'P' + x.p + ' IV' + x.iv + ' Q' + mil(x.q) + ' N' + mil(x.n);
      const nomeVd = (x) => (x.shiny ? '✨ ' : '') + (x.lend ? '🌟 ' : '') + x.nome + ' Lv' + x.level;
      function renderRegistroVenda() {
        if (!vd) return;
        const k = vd.contagem || {};
        const sum = $('vrSum'); sum.textContent = '';
        [['Vendidos', vd.vendidos || 0, 'v'], ['Enviados à Coleção', vd.coletados || 0, 'c'], ['Falhas', vd.falhas || 0, 'f'], ['No Depósito', vd.deposito || 0, ''], ['Vão ser vendidos', k.vender || 0, 'v'], ['Vão para a Coleção', k.colecao || 0, 'c'], ['Sobraram', k.manter || 0, '']]
          .forEach(([t, n, c]) => sum.append(el('div', { className: 'vrbox ' + c }, el('b', { textContent: String(n) }), el('span', { textContent: t }))));
        $('vrHint').textContent = vd.ativo ? 'ligada' : 'desligada';
        const sigH = JSON.stringify((vd.hist || []).map((x) => x.em + x.tipo));
        const hb = $('vrHist');
        if (hb.dataset.sig !== sigH) {
          hb.dataset.sig = sigH; hb.textContent = '';
          for (const x of (vd.hist || [])) {
            const rot = x.tipo === 'vendido' ? 'VENDIDO' : x.tipo === 'colecao' ? 'COLEÇÃO' : 'FALHA';
            hb.append(el('div', { className: 'vr ' + x.tipo, title: x.motivo || '' },
              el('b', { className: 'res', textContent: rot }),
              el('span', { className: 'op', textContent: nomeVd(x) }),
              el('span', { className: 'pt', textContent: statsVd(x) }),
              el('span', { className: 'mo', textContent: x.motivo || '' }),
              el('time', { textContent: haVd(x.em) })));
          }
          if (!(vd.hist || []).length) hb.append(el('div', { className: 'mut', textContent: 'Nada foi vendido nem enviado ainda.' }));
        }
        const sobra = vd.sobra || [];
        $('vrSobraN').textContent = (k.manter || 0) + ' no total';
        const sb = $('vrSobra'); const sigS = JSON.stringify(sobra.map((x) => x.id));
        if (sb.dataset.sig !== sigS) {
          sb.dataset.sig = sigS; sb.textContent = '';
          for (const x of sobra) sb.append(el('div', { className: 'vr manter' }, el('b', { className: 'res', textContent: 'FICA' }), el('span', { className: 'op', textContent: nomeVd(x) }), el('span', { className: 'pt', textContent: statsVd(x) }), el('span', { className: 'mo', textContent: x.motivo || '' })));
          if (!sobra.length) sb.append(el('div', { className: 'mut', textContent: vd.temLista ? 'Nada sobrando: toda decisão foi tomada pelas regras.' : 'Aguardando a lista de Pokémon do jogo…' }));
        }
      }
      setInterval(renderRegistroVenda, 15000);   // atualiza o "há X min"
    
      window.addEventListener('message', (ev) => {
        const m = ev.data;
        if (ev.source !== window || !m || m.ch !== 'ateforp-venda' || m.from !== 'venda' || m.type !== 'state') return;
        vd = m.state; renderVenda(); renderRegistroVenda(); listeners.forEach((f) => { try { f(); } catch (e2) { /* ignora */ } });
      });
      vdCmd({ type: 'hello' });
      function enviarCfg() {
        vdCmd({ type: 'cfg', cfg: {
          simular: false, shiny: $('vdShiny').value, lendario: $('vdLend').value, extras: extras.join(','),
          maxPorMin: Math.max(1, Math.min(60, vdNum('vdMax') || 20)),
          colecao: { ligada: $('vdColOn').checked, modo: $('vdColModo').value, p: vdNum('vdColP'), iv: vdNum('vdColIv'), q: vdNum('vdColQ'), n: vdNum('vdColN') },
          venda: { ligada: $('vdVenOn').checked, modo: $('vdVenModo').value, p: vdNum('vdVenP'), iv: vdNum('vdVenIv'), q: vdNum('vdVenQ'), n: vdNum('vdVenN'), resto: $('vdResto').checked }
        } });
      }
      ['vdShiny', 'vdLend', 'vdMax', 'vdColOn', 'vdColModo', 'vdVenOn', 'vdVenModo', 'vdResto', ...vdCampos].forEach((id) => $(id).addEventListener('change', enviarCfg));
      $('vdExtraAdd').addEventListener('click', addExtra);
      $('vdExtraNovo').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); addExtra(); } });
      renderExtras();
      // confirmação dentro da própria janela da extensão (no lugar do alerta do navegador)
      function confirmar(msg, titulo, okTxt) {
        return new Promise((resolve) => {
          const dlg = $('dlg');
          $('dlgT').textContent = titulo || 'Confirmar'; $('dlgM').textContent = msg; $('dlgOk').textContent = okTxt || 'OK';
          const fim = (v) => { dlg.hidden = true; $('dlgOk').onclick = $('dlgNo').onclick = null; window.removeEventListener('keydown', tecla, true); resolve(v); };
          const tecla = (e) => { if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); fim(false); } else if (e.key === 'Enter') { e.preventDefault(); e.stopImmediatePropagation(); fim(true); } };
          $('dlgOk').onclick = () => fim(true); $('dlgNo').onclick = () => fim(false);
          window.addEventListener('keydown', tecla, true);
          dlg.hidden = false; $('dlgNo').focus();
        });
      }
      // diálogo com várias opções (e, opcionalmente, um campo de nome obrigatório)
      function escolher(msg, titulo, botoes, campo) {
        return new Promise((resolve) => {
          const dlg = $('dlg'), btns = $('dlgOk').parentNode;
          $('dlgT').textContent = titulo; $('dlgM').textContent = msg;
          const antes = [$('dlgOk'), $('dlgNo')]; antes.forEach((b) => { b.hidden = true; });
          const caixa = el('div', { className: 'dlgopc' });
          let inp = null;
          if (campo) { inp = el('input', { type: 'text', placeholder: 'Nome da nova regra', maxLength: 40, value: campo.nome || '' }); caixa.append(inp); }
          const fim = (k) => { caixa.remove(); antes.forEach((b) => { b.hidden = false; }); dlg.hidden = true; window.removeEventListener('keydown', tecla, true); resolve({ k, nome: inp ? inp.value.trim() : '' }); };
          const tecla = (e) => { if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); fim(botoes[botoes.length - 1].k); } };
          window.addEventListener('keydown', tecla, true);
          botoes.forEach((b, i) => {
            const bt = el('button', { className: 'icon' + (i === 0 ? ' dlgok' : ''), textContent: b.t });
            bt.addEventListener('click', () => { if (inp && b.k === 'ok' && !inp.value.trim()) { inp.focus(); inp.placeholder = 'Digite um nome para continuar'; return; } fim(b.k); });
            caixa.append(bt);
          });
          btns.parentNode.insertBefore(caixa, btns);
          dlg.hidden = false; (inp || caixa.firstChild).focus();
        });
      }
      $('vdOn').addEventListener('change', async (e) => {
        const box = e.target;
        if (box.checked) {
          box.checked = false;   // só marca depois de confirmar
          if (!(await confirmar('Ligar a venda automática DE VERDADE? Pokémon vendidos ao NPC não podem ser recuperados.', 'Venda automática', 'Ligar'))) return;
          box.checked = true;
        }
        vdCmd({ type: 'ativo', value: box.checked });
      });
      $('vdZerar').addEventListener('click', () => vdCmd({ type: 'zerar' }));
    
      // sub-abas genéricas (PvE e PvP)
      root.querySelectorAll('nav.subg').forEach((nav) => {
        const g = nav.dataset.g;
        nav.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => {
          nav.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
          root.querySelectorAll('.subp[data-g="' + g + '"]').forEach((s) => { s.hidden = s.dataset.p !== b.dataset.p; });
          listeners.forEach((f) => { try { f(); } catch (e) { /* ignora */ } });
        }));
      });
    
      function showTab(t) {
        tab = t;
        root.querySelectorAll('#tabs button[data-tab]').forEach((b) => b.classList.toggle('on', b.dataset.tab === t));
        ['captura', 'pvp', 'itens', 'registro', 'novidades'].forEach((n) => { $('tab-' + n).hidden = n !== t; });
        if (t === 'itens') renderMercadoSub();
        if (t === 'registro') renderLog();
        if (t === 'novidades') renderNovidades();
      }
      // ---------- Shiny Hunt (shinyhunt.js) ----------
      let hn = null, hnLogSig = '';
      const hnCmd = (o) => window.postMessage(Object.assign({ ch: 'ateforp-hunt', from: 'ui' }, o), '*');
      const hnEnviarCfg = () => hnCmd({ type: 'cfg', passoMs: Math.round((Number($('hnPasso').value) || 1) * 1000), olharMs: Math.round((Number($('hnOlhar').value) || 0.3) * 1000), parar: $('hnParar').checked, centro: $('hnCentro').checked, autoLigar: $('hnAuto').checked });
      function renderHunt() {
        if (!hn) return;
        $('hnOn').checked = !!hn.ligado;
        const ESTADO = { parado: 'desligado', espera: 'ligado — escolhendo o próximo mapa', olhando: 'ligado — olhando o mapa', cacando: 'ligado — SHINY! derrotando e capturando' };
        $('hnHint').textContent = hn.ligado ? ESTADO[hn.est] || 'ligado' : (hn.msg && hn.msg !== 'Desligado.' ? hn.msg : 'desligado');
        const m = hn.mapas;
        $('hnInfo').textContent = !hn.conectado ? 'Sem conexão com o jogo.' : !m.total ? 'Sem a lista de mapas: recarregue o jogo (F5).' : 'Nível ' + (hn.nivel != null ? fmt(hn.nivel) : '?') + ' · ' + m.elegiveis + ' mapas liberados (sem Outland)';
        if (root.activeElement !== $('hnPasso')) $('hnPasso').value = String((hn.cfg.passoMs || 1000) / 1000);
        if (root.activeElement !== $('hnOlhar')) $('hnOlhar').value = String((hn.cfg.olharMs || 300) / 1000);
        $('hnParar').checked = !!hn.cfg.parar; $('hnCentro').checked = !!hn.cfg.centro; $('hnAuto').checked = !!hn.cfg.autoLigar;
        $('hnStats').textContent = 'Rodada ' + (hn.rodadas + 1) + ' · mapa ' + Math.min(hn.prox + (hn.cur >= 0 ? 0 : 0), (hn.rota || []).length) + ' de ' + (hn.rota || []).length + ' · avistados ' + fmt(hn.avistados || 0) + (hn.desde ? ' desde ' + new Date(hn.desde).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) : '') + ' · shinies ' + hn.shinies.achados + ' (capturados ' + hn.shinies.capturados + ')';
        { // rota esperada
          const rota = hn.rota || []; const sigR = rota.length + ':' + hn.prox + ':' + hn.cur;
          if ($('hnRota').dataset.sig !== sigR) {
            $('hnRota').dataset.sig = sigR; $('hnRota').textContent = '';
            $('hnRotaResumo').textContent = rota.length + ' mapas · próximo: ' + (rota.length ? rota[hn.prox][0] : '—');
            rota.forEach(([nome, r, nv], i) => { const cls = i === hn.cur ? 'atual' : i === hn.prox ? 'prox' : i < hn.prox ? 'feito' : 'falta'; $('hnRota').append(el('div', { className: 'rt ' + cls, textContent: (i + 1) + '. ' + nome + ' · ' + (r || '?') + (nv ? ' · Nv ' + nv : '') })); });
            const a = $('hnRota').querySelector('.atual,.prox'); if (a && !$('hnRota').dataset.rolou) { $('hnRota').dataset.rolou = '1'; $('hnRota').scrollTop = Math.max(0, a.offsetTop - 60); }
          }
        }
        const box = $('hnLog'); const lg = hn.log || []; const sig = lg.length + ':' + (lg.length ? lg[lg.length - 1].t : 0);
        if (box.dataset.sig !== sig) {
          box.dataset.sig = sig; const fim = box.scrollTop + box.clientHeight >= box.scrollHeight - 8; box.textContent = '';
          for (const l of lg) box.append(el('div', { className: l.lvl }, el('time', { textContent: new Date(l.t).toLocaleTimeString('pt-BR') }), l.msg));
          if (!lg.length) box.append(el('div', { className: 'mut', textContent: 'Sem registros ainda.' }));
          if (fim) box.scrollTop = box.scrollHeight;
        }
      }
      async function copiarTextoHunt(txt, aviso) {
        let ok = false;
        try { await navigator.clipboard.writeText(txt); ok = true; } catch (e) { try { const ta = document.createElement('textarea'); ta.value = txt; ta.style.cssText = 'position:fixed;opacity:0'; document.body.append(ta); ta.select(); ok = document.execCommand('copy'); ta.remove(); } catch (e2) { ok = false; } }
        $('hnInfo').textContent = ok ? aviso : 'Não consegui copiar automaticamente.';
      }
      window.addEventListener('message', (ev) => {
        const m = ev.data;
        if (ev.source !== window || !m || m.ch !== 'ateforp-hunt' || m.from !== 'hunt') return;
        if (m.type === 'state') { hn = m.state; renderHunt(); listeners.forEach((f) => { try { f(); } catch (e2) { /* ignora */ } }); }
        else if (m.type === 'diag') copiarTextoHunt(JSON.stringify(m.diag, null, 1), 'Diagnóstico dos mapas copiado. Cole na conversa.');
      });
      $('hnOn').addEventListener('change', async (e) => {
        const on = e.target.checked;
        if (on) {
          e.target.checked = false;
          const ok = await confirmar('O Shiny Hunt vai ENTRAR E SAIR dos mapas liberados na sua conta automaticamente, um por vez, até achar um shiny. Seu personagem sai do mapa em que está agora. Deixe a Auto Captura ligada para capturar. Pode desligar a qualquer momento.', 'Ligar Shiny Hunt', 'Ligar');
          if (!ok) return;
        }
        hnCmd({ type: 'ligar', value: on });
      });
      for (const id of ['hnPasso', 'hnOlhar', 'hnParar', 'hnCentro', 'hnAuto']) $(id).addEventListener('change', hnEnviarCfg);
      $('hnRotaCopiar').addEventListener('click', () => copiarTextoHunt(((hn && hn.rota) || []).map(([n, r], i) => (i + 1) + '. ' + n + ' (' + r + ')').join('\n'), 'Rota copiada.'));
      $('hnRotaReset').addEventListener('click', async () => { if (await confirmar('Reiniciar a rota do Shiny Hunt a partir do primeiro mapa?', 'Resetar rota', 'Resetar')) hnCmd({ type: 'resetar-rota' }); });
      $('hnZerar').addEventListener('click', () => hnCmd({ type: 'zerar' }));
      $('hnLogLimpar').addEventListener('click', () => hnCmd({ type: 'limpar-log' }));
      $('hnLogCopiar').addEventListener('click', () => copiarTextoHunt(((hn && hn.log) || []).map((l) => new Date(l.t).toLocaleTimeString('pt-BR') + ' [' + l.lvl + '] ' + l.msg).join('\n'), 'Registro copiado.'));
      hnCmd({ type: 'hello' });
    
      // ---------- Shiny Monitor (shinymon.js) ----------
      let sm = null;
      const smCmd = (o) => window.postMessage(Object.assign({ ch: 'ateforp-shiny', from: 'ui' }, o), '*');
      function renderShiny() {
        if (!sm) return;
        const r = sm.resumo;
        $('smOn').checked = !!sm.ligado; $('smHint').textContent = sm.ligado ? 'coletando' : 'parado';
        const caixa = $('smResumo'); caixa.textContent = '';
        const lin = (rot, val, dica) => caixa.append(el('div', { className: 'smlin' }, el('span', { className: 'mut', textContent: rot }), el('b', { textContent: val }), dica ? el('small', { className: 'mut', textContent: ' ' + dica }) : ''));
        lin('Monitorando desde', new Date(r.desde).toLocaleString('pt-BR'));
        lin('Pokémon que apareceram', fmt(r.spawns), '(todos, shiny ou não)');
        lin('Shinies que apareceram', String(r.shinyVistos), r.shinyVistos ? '(' + r.shinyCapturados + ' capturados · ' + r.shinyFugidos + ' fugiram' + (r.shinySemCaptura ? ' · ' + r.shinySemCaptura + ' sem desfecho' : '') + ')' : '(nenhum ainda)');
        lin('Sem shiny há', fmt(r.spawnsDesdeUltimoShiny) + ' Pokémon', r.shinyVistos ? '(desde o último shiny)' : '(desde que o monitor começou)');
        lin('Média', r.umShinyACada ? '1 shiny a cada ~' + fmt(r.umShinyACada) + ' Pokémon' : 'ainda sem dados', r.umShinyACada ? '' : '(precisa de pelo menos 1 shiny)');
        const box = $('smEnc'); box.textContent = '';
        for (const e of sm.encontros.slice().reverse()) {
          box.append(el('div', { className: 'row-poke ' + (e.fim === 'capturado' ? 'ok' : e.fim === 'fugiu' ? 'bad' : '') },
            el('b', { textContent: '✨ ' + e.nome + ' Nv ' + e.level }),
            el('span', { className: 'mut', textContent: ' ' + new Date(e.t).toLocaleString('pt-BR') }),
            el('div', { textContent: (e.fim || 'em andamento') + ' · ' + e.tent.length + ' bola(s)' + (e.tent.length ? ': ' + e.tent.map((t) => 'B' + t.b + ' ' + (t.c * 100).toFixed(1) + '%' + (t.ok ? ' ✔' : ' ✘')).join(', ') : '') + ' · vistos antes: ' + fmt(e.antes) })));
        }
        if (!sm.encontros.length) box.append(el('div', { className: 'mut', textContent: 'Nenhum shiny registrado ainda.' }));
      }
      window.addEventListener('message', (ev) => {
        const m = ev.data;
        if (ev.source !== window || !m || m.ch !== 'ateforp-shiny' || m.from !== 'shiny' || m.type !== 'state') return;
        sm = m.state; renderShiny();
      });
      smCmd({ type: 'hello' });
      $('smOn').addEventListener('change', (e) => smCmd({ type: 'ligar', value: e.target.checked }));
      $('smLimpar').addEventListener('click', async () => { if (await confirmar('Apagar todos os dados do Shiny Monitor?', 'Limpar Shiny Monitor', 'Apagar')) smCmd({ type: 'limpar' }); });
      $('smCopiar').addEventListener('click', async () => {
        const txt = sm ? sm.texto : '';
        if (!txt) { $('smMsg').textContent = 'Ainda não há dados.'; return; }
        let ok = false;
        try { await navigator.clipboard.writeText(txt); ok = true; } catch (e) {
          try { const ta = document.createElement('textarea'); ta.value = txt; ta.style.cssText = 'position:fixed;opacity:0'; document.body.append(ta); ta.select(); ok = document.execCommand('copy'); ta.remove(); } catch (e2) { ok = false; }
        }
        $('smMsg').textContent = ok ? 'Relatório copiado (' + Math.round(txt.length / 1024 * 10) / 10 + ' KB). Cole na conversa.' : 'Não consegui copiar. Tente de novo com o painel em foco.';
      });
    
      // ---------- Novidades / aviso de nova versão ----------
      const RELS = window.__ateforpReleases || [];
      const VERSAO = RELS[0] ? RELS[0].v : '';
      const cmpV = (a, b) => { const x = String(a).split('.').map(Number), y = String(b).split('.').map(Number); for (let i = 0; i < 3; i++) { if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0); } return 0; };
      let nova = null, novaErro = '', novaVerif = 0, novaVerificando = false;
      const URL_USERSCRIPT = 'https://raw.githubusercontent.com/aasj94/PokeIdle-Tools/main/userscript/pokeidle-tools-by-ateforp.user.js';
      const ehExtensao = () => { try { return !!(chrome.runtime && chrome.runtime.id && chrome.runtime.sendMessage); } catch (e) { return false; } };
      function renderNovidades() {
        $('novVer').textContent = VERSAO ? 'versão instalada: ' + VERSAO : '';
        const av = $('novAviso');
        const quando = novaVerif ? ' Última verificação: ' + new Date(novaVerif).toLocaleTimeString('pt-BR') + '.' : '';
        if (!ehExtensao()) {
          av.textContent = 'Você está usando o userscript (versão ' + VERSAO + '). A página do jogo não deixa o script consultar o GitHub, então ele não sabe sozinho se há versão nova. Para atualizar com 1 clique: toque em "Atualizar userscript"; o Tampermonkey abre a tela de instalação, e você confirma em "Atualizar". (Também dá para usar "Verificar atualizações" no próprio Tampermonkey.)';
          const dl2 = $('novBaixar'); if (dl2) { dl2.hidden = false; dl2.href = URL_USERSCRIPT; dl2.textContent = '⬇ Atualizar userscript'; }
          const bt2 = $('novChecar'); if (bt2) bt2.hidden = true;
        } else if (novaVerificando) av.textContent = 'Verificando…';
        else if (nova) av.textContent = 'Nova versão disponível: ' + nova.version + ' (a sua é a ' + VERSAO + '). A extensão não se atualiza sozinha: clique em "Baixar atualização", extraia o ZIP por cima da pasta da extensão e recarregue em chrome://extensions. No userscript, use "Atualizar script agora" no Tampermonkey/Greasy Fork.' + quando;
        else av.textContent = novaErro ? 'Não consegui verificar agora (' + novaErro + ').' + quando : 'Você está na versão mais recente (' + VERSAO + ').' + quando;
        const dl = ehExtensao() ? $('novBaixar') : null; if (dl) { dl.textContent = '⬇ Baixar atualização'; dl.hidden = !nova; if (nova) dl.href = nova.download || 'https://github.com/aasj94/PokeIdle-Tools/raw/main/download/pokeidle-tools-by-ateforp.zip'; }
        const bt = ehExtensao() ? $('novChecar') : null; if (bt) { bt.hidden = false; bt.disabled = novaVerificando; }
        const box = $('novLista'); box.textContent = '';
        RELS.forEach((r, i) => {
          const ul = el('ul', {}); for (const t of r.itens) ul.append(el('li', { textContent: t }));
          box.append(el('div', { className: 'card' }, el('h2', {}, 'v' + r.v + (i === 0 ? ' — instalada' : '')), ul));
        });
      }
      function marcarNova() {
        const b = $('novBtn'); if (b) b.textContent = nova ? 'Novidades 🔴' : 'Novidades';
        if (tab === 'novidades') renderNovidades();
      }
      function checarAtualizacao() {
        let canal = null;
        try { canal = chrome.runtime && chrome.runtime.id && chrome.runtime.sendMessage; } catch (e) { canal = null; }
        if (!canal || !VERSAO) { renderNovidades(); return; }
        novaVerificando = true; renderNovidades();
        const fim = () => { novaVerificando = false; novaVerif = Date.now(); renderNovidades(); };
        const limite = setTimeout(() => { if (novaVerificando) { novaErro = 'sem resposta'; fim(); } }, 12000);
        try {
          chrome.runtime.sendMessage({ type: 'ateforp-check-update' }, (r) => {
            clearTimeout(limite);
            if (chrome.runtime.lastError || !r || !r.ok) { novaErro = (r && r.erro) || (chrome.runtime.lastError && chrome.runtime.lastError.message) || 'sem resposta'; fim(); return; }
            novaErro = ''; nova = cmpV(r.version, VERSAO) > 0 ? r : null; marcarNova(); fim();
          });
        } catch (e) { clearTimeout(limite); novaErro = 'extensão recarregada: atualize a página'; fim(); }
      }
      $('novChecar').addEventListener('click', checarAtualizacao);
      setTimeout(checarAtualizacao, 4000); setInterval(checarAtualizacao, 3 * 3600 * 1000);
      function showSub(s) { if (s === 'compras' || s === 'hist' || s === 'pokemon') navTop = s; sub = calcSub(); renderMercadoSub(); }
      root.querySelectorAll('#pknav button').forEach((b) => b.addEventListener('click', () => { navPk = b.dataset.pk; renderMercadoSub(); }));
      root.querySelectorAll('#autonav button').forEach((b) => b.addEventListener('click', () => { navAu = b.dataset.au; renderMercadoSub(); }));
      root.querySelectorAll('#subtabs button').forEach((b) => b.addEventListener('click', () => showSub(b.dataset.sub)));
      root.querySelectorAll('#tabs button[data-tab]').forEach((b) => b.addEventListener('click', () => showTab(b.dataset.tab)));
      $('enabled').addEventListener('change', (e) => { cfg.enabled = e.target.checked; save(); renderMaster(); renderStatus(); });
      $('intervalS').addEventListener('change', (e) => {
        const v = parseFloat(String(e.target.value).replace(',', '.'));
        cfg.intervalMs = Math.max(4000, Math.round((Number.isFinite(v) ? v : 5) * 1000));
        save(); renderMaster();
      });
      $('resetAll').addEventListener('click', () => cmd({ type: 'resetAll' }));
      $('search').addEventListener('input', renderPicker);
      $('scan').addEventListener('click', () => cmd({ type: 'scan' }));
      $('addManual').addEventListener('click', () => {
        const id = parseInt($('manualId').value, 10);
        if (id > 0) { addRule(id); $('manualId').value = ''; }
      });
      let hWait = 0;                       // quando o usuário pediu; some quando chega resposta do jogo
      const hPedir = (o) => { hWait = Date.now(); cmd(o); renderHistory(); };
      $('hRefresh').addEventListener('click', () => hPedir({ type: 'history', pagina: 0, todas: true }));
      $('hMore').addEventListener('click', () => {
        const h = (estado && estado.history) || { pages: {} };
        hPedir({ type: 'history', pagina: Object.keys(h.pages || {}).length });
      });
      setInterval(() => { if (hWait) renderHistory(); }, 1000);
      $('clearCompras').addEventListener('click', () => cmd({ type: 'clearCompras' }));
    
      chrome.storage.local.get(['cfg', 'estado'], (d) => {
        if (d.cfg) cfg = Object.assign(cfg, d.cfg);
        estado = d.estado || null;
        renderMaster(); renderRules(); renderPicker(); renderStatus(); renderHistory(); renderLog();
      });
    
      chrome.storage.onChanged.addListener((ch, area) => {
        if (area !== 'local') return;
        if (ch.cfg && !saveTimer && ch.cfg.newValue && JSON.stringify(ch.cfg.newValue) !== JSON.stringify(cfg)) {
          cfg = Object.assign({}, cfg, ch.cfg.newValue);
          renderMaster(); renderStatus();
          const focused = root.activeElement && root.activeElement.closest && root.activeElement.closest('#rules');
          if (!focused) renderRules();
        }
        if (ch.estado) {
          estado = ch.estado.newValue;
          renderStatus();
          refreshRules();
          if (tab === 'itens' && sub === 'compras') renderPicker();
          if (tab === 'itens' && sub === 'hist') { renderHistory(); renderTentativas(); }
          if (tab === 'registro') renderLog();
        }
      });
    
      setInterval(renderStatus, 2000);
      showTab('captura');
      return {
        showSub,
        showTab,
        captura: () => !!(cs && cs.ativo),
        conectado: () => !!(cs && cs.conectado),
        setCaptura: (v) => { catchCmd({ type: 'captura', value: !!v }); if (cs) { cs.ativo = !!v; renderCatch(); } },
        pvp: () => !!(pvp && pvp.ativo),
        setPvp: (v) => pvpCmd({ type: 'ativo', value: !!v }),
        // funcionalidades ativas que NÃO são PvP, Auto Captura nem Shiny Hunt (a chave inglesa fica vermelha quando há alguma)
        outrasAtivas: () => {
          const l = [];
          if (cfg.enabled) l.push('compra de itens');
          if (cs && cs.estoque && cs.estoque.ativo) l.push('reposição de itens');
          if (rp && rp.ativo) l.push('compra de Pokémon');
          if (rp && rp.imed && rp.imed.ativo) l.push('compra imediata');
          if (rp && rp.ren && rp.ren.ativo) l.push('renovação de anúncios');
          if (vd && vd.ativo) l.push('venda de Pokémon');
          return l;
        },
        shiny: () => !!(hn && hn.ligado),
        setShiny: (v) => hnCmd({ type: 'ligar', value: !!v }),
        onChange: (f) => listeners.push(f)
      };
    }
    
    /*
     * PokeIdle Tools by Ateforp — painel dentro do jogo.
     * Visual do Auto Captura: botão do Gyarados (liga/desliga a captura) + botão "Tools" encaixados logo
     * acima do card do Pokémon em campo; abrem uma janela azul arrastável pelo cabeçalho.
     * Fica num Shadow DOM, então o CSS do jogo não mexe nele e a janela não fecha sozinha nem ao digitar.
     */
    (() => {
      if (window.top !== window || window.__pmPanel) return;
      window.__pmPanel = true;
    
      const TEMPLATE = `
    <div class="root">
      <div class="panel" id="panel" hidden>
        <header id="hdr" title="Segure e arraste para mover a janela (duplo clique volta ao centro e ao tamanho padrão)">
          <span id="logo"></span>
          <h1>PokeIdle Tools by Ateforp</h1>
          <span id="status" class="pill off">aguardando o jogo</span>
          <button id="max" class="icon" title="Maximizar a janela (clique de novo para voltar)">⤢</button>
          <button id="pin" class="icon" title="Fixar a janela: não minimiza ao clicar fora (útil para usar o jogo e o Mercado ao mesmo tempo)">📌</button>
          <button id="reload" class="icon" title="Recarregar a página do jogo (F5)">↻</button>
          <button id="close" class="icon" title="Fechar">✕</button>
        </header>
    
        <div id="pixBox" class="pixbox" hidden>
          <div class="pixt">🤲 Apoie o criador</div>
          <p>A ferramenta é gratuita e continua assim. Se ela foi útil para você e <b>se sentir no seu coração a vontade de ajudar, com qualquer valor</b>, fico muito agradecido. É totalmente opcional.</p>
          <div class="pixqr" id="pixQr"></div>
          <div class="mut pixh">Aponte a câmera do celular para o QR code ou abra o link.</div>
          <div class="btns"><button id="pixAbrir" class="icon">Abrir LivePix</button><button id="pixCopy2" class="icon">Copiar link</button><button id="pixClose" class="icon">Fechar</button></div>
          <div class="mut" id="pixMsg"></div>
        </div>
        <div id="dlg" class="dlg" hidden>
          <div class="dlgbox" role="alertdialog" aria-modal="true">
            <div class="dlgt" id="dlgT">Confirmar</div>
            <p id="dlgM"></p>
            <div class="btns"><button id="dlgOk" class="icon dlgok">OK</button><button id="dlgNo" class="icon">Cancelar</button></div>
          </div>
        </div>
        <div class="corpo">
          <nav class="tabs" id="tabs">
            <button data-tab="captura" class="on">PvE</button>
            <button data-tab="pvp">PvP</button>
            <button data-tab="itens">Mercado RMT</button>
            <button data-tab="registro">Logs</button>
            <button data-tab="novidades" id="novBtn">Novidades</button>
            <button id="pixBtn" class="pixbtn" title="Apoiar o criador (opcional)" aria-label="Apoiar o criador">🤲</button>
          </nav>
    
          <section id="tab-captura" class="tab">
            <nav class="tabs sub subg" data-g="pve">
              <button data-p="est" class="on">Reposição de itens</button>
              <button data-p="cap">Captura</button>
              <button data-p="venda">Venda Pokémon</button>
            </nav>
            <div class="subp" data-g="pve" data-p="est">
            <div class="card">
              <label class="switch">
                <input type="checkbox" id="estOn">
                <span class="slider"></span>
                <span class="lbl"><b>Repor estoque automaticamente</b><small id="estHint">desligado</small></span>
              </label>
              <div class="row2"><span>Conferir a cada</span>
                <select id="estInt"><option value="1">1 min</option><option value="2">2 min</option><option value="5">5 min</option><option value="10">10 min</option><option value="30">30 min</option></select>
              </div>
              <div id="estList"></div>
              <div class="beast">
                <div class="bt"><img id="beastImg" alt="" src="/img/ball-beast.png"> Beast Ball · loja VIP (diamantes) <small id="beastTem"></small></div>
                <label class="switch"><input type="checkbox" id="beastOn"><span class="slider"></span><span class="lbl"><b>Comprar Beast Ball com diamantes</b></span></label>
                <div id="beastWarn" class="warnbox" hidden>
                  <div>ATENÇÃO: isto gasta DIAMANTES (moeda premium) automaticamente. Cada compra é um pacote de <span id="beastPk"></span> Beast Balls, no máximo <span id="beastMax"></span> pacotes por sessão da página, e só quando o estoque ficar abaixo do mínimo que você definir.</div>
                  <div class="btns"><button id="beastYes">Confirmar e ativar</button><button id="beastNo" class="icon">Cancelar</button></div>
                </div>
                <div class="est3 head"><span></span><span>abaixo de</span><span>repõe até</span></div>
                <div class="est3"><span>Beast Ball</span><input id="beastBelow" type="number" min="0" max="9999" step="1" placeholder="0"><input id="beastUp" type="number" min="0" max="9999" step="1" placeholder="0"></div>
                <div class="mut">Máx. pacotes por sessão da página. Vale com "Repor estoque" ligado ou em "Rodar agora".</div>
              </div>
              <div class="btns"><button id="estRun">Rodar agora</button></div>
              <div id="estStatus" class="stat">Parado.</div>
              <div class="mut">Compra direto pelo servidor (a loja não é aberta) quando o estoque fica abaixo de "abaixo de" (vazio = usa "repõe até"). "repõe até" 0 = não compra o item. Máximo de 9999 por campo. Gasta o ouro do jogo.</div>
            </div>
            </div>
            <div class="subp" data-g="pve" data-p="cap" hidden>
            <div class="card">
              <h2>AUTO CAPTURA <small id="capHint">desligada</small></h2>
              <label class="switch">
                <input type="checkbox" id="capOn">
                <span class="slider"></span>
                <span class="lbl"><b>Clicar nos Pokémon caídos</b><small>a cada 2 s · igual ao clique no Gyarados (os dois ficam sincronizados)</small></span>
              </label>
              <label class="switch">
                <input type="checkbox" id="capAuto">
                <span class="slider"></span>
                <span class="lbl"><b>Ligar automaticamente ao se logar</b><small>desmarcado: a Auto Captura sempre começa desligada quando você entra no jogo</small></span>
              </label>
              <label class="row" style="display:flex;align-items:center;gap:8px;margin-top:8px">
                <span class="lbl"><b>Bola quando a tela do jogo está no modo Economia/Ultra</b><small>nesses modos a lista de caídos some e a captura é feita direto; escolha a bola (sem estoque, usa a primeira que tiver)</small></span>
                <select id="capBolaTela"><option value="0">Automática (como o jogo)</option><option value="1">Poke Ball</option><option value="2">Great Ball</option><option value="3">Super Ball</option><option value="4">Ultra Ball</option></select>
              </label>
              <label class="switch">
                <input type="checkbox" id="capBeastShiny">
                <span class="slider"></span>
                <span class="lbl"><b>Usar Beast Ball para capturar shiny</b><small>desligado por padrão. Ligado: quando um Pokémon shiny cai, a Beast Ball é lançada nele (uma única vez, pois se falhar o shiny foge). Só usa as que você já tem; não compra. Sem estoque, usa a bola normal. Os Pokémon comuns não mudam.</small></span>
              </label>
              <div class="mut" id="capTelaInfo"></div>
              <label class="switch">
                <input type="checkbox" id="capHud">
                <span class="slider"></span>
                <span class="lbl"><b>Estatísticas para modo economia</b><small>quadro ao vivo nos modos Economia/Ultra (recursos, captura, PvP, compras). Dá para mover, redimensionar, minimizar e fixar</small></span>
              </label>
              <div class="hudsec" id="hudSec" style="display:flex;flex-wrap:wrap;gap:10px;margin:4px 0 0 4px;font-size:12px">
                <label><input type="checkbox" data-hs="recursos"> Bolas e gold</label>
                <label><input type="checkbox" data-hs="captura"> Captura</label>
                <label><input type="checkbox" data-hs="pvp"> PvP</label>
                <label><input type="checkbox" data-hs="compras"> Compras</label>
              </div>
            </div>
                    <div class="card">
              <h2>SHINY HUNT <small>beta</small></h2>
              <label class="switch">
                <input type="checkbox" id="hnOn">
                <span class="slider"></span>
                <span class="lbl"><b>Caçar shiny nos mapas</b><small id="hnHint">desligado</small></span>
              </label>
              <div class="mut" id="hnInfo"></div>
              <div class="fld"><label for="hnPasso">Intervalo mínimo entre ações (s)</label><input id="hnPasso" type="number" min="1" max="10" step="0.5" value="1"></div>
              <div class="fld"><label for="hnOlhar">Tempo olhando cada mapa (s)</label><input id="hnOlhar" type="number" min="0.3" max="5" step="0.1" value="0.3"></div>
              <label class="switch">
                <input type="checkbox" id="hnAuto">
                <span class="slider"></span>
                <span class="lbl"><b>Ligar automaticamente ao se logar</b><small>desmarcado: o Shiny Hunt sempre começa desligado quando você entra no jogo</small></span>
              </label>
              <div class="fld"><label><input id="hnParar" type="checkbox"> parar depois de resolver um shiny</label></div>
              <div class="fld"><label><input id="hnCentro" type="checkbox"> passar pelo Centro Pokémon entre os mapas</label><small class="mut">Costuma ser um pouco mais rápido (cerca de 1 a 2 s por mapa) e mais constante, porque sai do mapa antes de o herói começar a lutar. Sem o Centro, a troca direta às vezes é recusada por combate e espera um pouco. O jogo só deixa trocar de mapa a cada ~10 s nos dois casos.</small></div>
              <div class="mut" id="hnStats"></div>
              <details class="rotabox"><summary>Rota esperada</summary>
                <div class="mut" id="hnRotaResumo"></div>
                <div id="hnRota" class="rota"></div>
                <div class="btns"><button id="hnRotaReset" class="icon">Resetar rota</button><button id="hnRotaCopiar" class="link">copiar</button><button id="hnZerar" class="link">zerar contagens</button></div>
              </details>
              <h2>REGISTRO <button id="hnLogCopiar" class="link">copiar</button> <button id="hnLogLimpar" class="link">limpar</button></h2>
              <div id="hnLog" class="log"></div>
            </div>
            </div>
            <div class="subp" data-g="pve" data-p="venda" hidden>
              <nav class="tabs sub subg" data-g="vnd">
                <button data-p="cfg" class="on">Configurar Venda Automática</button>
                <button data-p="reg">Registro de Vendas</button>
              </nav>
            <div class="subp" data-g="vnd" data-p="cfg">
            <div class="card" id="vendaCard">
              <h2>VENDER AUTOMATICAMENTE <small id="vdHint">desligada</small></h2>
              <label class="switch">
                <input type="checkbox" id="vdOn">
                <span class="slider"></span>
                <span class="lbl"><b>Vender / enviar para a Coleção sozinho</b><small>age nos Pokémon do Depósito (fora da equipe e fora da Coleção) segundo as regras abaixo, direto pelo servidor</small></span>
              </label>
              <div class="mut" id="vdInfo">Desligada.</div>
              <h3>Vai para a Coleção se…</h3>
              <div class="row inline"><label><input type="checkbox" id="vdColOn" checked> regra ligada</label>
                <select id="vdColModo"><option value="ou">qualquer uma bater (OU)</option><option value="e">todas baterem (E)</option></select></div>
              <div class="est4"><span>P ≥</span><input id="vdColP" type="number" min="1" max="5" step="1" placeholder="—"><span>IV ≥</span><input id="vdColIv" type="number" min="0" step="1" placeholder="—"><span>Q ≥</span><input id="vdColQ" type="number" min="0" step="0.01" placeholder="—"><span>N ≥</span><input id="vdColN" type="number" min="0" step="0.01" placeholder="—"></div>
              <h3>Vende se…</h3>
              <div class="row inline"><label><input type="checkbox" id="vdVenOn" checked> regra ligada</label>
                <select id="vdVenModo"><option value="e">todas baterem (E)</option><option value="ou">qualquer uma bater (OU)</option></select></div>
              <div class="est4"><span>P ≤</span><input id="vdVenP" type="number" min="1" max="5" step="1" placeholder="—"><span>IV ≤</span><input id="vdVenIv" type="number" min="0" step="1" placeholder="—"><span>Q ≤</span><input id="vdVenQ" type="number" min="0" step="0.01" placeholder="—"><span>N ≤</span><input id="vdVenN" type="number" min="0" step="0.01" placeholder="—"></div>
              <label class="switch">
                <input type="checkbox" id="vdResto">
                <span class="slider"></span>
                <span class="lbl"><b>Vender todo o resto</b><small>vende tudo que sobrar: o que não foi para a Coleção nem foi mantido pelas exceções (precisa da regra "Vende se" ligada)</small></span>
              </label>
              <h3>Exceções</h3>
              <div class="row inline"><label>✨ Shiny <select id="vdShiny"><option value="colecao">enviar para a Coleção</option><option value="manter">manter no Depósito</option><option value="regras">seguir as regras</option><option value="vender">vender</option></select></label></div>
              <div class="row inline"><label>🌟 Lendário/mítico <select id="vdLend"><option value="colecao">enviar para a Coleção</option><option value="manter">manter no Depósito</option><option value="regras">seguir as regras</option><option value="vender">vender</option></select></label></div>
              <div class="extras">
                <div class="mut">Nomes extras tratados como lendários (a lista já traz os lendários e míticos conhecidos)</div>
                <div class="row addn"><input id="vdExtraNovo" type="text" placeholder="nome do Pokémon, ex.: Furious Scizor"><button id="vdExtraAdd" class="icon">Adicionar</button></div>
                <div id="vdExtraLista" class="chips"></div>
              </div>
              <div class="row inline"><label>Máx. de ações por minuto <input id="vdMax" type="number" min="1" max="60" step="1" value="20"></label></div>
              <div class="mut" id="vdResumo"></div>
              <div id="vdFiltro" class="vfil"></div>
              <div id="vdPrevia" class="list"></div>
              <div class="mut">Regras: P = potência, IV = soma dos IVs, Q = qualidade, N = nota. Campo vazio = ignorado. A Coleção vem primeiro; só depois a venda. A venda ao NPC é irreversível.</div>
            </div>
            </div>
            <div class="subp" data-g="vnd" data-p="reg" hidden>
              <div class="card">
                <h2>RESUMO <small id="vrHint"></small></h2>
                <div class="vrsum" id="vrSum"></div>
              </div>
              <div class="card">
                <h2>O QUE FOI FEITO</h2>
                <div id="vrHist" class="pvhist vrhist"></div>
                <div class="btns"><button id="vdZerar" class="icon">limpar histórico e contagem</button></div>
              </div>
              <div class="card">
                <h2>SOBROU PARA DECIDIR <small id="vrSobraN"></small></h2>
                <div class="mut">Pokémon do Depósito que nenhuma regra pegou (ficam onde estão).</div>
                <div id="vrSobra" class="pvhist vrhist"></div>
              </div>
            </div>
            </div>
          </section>
    
          <section id="tab-pvp" class="tab" hidden>
            <nav class="tabs sub subg" data-g="pvp">
              <button data-p="cfg" class="on">Configurações</button>
              <button data-p="hist">Partidas</button>
            </nav>
            <div class="subp" data-g="pvp" data-p="cfg">
            <div class="card">
              <h2>PvP AUTOMÁTICO <small id="pvpHint">desligado</small></h2>
              <label class="switch">
                <input type="checkbox" id="pvpOn">
                <span class="slider"></span>
                <span class="lbl"><b>Buscar partida sozinho</b><small>a cada luta busca de novo sozinho, sem abrir a tela de PvP (respeita a espera do servidor) · igual ao clique na espada Pokémon, no cartão do jogador (os dois ficam sincronizados)</small></span>
              </label>
              <label class="switch">
                <input type="checkbox" id="pvpAuto">
                <span class="slider"></span>
                <span class="lbl"><b>Ligar automaticamente ao se logar</b><small>desmarcado: o PvP automático sempre começa desligado quando você entra no jogo</small></span>
              </label>
              <div class="mut" id="pvpInfo">Desligado.</div>
              <div class="btns"><button id="pvpSair" class="icon" disabled title="Sai da fila de espera e desliga a busca automática">Sair da fila</button></div>
              <label class="switch">
                <input type="checkbox" id="pvpOcultar" checked>
                <span class="slider"></span>
                <span class="lbl"><b>Ocultar a tela da luta</b><small>fecha sozinho a janela do replay quando a partida começa (só com o PvP automático ligado)</small></span>
              </label>
              <div class="row inline"><label>Buscar de novo <input id="pvpEspera" type="number" min="3" max="600" step="1" value="10"> s depois do resultado da luta</label></div>
            </div>
            </div>
            <div class="subp" data-g="pvp" data-p="hist" hidden>
            <div class="card">
              <h2>PARTIDAS</h2>
              <div class="pvstreak" id="pvpStreak">🔥 Sequência de vitórias: 0</div>
              <div class="mut" id="pvpRank"></div>
              <div class="mut" id="pvpStats"></div>
              <div id="pvpHist" class="pvhist"></div>
              <div class="btns"><button id="pvpReset" class="icon">zerar contagem</button></div>
            </div>
            </div>
          </section>
    
    
          <section id="tab-novidades" class="tab" hidden>
            <div class="card">
              <h2>NOVIDADES <small id="novVer"></small></h2>
              <div class="mut" id="novAviso"></div>
              <div class="btns"><button id="novChecar" class="icon">Verificar atualização</button><a id="novBaixar" class="icon" href="https://github.com/aasj94/PokeIdle-Tools/raw/main/download/pokeidle-tools-by-ateforp.zip" target="_blank" rel="noopener" hidden>⬇ Baixar atualização</a></div>
            </div>
            <div id="novLista"></div>
          </section>
    
          <section id="tab-itens" class="tab" hidden>
            <nav class="tabs sub" id="subtabs">
              <button data-sub="compras" class="on">Itens</button>
              <button data-sub="pokemon">Pokémon</button>
              <button data-sub="hist">Histórico</button>
            </nav>
            <div id="sub-compras">
            <div class="card master">
              <label class="switch big">
                <input type="checkbox" id="enabled">
                <span class="slider"></span>
                <span class="lbl"><b>Compra automática no Mercado</b><small id="enabledHint">desligada</small></span>
              </label>
              <label class="switch">
                <input type="checkbox" id="ocultarSorteio">
                <span class="slider"></span>
                <span class="lbl"><b>Ocultar a janela do sorteio</b><small>não mostra a janela "Sorteio da liberação" quando a extensão entra num sorteio (a participação continua normal)</small></span>
              </label>
              <div class="row inline">
                <label>Atualizar a cada <input id="intervalS" type="number" min="4" step="0.5" value="5"> s <small>(3 itens por vez, em rodízio)</small></label>
              </div>
            </div>
            <div id="rules"></div>
            <details class="picker" id="picker">
              <summary>+ Adicionar item <small id="pickerCount"></small></summary>
              <div class="pbar">
                <input id="search" type="search" placeholder="Buscar item…">
                <button id="scan" class="icon" title="Procurar itens novos no mercado do jogo">↻ catálogo</button>
              </div>
              <div id="pickList" class="picklist"></div>
              <div class="manual">
                <span>ou pelo ID</span>
                <input id="manualId" type="number" placeholder="ID" min="1">
                <button id="addManual">Adicionar</button>
              </div>
            </details>
            </div>
            <div id="sub-pokemon" hidden>
              <nav class="tabs sub" id="pknav">
                <button data-pk="auto" class="on">Auto-compra</button>
                <button data-pk="ren">Renovar anúncios</button>
              </nav>
              <div id="pk-auto">
                <nav class="tabs sub" id="autonav">
                  <button data-au="cons" class="on">Consultar</button>
                  <button data-au="poke">Regras</button>
                  <button data-au="imed">Compra Imediata</button>
                </nav>
            <div id="sub-cons" hidden>
              <div class="card">
                <h2>CONSULTAR O MERCADO</h2>
                <div class="mut">Veja o que há à venda (só coins) de acordo com os filtros. <b>Não compra nada.</b> Campos vazios são ignorados. Depois de achar o que quer, use "Criar regra com estes filtros" para pôr na compra automática.</div>
                <div class="fld"><label for="csEsp">Pokémon</label><input id="csEsp" type="text" placeholder="ex.: Snorlax (vazio = todos)"></div>
                <div class="fld"><label for="csPreco">Preço máximo (coins)</label><input id="csPreco" type="text" placeholder="ex.: 30M"></div>
                <div class="fld"><label for="csOutl">Outland</label><select id="csOutl"><option value="omitir">omitir Outland</option><option value="incluir">incluir Outland</option><option value="so">somente Outland</option></select></div>
                <div class="fld"><label for="csOrdem">Ordenar por</label><select id="csOrdem"><option value="baratos">Menor preço</option><option value="recentes">Adicionados recentemente</option><option value="caros">Maior preço</option></select></div>
                <div class="fld"><label for="csLim">Quantidade máxima de resultados</label><input id="csLim" type="number" min="1" max="500" step="1" value="20"></div>
                <div class="fld"><label><input id="csShiny" type="checkbox"> ✨ só shiny</label></div>
                <div class="est4" id="csEst"></div>
                <div class="mut">IV individual (31 = perfeito):</div>
                <div class="est4" id="csIv"></div>
                <div class="btns"><button id="csGo" class="icon">Consultar</button><button id="csRegra" class="icon">Criar regra com estes filtros</button></div>
                <div class="mut" id="csMsg"></div>
                <div id="csLista" class="list"></div>
              </div>
            </div>
            <div id="sub-poke" hidden>
              <div class="card master">
                <label class="switch big">
                  <input type="checkbox" id="pkOn">
                  <span class="slider"></span>
                  <span class="lbl"><b>Compra automática de Pokémon</b><small id="pkHint">desligada</small></span>
                </label>
                <div class="mut" id="pkInfo">Desligada.</div>
                <div class="row inline">
                  <label>Consultar a cada <input id="pkInt" type="number" min="4" step="0.5" value="5"> s <small>(uma regra por vez, em rodízio)</small></label>
                </div>
              </div>
              <div id="pkRegras"></div>
              <div class="btns"><button id="pkNova" class="icon">+ Nova regra</button><button id="pkZerar" class="link">zerar contagens</button></div>
              <h2>REGISTRO <button id="pkLogCopiar" class="link">copiar</button> <button id="pkLogLimpar" class="link">limpar</button></h2>
              <div id="pkLog" class="log"></div>
              <div class="mut">Cada regra compra Pokémon do Mercado (em coins) quando o anúncio atende aos critérios e custa até o preço máximo. P = potência, IV = soma dos IVs, Q = qualidade e N = nota (em milésimos, como na Venda automática: 1700, 3500). Campo vazio = ignorado. Preço máximo é obrigatório e vale sempre. Se o anúncio ainda estiver em retenção, a compra é agendada para o instante da liberação.</div>
            </div>
            <div id="sub-imed" hidden>
              <div class="card master">
                <label class="switch big">
                  <input type="checkbox" id="imOn">
                  <span class="slider"></span>
                  <span class="lbl"><b>Compra Imediata</b><small id="imHint">desligada — nada será comprado</small></span>
                </label>
                <div class="mut">Escolha um Pokémon que está no Mercado aguardando o tempo de retenção (2 min). A extensão acompanha o relógio do servidor e envia a compra no instante em que ele é liberado. Só em coins. Com a chave desligada, ela apenas mostra e arma, mas não compra.</div>
              </div>
              <div class="card">
                <h2>BUSCAR EM RETENÇÃO</h2>
                <div class="fld"><label for="imNome">Pokémon</label><input id="imNome" type="text" placeholder="nome (vazio = qualquer)"></div>
                <div class="fld"><label for="imPreco">Preço máximo (coins)</label><input id="imPreco" type="text" placeholder="ex.: 30M (vazio = sem limite)"></div>
                <div class="fld"><label for="imOutl">Outland</label><select id="imOutl"><option value="omitir">omitir Outland</option><option value="incluir">incluir Outland</option><option value="so">somente Outland</option></select></div>
                <div class="fld"><label for="imOrdem">Ordenar por</label><select id="imOrdem"><option value="recentes">Adicionados recentemente</option><option value="baratos">Menor preço</option><option value="caros">Maior preço</option></select></div>
                <div class="fld"><label for="imLim">Quantidade (buscar e comprar até)</label><input id="imLim" type="number" min="1" max="100" step="1" value="5"></div>
                <div class="fld"><button id="imBuscar" class="icon">Buscar em retenção</button></div>
                <div class="mut" id="imMsg"></div>
                <div id="imLista" class="list"></div>
              </div>
              <div class="card">
                <h2>ARMADAS <small id="imArmN"></small></h2>
                <div id="imArmadas" class="list"></div>
                <div class="row inline"><label>Antecipar o envio em <input id="imAnte" type="number" min="0" max="1000" step="10" value="0"> ms <small>(compensa a demora da rede; 0 = no instante exato)</small></label></div>
              </div>
              <div class="card">
                <h2>REGISTRO <button id="imLogCopiar" class="link">copiar</button> <button id="imLogLimpar" class="link">limpar</button></h2>
                <div id="imLog" class="log"></div>
              </div>
            </div>
              </div>
            <div id="sub-ren" hidden>
              <div class="card">
                <h2>RENOVAÇÃO AUTOMÁTICA DE ANÚNCIOS <small id="rnHint"></small></h2>
                <div class="mut">
                  <b>Para que serve:</b> quando você muda o preço de um anúncio, o jogo o leva de volta ao topo dos "recentes", e quem não o tinha visto passa a ver. Esta função faz isso sozinha, trocando o preço entre dois valores.<br>
                  <b>Como funciona:</b> a cada intervalo, se o anúncio ainda não vendeu, a extensão edita o preço: se estiver em <b>Preço A</b> vai para <b>Preço B</b>, e vice-versa (ex.: A = 100.000.000 e B = 99.999.999). Segue assim até vender, até você remover o anúncio ou desligar.<br>
                  <b>Preço A / Preço B:</b> os dois valores entre os quais o anúncio alterna (mínimo 2 e diferentes entre si).<br>
                  <b>Intervalo (min):</b> tempo entre renovações. O jogo só permite um novo ajuste 30 min depois do anterior, então o mínimo é 30.<br>
                  <b>Atenção:</b> cada renovação reinicia a retenção de 2 min do anúncio (ninguém consegue comprar nesse tempo). Fica desligada até você ligar.
                </div>
                <div class="row inline"><label class="switch"><input id="rnOn" type="checkbox"><span class="slider"></span></label> <span id="rnInfo" class="mut"></span></div>
                <div class="btns"><button id="rnCarregar" class="icon">↻ Carregar meus anúncios</button></div>
              </div>
              <div id="rnLista"></div>
              <div class="card">
                <h2>REGISTRO <button id="rnLogCopiar" class="link">copiar</button> <button id="rnLogLimpar" class="link">limpar</button></h2>
                <div id="rnLog" class="log"></div>
              </div>
            </div>
            </div>
            <div id="sub-hist" hidden>
    
            <div class="hbar">
              <button id="hRefresh">↻ Atualizar</button>
              <button id="hMore" class="icon">Carregar mais</button>
              <span id="hInfo" class="mut"></span>
            </div>
            <h2>Compradas pela extensão <button id="clearCompras" class="link">limpar</button></h2>
            <div id="summary" class="summary"></div>
            <div id="comprasList" class="list"></div>
            <h2>Histórico de compras do jogo</h2>
            <div id="gameHist" class="list"></div>
          
              <div class="sep"></div>
    
            <h2>Compras de Pokémon pela extensão <button id="pkLimpar" class="link">limpar</button></h2>
            <div id="pkHist" class="list tall"></div>
            <div class="sep"></div>
            <h2>Tentativas de compra <button id="clearTent" class="link">limpar</button></h2>
            <div id="tentSummary" class="summary"></div>
            <div id="tentList" class="list tall"></div>
          
            </div>
          </section>
    
          <section id="tab-registro" class="tab" hidden>
            <div class="card">
              <h2>Conexão com o jogo <small id="conHint"></small></h2>
              <div class="mut" id="conInfo">Fecha sozinho o popup do Discord e "destrava" o jogo quando a aba fica parada.</div>
            </div>
            <div class="card">
              <h2>SHINY MONITOR <small id="smHint"></small></h2>
              <div class="mut">Anota, sem mexer em nada no jogo, o que acontece em cada encontro com um Pokémon shiny: nível, bolas usadas, chance de captura e se deu certo. Serve para estudarmos como funciona a captura de shiny. Os dados ficam salvos neste navegador; quando quiser analisar, clique em "Copiar relatório" e cole na conversa.</div>
              <label class="switch"><input type="checkbox" id="smOn" checked><span class="slider"></span><span class="lbl"><b>Registrar encontros com shiny</b><small>desligue para parar de coletar</small></span></label>
              <div id="smResumo" class="mut"></div>
              <div id="smEnc" class="list"></div>
              <div class="btns"><button id="smCopiar" class="icon">📋 Copiar relatório</button><button id="smLimpar" class="link">limpar dados</button></div>
              <div class="mut" id="smMsg"></div>
            </div>
            <h2>Logs <button id="resetAll" class="link">zerar contagens</button></h2>
            <div id="log" class="log"></div>
          </section>
        </div>
      </div>
    </div>`;
    
      const host = document.createElement('div');
      host.id = 'pokeidle-mercador-host';
      (document.body || document.documentElement).append(host);
      const root = host.attachShadow({ mode: 'open' });
    
      try {
        const sheet = new CSSStyleSheet(); // não depende do CSP do site
        sheet.replaceSync(window.__PM_CSS);
        root.adoptedStyleSheets = [sheet];
      } catch (e) {
        const st = document.createElement('style');
        st.textContent = window.__PM_CSS;
        root.append(st);
      }
      root.innerHTML += TEMPLATE;
    
      // o jogo tem atalhos de teclado: o que é digitado no painel não pode chegar nele
      ['keydown', 'keyup', 'keypress'].forEach((t) => host.addEventListener(t, (e) => e.stopPropagation()));
    
      const $ = (id) => root.getElementById(id);
      const panel = $('panel');
      $('logo').append(window.__ATE.gyarados(false, 26));
    
      // ---- apoio ao criador (opcional): link do LivePix ----
      const APOIO_LINK = 'https://livepix.gg/ateforp';
      window.__ateforpApoioLink = APOIO_LINK;
      function desenharQr() {
        const box = $('pixQr'); box.textContent = '';
        if (typeof qrcode !== 'function') { box.hidden = true; return; }
        try { const q = qrcode(0, 'M'); q.addData(APOIO_LINK, 'Byte'); q.make(); box.innerHTML = q.createSvgTag({ cellSize: 4, margin: 3, scalable: true }); box.hidden = false; } catch (e) { box.hidden = true; }
      }
      $('pixBtn').addEventListener('click', () => { $('pixBox').hidden = !$('pixBox').hidden; $('pixMsg').textContent = ''; if (!$('pixBox').hidden) desenharQr(); });
      $('pixClose').addEventListener('click', () => { $('pixBox').hidden = true; });
      $('pixAbrir').addEventListener('click', () => { try { window.open(APOIO_LINK, '_blank', 'noopener,noreferrer'); } catch (e) { /* ignora */ } });
      async function copiar(texto) {
        let ok = false;
        try { await navigator.clipboard.writeText(texto); ok = true; } catch (e) { /* tenta o plano B */ }
        if (!ok) { try { const t = document.createElement('textarea'); t.value = texto; t.style.cssText = 'position:fixed;opacity:0;left:-999px'; root.append(t); t.select(); ok = document.execCommand('copy'); t.remove(); } catch (e) { /* ignora */ } }
        $('pixMsg').textContent = ok ? 'Link copiado. Obrigado! 💙' : 'Não consegui copiar sozinho; use o QR code.';
      }
      $('pixCopy2').addEventListener('click', () => copiar(APOIO_LINK));
    
      const api = createUI(root);
    
      // ---------- janela: posição e abrir/fechar ----------
      let ui = {};
      const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), Math.max(lo, hi));
      const saveUi = () => { try { chrome.storage.local.set({ ui }); } catch (e) { /* ignora */ } };
    
      const MIN_W = 360, MIN_H = 280;
      const handles = {};
      ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'].forEach((d) => {
        const hd = document.createElement('div');
        hd.className = 'rz rz-' + d; hd.dataset.dir = d; hd.hidden = true;
        root.querySelector('.root').append(hd); handles[d] = hd;
      });
      function placeHandles() {
        const show = !panel.hidden && !ui.max;
        const r = panel.getBoundingClientRect(); const T = 8;
        const set = (d, x, y, w, hh) => { const e = handles[d]; e.hidden = !show; e.style.left = x + 'px'; e.style.top = y + 'px'; e.style.width = w + 'px'; e.style.height = hh + 'px'; };
        set('n', r.left + T, r.top - 3, r.width - 2 * T, T); set('s', r.left + T, r.bottom - T + 3, r.width - 2 * T, T);
        set('w', r.left - 3, r.top + T, T, r.height - 2 * T); set('e', r.right - T + 3, r.top + T, T, r.height - 2 * T);
        set('nw', r.left - 3, r.top - 3, T + 4, T + 4); set('ne', r.right - T - 1, r.top - 3, T + 4, T + 4);
        set('sw', r.left - 3, r.bottom - T - 1, T + 4, T + 4); set('se', r.right - T - 1, r.bottom - T - 1, T + 4, T + 4);
      }
    
      function placePanel() {
        const max = !!ui.max;
        const w = max ? innerWidth - 16 : clamp(typeof ui.pw === 'number' ? ui.pw : 540, Math.min(MIN_W, innerWidth - 16), innerWidth - 16);
        panel.style.width = w + 'px';
        // a altura acompanha o conteúdo (muda sozinha ao trocar de aba); o tamanho que o usuário arrasta vira o limite de altura
        const cap = typeof ui.ph === 'number' ? clamp(ui.ph, Math.min(MIN_H, innerHeight - 16), innerHeight - 16) : innerHeight - 16;
        panel.style.maxHeight = (max ? innerHeight - 16 : cap) + 'px';
        panel.style.height = max ? (innerHeight - 16) + 'px' : '';
        const h = Math.min(panel.offsetHeight || 500, innerHeight - 16);
        const x = max ? 8 : (typeof ui.pl === 'number' ? ui.pl : (innerWidth - w) / 2);
        const y = max ? 8 : (typeof ui.pt === 'number' ? ui.pt : Math.max(8, innerHeight * 0.06));
        panel.style.left = clamp(x, 0, innerWidth - w) + 'px';
        panel.style.top = clamp(y, 0, innerHeight - h) + 'px';
        $('max').classList.toggle('pinned', max);
        $('max').title = max ? 'Voltar ao tamanho anterior' : 'Maximizar a janela (clique de novo para voltar)';
        placeHandles();
      }
      $('max').addEventListener('click', () => { ui.max = !ui.max; placePanel(); saveUi(); });
    
      // redimensionar pelas bordas e cantos
      let rz = null;
      Object.values(handles).forEach((hd) => {
        hd.addEventListener('pointerdown', (e) => {
          const r = panel.getBoundingClientRect();
          rz = { d: hd.dataset.dir, x: e.clientX, y: e.clientY, l: r.left, t: r.top, w: r.width, h: r.height };
          hd.setPointerCapture(e.pointerId); e.preventDefault(); e.stopPropagation();
        });
        hd.addEventListener('pointermove', (e) => {
          if (!rz) return;
          const dx = e.clientX - rz.x, dy = e.clientY - rz.y, d = rz.d;
          let l = rz.l, t = rz.t, w = rz.w, hh = rz.h;
          const maxW = innerWidth - 16, maxH = innerHeight - 16;
          if (d.includes('e')) w = rz.w + dx;
          if (d.includes('s')) hh = rz.h + dy;
          if (d.includes('w')) { w = rz.w - dx; }
          if (d.includes('n')) { hh = rz.h - dy; }
          w = clamp(w, MIN_W, maxW); hh = clamp(hh, MIN_H, maxH);
          if (d.includes('w')) l = rz.l + rz.w - w;
          if (d.includes('n')) t = rz.t + rz.h - hh;
          ui.pw = Math.round(w); ui.ph = Math.round(hh); ui.pl = Math.round(l); ui.pt = Math.round(t);
          placePanel();
          if (d.includes('n')) { ui.pt = Math.round(rz.t + rz.h - panel.offsetHeight); placePanel(); }   // a borda de baixo fica parada
        });
        const fim = (e) => { if (!rz) return; rz = null; try { hd.releasePointerCapture(e.pointerId); } catch (err) { /* ignora */ } saveUi(); };
        hd.addEventListener('pointerup', fim); hd.addEventListener('pointercancel', fim);
        hd.addEventListener('dblclick', () => { delete ui.pw; delete ui.ph; placePanel(); saveUi(); });
      });
    
      function setOpen(open) {
        panel.hidden = !open;
        if (open) placePanel(); else placeHandles();
        syncDock();
      }
      const toggle = () => setOpen(panel.hidden);
      try { new ResizeObserver(() => { if (!panel.hidden && !rz) placePanel(); else placeHandles(); }).observe(panel); } catch (e) { /* ignora */ }
    
      const hdr = $('hdr');
      let pdrag = null;
      hdr.addEventListener('pointerdown', (e) => {
        if (e.target.closest('button') || ui.max) return;
        const r = panel.getBoundingClientRect();
        pdrag = { x: e.clientX, y: e.clientY, left: r.left, top: r.top };
        hdr.setPointerCapture(e.pointerId);
        e.preventDefault();
      });
      hdr.addEventListener('pointermove', (e) => {
        if (!pdrag) return;
        ui.pl = pdrag.left + e.clientX - pdrag.x;
        ui.pt = pdrag.top + e.clientY - pdrag.y;
        placePanel();
      });
      const endDrag = (e) => {
        if (!pdrag) return;
        pdrag = null;
        try { hdr.releasePointerCapture(e.pointerId); } catch (err) { /* ignora */ }
        saveUi();
      };
      hdr.addEventListener('pointerup', endDrag);
      hdr.addEventListener('pointercancel', endDrag);
      hdr.addEventListener('dblclick', (e) => {
        if (e.target.closest('button')) return;
        delete ui.pl; delete ui.pt; delete ui.pw; delete ui.ph; ui.max = false; placePanel(); saveUi();
      });
    
      // fixar: com a janela fixa, clicar fora (ou Esc) não minimiza; só o ✕ ou o botão Tools fecham
      function renderPin() {
        const on = !!ui.fixa;
        $('pin').classList.toggle('pinned', on);
        $('pin').setAttribute('aria-pressed', on ? 'true' : 'false');
        $('pin').title = on ? 'Janela FIXA: não minimiza ao clicar fora (clique para soltar)' : 'Fixar a janela: não minimiza ao clicar fora (útil para usar o jogo e o Mercado ao mesmo tempo)';
      }
      $('pin').addEventListener('click', () => { ui.fixa = !ui.fixa; renderPin(); saveUi(); });
      renderPin();
    
      $('close').addEventListener('click', () => setOpen(false));
      $('reload').addEventListener('click', () => location.reload());
      addEventListener('resize', () => { if (!panel.hidden) placePanel(); });
      addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden && !ui.fixa && $('dlg').hidden) setOpen(false); });
      // clicar fora da janela (e fora dos botões) minimiza
      document.addEventListener('pointerdown', (e) => {
        if (panel.hidden || !e.isTrusted || ui.fixa) return;   // cliques sintéticos (o "destravar" do jogo, o fechar do Discord) não contam
        const path = e.composedPath ? e.composedPath() : [];
        if (path.includes(host) || (wrap && path.includes(wrap))) return;
        setOpen(false);
      }, true);
    
      try {
        chrome.runtime.onMessage.addListener((m) => { if (m && m.type === 'toggle-panel') toggle(); });
      } catch (e) { /* ignora */ }
      try {
        chrome.storage.local.get('ui', (d) => { if (d.ui && typeof d.ui === 'object') ui = Object.assign(ui, d.ui); renderPin(); });
      } catch (e) { /* ignora */ }
    
      // ---------- botões encaixados acima do card do Pokémon em campo (como no Auto Captura) ----------
      const INICIO = Date.now();
      let wrap = null, gyBtn = null, openBtn = null, gyShown = null;
    
      const PAL = { luz: '#bfe3ff', base: '#3d8fd6', esc: '#14355f', vao: '#12233a' };
    
      // visual dos botões: borda dupla no estilo dos botões do jogo, preenchimento azul com brilho (folha de estilo do documento,
      // montada por adoptedStyleSheets para não depender do CSP do site)
      const DOCK_CSS = `
    .ate-dock .at-btn { position: relative; overflow: hidden; cursor: pointer; border: 2px solid #0b1b33; border-radius: 7px;
      box-shadow: inset 0 1px 0 #cfeaff, inset 0 -3px 0 rgba(6,22,48,.45), inset 0 0 0 1px #5fb4ff, 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 12px rgba(80,170,255,.45);
      transition: box-shadow .18s, filter .18s, transform .08s; }
    .ate-dock .at-btn:hover { filter: brightness(1.12); box-shadow: inset 0 1px 0 #fff, inset 0 -3px 0 rgba(6,22,48,.45), inset 0 0 0 1px #8fd0ff, 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 18px rgba(110,200,255,.8); }
    .ate-dock .at-btn:active { transform: translateY(1px); }
    .ate-dock .at-gy { width: 56px; height: 40px; padding: 0; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; background: radial-gradient(circle at 50% 35%, #1d3a63, #0b1b33); }
    .ate-dock .at-gy:not(.at-sh):not(.at-open) img { object-fit: contain; }
    .ate-dock .at-gy:not(.at-sh):not(.at-open) img { height: 34px !important; max-width: 50px !important; }
    .ate-dock .at-sh img { height: 32px; width: auto; max-width: 48px; pointer-events: none; image-rendering: auto; }
    .ate-dock .at-sh:not(.sh-on) img { animation: ate-brilho 1.8s ease-in-out infinite; }
    .ate-dock .at-sh.sh-on { box-shadow: inset 0 0 0 1px #ff7b85, 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 12px rgba(230,70,80,.65); }
    .ate-dock .at-sh.sh-on img { filter: drop-shadow(0 0 3px rgba(255,110,120,.8)); }
    @keyframes ate-brilho { 0%, 100% { filter: drop-shadow(0 0 1px rgba(255,220,120,.4)) brightness(1); } 50% { filter: drop-shadow(0 0 7px rgba(255,225,120,.95)) brightness(1.18); } }
    .ate-dock .at-open.on { box-shadow: inset 0 1px 0 #fff, inset 0 -3px 0 rgba(6,22,48,.45), inset 0 0 0 1px #ffd166, 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 14px rgba(255,209,102,.6); }
    /* caixa de ferramentas: a cor da borda mostra a conexão (verde = conectado, amarelo = aguardando, vermelho = sem conexão) */
    .ate-dock.toolbox { --tb: #ff4d4f; position: relative; display: grid; grid-template-columns: repeat(2, auto); align-items: center; justify-items: center; justify-content: center; gap: 9px; box-sizing: border-box; width: fit-content; max-width: 100%;
      margin: 16px auto 6px; padding: 9px 12px; border: 2px solid var(--tb); border-radius: 12px; background: linear-gradient(180deg, #14263f 0%, #0b1627 100%);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.12), inset 0 0 0 1px #0b1b33, 0 0 12px color-mix(in srgb, var(--tb) 55%, transparent); transition: border-color .25s, box-shadow .25s; }
    .ate-dock.toolbox::before { content: ""; position: absolute; top: -11px; left: 50%; width: 30px; height: 10px; transform: translateX(-50%); box-sizing: border-box;
      border: 2px solid var(--tb); border-bottom: none; border-radius: 8px 8px 0 0; background: #0b1627; transition: border-color .25s; }
    `;
      try { const sh = new CSSStyleSheet(); sh.replaceSync(DOCK_CSS); document.adoptedStyleSheets = [...document.adoptedStyleSheets, sh]; }
      catch (e) { const st = document.createElement('style'); st.textContent = DOCK_CSS; document.head.append(st); }
    
      // ícones do botão de PvP: desligado = uma espada + pokébola de escudo; ligado = duas espadas cruzadas + pokébolas
      const ball = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#f2f6fb" stroke="#14202e" stroke-width="1.4"/><path d="M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy} Z" fill="#e0434f" stroke="#14202e" stroke-width="1.4" stroke-linejoin="round"/><line x1="${cx - r}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="#14202e" stroke-width="1.4"/><circle cx="${cx}" cy="${cy}" r="${(r / 3.2).toFixed(1)}" fill="#f2f6fb" stroke="#14202e" stroke-width="1.2"/>`;
      const sword = (x1, y1, x2, y2, cor) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#14202e" stroke-width="5" stroke-linecap="round"/><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${cor}" stroke-width="2.6" stroke-linecap="round"/>`;
      const pvpSvg = (on) => on
        ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" style="pointer-events:none">${sword(5, 4, 25, 24, '#ffd9a0')}${sword(27, 4, 7, 24, '#ffd9a0')}${ball(6, 26, 4.6)}${ball(26, 26, 4.6)}${ball(16, 15, 5.2)}</svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" style="pointer-events:none">${sword(27, 4, 14, 17, '#bcd2ec')}${ball(11, 21, 8.2)}</svg>`;
      const pvpIcon = (on) => {
        if (window.__ATE.pvpImg) { const im = document.createElement('img'); im.src = on ? window.__ATE.pvpImg.on : window.__ATE.pvpImg.off; im.alt = on ? 'Zamazenta' : 'Zacian'; im.draggable = false; return im; }
        return pvpIconSvg(on);
      };
      const pvpIconSvg = (on) => { const d = new DOMParser().parseFromString(pvpSvg(on), 'image/svg+xml'); return document.importNode(d.documentElement, true); };
      let pvBtn = null, pvShown = null, shBtn = null, shShown = null;
    
      const toolSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" style="pointer-events:none"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="#cfe3ff" stroke="#14202e" stroke-width="1.5" stroke-linejoin="round"/></svg>';
      const toolIcon = () => { const d = new DOMParser().parseFromString(toolSvg, 'image/svg+xml'); return document.importNode(d.documentElement, true); };
    
      function buildDock() {
        wrap = document.createElement('div');
        wrap.id = 'ateforp-wrap';
        wrap.className = 'ate-dock toolbox';
    
        gyBtn = document.createElement('button');
        gyBtn.type = 'button';
        gyBtn.className = 'at-btn at-gy';
        gyBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); api.setCaptura(!api.captura()); });
    
        pvBtn = document.createElement('button');
        pvBtn.type = 'button';
        pvBtn.className = 'at-btn at-gy';
        pvBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); api.setPvp(!api.pvp()); });
    
        shBtn = document.createElement('button');
        shBtn.type = 'button';
        shBtn.className = 'at-btn at-gy at-sh';
        shBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); api.setShiny(!api.shiny()); });
    
        openBtn = document.createElement('button');
        openBtn.type = 'button';
        openBtn.className = 'at-btn at-gy at-open';
        openBtn.title = 'Abrir/fechar o PokeIdle Tools by Ateforp';
        openBtn.append(toolIcon());
        openBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); toggle(); });
    
        wrap.append(gyBtn, shBtn, pvBtn, openBtn);
        syncDock(true);
      }
    
      function syncDock(force) {
        if (!wrap) return;
        const on = api.captura();
        if (force || gyShown !== on) {
          gyShown = on;
          gyBtn.title = on ? 'Auto captura LIGADA - Gyarados shiny (clique para desligar)' : 'Auto captura DESLIGADA - Gyarados azul (clique para ligar)';
          gyBtn.style.borderColor = on ? '#5a1a1f' : '#0b1b33';
          gyBtn.style.boxShadow = on ? 'inset 0 0 0 1px #ff7b85, 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 12px rgba(230,70,80,.65)' : '';
          const old = gyBtn.querySelector('svg,img');
          const nv = window.__ATE.gyarados(on, 22);
          if (old) gyBtn.replaceChild(nv, old); else gyBtn.appendChild(nv);
          $('logo').textContent = '';
          $('logo').append(window.__ATE.gyarados(on, 26));
        }
        const pon = api.pvp();
        if (force || pvShown !== pon) {
          pvShown = pon;
          pvBtn.title = pon ? 'PvP automático LIGADO - busca partida sozinho (clique para desligar)' : 'PvP automático DESLIGADO (clique para ligar)';
          pvBtn.style.borderColor = pon ? '#5a1a1f' : '#0b1b33';
          pvBtn.style.boxShadow = pon ? 'inset 0 0 0 1px #ff7b85, 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 12px rgba(230,70,80,.65)' : '';
          const old = pvBtn.querySelector('svg,img');
          const nv = pvpIcon(pon);
          if (old) pvBtn.replaceChild(nv, old); else pvBtn.appendChild(nv);
        }
        const son = api.shiny();
        if (force || shShown !== son) {
          shShown = son;
          shBtn.title = son ? 'Shiny Hunt LIGADO - Luxio (clique para desligar)' : 'Shiny Hunt DESLIGADO - Shinx brilhando (clique para ligar)';
          shBtn.classList.toggle('sh-on', son);
          shBtn.style.borderColor = son ? '#5a1a1f' : '#0b1b33';
          shBtn.textContent = '';
          const im = document.createElement('img'); im.src = son ? window.__ATE.shinx.on : window.__ATE.shinx.off; im.alt = son ? 'Luxio' : 'Shinx'; im.draggable = false;
          shBtn.append(im);
        }
        // borda da caixa: verde se o jogo está online (conectado), vermelho se não
        const online = api.conectado();
        wrap.style.setProperty('--tb', online ? '#6fd08a' : '#ff4d4f');
        wrap.title = online ? 'Jogo conectado' : 'Jogo sem conexão';
        // chave inglesa: verde / amarelo / vermelho (a regra do status da extensão)
        const st = host.dataset.status || 'off';
        // chave inglesa: vermelha só quando conectado E há alguma funcionalidade ativa além de PvP, Auto Captura e Shiny Hunt; senão verde
        const extras = api.outrasAtivas();
        const cor = st === 'warn' || !online ? '#ffd166' : extras.length ? '#ff4d4f' : '#6fd08a';
        openBtn.style.borderColor = cor;
        openBtn.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,.35), inset 0 0 0 1px ' + cor + ', 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 12px ' + cor + (panel.hidden ? '88' : 'ff');
        const tp = openBtn.querySelector('svg path'); if (tp) tp.setAttribute('fill', cor);
        openBtn.title = [
          'PokeIdle Tools by Ateforp — clique para abrir ou fechar o painel',
          '',
          'PvE: reposição de itens, captura (Auto Captura), Shiny Hunt e venda de Pokémon',
          'PvP: PvP automático e histórico',
          'Mercado RMT: compra de itens, compra e renovação de Pokémon (Consulta e Compra Imediata) e histórico',
          'Logs: conexão com o jogo, Shiny Monitor e registros',
          '',
          'Cor da chave: verde = nenhuma função extra ligada · vermelho = há função ativa · amarelo = aguardando o jogo',
          'Agora: ' + (cor === '#ffd166' ? 'aguardando o jogo / atenção' : extras.length ? 'ativo: ' + extras.join(', ') : 'nenhuma função extra ativa (PvP, Auto Captura e Shiny Hunt não contam)')
        ].join('\n');
        openBtn.classList.toggle('on', !panel.hidden);
      }
    
      function ensureDock() {
        if (!wrap) buildDock();
        // a caixa de ferramentas fica no espaço livre do cartão do jogador; se esse espaço não existir, flutua no canto da tela
        const td = document.querySelector('#p-treinador .tr-dados');
        if (td) {
          if (wrap.parentElement !== td || td.lastElementChild !== wrap || wrap.dataset.local !== 'docado') {
            td.appendChild(wrap);
            wrap.dataset.local = 'docado';
            Object.assign(wrap.style, { position: 'relative', left: '', top: '', right: '', zIndex: '' });   // docada no cartão: sem camada própria, então menus e janelas do jogo ficam por cima
          }
        } else if (Date.now() - INICIO > 8000 && (!wrap.isConnected || wrap.dataset.local === 'docado')) {
          (document.body || document.documentElement).appendChild(wrap);
          wrap.dataset.local = 'flutuante';
          Object.assign(wrap.style, { position: 'fixed', top: '18px', right: '12px', left: '', margin: '0' });
          wrap.style.zIndex = '99999';
        }
        syncDock();
      }
    
      api.onChange(syncDock);
      setInterval(() => { try { ensureDock(); } catch (e) { /* ignora */ } }, 1500);
    
      ensureDock();
      window.__pmPanelApi = { toggle, setOpen, isOpen: () => !panel.hidden };
    })();
    
    })();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

})();
