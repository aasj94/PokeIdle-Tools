// Clicar no ícone da extensão na barra do Chrome abre/fecha o painel dentro do jogo.
chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.id) return;
  chrome.tabs.sendMessage(tab.id, { type: 'toggle-panel' }, () => void chrome.runtime.lastError);
});

// Verificação de nova versão (feita aqui porque a página do jogo bloqueia consultas externas).
const URL_VERSAO = 'https://raw.githubusercontent.com/aasj94/PokeIdle-Tools/main/version.json';
chrome.runtime.onMessage.addListener((msg, sender, resp) => {
  if (!msg || msg.type !== 'ateforp-check-update') return false;
  fetch(URL_VERSAO, { cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status))))
    .then((j) => resp({ ok: true, version: String(j.version || ''), download: String(j.download || '') }))
    .catch((e) => resp({ ok: false, erro: String(e && e.message || e) }));
  return true;
});
