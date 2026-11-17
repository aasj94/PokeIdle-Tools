// ==UserScript==
// @name         PokeIdle Tools by Ateforp
// @namespace    https://pokeidle.io/
// @version      2.3.12
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAPI0lEQVR4AdxbCXBW1RX+3vv/P+ufQAIBAoEqAQGBLCrVjktHK6Ki7YzMqK0LUpaK4rSjRevCpu1YBey4UZaigDogyqKtWLFSBR2kCBJAFBBQQoAQlkBWsvy337lvyXvZA1ET/7n3nnvuue/c851z7n1LwEQLfurLOzupLeOuUTnjRrJOZJ3aRqrYMlLbtnNc5xZAQpMOUJ+Ni1Nbxk6m8s2oiDkKA+9xgQWsT7NOaSNVbFmgbStHAYOySW0d+5jYTvsaLY06QOWMHYGQ2gnDmAYD2Y1qalvCC6CMJxDCl2rrmF81ZlqDDiD4hYDxJmsaPL8d+Yl4b1cqFmzujb9v6Nsmqtiyenc37DjSwWOp7vaCMlcye1/SXD1NHQeonDFpTKGtgHEn7F9+UQweeCcLQ14chpsXX4o/rsrGzLX9MOvTvnhxfR/MWt+XlfQH4meu7U/7snELbRvy4lBMXJWFoyXRtvUkBkbRCZvVV7/tTs5XfA5QOXfE02Oyxwc7s5Zu7YkbF10G8XB5hQFDKSgVoVgBkUib48srAnh3ZzcMX3g5VmzvQTvtIlu4PLBabb8nbI9o4nMAELMUBs4XyanyIMavzMbj/xmAMipVBEvoGrwB9to4X1JuYtL7g3DviiwUnw4KJMAwBqKqagk8P9cBTPvxgHE9+KusNjB+RTbW7e1MjmCdiNvUzYB2wH+0LwX3vZWJ6gihSDEwnNvhd9KVqh2gUx9qigxIffrD87DloBwoNngllCmvKTVpSl4yQZzg8Jq2PfnG3CRM/+g8gWZVA1PVvrtihNEOAKJvBYyu4O/AyRgs/pxnhYBhmhOjTns2LAIONqVT2pH8tc1pyC3UmIkS3XAqeLN0bAcYNwkj9fl15xIzd7lElj0n3f3UdkI7kldHFOZ8eo5AtKsxQjqmPhUVhglTwb2/endnK8IanJPmtSkzoR3KV+/sXHMWANfKNjChKi7i6RgQB/xvf0fIrY4eYCFIdxsw3SUj2jlffDqAjblytglaI4rbYAgdYHLDywCwqyCOHQ9YAa0jbTvjR8DvKognRruoQHcTEaTaLMoqTSvyDujvkZYU7Ebhvk9wZNtK5K2fh9x1L+DQhgWaP5W7GRWlJ2imHZyzsKus0qAep0R6mDCQ4LIMNI+/GifwlPfxzAAf3wry6ooS5G95E8d3vIOi/Rtx+vg3iHAMkSpUlRdq/uTetcjfuBAnczfRXI8TzmD9qmrTgQsYRqKHg/7JEx89ABAsGz7t0ivc+5onbU356VN5OLxpCSpO5um1uyaHMOLyJDxzT0+8MSUdT47tgZQO9lMcZ0QqymiGxx5mQoROAO2C2EvapH2cQ1Vu8TtAC20P64M/AjfilPluhWcpLzn8FQpylkNVliAu2sCc+8/BnlczsPDh3hh3Qxdcd3FH7DtUgYKTVdrYqMRUJPS8gP2zt49K3OJ3AD2qCNTQNCItvDxkpBXklcVHcGL3Gm3EBX3j8Nnsgbjt6k6ad5o/vPAt5v6rQLNRid3Q6fzrYQaCPnvoCh/fHPu0Qk/jdwDBWUoinMIQS3oJaE05pCmXlXTjOPcHB8nrcXY1Jd+IPFJZhqNfrOJkhcz0WHwwsz96dY0mX1ME/D9WHdUDUQkEP0DAh+Cu14h+0C7VhFwrthu/Azjo7CFLCdX5QNk8HXWm8lM86CKVpUhOCOD1yekIBb2nMvDw3Fw44EPhrkgecK0deQlKzfonvl6LgxteRunRPWI1M8Evb9A+2s4L3OJzAGNHAVvxICdaSlqXL+Xtjotg4q3dkJbij/yUBQfw/MojIkYo3IVpL+BDFjiPPcd3rUFp/g6o6gqU5O+sI9d2e+b7ea3ebXwOkFE9mR2LKkt5K/GlR2gsjaa6Ont+/RdFmLk0X0QEn8LID2PkbfAcdew5vvtDlB39miNWqSjcj0h1pW1n0/ZyonWh3fodQK8xyaC3gewlJ/1biZ4usqJ765XJ3ALc07YRQj7ZXixE1+R+11jga60r4MuP7tZzLs+o+bBTfuIAxwi+1vyGcHCyW0x+03I3oaIDGrqoVcbt6Pfr6b6WuoZcOqgGkJwTtdeTPV9uR/7qCxPx7l/74dxUawtVlxU2P2jE6C7KjsnqFvqQfbZyBkgGtDKNVFv39MJii3Ixt/xsYAJ+P0J/kkBZwS4U7lkLZa9/Ys86OOCvyk7Ayif66usCduicec2j+lK38TlAp7+9aPOUtcxZgWh52QK27StzDfB2/jI6DSOHyWc4oPzYXshhV7j3E3jBL+Wdw7km6NxBDD65NNNuwehcL9TvAKYHVcGbfq3JhxKsCH+YU4STJdWyfp36/H29cBMfh0VQUZjrgr8iIwFLp/RBTLR+c8fxoirsPXhapiEQLduHweAZ0JS9jTuA6vSzNdMf/IIik1uTj7IdQDvxweZTXK1uMU0Di/g4PP6XXVzhLVcmYfm0dMRE1cRr4b8LUFGlACOIKD4mN9dexSDD86vRKIMUyrZSdjoxFfguQDe0El96xDrBZaljp+qeAzLu1Ol398TORYOQM28g5k/sDSfyIj98rBIzlh6WLqI79oBhCgw6g3Y2x359od3IlXaXQBl5Aa/TiMoUHaJIHaVMMlg8exxXLZCXHN6BkrzP9VrXX9wBo6619roeaKDp0Tka6T3q3jHuemovtxCf/IwA4lMHuUGiVc2wj47yrOdzAPFTRDWS/gRHbTbPxYSXcU5SQoWXqvnG5cUHt6M4bwt1ATf8rKPey0HnCNejzW+mLcrDx/YzQ0KvIQjGhKFkT4ktYpe2hyCFVwo6rD65fy0TEUMCrEf1NTJZlDDC7sVnwRfnbUPJoW1av0T+1Ud6635Lm4LCSgx/eBemL7FSP6ZTb8Qm97LAt8A+CEjP4v4MoCIN2gF/lrToYI5+Zpf1hl/SocHIP7vsMAaP3o6nFh/EwYIKme6rqzYU4qK7d+Aj3j1EENu1P+TbgDpD+0SHU/0OoHd8Sh2+NqWj9Lza4w5PeVHeVpTxRUUWunZIIt/8+ki3Tp26MA+Pzs/jx4/TeOKVQzhv5DaEr9/kqzdP2wM5NI1gDBLTr0A4dSADGWGsuF3FCc66DuX6DdpHmdcInwOozlIq28BRVh9tQl6Um4Pygl16nWE/7YA3p1lPbnrA00x+OQ8zXrdSOsRbZDC+4YMxqkN3JJ33C0TFd4Kz5xsE2ah9HgPY9TmAPLRSeulMaXEewR+z3taGXpSIZVPrj7y89z/zhgU+umMaEs+5BB3TL0PSwOFI7H0ZYrsNRLhHlu4nnX8d5MAzg87bIUMlkT8DOxlhgelWvwMYbZlggWfPt0jTfBE/X8sjrGiXJ7fXJ6VLt069f9Z+971fHmLi07L1HFnXNAMIxScjLqUPonnISd8MWG+OIqcVdpDYa6F9zvV6MbvxO0B71LqFKMVHVTpEsXJFFmfP1S8vPvA5Tp/Yr9UK+OWP90FUqJZ6SgX8XPdbXyrie17o3se5CEv9+pWApS2KlZNYWmafcq+nEZ7is1BRucGq9GTLwzW8lXY1fI1c0t4B//PMcJ3HVme9Bxh5B3woIRVhfuUVA6z1GtbfqnIG2bFHqKwv1K16MZkkTuBoRFOJCjOAfG156YlcX+SX8cCLsV9YOF0XRadOePZbzLEjH0rognBalpY1pb/15cSiV7YaOkAZVpcRhYCUSMgkVoLXj8VyqtIpirzMUgQkFOTL87/Ulw86NwbLar2waAGbCc/tx4L3rK+8IZ72YUl7WZXXN6W/9eU0yFPoAA/HrhKjCFCosqm2leNweJtWV/AvNfZXnkl3dEdsPZEfO2MfFjrgwymI75HBj1Di5AjVWbQh/U2tfyZyHTjidIrfAQRGq1iYCbpvUWWDh00dPmKDF2WZ6XFCfHXczG+weM1xPRaMT2HaZ/PAY0xtPbX1fV+8Nshu/A7wpTnBN8EHo2v+1PynefJh0tZKMmb6Pg/4zgSfyVEr4hIF7cQm9H8n87gmDXGLzwE0jwK2tfd8I3xUUi9eA6z8uBCXTNiBB+fsR8aYbVjyXzvycZ34QFMLfCP6NOjvVK7NdRufA8Q5bmTECG6DpvjYlHQEY5O0wu17yzDrrQJ+qrJeaOTAi0/LoMx2ajP0NbXe2cpBG2iQW/wOsDzAOZ705wXuovberc3Hp2Uitkt/BHnCB+KSEOIfM+P4oSKu2wAGlODlOurW1zVDn553hvNpPEsj9lOvi56dOg6oWZy3QU5uLh9K7Ir4bv0R330w4rr2Q5AvLUTvMaZl+hQd9d1cL3YQuV1MGIb7dTIcbQn125YLnmbIdviR8PHRNnJNVLHJEFmvZBxISWC6arA2aEbBdYaMu3z7laeE+Q5BrLoo87AJGNZfJAEMSI2Ad2n6JEKOziBgi5fM8PLtVz4oTWwnPCmB6nwT0eWbGE9BiEE9FZLixUNk7YPL/yyu+PldFLRPeXI4gn7uPwpkdE21yTQGLDrG7b1eHCL19kv5iCrpzkGQ6gwgpZPQ3vlRl/n+FvGxMXD+cW4BgY23dcvm3qHVSIyxnKDoBDkDHCe0Zz4cVY17hkr2EqQUhZXgz3JArDGf/WJWJMYCD93o3wbK3g6waXvkJ98UQVzNHYBZX6n/H5F2gNFv7lGCf5RVl9FXAledL95izAU0t4sDul7axuXXZUZwx+UamtUo9ZiRvaBQGO0A6RiZc58D1CrpS509GhhyLp3gBWefBbItZI6mbVx+cXoEz43koS0G66reMrLmzdZdNq4D2Aeiq2+lE/QXjkS+3f7zQQO/uVQuZia44GvxdACv4e6gs/SZ0XbkEvW3J5pIiDU0PDb8E1X5baRu8TnA6P9SEcyqYVBqizPjb3eaeP8RA9dk8CiU7SAg66V0Q73jdJ4e//7kQwcrrHkMmHG7C1wW3wJlXmdkvlLiYBPqc4AMGINfzmWKZNMJrwkvNeMnBl6dYGLHjACeZI5MvNHAxBvBarIKbRv8k7828dUzJm0NYFAvDzSlFggmI2t2nuDxVs8s7zDAC26HMkbQde6Xjs6JBkZfFSBop4oDnL7QH5YffaWJ5LAn6kAuA3kTsYxCA78GHSDzjaw5y1Fp9KOSKVCw/riPdvHbzA+Pk1CJ/gS/Ao38GnWAXGdcNLeUSh43suZegKjyzlD6/xfdxZeGhyif9kNXe/0HSe/SttFG3tEuNDLm/Vls53ij5f8AAAD//w/+al0AAAAGSURBVAMAb8DMDCpxzhIAAAAASUVORK5CYII=
// @description  Configurações de PvE, PvP, compras, tudo automático e num painel só.
// @match        https://pokeidle.io/*
// @run-at       document-start
// @noframes
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
'use strict';

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

/* ===== motor do Mercado ===== */
/*
 * PokeIdle Auto-Compra - motor (roda no mundo da página, "MAIN").
 *
 * Como o mercado do jogo funciona (observado no WebSocket wss://pokeidle.io/):
 *  - lista de um item:   {"t":"market.atualizar","pedidos":[{"t":"market.item","itemId":23,"moeda":"gold"}]}
 *      resposta:         {"t":"market","aba":"item","itemId":23,"moeda":"gold","linhas":[{id,qtd,preco,estado,compravelEm,vendedor,ficha:{nome}}]}
 *      LIMITE: o servidor só responde a 3 pedidos por requisição e ignora requisições muito seguidas.
 *  - todos os itens:     {"t":"market.itens","elementos":[],"categoria":""}  → resumo por itemId (anúncios, menor preço) + médias de 7 dias
 *  - histórico:          {"t":"market.historicoCompras","pagina":0,"seq":N} → {"t":"market","aba":"historicoCompras","linhas":[...]}
 *  - comprar:            {"t":"market.comprar","id":<anuncio>,"qtd":1,"preco":<preco>,"moeda":"gold","sorteioUi":1}
 *  - a compra NÃO é imediata: quem pediu entra num sorteio (janela de ~3 s) e só quem leva paga.
 *  - o resultado aparece numa atualização de estado: o estoque do item (estado.items[itemId]) sobe.
 *
 * Esta extensão não clica em nada na tela e não tenta contornar o anti-bot (Turnstile):
 * se o jogo pedir verificação, ela se desliga sozinha e avisa.
 */
(() => {
  'use strict';
  if (window.__pokeAuto) return;

  const CH = 'pokeidle-auto';
  const NativeWS = window.WebSocket;
  const MAX_PEDIDOS = 3; // limite do servidor por requisição
  // O jogo responde "Devagar aí — muitas mensagens" quando se pede rápido demais:
  // a 3 s por requisição ~36% foram recusadas; a 5 s, nenhuma. Por isso o mínimo é 4 s.
  const MIN_INTERVAL = typeof window.__PM_MIN_INTERVAL === 'number' ? window.__PM_MIN_INTERVAL : 4000;

  const DEFAULTS = {
    enabled: false,     // flag global: liga/desliga as compras automáticas (sempre começa desligada)
    intervalMs: 5000,   // intervalo entre requisições de lista (uma requisição = até 3 itens)
    inflightMs: 8000,   // quanto tempo espera o resultado de um sorteio antes de considerar perdido
    cooldownMs: 6000,   // não pede o mesmo anúncio de novo antes disso
    rules: []           // [{id, itemId, nome, min, max, qtd, simult, ativo}]
  };

  const S = {
    cfg: Object.assign({}, DEFAULTS),
    ws: null,
    leader: true,
    offset: 0,
    offsetSamples: [],
    stock: {},
    stockInit: false,
    progress: {},
    compras: [],
    tentativas: [],   // cada pedido de compra: pendente → ganhou / perdeu / erro, com o motivo
    attN: 0,
    inflight: {},
    cooldown: new Map(),
    timers: new Map(),
    rows: {},
    catalog: {},
    market: {},
    nameTries: {},
    history: { total: 0, porPagina: 30, pages: {}, updated: 0 },
    urgent: [], lastUrg: 0,
    lastList: {},
    queue: [],
    rotor: 0,
    reqN: 0,
    seq: 100,
    scanned: false,
    connectedAt: 0,
    seenTypes: new Set(),
    log: [],
    stats: { pedidos: 0, compradas: 0, listas: 0, limites: 0, ganhas: 0, perdidas: 0, erros: 0 },
    lastReq: 0,
    bridgeAt: Date.now(), // último sinal da extensão (ponte)
    penalty: 0,        // atraso extra (ms) aplicado depois de um aviso de limite do jogo
    rlHits: [],        // horários dos avisos "Devagar aí" recentes
    dirty: true,
    lastEmit: 0
  };

  // ---------- utilidades ----------
  const fmt = (n) => Number(n).toLocaleString('pt-BR');
  const num = (v, d) => (Number.isFinite(Number(v)) ? Number(v) : d);

  function log(msg, lvl) {
    S.log.push({ t: Date.now(), lvl: lvl || 'info', msg });
    if (S.log.length > 100) S.log.shift();
    S.dirty = true;
  }

  function normalizeCfg(c) {
    c = c || {};
    const rules = Array.isArray(c.rules) ? c.rules : [];
    return {
      enabled: c.enabled === true,
      intervalMs: Math.max(MIN_INTERVAL, num(c.intervalMs, DEFAULTS.intervalMs)),
      inflightMs: Math.max(1000, num(c.inflightMs, DEFAULTS.inflightMs)),
      cooldownMs: Math.max(0, num(c.cooldownMs, DEFAULTS.cooldownMs)),
      rules: rules
        .map((r) => ({
          id: String(r.id),
          itemId: num(r.itemId, 0),
          nome: r.nome || '',
          min: num(r.min, 0),
          max: num(r.max, 0),
          qtd: Math.max(0, Math.floor(num(r.qtd, 0))),
          // 0 = entra no sorteio de TODOS os anúncios da faixa até a meta (padrão). Regras antigas (sem v:2) migram para 0.
          simult: r.v === 2 ? Math.max(0, Math.floor(num(r.simult, 0))) : 0,
          v: 2,
          ativo: r.ativo !== false
        }))
        .filter((r) => r.itemId > 0)
    };
  }

  const nameOfItem = (itemId) => (S.catalog[itemId] && S.catalog[itemId].nome) || ('item ' + itemId);
  const ruleName = (r) => r.nome || nameOfItem(r.itemId);
  const progOf = (r) => S.progress[r.id] || 0;
  const remainingOf = (r) => Math.max(0, r.qtd - progOf(r));
  const ruleFor = (itemId) => S.cfg.rules.find((r) => r.itemId === itemId && r.ativo);
  const srvNow = () => Date.now() + S.offset;

  function activeRules() {
    if (!S.cfg.enabled || !S.leader) return [];
    return S.cfg.rules.filter((r) => r.ativo && r.max > 0 && remainingOf(r) > 0);
  }

  // ---------- pedidos em andamento (sorteios) ----------
  // ---------- tentativas (registro de cada pedido de compra) ----------
  function newAttempt(r, row, qtd) {
    const a = {
      n: ++S.attN, t: Date.now(), ruleId: r.id, itemId: r.itemId, nome: ruleName(r), anuncio: row.id,
      qtd, preco: row.preco, vendedor: row.vendedor || '', status: 'pendente', motivo: 'aguardando o sorteio (~3 s)',
      vencedor: '', frames: []
    };
    S.tentativas.push(a);
    if (S.tentativas.length > 300) S.tentativas.shift();
    return a;
  }

  function closeAttempt(a, status, motivo) {
    if (!a || a.status !== 'pendente') return;
    a.status = status;
    a.fim = Date.now();
    if (motivo) a.motivo = motivo;
    if (status === 'ganhou') S.stats.ganhas++;
    else if (status === 'perdeu') S.stats.perdidas++;
    else if (status === 'erro') S.stats.erros++;
    S.dirty = true;
  }

  // procura no quadro do jogo quem levou o sorteio (nome do campo ainda não confirmado: busca genérica)
  function findWinner(obj, depth) {
    if (!obj || typeof obj !== 'object' || depth > 3) return '';
    for (const k of Object.keys(obj)) {
      const v = obj[k];
      if (typeof v === 'string' && /venc|ganh|winner|levou|comprador/i.test(k) && v) return v;
      if (typeof v === 'string') { const mm = v.match(/(\S+)\s+levou/i); if (mm) return mm[1]; }
      if (v && typeof v === 'object') { const w = findWinner(v, depth + 1); if (w) return w; }
    }
    return '';
  }

  // quadros do jogo que chegam logo depois de um pedido ficam anexados à tentativa (para entender o motivo)
  function attachFrame(m, d) {
    const now = Date.now();
    const pend = S.tentativas.filter((a) => a.status === 'pendente' && now - a.t < 10000);
    if (!pend.length) return;
    const winner = findWinner(m, 0);
    const mentionsId = (a) => d.indexOf(String(a.anuncio)) >= 0;
    const targets = pend.filter(mentionsId);
    for (const a of (targets.length ? targets : [pend[pend.length - 1]])) {
      if (a.frames.length < 4) a.frames.push({ ms: now - a.t, t: m.t, txt: d.slice(0, 220) });
      if (winner && !a.vencedor) a.vencedor = winner;
    }
  }

  function finalizeExpired() {
    const now = Date.now();
    for (const a of S.tentativas) {
      if (a.status !== 'pendente' || now - a.t < S.cfg.inflightMs) continue;
      closeAttempt(a, 'perdeu', a.vencedor
        ? 'outro jogador levou: ' + a.vencedor
        : 'você não levou — outro jogador ganhou o sorteio ou o anúncio já tinha sido vendido');
    }
  }

  function pruneInflight(r) {
    const now = Date.now();
    const list = S.inflight[r.id] || [];
    const keep = list.filter((x) => x.expira > now);
    if (keep.length !== list.length) {
      log('Sorteio sem resposta (provavelmente perdido) — ' + ruleName(r), 'info');
    }
    S.inflight[r.id] = keep;
    return keep;
  }

  // Quantas unidades ainda posso pedir agora para essa regra.
  function allowedQty(r) {
    const list = pruneInflight(r);
    const rem = remainingOf(r);
    if (rem <= 0) return 0;
    if (r.simult === 0) return rem; // participa de todos os anúncios na faixa; para quando a meta é atingida
    if (r.simult === 1) {
      // modo estrito: pedidos em aberto + comprado nunca passam da quantidade
      const units = list.reduce((a, x) => a + x.qtd, 0);
      return Math.max(0, rem - units);
    }
    // vários sorteios ao mesmo tempo: mais chances, mas pode passar da quantidade
    return list.length < r.simult ? rem : 0;
  }

  // ---------- envio ----------
  function send(obj) {
    const ws = S.ws;
    if (!ws || ws.readyState !== 1) return false;
    try {
      NativeWS.prototype.send.call(ws, JSON.stringify(obj));
      return true;
    } catch (e) {
      log('Falha ao enviar: ' + e, 'erro');
      return false;
    }
  }

  function trySend(ruleId, row) {
    const r = S.cfg.rules.find((x) => x.id === ruleId);
    if (!r || !S.cfg.enabled || !S.leader || !r.ativo) return;
    if (row.preco < r.min || row.preco > r.max) return;
    if ((S.cooldown.get(row.id) || 0) > Date.now()) return;
    const allow = allowedQty(r);
    if (allow <= 0) return;
    const qtd = Math.min(row.qtd, allow);
    if (qtd <= 0) return;

    S.cooldown.set(row.id, Date.now() + S.cfg.cooldownMs);
    const desc = qtd + '× ' + ruleName(r) + ' a ' + fmt(row.preco) + ' (' + (row.vendedor || '?') + ')';

    const ok = send({ t: 'market.comprar', id: row.id, qtd, preco: row.preco, moeda: 'gold', sorteioUi: 1 });
    if (!ok) return;
    S.lastReq = Date.now(); // separa a próxima consulta da compra, para não estourar o limite do jogo
    const att = newAttempt(r, row, qtd);
    (S.inflight[r.id] = S.inflight[r.id] || []).push({
      id: row.id, qtd, preco: row.preco, vendedor: row.vendedor || '', expira: Date.now() + S.cfg.inflightMs, att
    });
    S.stats.pedidos++;
    log('Pedido enviado: ' + desc);
  }

  // ---------- lista de anúncios ----------
  function handleList(itemId, moeda, linhas) {
    if (moeda !== 'gold' || !Array.isArray(linhas)) return;
    S.stats.listas++;
    if (S.penalty > 0) S.penalty = Math.max(0, S.penalty - 500); // resposta normal: vai voltando ao ritmo configurado
    S.rows[itemId] = linhas;
    S.lastList[itemId] = { t: Date.now(), n: linhas.length };
    const first = linhas.find((l) => l && l.ficha && l.ficha.nome);
    if (first) S.catalog[itemId] = { nome: first.ficha.nome };
    S.dirty = true;

    const r = ruleFor(itemId);
    if (!r || !S.cfg.enabled || !S.leader || remainingOf(r) <= 0) return;

    const cand = linhas
      .filter((l) => l && l.estado === 'aberto' && l.qtd > 0 && l.preco >= r.min && l.preco <= r.max)
      .sort((a, b) => a.preco - b.preco || (a.compravelEm || 0) - (b.compravelEm || 0));

    const sNow = srvNow();
    for (const row of cand) {
      const wait = (row.compravelEm || 0) - sNow;
      if (wait > 0) {
        // ainda "Retido": agenda o pedido para o instante em que libera
        if (wait <= 20000 && !S.timers.has(row.id)) {
          const key = row.id;
          S.timers.set(
            key,
            setTimeout(() => {
              S.timers.delete(key);
              const cur = (S.rows[itemId] || []).find((x) => x.id === key);
              if (cur && cur.estado === 'aberto') trySend(r.id, cur);
            }, wait + 30)
          );
        }
      } else {
        trySend(r.id, row);
      }
    }
  }

  // ---------- resumo de todos os itens (descoberta) ----------
  function handleResumo(m) {
    if (!m.resumo || typeof m.resumo !== 'object') return;
    for (const id of Object.keys(m.resumo)) {
      const x = m.resumo[id] || {};
      const med = m.medias && m.medias[id] && m.medias[id].gold;
      S.market[id] = {
        anuncios: x.anuncios || 0,
        unidades: x.unidades || 0,
        minGold: x.minGold == null ? null : x.minGold,
        minOrb: x.minOrb == null ? null : x.minOrb,
        mediaGold: med && med.media ? med.media : (S.market[id] && S.market[id].mediaGold) || null
      };
    }
    // itens à venda em coins que ainda não têm nome: pede a lista deles para aprender o nome
    const unnamed = Object.keys(S.market)
      .filter((id) => S.market[id].minGold != null && !(S.catalog[id] && S.catalog[id].nome) && (S.nameTries[id] || 0) < 3)
      .map(Number);
    for (let i = 0; i < unnamed.length; i += MAX_PEDIDOS) {
      const chunk = unnamed.slice(i, i + MAX_PEDIDOS);
      chunk.forEach((id) => { S.nameTries[id] = (S.nameTries[id] || 0) + 1; });
      S.queue.push({ t: 'market.atualizar', pedidos: chunk.map((id) => ({ t: 'market.item', itemId: id, moeda: 'gold' })) });
    }
    S.dirty = true;
  }

  function requestScan(front) {
    const msg = { t: 'market.itens', elementos: [], categoria: '' };
    if (front) S.queue.unshift(msg); else S.queue.push(msg);
  }

  // ---------- histórico de compras do jogo ----------
  function requestHistory(pagina, front) {
    const msg = { t: 'market.historicoCompras', pagina: pagina || 0, seq: ++S.seq };
    // pedido feito pelo usuário (botões Atualizar / Carregar mais): sai logo, sem esperar a vez das compras
    if (front) S.urgent.push(msg); else S.queue.push(msg);
  }

  function handleHistory(m) {
    if (!Array.isArray(m.linhas)) return;
    S.history.total = m.total || 0;
    S.history.porPagina = m.porPagina || 30;
    S.history.pages[m.pagina || 0] = m.linhas.map((l) => ({
      id: l.id,
      desc: l.descricao,
      pago: l.bruto != null ? l.bruto : l.valor,
      moeda: l.moeda,
      vendedor: l.vendedor,
      em: l.em,
      tipo: l.tipo
    }));
    S.history.updated = Date.now();
    S.dirty = true;
  }

  // ---------- estoque = resultado das compras ----------
  function handleStock(items) {
    // O jogo manda o mapa completo de itens; item ausente = 0. Guardo sempre o mapa inteiro,
    // para já ter a linha de base quando uma regra for criada/ligada depois.
    const before = S.stock;
    const had = S.stockInit;
    S.stock = Object.assign({}, items);
    S.stockInit = true;
    for (const r of S.cfg.rules) {
      const cur = Number(items[r.itemId] || 0);
      const prev = had ? Number(before[r.itemId] || 0) : undefined;
      if (prev === undefined || cur <= prev || !S.leader) continue;
      const list = S.inflight[r.id] || [];
      if (!list.length) continue;
      const pend = list.reduce((a, x) => a + x.qtd, 0);
      let credit = Math.min(cur - prev, pend);
      if (credit <= 0) continue;
      S.progress[r.id] = progOf(r) + credit;
      S.stats.compradas += credit;
      log('✔ Comprou ' + credit + '× ' + ruleName(r) + ' (' + S.progress[r.id] + '/' + r.qtd + ')', 'ok');
      while (credit > 0 && list.length) {
        const head = list[0];
        const got = Math.min(head.qtd, credit);
        S.compras.push({
          t: Date.now(), itemId: r.itemId, nome: ruleName(r), qtd: got,
          preco: head.preco, total: head.preco * got, vendedor: head.vendedor
        });
        if (S.compras.length > 300) S.compras.shift();
        credit -= got;
        closeAttempt(head.att, 'ganhou', 'você levou o sorteio e pagou ' + fmt(head.preco * got) + ' coins');
        if (head.qtd <= got) list.shift(); else head.qtd -= got;
      }
      if (remainingOf(r) <= 0) log('Meta concluída: ' + ruleName(r), 'ok');
      // atualiza o histórico do jogo logo depois da compra
      setTimeout(() => requestHistory(0, true), 3000);
    }
  }

  // ---------- mensagens do jogo ----------
  function onGameMessage(ev) {
    const d = ev.data;
    if (typeof d !== 'string') return;
    // quadros de combate chegam várias vezes por segundo: nem parseia
    if (d.startsWith('{"t":"campo"') || d.startsWith('{"t":"batalha"') || d.startsWith('{"t":"chat"') || d.startsWith('{"t":"pong"')) return;
    let m;
    try { m = JSON.parse(d); } catch (e) { return; }
    if (!m || typeof m.t !== 'string') return;

    if (!S.seenTypes.has(m.t)) {
      S.seenTypes.add(m.t);
      if (!/^(estado|market)$/.test(m.t)) log('Tipo de mensagem novo: ' + m.t + ' ' + d.slice(0, 160), 'debug');
    }

    if (m.t === 'estado' && m.estado) {
      const e = m.estado;
      if (typeof e.servidorAgora === 'number') {
        // a latência faz a diferença parecer menor; o maior valor recente é o mais fiel
        S.offsetSamples.push(e.servidorAgora - Date.now());
        if (S.offsetSamples.length > 12) S.offsetSamples.shift();
        S.offset = Math.max.apply(null, S.offsetSamples);
      }
      if (e.items && typeof e.items === 'object') handleStock(e.items);
      const ks = Object.keys(e).filter((k) => /sorteio|market|compra/i.test(k));
      if (ks.length) log('estado[' + ks.join(',') + '] ' + JSON.stringify(ks.map((k) => e[k])).slice(0, 260), 'debug');
      return;
    }

    if (m.t === 'market') {
      if (/turnstile|captcha/i.test(d)) return pauseForChallenge();
      if (m.aba === 'item') return handleList(m.itemId, m.moeda, m.linhas);
      if (m.aba === 'itens') return handleResumo(m);
      if (m.aba === 'historicoCompras') return handleHistory(m);
      attachFrame(m, d);
      log('market: ' + d.slice(0, 260), 'debug');
      return;
    }

    if (/turnstile|captcha/i.test(d)) return pauseForChallenge();
    if (/^market/.test(m.t)) log('market: ' + d.slice(0, 260), 'debug');
    if (m.t === 'erro' && /devagar|muitas mensagens/i.test(d)) { attachFrame(m, d); return onRateLimit(); }
    if (m.t === 'erro' || m.erro) {
      // erro logo depois de um pedido: o jogo recusou (anúncio vendido, saldo, etc.)
      const now = Date.now();
      const last = S.tentativas.filter((a) => a.status === 'pendente' && now - a.t < 4000).pop();
      if (last) {
        attachFrame(m, d);
        closeAttempt(last, 'erro', 'o jogo recusou o pedido: ' + (m.msg || d.slice(0, 120)));
        for (const k of Object.keys(S.inflight)) S.inflight[k] = (S.inflight[k] || []).filter((x) => x.att !== last);
      }
    } else if (!/^(estado|pong)$/.test(m.t)) attachFrame(m, d);
    if (m.t === 'erro' || m.erro) log('Jogo respondeu erro: ' + d.slice(0, 260), 'erro');
  }

  // O jogo avisou que estamos mandando mensagens demais: recua, e se insistir, desliga sozinho.
  function onRateLimit() {
    const now = Date.now();
    S.rlHits = S.rlHits.filter((t) => now - t < 60000);
    S.rlHits.push(now);
    S.penalty = Math.min(15000, S.penalty + 2000);
    S.lastReq = now;
    S.stats.limites++;
    log('Aviso do jogo: "Devagar aí — muitas mensagens". Intervalo aumentado para ' +
      ((S.cfg.intervalMs + S.penalty) / 1000) + ' s.', 'erro');
    if (S.rlHits.length >= 6 && S.cfg.enabled) {
      S.cfg.enabled = false;
      log('O jogo avisou 6 vezes em 1 minuto. Compra automática DESLIGADA por segurança — aumente o intervalo e ligue de novo.', 'erro');
      post({ type: 'pause' });
    }
  }

  function pauseForChallenge() {
    if (!S.cfg.enabled) return;
    S.cfg.enabled = false;
    log('O jogo pediu verificação (anti-bot). Compra automática DESLIGADA — resolva no jogo e ligue de novo.', 'erro');
    post({ type: 'pause' });
  }

  // ---------- captura do WebSocket do jogo ----------
  // Barramento para os outros módulos (captura.js): recebe toda mensagem crua do jogo e a conexão atual.
  const BUS = (window.__PM_BUS = window.__PM_BUS || { subs: [], on(f) { this.subs.push(f); }, ws: () => S.ws });
  function attach(ws) {
    ws.addEventListener('message', (ev) => { for (const f of BUS.subs) { try { f(ev.data); } catch (err) { /* ignora */ } } });
    S.ws = ws;
    S.scanned = false;
    S.connectedAt = Date.now();
    ws.addEventListener('message', onGameMessage);
    ws.addEventListener('close', () => { if (S.ws === ws) S.ws = null; S.dirty = true; });
    ws.addEventListener('open', () => { S.dirty = true; });
    S.dirty = true;
  }

  window.WebSocket = new Proxy(NativeWS, {
    construct(target, args, newTarget) {
      const ws = Reflect.construct(target, args, newTarget);
      try { if (/pokeidle\.io/i.test(String(ws.url))) attach(ws); } catch (e) { /* ignora */ }
      return ws;
    }
  });

  // ---------- laço principal ----------
  // Escolhe até 3 itens (limite do servidor), em rodízio entre as regras ativas.
  function nextChunk(rules) {
    const ids = [];
    rules.forEach((r) => { if (ids.indexOf(r.itemId) < 0) ids.push(r.itemId); });
    if (!ids.length) return null;
    const take = Math.min(MAX_PEDIDOS, ids.length);
    const start = S.rotor % ids.length;
    let picks = ids.slice(start, start + take);
    if (picks.length < take) picks = picks.concat(ids.slice(0, take - picks.length));
    S.rotor = (start + take) % ids.length;
    return picks;
  }

  function tick() {
    const now = Date.now();
    finalizeExpired();
    const open = S.ws && S.ws.readyState === 1;

    // uma vez por conexão: descobre todos os itens e carrega o histórico (só leitura)
    if (open && S.leader && !S.scanned && now - S.connectedAt > 6000) {
      S.scanned = true;
      requestScan(false);
      requestHistory(0, false);
    }

    if (open && S.leader && S.urgent.length && now - S.lastUrg >= 1200) {
      if (send(S.urgent.shift())) S.lastUrg = now;
    }

    if (open && S.leader && now - S.lastReq >= S.cfg.intervalMs + S.penalty) {
      const rules = activeRules();
      const useQueue = S.queue.length && (!rules.length || S.reqN % 4 === 3);
      if (useQueue) {
        if (send(S.queue.shift())) { S.lastReq = now; S.reqN++; }
      } else if (rules.length) {
        const ids = nextChunk(rules);
        if (ids && send({ t: 'market.atualizar', pedidos: ids.map((id) => ({ t: 'market.item', itemId: id, moeda: 'gold' })) })) {
          S.lastReq = now; S.reqN++;
        }
      }
    }
    if (S.cfg.enabled && now - S.bridgeAt > 15000) {
      S.cfg.enabled = false;
      log('Perdi a ligação com a extensão (ela foi recarregada ou atualizada). Compra automática DESLIGADA — recarregue a página (F5).', 'erro');
    }
    if (now - S.lastEmit > 2000) S.dirty = true; // batimento: o painel sabe que o motor está vivo
    if (S.dirty && now - S.lastEmit > 800) emitState();
  }

  function emitState() {
    S.dirty = false;
    S.lastEmit = Date.now();
    if (!S.leader) return;
    post({
      type: 'state',
      state: {
        updated: Date.now(),
        conectado: !!(S.ws && S.ws.readyState === 1),
        leader: S.leader,
        offset: S.offset,
        progress: S.progress,
        aplicado: { enabled: S.cfg.enabled, intervalMs: S.cfg.intervalMs, rules: S.cfg.rules.map((r) => ({ id: r.id, min: r.min, max: r.max, qtd: r.qtd, ativo: r.ativo })) },
        compras: S.compras.slice(-200),
        tentativas: S.tentativas.slice(-150),
        catalog: S.catalog,
        market: S.market,
        history: S.history,
        lastList: S.lastList,
        stats: S.stats,
        log: S.log.slice(-60)
      }
    });
  }

  // ---------- ponte (bridge.js, mundo isolado) ----------
  function post(o) {
    window.postMessage(Object.assign({ ch: CH, from: 'engine' }, o), '*');
  }

  function onBridge(e) {
    const m = e.data;
    if (e.source !== window || !m || m.ch !== CH || m.from !== 'bridge') return;
    if (m.type === 'ping') { S.bridgeAt = Date.now(); return; }
    S.bridgeAt = Date.now();
    if (m.type === 'init') {
      if (m.progress && typeof m.progress === 'object') S.progress = Object.assign({}, m.progress);
      if (Array.isArray(m.compras) && !S.compras.length) S.compras = m.compras.slice(-300);
      if (Array.isArray(m.tentativas) && !S.tentativas.length) {
        // o que ficou pendente de uma sessão anterior não tem como ser confirmado
        S.tentativas = m.tentativas.slice(-300).map((a) => (a.status === 'pendente' ? Object.assign(a, { status: 'perdeu', motivo: 'sem confirmação (página recarregada)' }) : a));
        S.attN = S.tentativas.reduce((x, a) => Math.max(x, a.n || 0), 0);
      }
      if (m.catalog && typeof m.catalog === 'object') S.catalog = Object.assign({}, m.catalog, S.catalog);
      if (m.cfg) S.cfg = normalizeCfg(m.cfg);
      S.dirty = true;
    } else if (m.type === 'config') {
      const was = S.cfg.enabled;
      S.cfg = normalizeCfg(m.cfg);
      if (S.cfg.enabled && !was) { S.lastReq = 0; log('Compra automática LIGADA'); }
      if (!S.cfg.enabled && was) log('Compra automática desligada');
      S.dirty = true;
    } else if (m.type === 'cmd' && m.cmd) {
      const c = m.cmd;
      if (c.type === 'reset' && c.ruleId) { S.progress[c.ruleId] = 0; S.inflight[c.ruleId] = []; log('Contagem zerada'); }
      if (c.type === 'resetAll') { S.progress = {}; S.inflight = {}; log('Todas as contagens zeradas'); }
      if (c.type === 'history') {
        // "todas": recarrega todas as páginas já carregadas (Atualizar); senão, só a página pedida (Carregar mais)
        const n = c.todas ? Math.max(1, Object.keys(S.history.pages).length) : 1;
        for (let i = 0; i < n; i++) requestHistory(c.todas ? i : Math.max(0, num(c.pagina, 0)), true);
      }
      if (c.type === 'scan') { S.nameTries = {}; requestScan(true); log('Atualizando catálogo de itens…'); }
      if (c.type === 'clearCompras') { S.compras = []; log('Lista de compras da extensão limpa'); }
      if (c.type === 'clearTentativas') { S.tentativas = []; S.stats.ganhas = 0; S.stats.perdidas = 0; S.stats.erros = 0; S.stats.pedidos = 0; log('Lista de tentativas limpa'); }
      S.dirty = true;
    }
  }
  window.addEventListener('message', onBridge);

  // Só uma aba do jogo compra por vez (evita pedido duplicado).
  try {
    if (typeof navigator !== 'undefined' && navigator.locks) {
      S.leader = false;
      navigator.locks.request('pokeidle-auto-compra', { ifAvailable: true }, (lock) => {
        if (!lock) return;
        S.leader = true;
        S.dirty = true;
        return new Promise(() => {});
      });
    }
  } catch (e) { S.leader = true; }

  setInterval(tick, 100);
  post({ type: 'hello' });
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('DOMContentLoaded', () => post({ type: 'hello' }));
  }

  window.__pokeAuto = { S, tick, handleList, handleStock, onGameMessage };
})();

/* ===== ponte ===== */
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

/* ===== captura / estoque ===== */
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
  if (!hudEl) {
    hudEl = document.createElement('div');
    hudEl.id = 'ateforp-hud-eco';
    hudEl.style.cssText = 'position:fixed;left:50%;bottom:14px;transform:translateX(-50%);z-index:2147483000;width:min(94vw,680px);max-height:46vh;overflow:hidden;padding:8px 14px;border-radius:10px;background:rgba(18,26,40,.93);border:1px solid #3a557a;color:#e8eef8;font:600 12px/1.45 system-ui,sans-serif;text-align:left;pointer-events:none;box-shadow:0 4px 14px rgba(0,0,0,.5)';
    document.documentElement.appendChild(hudEl);   // no <html>, porque o modo Ultra dá display:none em tudo que é filho direto do <body>
  }
  hudEl.innerHTML = '';
  const topo = document.createElement('div'); topo.style.cssText = 'font-size:10px;letter-spacing:.06em;opacity:.7;text-transform:uppercase;text-align:center'; topo.textContent = 'PokeIdle Tools by Ateforp';
  hudEl.append(topo);
  for (const b of blocos) {
    const cx = document.createElement('div'); cx.style.cssText = 'margin-top:5px;padding-top:4px;border-top:1px solid rgba(255,255,255,.1)';
    const h = document.createElement('div'); h.style.cssText = 'font-size:10px;opacity:.65;text-transform:uppercase;letter-spacing:.05em'; h.textContent = b.titulo; cx.append(h);
    for (const ln of b.linhas) { const d = document.createElement('div'); d.style.cssText = 'font-size:' + (ln.forte ? '13px' : '11.5px') + (ln.alerta ? ';color:#ffd27a' : ''); d.textContent = ln.t; cx.append(d); }
    hudEl.append(cx);
  }
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

/* ===== venda automatica ===== */
/*
 * PokeIdle Tools by Ateforp - venda automática de Pokémon do Depósito (Market do jogo, venda ao NPC).
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
  window.__ateforpEhLendario = (nome) => ehLendario({ nome });   // usado pela captura (Beast Ball em lendário)
  const ehLendario = (p) => { const n = nomeNorm(p.nome); return LENDARIOS.some((l) => n.indexOf(l) !== -1) || extras.some((l) => l && n.indexOf(l) !== -1); };

  const PADRAO = {
    simular: false,
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
    out.simular = false;   // não existe mais modo de teste
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
  const snap = (p) => ({ nome: p.nome, level: p.level, shiny: !!p.shiny, lend: ehLendario(p), p: p.potencia, iv: ivTotal(p), q: milesimos(p.quality), n: milesimos(p.nota) });
  function registrar(tipo, pend, extra) {
    hist.unshift(Object.assign({ em: Date.now(), tipo, id: pend.id }, pend.snap || {}, { motivo: pend.motivo || null }, extra || {}));
    hist = hist.slice(0, 200);
    try { localStorage.setItem(CHAVE + '_hist', JSON.stringify(hist)); } catch (e) { /* ignora */ }
  }
  const S = { vendidos: 0, coletados: 0, falhas: 0, pend: null, ultAcao: 0, janela: [], pausaAte: 0, msg: 'Desligado.' };

  // Q e N chegam do jogo como decimais (ex.: 1.445); o jogo mostra e o usuário digita em milésimos (1.445 → 1445)
  const milesimos = (v) => Math.round((Number(v) || 0) * 1000);
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
    const vals = { p: p.potencia, iv: ivTotal(p), q: milesimos(p.quality), n: milesimos(p.nota) };
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
    const porAcao = (ac) => a.itens.filter((x) => x.acao === ac).slice(0, 40);   // até 40 de cada grupo: vender, Coleção e sem ação
    const previa = [].concat(porAcao('vender'), porAcao('colecao'), porAcao('manter'))
      .map((x) => ({ id: x.p.id, nome: x.p.nome, level: x.p.level, shiny: !!x.p.shiny, lend: ehLendario(x.p), p: x.p.potencia, iv: ivTotal(x.p), q: milesimos(x.p.quality), n: milesimos(x.p.nota), acao: x.acao, motivo: x.motivo }));
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

/* ===== pvp ===== */
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
  const BACKOFF_MAX = 300000;         // a espera cresce a cada falha seguida (30 s, 60 s, 2 min, 5 min), mas a busca NUNCA se desliga sozinha

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
  // "Ligar ao se logar": vigia que confere de 1 em 1 s e liga assim que o jogo está conectado e logado (também a cada reconexão)
  let wsVisto = null, logado = false, autoFeito = false;
  function sincronizarConexao() { const w = getWs(); if (w !== wsVisto) { wsVisto = w; logado = false; autoFeito = false; } }
  setInterval(() => {
    sincronizarConexao();
    const w = getWs();
    if (autoLigar && !autoFeito && logado && w && w.readyState === 1) {
      autoFeito = true;
      if (!ativo) { ligar(true); S.proximo = 0; console.log('[PokeIdle Tools by Ateforp] PvP ligado automaticamente ao logar'); }
    }
  }, 1000);
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
    sincronizarConexao();
    if (!logado && typeof txt === 'string' && /"t":"(welcome|estado|campo|campo\.init|pvp)"/.test(txt.slice(0, 200))) logado = true;
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
        S.aguardandoResp = 0; S.falhas++; S.proximo = Date.now() + Math.min(BACKOFF_MAX, BACKOFF * Math.pow(2, Math.min(S.falhas - 1, 4)));
        S.msg = 'Servidor recusou: ' + String((m && (m.msg || m.erro || m.mensagem || m.texto)) || 'erro') + ' — tentando de novo em ' + Math.round((S.proximo - Date.now()) / 1000) + ' s (falha ' + S.falhas + ').';
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
      S.aguardandoResp = 0; S.falhas++; const esp = Math.min(BACKOFF_MAX, BACKOFF * Math.pow(2, Math.min(S.falhas - 1, 4))); S.proximo = agora + esp; S.msg = 'Sem resposta da fila; tentando de novo em ' + Math.round(esp / 1000) + ' s (falha ' + S.falhas + ').'; sujo = true;
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

/* ===== painel ===== */
(function () {
  const start = () => {
    // Ícone do Gyarados (azul = desligado, vermelho/shiny = ligado), igual ao do Auto Captura.
    window.__ATE = window.__ATE || {};
    (() => {
      const COR_OFF = { corpo: '#2fa8e8', crista: '#1b4f94', barb: '#f2f7fb', creme: '#f3e4a6', olho: '#c4152b', linha: '#14202e' };
      const COR_ON = { corpo: '#cc3e47', crista: '#97343d', barb: '#ffffff', creme: '#efd89b', olho: '#b3121f', linha: '#2a0d10' };
      const svg = (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="30" height="30" style="pointer-events:none">
      <g><path d="M16 24 L0 19 L6.5 27 L0.5 33.5 L8 35 L3 44 L18 40 Z" fill="${c.barb}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M16 24 L0 19 L7.5 26 L17 28.5 Z" fill="${c.corpo}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/></g>
      <g transform="translate(64,0) scale(-1,1)"><path d="M16 24 L0 19 L6.5 27 L0.5 33.5 L8 35 L3 44 L18 40 Z" fill="${c.barb}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M16 24 L0 19 L7.5 26 L17 28.5 Z" fill="${c.corpo}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/></g>
      <path d="M20 41 C10 44 9 55 16.5 58 C20.5 59 22.5 56 20.5 54" fill="none" stroke="${c.linha}" stroke-width="4.6" stroke-linecap="round"/>
      <path d="M20 41 C10 44 9 55 16.5 58 C20.5 59 22.5 56 20.5 54" fill="none" stroke="${c.corpo}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M44 41 C54 44 55 55 47.5 58 C43.5 59 41.5 56 43.5 54" fill="none" stroke="${c.linha}" stroke-width="4.6" stroke-linecap="round"/>
      <path d="M44 41 C54 44 55 55 47.5 58 C43.5 59 41.5 56 43.5 54" fill="none" stroke="${c.corpo}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M32 9 C41 9 46 12 49 19 L51.5 27 C50.5 35 46 41 40 43 L24 43 C18 41 13.5 35 12.5 27 L15 19 C18 12 23 9 32 9 Z" fill="${c.corpo}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M17 24.5 L29 28.5 L28 32.5 L19.5 31 Z" fill="#fff" stroke="${c.linha}" stroke-width="1" stroke-linejoin="round"/>
      <path d="M47 24.5 L35 28.5 L36 32.5 L44.5 31 Z" fill="#fff" stroke="${c.linha}" stroke-width="1" stroke-linejoin="round"/>
      <circle cx="24" cy="30" r="2.5" fill="${c.olho}"/><circle cx="24.3" cy="30.2" r="1.1" fill="#1a0006"/>
      <circle cx="40" cy="30" r="2.5" fill="${c.olho}"/><circle cx="39.7" cy="30.2" r="1.1" fill="#1a0006"/>
      <path d="M23 36 Q32 32.5 41 36 L43 53 Q32 60 21 53 Z" fill="${c.creme}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M25.5 38 Q32 35.5 38.5 38 L39.5 51 Q32 55.5 24.5 51 Z" fill="#4a1620"/>
      <ellipse cx="32" cy="47.5" rx="5.8" ry="4.4" fill="#e07a7a"/>
      <path d="M26 38.2 L28.8 38 L27.2 44 Z" fill="#fff" stroke="${c.linha}" stroke-width=".6" stroke-linejoin="round"/>
      <path d="M38 38.2 L35.2 38 L36.8 44 Z" fill="#fff" stroke="${c.linha}" stroke-width=".6" stroke-linejoin="round"/>
      <path d="M5 11 L30 18.5 L32 30 L21 24 Z" fill="${c.crista}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M59 11 L34 18.5 L32 30 L43 24 Z" fill="${c.crista}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M32 0 L35.5 9 L35.5 22 L32 30 L28.5 22 L28.5 9 Z" fill="${c.crista}" stroke="${c.linha}" stroke-width="1.3" stroke-linejoin="round"/>
    </svg>`;
      window.__ATE.gyarados = (on, px) => {
        const doc = new DOMParser().parseFromString(svg(on ? COR_ON : COR_OFF), 'image/svg+xml');
        const el = document.importNode(doc.documentElement, true);
        if (px) { el.setAttribute('width', String(px)); el.setAttribute('height', String(px)); }
        return el;
      };
    })();
    
    /*! qrcode-generator 2.0.4 (c) Kazuhiko Arase, MIT license - http://www.d-project.com/ */
    var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1})},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(o*r,n*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var t=n("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&(module.exports=t())}(function(){return qrcode});
    // CSS do painel (aplicado dentro do Shadow DOM, por stylesheet construída — não depende do CSP do site).
    window.__PM_CSS = `
    :host { all: initial; }
    * { box-sizing: border-box; }
    [hidden] { display: none !important; }
    .root {
      --frame: #2f78c4; --frameD: #14355f; --luz: #bfe3ff; --base: #3d8fd6;
      --bg: #12233a; --card: #1a3252; --line: #2d4d7a; --txt: #eef7ff; --mut: #9db8d6;
      --acc: #3d8fd6; --ok: #6fd08a; --warn: #ffd166; --bad: #d8574a; --ouro: #ffd166;
      color: var(--txt); font: 13px/1.4 system-ui, -apple-system, "Segoe UI", sans-serif;
    }
    
    /* ---- painel ---- */
    .panel { position: fixed; z-index: 2147482999; width: 540px; overflow: hidden; display: flex; flex-direction: column; box-sizing: border-box;
      background: var(--frame); border: 3px solid var(--frameD); border-radius: 12px; padding: 8px;
      box-shadow: 0 10px 40px rgba(0,0,0,.6); }
    .corpo { background: var(--bg); border-radius: 9px; padding: 8px; }
    header { display: flex; align-items: center; gap: 8px; padding: 2px 4px 8px; cursor: move; user-select: none; touch-action: none; }
    #logo { display: inline-flex; }
    h1 { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 14px; margin: 0; flex: 1; min-width: 0; font-weight: 800; color: #fff; }
    h2 { font-size: 13px; margin: 12px 0 6px; display: flex; align-items: center; gap: 8px; font-weight: 800; letter-spacing: .4px; color: var(--ouro); }
    h2 small, .mut { color: var(--mut); font-weight: normal; }
    small { color: var(--mut); }
    .master { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 10px; display: grid; gap: 10px; }
    .pill { font-size: 11px; padding: 2px 8px; border-radius: 99px; border: 1px solid var(--line); white-space: nowrap; }
    .pill.on { color: var(--ok); border-color: var(--ok); }
    .pill.off { color: var(--mut); }
    .pill.warn { color: var(--warn); border-color: var(--warn); }
    
    .switch { display: flex; align-items: center; gap: 10px; cursor: pointer; }
    .switch input { display: none; }
    .slider { width: 38px; height: 22px; background: #3a5578; border-radius: 99px; position: relative; flex: none; transition: background .15s; }
    .slider::after { content: ""; position: absolute; top: 3px; left: 3px; width: 16px; height: 16px; border-radius: 50%; background: #fff; transition: transform .15s; }
    .switch input:checked + .slider { background: var(--acc); }
    .switch input:checked + .slider::after { transform: translateX(16px); }
    .lbl { display: grid; }
    .lbl small { color: var(--mut); }
    .switch.big .lbl b { font-size: 14px; }
    
    .row.inline input { width: 60px; }
    input, select, button { font: inherit; color: var(--txt); background: #0f1d30; border: 1px solid var(--line); border-radius: 6px; padding: 4px 6px; }
    input:focus, select:focus { outline: 1px solid var(--acc); }
    button { cursor: pointer; background: linear-gradient(var(--luz) 0 3px, var(--base) 3px 100%); border: none; box-shadow: 0 2px 0 var(--frameD); color: #0c2340; font-weight: 700; padding: 6px 10px; border-radius: 6px; }
    button:disabled { opacity: .4; cursor: default; }
    button.link { background: none; box-shadow: none; border: none; color: var(--mut); font-weight: normal; text-decoration: underline; padding: 0; margin-left: auto; }
    button.icon { background: none; box-shadow: none; border: 1px solid var(--line); color: var(--luz); padding: 3px 8px; font-weight: 600; }
    header button.icon { border-color: var(--frameD); background: rgba(10,30,60,.35); }
    
    .tabs { display: flex; gap: 2px; margin: 0 0 8px; flex-wrap: wrap; border-bottom: 1px solid var(--line); }
    .tabs button { background: none; box-shadow: none; border: none; border-bottom: 2px solid transparent; border-radius: 0; color: var(--mut); padding: 6px 9px; font-weight: 600; }
    .tabs button.on { color: var(--txt); border-bottom-color: var(--ouro); }
    
    .rule { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 8px 10px; margin: 8px 0; }
    .rule.done { opacity: .65; }
    .rule .top { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
    .rule .name { font-weight: 600; flex: 1; min-width: 0; }
    .rule .name small { font-weight: normal; }
    .rule .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; }
    .rule .grid label { display: grid; gap: 2px; color: var(--mut); font-size: 11px; }
    .rule .grid input { width: 100%; color: var(--txt); font-size: 13px; }
    .rule .info { color: var(--mut); font-size: 11px; margin-top: 6px; }
    .bar { height: 6px; background: #0f1d30; border-radius: 99px; overflow: hidden; margin-top: 8px; }
    .bar > i { display: block; height: 100%; background: var(--ok); }
    .prog { display: flex; justify-content: space-between; color: var(--mut); font-size: 11px; margin-top: 3px; }
    .empty { color: var(--mut); padding: 10px 0; }
    
    .picker { margin-top: 10px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 8px 10px; }
    .picker summary { cursor: pointer; font-weight: 600; }
    .pbar { display: flex; gap: 6px; margin: 8px 0; }
    .pbar input { flex: 1; min-width: 0; }
    .picklist { max-height: 210px; overflow-y: auto; border: 1px solid var(--line); border-radius: 8px; background: #0f1d30; }
    .picklist .grp { position: sticky; top: 0; background: #1d3556; color: var(--mut); font-size: 11px; padding: 3px 8px; text-transform: uppercase; letter-spacing: .04em; }
    .picklist .it { box-shadow: none; display: flex; justify-content: space-between; gap: 8px; width: 100%; text-align: left; background: none; border: none; border-bottom: 1px solid var(--line); border-radius: 0; color: var(--txt); font-weight: normal; padding: 6px 8px; }
    .picklist .it:hover { background: #1f3a5f; }
    .picklist .it.added { opacity: .45; cursor: default; }
    .picklist .it.gems { opacity: .55; }
    .picklist .it span:last-child { color: var(--mut); font-size: 11px; text-align: right; white-space: nowrap; }
    .manual { display: flex; gap: 6px; align-items: center; margin-top: 8px; color: var(--mut); }
    .manual input { width: 80px; }
    
    .hbar { display: flex; gap: 6px; align-items: center; margin-top: 8px; }
    .summary { color: var(--mut); font-size: 12px; margin-bottom: 6px; }
    .summary b { color: var(--txt); }
    .list { background: #0c1726; border: 1px solid var(--line); border-radius: 8px; max-height: 190px; overflow-y: auto; }
    .list .r { display: grid; grid-template-columns: 78px 1fr auto; gap: 8px; padding: 5px 8px; border-bottom: 1px solid #1d3556; font-size: 12px; }
    .list .r:last-child { border-bottom: none; }
    .list .r time { color: var(--mut); }
    .list .r .v { text-align: right; white-space: nowrap; }
    .list .r .s { color: var(--mut); font-size: 11px; }
    .list.tall { max-height: 300px; }
    .list .r.att { grid-template-columns: 62px 1fr auto; }
    .list .r .b { font-weight: 600; font-size: 11px; }
    .list .b.win { color: var(--ok); } .list .b.lose { color: var(--mut); } .list .b.err { color: var(--warn); } .list .b.pend { color: var(--txt); }
    .list .r.win { background: #14231a; }
    .list details.s summary { cursor: pointer; }
    .list .fr { font-family: monospace; font-size: 10px; word-break: break-all; color: var(--mut); }
    .list .none { color: var(--mut); padding: 10px; }
    
    .log { background: #0c1726; border: 1px solid var(--line); border-radius: 8px; padding: 6px 8px; height: 300px; overflow-y: auto; font: 11px/1.45 ui-monospace, Menlo, Consolas, monospace; }
    .log div { white-space: pre-wrap; word-break: break-word; }
    .log .ok { color: var(--ok); }
    .log .erro { color: var(--bad); }
    .log .debug { color: var(--mut); }
    .log time { color: var(--mut); margin-right: 6px; }
    
    .card { background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; margin-bottom: 8px; display: grid; gap: 8px; }
    .card h2 { margin: 0; }
    .card.master { gap: 10px; }
    .row2 { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .est4 { display: grid; grid-template-columns: auto 1fr auto 1fr; gap: 4px 6px; align-items: center; margin: 4px 0; }
    .est4 input { width: 100%; }
    .est4 span { color: var(--mut); font-size: 12px; }
    .row.inline select, .row.inline input[type=text] { max-width: 100%; }
    .est3 { display: grid; grid-template-columns: 1fr 74px 74px; gap: 4px 6px; align-items: center; margin: 2px 0; }
    .est3.head { color: var(--mut); font-size: 11px; margin-top: 0; }
    .est3 input { width: 100%; }
    .est3 .nm { display: flex; align-items: center; gap: 6px; min-width: 0; }
    .est3 .nm img { width: 22px; height: 22px; object-fit: cover; object-position: top left; image-rendering: pixelated; flex: none; }
    .est3 .q { color: var(--mut); }
    .grp { margin-top: 8px; font-weight: 700; color: var(--ouro); }
    .beast { margin-top: 6px; padding: 6px 8px; border: 1px solid #b8455a; border-radius: 8px; display: grid; gap: 6px; }
    .beast .bt { font-weight: 700; color: #ff9aa9; display: flex; align-items: center; gap: 6px; }
    .beast .bt img { width: 22px; height: 22px; image-rendering: pixelated; }
    .warnbox { padding: 6px 8px; background: #3a1620; border: 1px solid #ff6b81; border-radius: 6px; display: grid; gap: 6px; }
    .btns { display: flex; gap: 8px; align-items: center; }
    .stat { color: var(--luz); }
    .tabs.sub { margin: 0 0 8px; gap: 6px; border-bottom: none; }
    .tabs.sub button { flex: 1; border: 1px solid var(--line); border-radius: 8px; padding: 7px 10px; background: #0f1d30; }
    .tabs.sub button.on { background: linear-gradient(var(--luz) 0 3px, var(--base) 3px 100%); color: #0c2340; border-color: var(--frameD); box-shadow: 0 2px 0 var(--frameD); }
    .sep { height: 1px; background: var(--line); margin: 14px 0 4px; }
    button.icon.pinned { background: linear-gradient(var(--luz) 0 3px, var(--base) 3px 100%) !important; border-color: var(--ouro) !important; box-shadow: 0 0 8px rgba(255,209,102,.7) !important; }
    
    .pvstreak{margin:6px 0;padding:5px 9px;border-radius:7px;border:1px solid #2f4a78;background:#0e1a30;font-size:12px;font-weight:700;color:#8fa8d4}.pvstreak.hot{color:#ffd37a;border-color:#a8791f;background:#2a2008}
    .pvhist{display:flex;flex-direction:column;gap:3px;margin:8px 0;max-height:190px;overflow:auto}
    .pv{display:grid;grid-template-columns:22px 1fr auto auto auto;gap:8px;align-items:center;padding:4px 8px;border-radius:6px;border:1px solid #2f4a78;background:#0e1a30;font-size:11px}
    .pv .res{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:5px;font-size:11px}
    .pv.w .res{background:#1f6b3a;color:#d6ffe4}.pv.l .res{background:#7a2330;color:#ffdce1}
    .pv.w .dl{color:#6fe39a}.pv.l .dl{color:#ff8a98}
    .pv .op{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pv .pt,.pv time{color:#8fa8d4;font-size:10px}
    
    .rz { position: fixed; z-index: 2147483000; touch-action: none; }
    .rz[hidden] { display: none; }
    .rz-n, .rz-s { cursor: ns-resize; } .rz-e, .rz-w { cursor: ew-resize; }
    .rz-nw, .rz-se { cursor: nwse-resize; } .rz-ne, .rz-sw { cursor: nesw-resize; }
    .panel { min-width: 0; }
    .corpo { min-width: 0; }
    header .pill { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 0 1 auto; }
    header button.icon { flex: none; }
    .row.inline input[type=checkbox] { width: auto; }
    .row.inline label { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
    .panel > .corpo { flex: 1 1 auto; min-height: 0; overflow-y: auto; overscroll-behavior: contain; }
    .panel > header { flex: none; }
    .subp[hidden] { display: none; }
    .addn { display: flex; gap: 6px; margin: 6px 0; } .addn input { flex: 1; min-width: 0; }
    .vfil { display: flex; flex-wrap: wrap; gap: 6px; margin: 4px 0; }
    .vfil .vf { padding: 3px 10px; font-size: 12px; }
    .vfil .vf.on { border-color: var(--ouro); color: var(--ouro); background: #1c3156; }
    .vb-vender { color: #ff8a98; } .vb-colecao { color: #8fd0ff; } .vb-manter { color: var(--mut); }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; }
    .chip { display: inline-flex; align-items: center; gap: 4px; background: #0f1d30; border: 1px solid var(--line); border-radius: 99px; padding: 2px 4px 2px 10px; font-size: 12px; }
    .chip .x { background: none; border: none; color: var(--mut); cursor: pointer; font-size: 15px; line-height: 1; padding: 0 5px; }
    .chip .x:hover { color: #ff8a98; }
    .vrsum{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:6px;margin-top:6px}
    .vrbox{display:flex;flex-direction:column;gap:1px;padding:6px 8px;border-radius:7px;border:1px solid #2f4a78;background:#0e1a30}.vrbox b{font-size:17px}.vrbox span{font-size:10px;color:#8fa8d4}
    .vrbox.v b{color:#ff9a8a}.vrbox.c b{color:#ffd37a}.vrbox.f b{color:#ff8a98}
    .vrhist{max-height:260px}
    .vr{display:grid;grid-template-columns:70px minmax(0,1.3fr) auto minmax(0,1.4fr) auto;gap:8px;align-items:center;padding:4px 8px;border-radius:6px;border:1px solid #2f4a78;background:#0e1a30;font-size:11px}
    .vr .res{display:inline-flex;align-items:center;justify-content:center;height:20px;border-radius:5px;font-size:10px;padding:0 4px}
    .vr.vendido .res{background:#7a2330;color:#ffdce1}.vr.colecao .res{background:#8a6a14;color:#fff1c9}.vr.falha .res{background:#5a3a8a;color:#ecdcff}.vr.manter .res{background:#26406b;color:#cfe0ff}
    .vr .op,.vr .mo{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr .pt,.vr time,.vr .mo{color:#8fa8d4;font-size:10px}
    .tabs .pixbtn { margin-left: auto; font-size: 16px; line-height: 1; padding: 3px 9px; border-bottom: 2px solid transparent; filter: saturate(.9); }
    .tabs .pixbtn:hover { background: #17294a; border-radius: 8px; }
    .pixbox { position: absolute; z-index: 5; right: 14px; top: 96px; width: min(320px, calc(100% - 28px)); background: #10213b; border: 1px solid #3f67a8; border-radius: 12px; padding: 12px 14px; box-shadow: 0 10px 30px #000a; }
    .pixbox[hidden] { display: none; }
    .dlg { position: absolute; inset: 0; z-index: 20; background: rgba(4,12,28,.72); display: flex; align-items: center; justify-content: center; padding: 14px; }
    .dlg[hidden] { display: none; }
    .dlgbox { width: min(340px, 100%); background: #10213b; border: 1px solid #3f67a8; border-radius: 12px; padding: 14px 16px; box-shadow: 0 10px 30px rgba(0,0,0,.6); }
    .dlgbox .dlgt { font-weight: 800; color: var(--ouro); margin-bottom: 6px; }
    .dlgbox p { margin: 0 0 12px; font-size: 13px; line-height: 1.45; color: var(--txt); }
    .dlgbox .btns { display: flex; gap: 8px; justify-content: flex-end; }
    .dlgbox .dlgok { border-color: var(--ouro); color: var(--ouro); }
    .pixbox .pixt { font-weight: 800; color: var(--ouro); margin-bottom: 6px; }
    .pixbox p { margin: 0 0 8px; font-size: 12px; line-height: 1.45; color: var(--txt); }
    .pixbox .pixk { font-family: ui-monospace, monospace; font-size: 12px; background: #0a1527; border: 1px dashed #3f67a8; border-radius: 8px; padding: 8px; word-break: break-all; user-select: all; margin-bottom: 8px; }
    .pixqr { width: 200px; max-width: 100%; margin: 4px auto 6px; background: #fff; border-radius: 8px; padding: 4px; line-height: 0; }
    .pixqr[hidden] { display: none; }
    .pixqr svg { width: 100%; height: auto; display: block; }
    .pixh { text-align: center; margin-bottom: 6px; }
    
    `;
    
    (() => {
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
        $('capBeast').checked = !!cs.capBeastEsp;
        if (root.activeElement !== $('capBolaTela')) $('capBolaTela').value = String(cs.capBolaTela || 0);
        $('capHud').checked = cs.capHud !== false;
        root.querySelectorAll('#hudSec input').forEach((i) => { i.checked = !cs.capHudSec || cs.capHudSec[i.dataset.hs] !== false; });
        $('capTelaInfo').textContent = cs.capSemTela ? 'Capturas feitas sem a lista da tela: ' + cs.capSemTela : '';
        $('capEspInfo').textContent = !cs.capBeastEsp ? '' : (cs.capInfo ? 'Último: ' + cs.capInfo + ' · lançadas: ' + (cs.capLancadas || 0) : 'Nenhum shiny/lendário ainda.') + (cs.capDiag ? ' · ' + cs.capDiag : '');
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
      $('capBeast').addEventListener('change', (e) => catchCmd({ type: 'cap-beast', value: e.target.checked }));
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
    
      function renderMercadoSub() {
        root.querySelectorAll('#subtabs button').forEach((b) => b.classList.toggle('on', b.dataset.sub === sub));
        $('sub-compras').hidden = sub !== 'compras';
        $('sub-hist').hidden = sub !== 'hist';
        if (sub === 'hist') { renderHistory(); renderTentativas(); }
      }
    
    
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
        ['captura', 'pvp', 'itens', 'registro'].forEach((n) => { $('tab-' + n).hidden = n !== t; });
        if (t === 'itens') renderMercadoSub();
        if (t === 'registro') renderLog();
      }
      function showSub(s) { sub = s; renderMercadoSub(); }
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
        onChange: (f) => listeners.push(f)
      };
    }
    
    /*
     * PokeIdle Tools by Ateforp — painel dentro do jogo.
     * Visual do Auto Captura: botão do Gyarados (liga/desliga a captura) + botão "Tools" encaixados logo
     * acima do card do Pokémon em campo; abrem uma janela azul arrastável pelo cabeçalho.
     * Fica num Shadow DOM, então o CSS do jogo não mexe nele e a janela não fecha sozinha nem ao digitar.
     */
    (() => {
      if (window.top !== window || window.__pmPanel) return;
      window.__pmPanel = true;
    
      const TEMPLATE = `
    <div class="root">
      <div class="panel" id="panel" hidden>
        <header id="hdr" title="Segure e arraste para mover a janela (duplo clique volta ao centro e ao tamanho padrão)">
          <span id="logo"></span>
          <h1>PokeIdle Tools by Ateforp</h1>
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
          <div class="mut pixh">Aponte a câmera do celular para o QR code ou abra o link.</div>
          <div class="btns"><button id="pixAbrir" class="icon">Abrir LivePix</button><button id="pixCopy2" class="icon">Copiar link</button><button id="pixClose" class="icon">Fechar</button></div>
          <div class="mut" id="pixMsg"></div>
        </div>
        <div id="dlg" class="dlg" hidden>
          <div class="dlgbox" role="alertdialog" aria-modal="true">
            <div class="dlgt" id="dlgT">Confirmar</div>
            <p id="dlgM"></p>
            <div class="btns"><button id="dlgOk" class="icon dlgok">OK</button><button id="dlgNo" class="icon">Cancelar</button></div>
          </div>
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
              <label class="switch">
                <input type="checkbox" id="capBeast">
                <span class="slider"></span>
                <span class="lbl"><b>Beast Ball em shiny e lendário</b><small>usa a melhor bola que você tiver (Beast → Ultra → Super → Great → Poke); nos demais, segue como hoje</small></span>
              </label>
              <div class="mut" id="capEspInfo"></div>
              <label class="row" style="display:flex;align-items:center;gap:8px;margin-top:8px">
                <span class="lbl"><b>Bola quando a tela do jogo está no modo Economia/Ultra</b><small>nesses modos a lista de caídos some e a captura é feita direto; escolha a bola (sem estoque, usa a primeira que tiver)</small></span>
                <select id="capBolaTela"><option value="0">Automática (como o jogo)</option><option value="1">Poke Ball</option><option value="2">Great Ball</option><option value="3">Super Ball</option><option value="4">Ultra Ball</option><option value="5">Beast Ball</option></select>
              </label>
              <div class="mut" id="capTelaInfo"></div>
              <label class="switch">
                <input type="checkbox" id="capHud">
                <span class="slider"></span>
                <span class="lbl"><b>Mostrar meus dados nos modos Economia/Ultra</b><small>quadro na parte de baixo da tela, atualizado ao vivo</small></span>
              </label>
              <div class="hudsec" id="hudSec" style="display:flex;flex-wrap:wrap;gap:10px;margin:4px 0 0 4px;font-size:12px">
                <label><input type="checkbox" data-hs="recursos"> Bolas e gold</label>
                <label><input type="checkbox" data-hs="captura"> Captura</label>
                <label><input type="checkbox" data-hs="pvp"> PvP</label>
                <label><input type="checkbox" data-hs="compras"> Compras</label>
              </div>
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
              <div id="vdFiltro" class="vfil"></div>
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
    
      // ---- apoio ao criador (opcional): link do LivePix ----
      const APOIO_LINK = 'https://livepix.gg/ateforp';
      window.__ateforpApoioLink = APOIO_LINK;
      function desenharQr() {
        const box = $('pixQr'); box.textContent = '';
        if (typeof qrcode !== 'function') { box.hidden = true; return; }
        try { const q = qrcode(0, 'M'); q.addData(APOIO_LINK, 'Byte'); q.make(); box.innerHTML = q.createSvgTag({ cellSize: 4, margin: 3, scalable: true }); box.hidden = false; } catch (e) { box.hidden = true; }
      }
      $('pixBtn').addEventListener('click', () => { $('pixBox').hidden = !$('pixBox').hidden; $('pixMsg').textContent = ''; if (!$('pixBox').hidden) desenharQr(); });
      $('pixClose').addEventListener('click', () => { $('pixBox').hidden = true; });
      $('pixAbrir').addEventListener('click', () => { try { window.open(APOIO_LINK, '_blank', 'noopener,noreferrer'); } catch (e) { /* ignora */ } });
      async function copiar(texto) {
        let ok = false;
        try { await navigator.clipboard.writeText(texto); ok = true; } catch (e) { /* tenta o plano B */ }
        if (!ok) { try { const t = document.createElement('textarea'); t.value = texto; t.style.cssText = 'position:fixed;opacity:0;left:-999px'; root.append(t); t.select(); ok = document.execCommand('copy'); t.remove(); } catch (e) { /* ignora */ } }
        $('pixMsg').textContent = ok ? 'Link copiado. Obrigado! 💙' : 'Não consegui copiar sozinho; use o QR code.';
      }
      $('pixCopy2').addEventListener('click', () => copiar(APOIO_LINK));
    
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
      addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden && !ui.fixa && $('dlg').hidden) setOpen(false); });
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
        openBtn.title = 'Abrir/fechar o PokeIdle Tools by Ateforp';
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
        openBtn.title = 'Abrir/fechar o PokeIdle Tools by Ateforp · ' + (st === 'on' ? 'compra automática ligada e conectado' : st === 'warn' ? 'aguardando o jogo / atenção' : 'compra automática desligada');
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
            Object.assign(wrap.style, { position: 'relative', left: '', top: '', right: '', zIndex: '' });   // docada no cartão: sem camada própria, então menus e janelas do jogo ficam por cima
          }
        } else if (Date.now() - INICIO > 8000 && (!wrap.isConnected || wrap.dataset.local === 'docado')) {
          (document.body || document.documentElement).appendChild(wrap);
          wrap.dataset.local = 'flutuante';
          Object.assign(wrap.style, { position: 'fixed', top: '18px', right: '12px', left: '', margin: '0' });
          wrap.style.zIndex = '99999';
        }
        syncDock();
      }
    
      api.onChange(syncDock);
      setInterval(() => { try { ensureDock(); } catch (e) { /* ignora */ } }, 1500);
    
      ensureDock();
      window.__pmPanelApi = { toggle, setOpen, isOpen: () => !panel.hidden };
    })();
    
    })();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

})();
