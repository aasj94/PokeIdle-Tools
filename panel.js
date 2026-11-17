/*
 * PokeIdle Ateforp Tools — painel dentro do jogo.
 * Visual do Auto Captura: botão do Gyarados (liga/desliga a captura) + botão "Ateforp Tools" encaixados logo
 * acima do card do Pokémon em campo; abrem uma janela azul arrastável pelo cabeçalho.
 * Fica num Shadow DOM, então o CSS do jogo não mexe nele e a janela não fecha sozinha nem ao digitar.
 */
(() => {
  'use strict';
  if (window.top !== window || window.__pmPanel) return;
  window.__pmPanel = true;

  const TEMPLATE = `
<div class="root">
  <div class="panel" id="panel" hidden>
    <header id="hdr" title="Segure e arraste para mover a janela (duplo clique volta ao centro e ao tamanho padrão)">
      <span id="logo"></span>
      <h1>PokeIdle Ateforp Tools</h1>
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
      <div class="mut pixh">Aponte a câmera do app do seu banco para o QR code, ou use o Pix copia e cola.</div>
      <div class="btns"><button id="pixCopy2" class="icon">Copiar Pix copia e cola</button><button id="pixClose" class="icon">Fechar</button></div>
      <div class="mut" id="pixMsg"></div>
    </div>
    <div class="corpo">
      <nav class="tabs" id="tabs">
        <button data-tab="captura" class="on">PvE</button>
        <button data-tab="pvp">PvP</button>
        <button data-tab="itens">Mercado RMT</button>
        <button data-tab="registro">Logs</button>
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
          <label class="switch">
            <input type="checkbox" id="vdSim" checked>
            <span class="slider"></span>
            <span class="lbl"><b>Só simular</b><small>não vende nada: só mostra na prévia o que seria feito (recomendado até conferir as regras)</small></span>
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


      <section id="tab-itens" class="tab" hidden>
        <nav class="tabs sub" id="subtabs">
          <button data-sub="compras" class="on">Compras</button>
          <button data-sub="hist">Histórico de compras</button>
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

  // ---- apoio ao criador (Pix, opcional) ----
  const PIX_CHAVE = 'd5a7fedd-5cea-4258-b2e3-afb460682ad7';       // chave Pix do criador
  const PIX_NOME = 'Ateforp Tools';         // nome que aparece no QR (até 25 letras, sem acento)
  const PIX_CIDADE = 'Brasil';     // cidade (até 15 letras, sem acento)
  const pixOk = PIX_CHAVE.indexOf('@@') === -1 && PIX_CHAVE.trim() !== '';
  const semAcento = (s, n) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9 .\-]/g, '').trim().toUpperCase().slice(0, n);
  const tlv = (id, v) => id + String(v.length).padStart(2, '0') + v;
  function crc16(s) {
    let c = 0xFFFF;
    for (let i = 0; i < s.length; i++) { c ^= s.charCodeAt(i) << 8; for (let k = 0; k < 8; k++) c = (c & 0x8000) ? ((c << 1) ^ 0x1021) & 0xFFFF : (c << 1) & 0xFFFF; }
    return c.toString(16).toUpperCase().padStart(4, '0');
  }
  // Pix "copia e cola" estático (BR Code): sem valor, o pagador digita quanto quiser
  function pixPayload() {
    const nome = semAcento(PIX_NOME.indexOf('@@') === -1 ? PIX_NOME : '', 25) || 'APOIO';
    const cidade = semAcento(PIX_CIDADE.indexOf('@@') === -1 ? PIX_CIDADE : '', 15) || 'BRASIL';
    const base = tlv('00', '01') + tlv('01', '11') + tlv('26', tlv('00', 'br.gov.bcb.pix') + tlv('01', PIX_CHAVE.trim())) + tlv('52', '0000') + tlv('53', '986') + tlv('58', 'BR') + tlv('59', nome) + tlv('60', cidade) + tlv('62', tlv('05', '***')) + '6304';
    return base + crc16(base);
  }
  window.__ateforpPixPayload = pixPayload;
  $('pixCopy2').disabled = !pixOk;
  function desenharQr() {
    const box = $('pixQr'); box.textContent = '';
    if (!pixOk || typeof qrcode !== 'function') { box.hidden = true; return; }
    try { const q = qrcode(0, 'M'); q.addData(pixPayload(), 'Byte'); q.make(); box.innerHTML = q.createSvgTag({ cellSize: 4, margin: 3, scalable: true }); box.hidden = false; } catch (e) { box.hidden = true; }
  }
  $('pixBtn').addEventListener('click', () => { $('pixBox').hidden = !$('pixBox').hidden; $('pixMsg').textContent = ''; if (!$('pixBox').hidden) desenharQr(); });
  $('pixClose').addEventListener('click', () => { $('pixBox').hidden = true; });
  async function copiar(texto) {
    let ok = false;
    try { await navigator.clipboard.writeText(texto); ok = true; } catch (e) { /* tenta o plano B */ }
    if (!ok) { try { const t = document.createElement('textarea'); t.value = texto; t.style.cssText = 'position:fixed;opacity:0;left:-999px'; root.append(t); t.select(); ok = document.execCommand('copy'); t.remove(); } catch (e) { /* ignora */ } }
    $('pixMsg').textContent = ok ? 'Pix copia e cola copiado. Obrigado! 💙' : 'Não consegui copiar sozinho; use o QR code.';
  }
  $('pixCopy2').addEventListener('click', () => copiar(pixPayload()));

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
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden && !ui.fixa) setOpen(false); });
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
.ate-dock .at-open.on { box-shadow: inset 0 1px 0 #fff, inset 0 -3px 0 rgba(6,22,48,.45), inset 0 0 0 1px #ffd166, 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 14px rgba(255,209,102,.6); }
/* caixa de ferramentas: a cor da borda mostra a conexão (verde = conectado, amarelo = aguardando, vermelho = sem conexão) */
.ate-dock.toolbox { --tb: #ff4d4f; position: relative; display: flex; align-items: center; justify-content: center; gap: 9px; box-sizing: border-box; width: fit-content; max-width: 100%;
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
  const pvpIcon = (on) => { const d = new DOMParser().parseFromString(pvpSvg(on), 'image/svg+xml'); return document.importNode(d.documentElement, true); };
  let pvBtn = null, pvShown = null;

  const toolSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" style="pointer-events:none"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="#cfe3ff" stroke="#14202e" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  const toolIcon = () => { const d = new DOMParser().parseFromString(toolSvg, 'image/svg+xml'); return document.importNode(d.documentElement, true); };

  function buildDock() {
    wrap = document.createElement('div');
    wrap.id = 'ateforp-wrap';
    wrap.className = 'ate-dock toolbox';
    wrap.style.zIndex = '99999';

    gyBtn = document.createElement('button');
    gyBtn.type = 'button';
    gyBtn.className = 'at-btn at-gy';
    gyBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); api.setCaptura(!api.captura()); });

    pvBtn = document.createElement('button');
    pvBtn.type = 'button';
    pvBtn.className = 'at-btn at-gy';
    pvBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); api.setPvp(!api.pvp()); });

    openBtn = document.createElement('button');
    openBtn.type = 'button';
    openBtn.className = 'at-btn at-gy at-open';
    openBtn.title = 'Abrir/fechar o PokeIdle Ateforp Tools';
    openBtn.append(toolIcon());
    openBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); toggle(); });

    wrap.append(gyBtn, pvBtn, openBtn);
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
      const old = gyBtn.querySelector('svg');
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
      const old = pvBtn.querySelector('svg');
      const nv = pvpIcon(pon);
      if (old) pvBtn.replaceChild(nv, old); else pvBtn.appendChild(nv);
    }
    // borda da caixa: verde se o jogo está online (conectado), vermelho se não
    const online = api.conectado();
    wrap.style.setProperty('--tb', online ? '#6fd08a' : '#ff4d4f');
    wrap.title = online ? 'Jogo conectado' : 'Jogo sem conexão';
    // chave inglesa: verde / amarelo / vermelho (a regra do status da extensão)
    const st = host.dataset.status || 'off';
    const cor = st === 'on' ? '#6fd08a' : st === 'warn' ? '#ffd166' : '#ff4d4f';
    openBtn.style.borderColor = cor;
    openBtn.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,.35), inset 0 0 0 1px ' + cor + ', 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 12px ' + cor + (panel.hidden ? '88' : 'ff');
    const tp = openBtn.querySelector('svg path'); if (tp) tp.setAttribute('fill', cor);
    openBtn.title = 'Abrir/fechar o PokeIdle Ateforp Tools · ' + (st === 'on' ? 'compra automática ligada e conectado' : st === 'warn' ? 'aguardando o jogo / atenção' : 'compra automática desligada');
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
        Object.assign(wrap.style, { position: 'relative', left: '', top: '', right: '' });
      }
    } else if (Date.now() - INICIO > 8000 && (!wrap.isConnected || wrap.dataset.local === 'docado')) {
      (document.body || document.documentElement).appendChild(wrap);
      wrap.dataset.local = 'flutuante';
      Object.assign(wrap.style, { position: 'fixed', top: '18px', right: '12px', left: '', margin: '0' });
    }
    syncDock();
  }

  api.onChange(syncDock);
  setInterval(() => { try { ensureDock(); } catch (e) { /* ignora */ } }, 1500);
  ensureDock();
  window.__pmPanelApi = { toggle, setOpen, isOpen: () => !panel.hidden };
})();
