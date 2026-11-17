// Clicar no ícone da extensão na barra do Chrome abre/fecha o painel dentro do jogo.
chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.id) return;
  chrome.tabs.sendMessage(tab.id, { type: 'toggle-panel' }, () => void chrome.runtime.lastError);
});
