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
  const CFG_PADRAO = { autoLigar: false, estoque: { ativo: false, intervaloMin: 5, itens: {}, beast: { ativo: false, abaixo: 0, ate: 0 } } };
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
  const dados = { w: null, campos: null, welcomeEm: 0, ultMsg: 0, itensCat: null };
  const BUS = window.__PM_BUS;
  const getWs = () => (BUS && BUS.ws ? BUS.ws() : null);

  let jaLogou = false;
  function mesclar(p) {
    if (!p) return;
    const { cheio, pokemons, pkMud, pkFora, dexMud, dexFora, ...resto } = p;   // só o que interessa (sem lista de pokémons)
    if (cheio || !dados.campos) dados.campos = resto;
    else Object.assign(dados.campos, resto);
  }

  function aoMensagem(txt) {
    if (typeof txt !== 'string') return;
    dados.ultMsg = Date.now();                       // qualquer mensagem do servidor = o jogo está vivo
    if (txt.indexOf('"t":"erro"') !== -1) {            // guarda o último erro do servidor (a compra de estoque lê a razão)
      try { const e = JSON.parse(txt); dados.ultErro = { em: Date.now(), txt: String((e && (e.msg || e.erro || e.mensagem || e.texto || e.message)) || '') }; } catch (err) { /* ignora */ }
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
      if (!jaLogou) { jaLogou = true; if (cfg2.autoLigar && !ativo) { definirCaptura(true); } }   // opcional: liga ao logar
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
  function pararCaptura() { if (timerCaptura) clearInterval(timerCaptura); timerCaptura = null; }
  function iniciarCaptura() {
    pararCaptura();
    if (!ativo) return;
    timerCaptura = setInterval(() => {
      const b = document.querySelector('#caidos-lista .caido');
      if (!b || b.offsetParent === null) return;
      b.click();
    }, Math.max(500, PADRAO.intervaloMs));
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
        ativo, autoLigar: !!cfg2.autoLigar,
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
