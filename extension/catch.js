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
  const CFG_PADRAO = { autoLigar: false, captura: { beastEspecial: false, bolaTela: 0, hudEco: true, hudSec: { recursos: true, captura: true, pvp: true, compras: true } }, estoque: { ativo: false, intervaloMin: 5, itens: {}, beast: { ativo: false, abaixo: 0, ate: 0 } } };
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
        captura: { beastEspecial: !!(s.captura && s.captura.beastEspecial), bolaTela: Number(s.captura && s.captura.bolaTela) || 0, hudEco: !(s.captura && s.captura.hudEco === false), hudSec: { recursos: !(s.captura && s.captura.hudSec && s.captura.hudSec.recursos === false), captura: !(s.captura && s.captura.hudSec && s.captura.hudSec.captura === false), pvp: !(s.captura && s.captura.hudSec && s.captura.hudSec.pvp === false), compras: !(s.captura && s.captura.hudSec && s.captura.hudSec.compras === false) } },
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
    if ((cfg2.captura.beastEspecial || ativo || cfg2.captura.hudEco) && txt.indexOf('"t":"batalha"') === 1 && txt.length < 60000
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
    if ((cfg2.captura.beastEspecial || ativo || cfg2.captura.hudEco) && txt.indexOf('"t":"campo') === 1) {   // quadros do campo (campo / campo.init): guarda quem é shiny, pois o jogo manda isso só uma vez (delta)
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
  // Beast Ball em shiny e lendário (opcional): lança a melhor bola que você tiver (Beast → Ultra → Super → Great → Poke)
const ORDEM_BOLAS = [5, 4, 3, 2, 1];
const capEsp = { info: '', diag: '', lancadas: 0, vistos: new Map(), diagFeito: false };
function tentarBolaEspecial(linhas) {
  const e = eu();
  const bolas = (e && e.balls) || {};
  for (const linha of linhas) {
    if (linha.offsetParent === null) continue;
    const slot = linha.dataset ? linha.dataset.slot : null;
    if (slot == null || slot === '') continue;
    const quem = linha.querySelector('.caido-quem');
    const nome = String(quem ? quem.textContent : linha.textContent).replace(/\s*Nv\s*\d+.*$/i, '').replace(/[✨⭐]/g, '').trim();
    const no = mobsInfo.get(Number(slot)) || mobsInfo.get(slot) || null;
    if (!capEsp.diagFeito) {
      capEsp.diagFeito = true;
      capEsp.diag = no ? 'detecção de shiny ativa (dados do Pokémon caído lidos do jogo)' : 'não achei os dados deste Pokémon caído; só reconheço lendário pelo nome (a opção precisa estar ligada antes de o Pokémon aparecer)';
      console.log('[PokeIdle Tools by Ateforp] captura especial: ' + capEsp.diag); sujo = true;
    }
    const shiny = !!(no && no.shiny) || /shiny|✨/i.test(linha.textContent);
    const lend = typeof window.__ateforpEhLendario === 'function' && window.__ateforpEhLendario(nome);
    if (!shiny && !lend) continue;
    const ult = capEsp.vistos.get(slot) || 0;
    if (Date.now() - ult < 1800) return true;                    // já lançou agora há pouco: espera o resultado
    const ballId = ORDEM_BOLAS.find((id) => (Number(bolas[id]) || 0) > 0);
    if (!ballId) return false;                                    // sem nenhuma bola: deixa o jogo avisar
    if (!enviarJogo({ t: 'ball.throw', ballId, slot: Number.isNaN(Number(slot)) ? slot : Number(slot) })) return false;
    capEsp.vistos.set(slot, Date.now()); capEsp.lancadas++; ultLancado.slot = Number.isNaN(Number(slot)) ? slot : Number(slot); ultLancado.em = Date.now();
    const bolaNome = ((dados.w && dados.w.catalogoBolas) || []).find((b) => b.id === ballId);
    capEsp.info = (shiny ? 'Shiny' : 'Lendário') + ' ' + nome + ': ' + ((bolaNome && (bolaNome.nome || bolaNome.name)) || 'bola ' + ballId) + ' · ' + hora();
    console.log('[PokeIdle Tools by Ateforp] captura especial: ' + capEsp.info); sujo = true;
    return true;
  }
  return false;
}
// Sem a lista da tela (modo Economia / Ultra do jogo escondem ou não desenham os caídos): captura direto pela conexão,
// com os dados do campo que o próprio jogo envia. A bola é a que você escolheu aqui (ou a 1ª com estoque, como o jogo faz).
let ultSemTela = 0;
function bolaNormal(bolas) {
  const esc = cfg2.captura.bolaTela;
  if (esc && (Number(bolas[esc]) || 0) > 0) return esc;
  const cat = (dados.w && dados.w.catalogoBolas) || [];
  const b = cat.find((x) => (Number(bolas[x.id]) || 0) > 0);
  return b ? b.id : null;
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
    const esp = !!cfg2.captura.beastEspecial && (m.shiny || (typeof window.__ateforpEhLendario === 'function' && m.nome && window.__ateforpEhLendario(m.nome)));
    cand.push({ slot, m, esp, resta: m.expira || 0 });
  }
  if (!cand.length) return false;
  cand.sort((a, b) => (b.esp - a.esp) || ((a.m.tent || 0) - (b.m.tent || 0)) || (a.resta - b.resta));   // shiny/lendário primeiro; depois quem ainda não foi tentado
  const { slot, m, esp } = cand[0];
  const ballId = esp ? ORDEM_BOLAS.find((id) => (Number(bolas[id]) || 0) > 0) : bolaNormal(bolas);
  if (!ballId) return false;
  if (!enviarJogo({ t: 'ball.throw', ballId, slot })) return false;
  m.tent = (m.tent || 0) + 1;
  ultSemTela = agora; capEsp.vistos.set(slot, agora); capSemTela.lancadas++; ultLancado.slot = slot; ultLancado.em = agora;
  if (esp) {
    capEsp.lancadas++;
    const bn = ((dados.w && dados.w.catalogoBolas) || []).find((x) => x.id === ballId);
    capEsp.info = (m.shiny ? 'Shiny' : 'Lendário') + ' ' + (m.nome || '') + ': ' + ((bn && (bn.nome || bn.name)) || 'bola ' + ballId) + ' · ' + hora();
  }
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
    const l = [{ t: 'Auto captura ' + (ativo ? 'LIGADA' : 'desligada') + (capSemTela.lancadas ? '  ·  lançadas sem a lista: ' + capSemTela.lancadas : '') + (capEsp.info ? '  ·  último especial: ' + capEsp.info : '') }];
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
    if (cfg2.captura.beastEspecial) { try { if (tentarBolaEspecial(linhas)) return; } catch (err) { /* ignora e clica normal */ } }
    b.click();
  }, Math.max(500, PADRAO.intervaloMs));
  // vigia rápida (0,2 s): shiny/lendário não esperam o ritmo normal; e, sem a lista na tela (modo Economia/Ultra), captura pela conexão
  timerEspecial = setInterval(() => {
    const linhas = Array.from(document.querySelectorAll('#caidos-lista .caido'));
    const visivel = linhas.length && linhas[0].offsetParent !== null;
    try {
      if (visivel) { if (cfg2.captura.beastEspecial) tentarBolaEspecial(linhas); }
      else capturarSemTela();
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
      await esperar(lotes === 1 ? 1200 : 700);
      const novo = quantidade(it);
      const ganho = novo - tem;
      if (ganho >= qtd) { tem = novo; tentativa = null; continue; }
      if (ganho > 0) {                 // o servidor aceitou menos do que o pedido: aprende o lote
        tem = novo; capLote[it.chave] = ganho; tentativa = null; semGanho = 0;
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
        ativo, autoLigar: !!cfg2.autoLigar, capBeastEsp: !!cfg2.captura.beastEspecial, capBolaTela: cfg2.captura.bolaTela, capHud: !!cfg2.captura.hudEco, capHudSec: cfg2.captura.hudSec, capSemTela: capSemTela.lancadas, capInfo: capEsp.info, capDiag: capEsp.diag, capLancadas: capEsp.lancadas,
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
      case 'cap-beast': cfg2.captura.beastEspecial = !!m.value; capEsp.diagFeito = false; salvarCfg2(); sujo = true; break;
      case 'cap-hud': cfg2.captura.hudEco = !!m.value; salvarCfg2(); sujo = true; atualizarHud(); break;
      case 'cap-hud-sec': if (cfg2.captura.hudSec && m.chave in cfg2.captura.hudSec) { cfg2.captura.hudSec[m.chave] = !!m.value; salvarCfg2(); sujo = true; atualizarHud(); } break;
      case 'cap-bola': cfg2.captura.bolaTela = Math.max(0, Math.floor(Number(m.value)) || 0); salvarCfg2(); sujo = true; break;
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
