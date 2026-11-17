/*
 * PokeIdle Ateforp Tools - venda de Pokémon no Mercado RMT (mundo da página).
 * Guarda a lista de Pokémons que o servidor manda (welcome / estado: pokemons, pkMud, pkFora)
 * e anuncia pelo mesmo comando que o jogo usa: market.criar. Só moeda "gold" (coins).
 * Nada é enviado sem um pedido explícito do painel (botão "Anunciar" confirmado pelo usuário).
 */
(() => {
  'use strict';
  if (window.__ateforpVenda) return;
  window.__ateforpVenda = true;

  const CH = 'ateforp-venda';
  const BUS = window.__PM_BUS;
  const getWs = () => (BUS && BUS.ws ? BUS.ws() : null);
  const PENSAO_DIA = 100000;      // observado no jogo: 100.000 coins por dia na feira
  const COMISSAO = 0.15;          // 15% descontada quando vende
  const PRECO_MIN = 2;
  const DIAS_OK = [1, 3, 7, 15, 30];

  const mapa = new Map();         // id -> pokemon
  let temLista = false;
  let sujo = true;
  let ultEmit = 0;
  let pendente = null;            // { id, nome, em }
  let ultimo = null;              // resultado do último anúncio
  let campos = [];                // nomes de campos vistos (diagnóstico)

  const ehPoke = (o) => o && typeof o === 'object' && o.id != null && (o.speciesId != null || o.nome != null) && (o.level != null || o.ivs != null);

  function guardar(p) {
    if (!ehPoke(p)) return;
    mapa.set(p.id, p);
    if (!campos.length) campos = Object.keys(p).slice(0, 40);
  }

  function aoMensagem(txt) {
    if (typeof txt !== 'string') return;
    const interessa = txt.indexOf('"t":"welcome"') !== -1 || txt.indexOf('"t":"estado"') !== -1 || txt.indexOf('"t":"market"') !== -1 || txt.indexOf('"t":"erro"') !== -1;
    if (!interessa) return;
    let m;
    try { m = JSON.parse(txt); } catch (e) { return; }
    if (!m) return;
    if (m.t === 'welcome' || m.t === 'estado') {
      const e = m.t === 'welcome' ? m.estado : m.estado;
      if (!e) return;
      if (Array.isArray(e.pokemons)) {
        if (e.cheio || m.t === 'welcome') mapa.clear();
        e.pokemons.forEach(guardar);
        temLista = true;
      }
      if (Array.isArray(e.pkMud)) e.pkMud.forEach((x) => { if (ehPoke(x)) guardar(x); });
      if (Array.isArray(e.pkFora)) e.pkFora.forEach((id) => mapa.delete(id));
      sujo = true;
    } else if (m.t === 'market' && m.aba === 'criado' && m.anuncio) {
      if (pendente && m.anuncio.pokemonId === pendente.id) {
        ultimo = { ok: true, id: m.anuncio.id, nome: pendente.nome, preco: m.anuncio.preco, dias: m.anuncio.dias, em: Date.now() };
        mapa.delete(pendente.id);
        pendente = null;
        sujo = true;
      }
    } else if (m.t === 'erro' && pendente) {
      ultimo = { ok: false, nome: pendente.nome, motivo: String(m.msg || m.erro || m.mensagem || m.texto || 'recusado pelo servidor'), em: Date.now() };
      pendente = null;
      sujo = true;
    }
  }
  if (BUS) BUS.on(aoMensagem);

  function resumo(p) {
    const iv = p.ivs || {};
    return {
      id: p.id, nome: p.nome || String(p.speciesId), apelido: p.apelido || null, level: p.level,
      shiny: !!p.shiny, tipos: p.tipos || [], nota: p.nota == null ? null : p.nota, quality: p.quality == null ? null : p.quality,
      potencia: p.potencia == null ? null : p.potencia, ivTotal: p.ivTotal != null ? p.ivTotal : (Object.keys(iv).length ? Object.values(iv).reduce((a, b) => a + (Number(b) || 0), 0) : null),
      local: p.local || p.onde || p.lugar || p.loc || p.pos || (p.depot ? 'depot' : p.equipe ? 'equipe' : null),
      p5: p.potencia === 5 || p.p5 === true
    };
  }

  const post = (o) => window.postMessage(Object.assign({ ch: CH, from: 'venda' }, o), '*');

  function emitir() {
    sujo = false;
    ultEmit = Date.now();
    const ws = getWs();
    post({
      type: 'state',
      state: {
        conectado: !!(ws && ws.readyState === 1), temLista, total: mapa.size, campos,
        pensaoDia: PENSAO_DIA, comissao: COMISSAO, precoMin: PRECO_MIN, diasOk: DIAS_OK,
        pendente: pendente ? { id: pendente.id, nome: pendente.nome } : null, ultimo,
        lista: Array.from(mapa.values()).map(resumo)
      }
    });
  }

  function criar(m) {
    const id = Number(m.pokemonId);
    const preco = Math.floor(Number(m.preco));
    const dias = Math.floor(Number(m.dias));
    const p = mapa.get(id);
    const ws = getWs();
    if (!p) { ultimo = { ok: false, motivo: 'Pokémon não está na lista da extensão.', em: Date.now() }; sujo = true; return; }
    if (!ws || ws.readyState !== 1) { ultimo = { ok: false, motivo: 'Sem conexão com o jogo.', em: Date.now() }; sujo = true; return; }
    if (pendente && Date.now() - pendente.em < 15000) { ultimo = { ok: false, motivo: 'Aguarde o anúncio anterior terminar.', em: Date.now() }; sujo = true; return; }
    if (!(preco >= PRECO_MIN)) { ultimo = { ok: false, motivo: 'Preço mínimo: ' + PRECO_MIN + ' coins.', em: Date.now() }; sujo = true; return; }
    if (DIAS_OK.indexOf(dias) === -1) { ultimo = { ok: false, motivo: 'Dias inválidos.', em: Date.now() }; sujo = true; return; }
    pendente = { id, nome: p.nome, em: Date.now() };
    try {
      ws.send(JSON.stringify({ t: 'market.criar', tipo: 'pokemon', pokemonId: id, casaId: null, bicicletaId: null, qtd: 1, preco, moeda: 'gold', dias }));
      setTimeout(() => { try { ws.send(JSON.stringify({ t: 'market.meus' })); } catch (e) { /* ignora */ } }, 600);
    } catch (e) { pendente = null; ultimo = { ok: false, motivo: 'Falha ao enviar.', em: Date.now() }; }
    setTimeout(() => { if (pendente && pendente.id === id && Date.now() - pendente.em >= 9000) { ultimo = { ok: false, nome: p.nome, motivo: 'Sem resposta do servidor em 10 s (confira em "Meus anúncios").', em: Date.now() }; pendente = null; sujo = true; } }, 10000);
    sujo = true;
  }

  window.addEventListener('message', (e) => {
    const m = e.data;
    if (e.source !== window || !m || m.ch !== CH || m.from !== 'ui') return;
    if (m.type === 'hello') sujo = true;
    else if (m.type === 'criar') criar(m);
  });

  setInterval(() => { if (sujo || Date.now() - ultEmit > 3000) emitir(); }, 500);
  window.__ateforpVendaInfo = () => ({ total: mapa.size, campos, amostra: Array.from(mapa.values()).slice(0, 2) });
})();
