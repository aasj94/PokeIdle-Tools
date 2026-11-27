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
  const PADRAO = { passoMs: 1000, olharMs: 300, parar: false, centro: false };

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
      cfg = { passoMs: Math.max(1000, Math.min(10000, Math.floor(num(m.passoMs) || PADRAO.passoMs))), olharMs: Math.max(300, Math.min(5000, Math.floor(num(m.olharMs) || PADRAO.olharMs))), parar: !!m.parar, centro: !!m.centro };
      salvar(); sujo = true;
    } else if (m.type === 'limpar-log') { logs = []; sujo = true; }
    else if (m.type === 'resetar-rota') { idx = 0; if (ligado && est === 'olhando') est = 'espera'; log('Rota reiniciada do primeiro mapa', 'info'); sujo = true; salvar(); }
    else if (m.type === 'zerar') { idx = 0; visitados = 0; rodadas = 0; avistados = 0; desde = Date.now(); shinies = { achados: 0, capturados: 0, fugiram: 0 }; sujo = true; salvar(); }
    else if (m.type === 'diag') { window.postMessage({ ch: CH, from: 'hunt', type: 'diag', diag: diag() }, '*'); }
  });
  window.__ateforpHuntDbg = { diag, hunts: () => hunts, estado: () => ({ ligado, est, atual, idx }) };
})();
