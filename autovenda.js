/*
 * PokeIdle Ateforp Tools - venda automática de Pokémon do Depósito (Market do jogo, venda ao NPC).
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
  const ehLendario = (p) => { const n = nomeNorm(p.nome); return LENDARIOS.some((l) => n.indexOf(l) !== -1) || extras.some((l) => l && n.indexOf(l) !== -1); };

  const PADRAO = {
    simular: true,
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
    if (typeof c.simular === 'boolean') out.simular = c.simular;
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
  const snap = (p) => ({ nome: p.nome, level: p.level, shiny: !!p.shiny, lend: ehLendario(p), p: p.potencia, iv: ivTotal(p), q: p.quality, n: p.nota });
  function registrar(tipo, pend, extra) {
    hist.unshift(Object.assign({ em: Date.now(), tipo, id: pend.id }, pend.snap || {}, { motivo: pend.motivo || null }, extra || {}));
    hist = hist.slice(0, 200);
    try { localStorage.setItem(CHAVE + '_hist', JSON.stringify(hist)); } catch (e) { /* ignora */ }
  }
  const S = { vendidos: 0, coletados: 0, falhas: 0, pend: null, ultAcao: 0, janela: [], pausaAte: 0, msg: 'Desligado.' };

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
    const vals = { p: p.potencia, iv: ivTotal(p), q: p.quality, n: p.nota };
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
    const previa = a.itens.filter((x) => x.acao !== 'manter').sort((x, y) => ordem[x.acao] - ordem[y.acao]).slice(0, 25)
      .map((x) => ({ id: x.p.id, nome: x.p.nome, level: x.p.level, shiny: !!x.p.shiny, lend: ehLendario(x.p), p: x.p.potencia, iv: ivTotal(x.p), q: x.p.quality, n: x.p.nota, acao: x.acao, motivo: x.motivo }));
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
