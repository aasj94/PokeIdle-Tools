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
    rp = m.state;
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
    vd = m.state; renderVenda(); renderRegistroVenda();
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
  const hnEnviarCfg = () => hnCmd({ type: 'cfg', passoMs: Math.round((Number($('hnPasso').value) || 1) * 1000), olharMs: Math.round((Number($('hnOlhar').value) || 0.3) * 1000), parar: $('hnParar').checked, centro: $('hnCentro').checked });
  function renderHunt() {
    if (!hn) return;
    $('hnOn').checked = !!hn.ligado;
    const ESTADO = { parado: 'desligado', espera: 'ligado — escolhendo o próximo mapa', olhando: 'ligado — olhando o mapa', cacando: 'ligado — SHINY! derrotando e capturando' };
    $('hnHint').textContent = hn.ligado ? ESTADO[hn.est] || 'ligado' : (hn.msg && hn.msg !== 'Desligado.' ? hn.msg : 'desligado');
    const m = hn.mapas;
    $('hnInfo').textContent = !hn.conectado ? 'Sem conexão com o jogo.' : !m.total ? 'Sem a lista de mapas: recarregue o jogo (F5).' : 'Nível ' + (hn.nivel != null ? fmt(hn.nivel) : '?') + ' · ' + m.elegiveis + ' mapas liberados (sem Outland)';
    if (root.activeElement !== $('hnPasso')) $('hnPasso').value = String((hn.cfg.passoMs || 1000) / 1000);
    if (root.activeElement !== $('hnOlhar')) $('hnOlhar').value = String((hn.cfg.olharMs || 300) / 1000);
    $('hnParar').checked = !!hn.cfg.parar; $('hnCentro').checked = !!hn.cfg.centro;
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
  for (const id of ['hnPasso', 'hnOlhar', 'hnParar', 'hnCentro']) $(id).addEventListener('change', hnEnviarCfg);
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
    shiny: () => !!(hn && hn.ligado),
    setShiny: (v) => hnCmd({ type: 'ligar', value: !!v }),
    onChange: (f) => listeners.push(f)
  };
}
