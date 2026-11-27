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
    if (window.__ATE.gyaImg) {   // arte do Gyarados normal (desligado) e shiny vermelho (ligado)
      const im = document.createElement('img');
      im.src = on ? window.__ATE.gyaImg.on : window.__ATE.gyaImg.off; im.alt = on ? 'Gyarados shiny' : 'Gyarados'; im.draggable = false;
      im.style.cssText = 'height:' + (px || 30) + 'px;width:auto;max-width:' + Math.round((px || 30) * 1.4) + 'px;pointer-events:none;object-fit:contain';
      return im;
    }
    return window.__ATE.gyaSvg(on, px);
  };
  window.__ATE.gyaSvg = (on, px) => {
    const doc = new DOMParser().parseFromString(svg(on ? COR_ON : COR_OFF), 'image/svg+xml');
    const el = document.importNode(doc.documentElement, true);
    if (px) { el.setAttribute('width', String(px)); el.setAttribute('height', String(px)); }
    return el;
  };
})();
