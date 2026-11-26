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
