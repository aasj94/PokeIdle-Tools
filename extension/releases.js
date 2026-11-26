// Resumo das versões (aba "Novidades"). A primeira entrada é a versão instalada.
window.__ateforpReleases = [
 {"v": "2.3.23", "itens": ["Nova aba Renovação (Mercado RMT): renova sozinha os seus anúncios de Pokémon, alternando o preço entre dois valores (Preço A e Preço B) a cada intervalo (mínimo 30 min, limite do jogo), até vender. Desligada por padrão, com explicação na tela e registro de cada renovação."]},
 {"v": "2.3.22", "itens": ["Nova aba Novidades com o resumo de cada versão. A extensão avisa quando há uma versão nova da própria extensão (ponto vermelho na aba, checagem a cada 3 horas). No userscript, o aviso é do Tampermonkey/Greasy Fork."]},
 {
  "v": "2.3.21",
  "itens": [
   "Compra de Pokémon: opção Outland (omitir, incluir ou somente Outland) em cada regra, na Compra Imediata e na Consulta. Antes, Outland era sempre omitido."
  ]
 },
 {
  "v": "2.3.20",
  "itens": [
   "Mercado — compra automática de Pokémon: nova configuração, separada da de itens, com regras por espécie, preço máximo, quantidade, shiny, potência, IV total, qualidade, nota e IV individual (HP, Atk, Def, SpAtk, SpDef, Spd). Modo \"todos os critérios\" (E) ou \"qualquer um\" (OU); campo vazio é ignorado.",
   "Compra Imediata: escolha um Pokémon em retenção; a extensão acompanha o relógio do servidor e envia a compra no instante da liberação.",
   "Consulta: lista o que há à venda segundo os filtros (sem comprar).",
   "Registro: log detalhado das compras (consultas, achados, pedidos, respostas do jogo, confirmações) e histórico. Tudo funciona só pela configuração, sem precisar da tela do jogo."
  ]
 },
 {
  "v": "2.3.19",
  "itens": [
   "Removida a opção \"Beast Ball em shiny e lendário\" da aba Captura. A captura nos modos Economia/Ultra continua igual, usando a bola escolhida. (A reposição de Beast Ball da loja VIP é outra função e continua.)"
  ]
 },
 {
  "v": "2.3.18",
  "itens": [
   "Reposição de estoque: corrigido o caso em que a reposição passava a comprar de 1 em 1. Um ganho parcial (por exemplo, falta de ouro naquele momento) não é mais tratado como limite por compra; o limite só é aprendido quando o jogo avisa por mensagem. Depois de cada compra, a extensão espera o estoque do jogo assentar antes de medir o que entrou.",
   "Ao atingir o mínimo, a compra continua sendo um único pedido até o valor de \"compra até\"."
  ]
 },
 {
  "v": "2.3.17",
  "itens": [
   "Estatísticas para modo economia: o quadro dos modos Economia/Ultra virou uma opção na aba Captura (ligar/desligar, com escolha das seções: bolas e gold, captura, PvP e compras).",
   "O quadro abre à esquerda da tela, pode ser movido, redimensionado por todas as bordas e cantos, minimizado (vai para o canto inferior direito) e fixado (trava posição e tamanho). Tudo fica salvo.",
   "Mostra o Pokémon que está sendo caçado.",
   "(2.3.14 a 2.3.16 foram versões internas deste mesmo ajuste.)"
  ]
 },
 {
  "v": "2.3.13",
  "itens": [
   "Captura nos modos Economia e Ultra Economia: a Auto Captura passa a funcionar mesmo sem a lista de Pokémon na tela, usando os avisos da batalha (derrotado, bola, fugiu, capturado).",
   "Quem fugiu depois de uma bola que não segurou não é mais lançado de novo; os outros derrotados são tentados em rodízio (shiny e lendários primeiro).",
   "Quadro em tempo real nos modos Economia/Ultra: recursos e bolas, gold, Pokémon sendo caçado, vistos/derrotados/capturados/fugiram/expiraram, PvP e compras. Pode ser ligado/desligado e por seções no painel (aba Captura).",
   "Ligar automaticamente ao logar (Captura e PvP) mais confiável; o PvP automático não se desliga mais sozinho após falhas (tenta de novo com espera crescente).",
   "Contagem de \"vistos\" corrigida."
  ]
 },
 {
  "v": "2.3.10",
  "itens": [
   "O painel da extensão fica com prioridade sobre o jogo; só a caixa de botões (Gyarados, PvP, Tools) fica atrás das janelas do jogo (ex.: Mercado).",
   "Correção na Venda automática: Q (qualidade) e N (nota) agora são comparados em milésimos, como o jogo mostra (Q 1.445 = 1445). Antes quase tudo \"batia\" a regra de venda.",
   "Venda automática: a lista mostra Vender, Coleção e Sem ação, com filtros, contagem e o motivo ao passar o mouse.",
   "Apoio ao criador: o código Pix foi trocado pelo link https://livepix.gg/ateforp.",
   "Ícone da ferramenta (chave inglesa) na extensão e no userscript."
  ]
 }
];
