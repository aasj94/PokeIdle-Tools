/*
 * PokeIdle Auto-Compra - ponte (mundo isolado da extensão).
 * Liga o chrome.storage (onde o popup grava a configuração) ao motor que roda na página.
 */
(() => {
  'use strict';
  const CH = 'pokeidle-auto';
  let cfg = null;
  let progress = {};
  let compras = [];
  let tentativas = [];
  let catalog = {};
  let alive = true;

  // Batimento: enquanto a ponte estiver ligada à extensão, avisa o motor. Se a extensão for recarregada
  // sem recarregar a página, o contexto morre, o batimento para e o motor desliga a compra sozinho.
  setInterval(() => {
    try { if (alive && chrome.runtime && chrome.runtime.id) post({ type: 'ping' }); else alive = false; } catch (e) { alive = false; }
  }, 3000);

  const post = (o) => window.postMessage(Object.assign({ ch: CH, from: 'bridge' }, o), '*');
  const sendInit = () => post({ type: 'init', cfg, progress, compras, tentativas, catalog });

  chrome.storage.local.get(['cfg', 'estado'], (d) => {
    cfg = d.cfg || null;
    const e = d.estado || {};
    progress = e.progress || {};
    compras = e.compras || [];
    tentativas = e.tentativas || [];
    catalog = e.catalog || {};
    sendInit();
  });

  chrome.storage.onChanged.addListener((ch, area) => {
    if (area !== 'local') return;
    if (ch.cfg) {
      cfg = ch.cfg.newValue;
      post({ type: 'config', cfg });
    }
    if (ch.cmd && ch.cmd.newValue) post({ type: 'cmd', cmd: ch.cmd.newValue });
  });

  window.addEventListener('message', (e) => {
    const m = e.data;
    if (e.source !== window || !m || m.ch !== CH || m.from !== 'engine') return;
    if (m.type === 'hello') {
      sendInit();
    } else if (m.type === 'state') {
      try { chrome.storage.local.set({ estado: m.state }); } catch (err) { alive = false; }
    } else if (m.type === 'pause') {
      chrome.storage.local.get('cfg', (d) => {
        const c = d.cfg || {};
        c.enabled = false;
        chrome.storage.local.set({ cfg: c });
      });
    }
  });
})();
