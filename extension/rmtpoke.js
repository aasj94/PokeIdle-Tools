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
  // consultas repetidas com o mesmo resultado viram uma linha só (com contagem), para não encher o registro
  let ultConsLog = null;
  function logConsulta(msg, lvl) {
    if (ultConsLog && ultConsLog.msg === msg && logs[logs.length - 1] === ultConsLog.e) {
      ultConsLog.n++; ultConsLog.e.t = Date.now(); ultConsLog.e.msg = msg + ' (×' + ultConsLog.n + ')'; logSujo = true; sujo = true; return;
    }
    log(msg, lvl); ultConsLog = { msg, n: 1, e: logs[logs.length - 1] };
  }
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
    // o ritmo das regras conta só os MEUS pedidos (antes contava também os do motor de compra de itens, que pedem a cada poucos
    // segundos e deixavam as regras sem vez); do motor só respeito uma folga curta, para os pedidos não saírem colados
    const pen = penalidade + (e ? e.penalty || 0 : 0);
    return Date.now() - ultReq >= base + pen && Date.now() - (e ? e.lastReq || 0 : 0) >= 1200;
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
    } else if (pendConsulta && pendConsulta.tipo === 'regra' && Date.now() - pendConsulta.em < 8000) {
      const rr = pendConsulta.regra; pendConsulta = null;
      const abertos = linhas.filter((a) => a.estado === 'aberto'); const casam = rr ? abertos.filter((a) => casa(rr, a)).length : 0; const tot = Number(m.total);
      logConsulta('Consulta · ' + (rr ? (rr.nome || rr.especie || 'regra') : 'regra') + ': ' + (abertos.length ? abertos.length + ' anúncio(s) vistos' + (Number.isFinite(tot) && tot > abertos.length ? ' (de ' + tot + ' no mercado)' : '') + ', ' + (casam ? casam + ' batem na regra' : 'nenhum bate na regra') : 'nenhum anúncio com esses filtros no mercado agora'), casam ? 'ok' : 'info');
    }
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
    marcarReq(); S.consultas++; pendConsulta = { tipo: 'regra', em: Date.now(), regra: r };
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
      { const rv = cfg.renova, sm = cfg.simular; cfg = normCfg(m.cfg); if (!m.cfg || !Array.isArray(m.cfg.renova)) cfg.renova = rv; if (!m.cfg || m.cfg.simular === undefined) cfg.simular = sm; for (const r of cfg.renova) { const o = (rv || []).find((x) => x.id === r.id); if (o) { r.renovacoes = o.renovacoes; r.ultima = o.ultima; } } }
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
