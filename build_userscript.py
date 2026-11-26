#!/usr/bin/env python3
"""Gera o userscript único (Tampermonkey/Violentmonkey) a partir dos mesmos arquivos da extensão."""
import json, os, sys
d = os.path.dirname(os.path.abspath(__file__))
rd = lambda n: open(os.path.join(d, n), encoding='utf-8').read()
ver = json.load(open(os.path.join(d, 'manifest.json')))['version']
out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(d, '..', 'pokeidle-ateforp-tools.user.js')

import base64
icon = 'data:image/png;base64,' + base64.b64encode(open(os.path.join(d, 'icons', 'icon64.png'), 'rb').read()).decode()

head = f"""// ==UserScript==
// @name         PokeIdle Tools by Ateforp
// @namespace    https://pokeidle.io/
// @version      {ver}
// @icon         {icon}
// @description  Configurações de PvE, PvP, compras, tudo automático e num painel só.
// @match        https://pokeidle.io/*
// @run-at       document-start
// @noframes
// @grant        none
// @license      MIT
// ==/UserScript==
"""

shim = r"""
/* ---- camada de compatibilidade: o userscript usa localStorage no lugar do chrome.storage da extensão ---- */
(() => {
  'use strict';
  if (window.chrome && window.chrome.storage && window.chrome.storage.local) return;
  const KEY = 'ateforp_store';
  const listeners = [];
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } };
  const write = (o) => { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { /* cheio/bloqueado */ } };
  window.addEventListener('storage', (ev) => {   // outra aba do jogo mudou algo
    if (ev.key !== KEY) return;
    let a = {}, b = {};
    try { a = JSON.parse(ev.oldValue || '{}') || {}; b = JSON.parse(ev.newValue || '{}') || {}; } catch (e) { return; }
    const ch = {};
    Object.keys(b).forEach((k) => { if (JSON.stringify(a[k]) !== JSON.stringify(b[k])) ch[k] = { oldValue: a[k], newValue: b[k] }; });
    if (Object.keys(ch).length) listeners.slice().forEach((f) => { try { f(ch, 'local'); } catch (e) { /* ignora */ } });
  });
  window.chrome = window.chrome || {};
  window.chrome.runtime = { id: 'userscript', onMessage: { addListener() {} } };
  window.chrome.storage = { local: {
    get(keys, cb) {
      const all = read(), o = {};
      (Array.isArray(keys) ? keys : [keys]).forEach((k) => { if (k in all) o[k] = JSON.parse(JSON.stringify(all[k])); });
      setTimeout(() => cb(o), 0);
    },
    set(obj) {
      const all = read(), ch = {};
      for (const k of Object.keys(obj)) {
        const nv = JSON.parse(JSON.stringify(obj[k]));
        ch[k] = { oldValue: all[k], newValue: nv };
        all[k] = nv;
      }
      write(all);
      setTimeout(() => listeners.slice().forEach((f) => { try { f(ch, 'local'); } catch (e) { /* ignora */ } }), 0);
    } },
    onChanged: { addListener: (f) => listeners.push(f) } };
})();
"""

ui_part = "\n".join(rd(n) for n in ['gyarados.js', 'qrcode.min.js', 'panel-style.js', 'releases.js']) + "\n(() => {\n" + rd('ui.js') + "\n" + rd('panel.js').replace("(() => {\n  'use strict';", "(() => {", 1) + "\n})();\n"
# painel só depois que o DOM existir
boot = "(function () {\n  const start = () => {\n" + "".join("    " + l + "\n" for l in ui_part.splitlines()) + "  };\n  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();\n})();\n"

body = "(function () {\n'use strict';\n" + shim + "\n/* ===== motor do Mercado ===== */\n" + rd('engine.js') + "\n/* ===== ponte ===== */\n" + rd('bridge.js') + "\n/* ===== captura / estoque ===== */\n" + rd('catch.js') + "\n/* ===== venda automatica ===== */\n" + rd('autovenda.js') + "\n/* ===== pvp ===== */\n" + rd('pvp.js') + "\n/* ===== compra de pokemon (RMT) ===== */\n" + rd('rmtpoke.js') + "\n/* ===== shiny monitor ===== */\n" + rd('shinymon.js') + "\n/* ===== painel ===== */\n" + boot + "\n})();\n"
open(out, 'w', encoding='utf-8').write(head + "\n" + body)
print('ok', out, len(head + body) // 1024, 'KB')
