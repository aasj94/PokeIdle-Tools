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
  const MAX_FALHAS = 5;               // falhas seguidas => desliga

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
    if (typeof txt === 'string' && !jaLogou && txt.indexOf('"t":"welcome"') !== -1) {
      jaLogou = true;
      if (autoLigar && !ativo) { ligar(true); }
    }
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
        S.aguardandoResp = 0; S.falhas++; S.proximo = Date.now() + BACKOFF;
        S.msg = 'Servidor recusou: ' + String((m && (m.msg || m.erro || m.mensagem || m.texto)) || 'erro') + ' — tentando de novo em 30 s.';
        if (S.falhas >= MAX_FALHAS) { ativo = false; S.msg = 'Desligado: ' + MAX_FALHAS + ' falhas seguidas.'; }
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
      S.aguardandoResp = 0; S.falhas++; S.proximo = agora + BACKOFF; S.msg = 'Sem resposta da fila; tentando de novo em 30 s.'; sujo = true;
      if (S.falhas >= MAX_FALHAS) { ativo = false; S.msg = 'Desligado: ' + MAX_FALHAS + ' falhas seguidas.'; }
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
