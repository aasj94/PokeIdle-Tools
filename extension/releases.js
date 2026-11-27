// Resumo das versões (aba "Novidades"). A primeira entrada é a versão instalada.
window.__ateforpReleases = [
 {"v": "2.3.57", "itens": ["Compra automática de Pokémon: o Registro agora mostra cada consulta das regras (por exemplo: Consulta · Rapela P5: nenhum anúncio com esses filtros no mercado agora). Consultas seguidas com o mesmo resultado viram uma linha só com a contagem (×N) e a hora da última, para não encher o registro.", "Botão do Shiny Hunt na caixa de ferramentas: agora o Shinx fica parado quando desligado e, ao ligar, vira Luxio e passa a brilhar."]},
 {"v": "2.3.56", "itens": ["Compra automática de Pokémon: corrigido o ritmo das consultas das regras. Elas contavam também os pedidos do motor de compra de itens e podiam ficar até o dobro do tempo configurado (ou sem vez) sem consultar; agora cada regra segue só o intervalo que você definiu. O painel mostra quantas consultas já foram feitas e há quantos segundos foi a última."]},
 {"v": "2.3.55", "itens": ["Renovação de anúncios: o botão Carregar meus anúncios agora mostra Carregando… (piscando e desabilitado) até a lista chegar e avisa quantos anúncios foram carregados, ou que o jogo não respondeu. Corrigido o contador Renovações feitas, que ficava em 0 no card mesmo com a renovação registrada no log, e uma edição na tela não zera mais o contador."]},
 {"v": "2.3.54", "itens": ["Shiny Hunt, Rota esperada: o mapa em que o herói está agora fica azul o tempo todo (antes ficava verde já na espera da troca de mapa) e o próximo, roxo. O mapa atual é lido do que o próprio jogo informa. Os shinies por mapa aparecem sempre como ✨ 0, ✨ 1…"]},
 {"v": "2.3.53", "itens": ["Shiny Hunt: a Rota esperada agora mostra, em cada mapa já visitado, quantos Pokémon foram avistados e quantos shinies apareceram nele (somando todas as visitas). O botão zerar contagens limpa esses números."]},
 {"v": "2.3.52", "itens": ["Shiny Hunt: nova opção Ligar automaticamente ao se logar (desmarcada por padrão, igual à da Auto Captura e do PvP). Quando marcada, o Shiny Hunt liga sozinho assim que o jogo conecta e informa os mapas e o nível da conta, inclusive depois de uma reconexão."]},
 {"v": "2.3.51", "itens": ["Descrição da chave inglesa reformulada: mostra o que cada menu principal faz (PvE, PvP, Mercado RMT e Logs), o significado das cores e o que está ativo agora."]},
 {"v": "2.3.50", "itens": ["A chave inglesa agora fica vermelha só quando o jogo está conectado e há alguma função ativa além de PvP, Auto Captura e Shiny Hunt (compra de itens, reposição de itens, compra de Pokémon, compra imediata, renovação de anúncios ou venda de Pokémon). Sem isso fica verde; amarela se estiver aguardando o jogo ou houver aviso. O texto ao passar o mouse lista o que está ativo."]},
 {"v": "2.3.49", "itens": ["O ícone do PvP agora usa a arte do Zacian (espada) quando desligado e do Zamazenta (escudo) quando ligado."]},
 {"v": "2.3.48", "itens": ["Caixa de ferramentas em duas linhas: em cima Auto Captura (Gyarados) e Shiny Hunt; embaixo PvP (esquerda) e a chave (direita). Novo botão do Shiny Hunt com o Shinx brilhando quando desligado (borda azul) e o Luxio quando ligado (borda vermelha), liga sem alerta. O ícone da Auto Captura agora usa a arte do Gyarados normal (desligado) e do shiny vermelho (ligado). Shiny Hunt: contador de Pokémon avistados desde o último zerar (aparece com a data de início)."]},
 {"v": "2.3.47", "itens": ["Shiny Hunt: o painel agora explica, junto da opção do Centro Pokémon, que passar pelo Centro costuma ser um pouco mais rápido e constante."]},
 {"v": "2.3.46", "itens": ["Shiny Hunt: agora troca direto para o próximo mapa, sem passar pelo Centro Pokémon (testado no seu jogo: o servidor aceita a troca direta quando o herói está sem combater; quando recusa por combate, a extensão espera o tempo que o jogo pede e tenta de novo). Enquanto espera a troca liberar (~10 s), continua olhando os Pokémon do mapa e fica se aparecer shiny. O Centro virou opção (caixa no painel)."]},
 {"v": "2.3.45", "itens": ["Shiny Hunt: o registro e a rota mostram o nível dos Pokémon de cada mapa (por exemplo Nv 3-5; na rota aparece depois que o mapa é visitado). Compra de Pokémon: removido o modo simulação (use o botão Consultar Pokémon disponíveis para ver o que a regra pegaria). Ao ligar, a compra automática passa a comprar de verdade, sempre com a confirmação de antes."]},
 {"v": "2.3.44", "itens": ["Shiny Hunt: corrigido o erro que fazia esperar 12 s em cada mapa (o número de cada Pokémon recomeça em 1 a cada mapa; agora os avistados são contados certo e ele sai assim que vê que não há shiny). Rota esperada com cores: verde = já feito, azul = no mapa agora, roxo = próximo, amarelo = ainda não. Botão Resetar rota. O registro mostra quantos Pokémon foram avistados ao entrar em cada mapa. Painel mais limpo e contador de progresso (rodada e mapa X de N) coerente com a rota."]},
 {"v": "2.3.43", "itens": ["Shiny Hunt: nova seção Rota esperada (PvE > Captura > Shiny Hunt) com a lista de mapas na ordem em que serão visitados (marca o próximo e os já feitos), quantos mapas por região, o que ainda está bloqueado pelo nível da conta e botão para copiar a rota. Funciona para qualquer conta, com mais ou menos mapas liberados."]},
 {"v": "2.3.42", "itens": ["Shiny Hunt corrigido: a lista de mapas do jogo informa a área e o nível mínimo de cada mapa, e agora a extensão usa isso para saber quais estão liberados (antes só reconhecia parte deles). Também não trava mais quando você já está no Centro Pokémon ao ligar."]},
 {"v": "2.3.41", "itens": ["O Shiny Hunt agora fica dentro de PvE > Captura (no fim da página), em vez de ter aba própria."]},
 {"v": "2.3.40", "itens": ["Shiny Hunt: acompanha os ataques do combate e só tenta sair quando o jogo vai deixar (cerca de 3 s depois do último dano), sem insistir em pedidos que o servidor recusaria."]},
 {"v": "2.3.39", "itens": ["Shiny Hunt ajustado com o que o servidor do jogo realmente exige (testado na sua conta): só dá para sair do mapa depois de ~3 s sem batalhar (o Centro Pokémon também) e só dá para trocar de mapa a cada ~10 s. Agora a extensão entra no mapa, confere os Pokémon assim que aparecem, sai antes de o herói atacar quando não há shiny, espera a troca liberar e entra no próximo. Tempo de olhar padrão 0,3 s."]},
 {"v": "2.3.38", "itens": ["Shiny Hunt (PvE > Shiny Hunt, beta, desligado por padrão): percorre um por um os mapas que a sua conta já liberou pelo nível (Outland fica de fora, não tem shiny), usando as mesmas ações do jogo (escolher o mapa e Ir para o Centro Pokémon). Sem shiny, sai na hora e vai para o próximo; com shiny, fica para derrotar e a Auto Captura tenta capturar. Para se o jogo recusar ou avisar Devagar aí. Novo botão Escape imediato abaixo de Desistir do Combate. Não dá para saber o que nasce sem entrar no mapa: o servidor só informa o mapa atual."]},
 {"v": "2.3.37", "itens": ["Captura: nova opção \"Usar Beast Ball para capturar shiny\" (PvE > Captura, desligada por padrão). Um shiny só dá uma tentativa (se a bola falha ele foge), então, ligada, a extensão lança a Beast Ball nele, uma única vez, usando só as que você já tem. Os Pokémon comuns seguem com a bola normal. O Shiny Monitor registra o resultado."]},
 {"v": "2.3.35", "itens": ["Consulta e auto-compra mais rápidas: a extensão agora pede ao próprio servidor do jogo só os anúncios com a potência, os IVs individuais e o nível mínimos da regra (como o filtro do front-end do jogo), em vez de varrer dezenas de páginas. Vale no modo \"todos os critérios (E)\"; a conferência final continua sendo feita pela extensão."]},
 {"v": "2.3.34", "itens": ["Consulta: quando não há Pokémon com os filtros (por exemplo, shiny que não existe à venda), agora termina e mostra \"Nenhum Pokémon disponível com esses filtros\" em vez de ficar consultando para sempre. A quantidade máxima de resultados só limita o que é mostrado (a busca percorre até 30 páginas do mercado). A Consulta confere se a resposta do jogo é da página pedida."]},
 {"v": "2.3.33", "itens": ["Correção importante no mercado: o jogo conta as páginas a partir de 0 e a extensão pedia a partir de 1, então nunca via a primeira página (os anúncios mais baratos ou mais novos). Corrigido na Consulta, nas regras de auto-compra e na Compra Imediata."]},
 {"v": "2.3.32", "itens": ["Regras e Consulta: novo filtro de nível do Pokémon (mínimo e máximo). O botão da regra agora se chama \"Consultar Pokémon disponíveis\". Ao criar uma regra pela Consulta para um Pokémon que já tem regra, aparece um aviso: atualizar a regra existente, descartar a antiga (com novo nome) ou cancelar (com confirmação de zerar o filtro). A Consulta tenta de novo quando uma página do mercado demora a responder."]},
 {"v": "2.3.31", "itens": ["Regras de Pokémon: novo botão \"Ver o que casa agora\" em cada regra. Abre a Consulta já com os filtros da regra e mostra os anúncios que ela compraria, sem comprar nada. Quando a compra automática está desligada, o painel avisa que nem a simulação avalia anúncios."]},
 {"v": "2.3.30", "itens": ["Regras de compra de Pokémon: dá para recolher cada regra (fica só nome, botão ligada, resumo do que compra e quantos já comprou); o estado de aberta/fechada é lembrado. Corrigido o contador \"Comprados\" que não acompanhava a quantidade digitada."]},
 {"v": "2.3.29", "itens": ["Userscript: botão Atualizar userscript na aba Novidades (abre a tela de instalação do Tampermonkey: 1 clique para atualizar)."]},
 {"v": "2.3.28", "itens": ["Corrigido o botão Baixar atualização: agora baixa direto o ZIP da extensão (antes apontava para uma página de releases inexistente)."]},
 {"v": "2.3.27", "itens": ["Shiny Monitor: textos mais claros (resumo em linhas com legenda: desde quando monitora, quantos Pokémon apareceram, shinies, quantos seguidos sem shiny e média)."]},
 {"v": "2.3.26", "itens": ["Novidades: o botão Verificar atualização agora mostra \"Verificando…\", o resultado e a hora da última checagem, e aparece o botão Baixar atualização quando há versão nova."]},
 {"v": "2.3.25", "itens": ["Novo Shiny Monitor na aba Logs: só observa e guarda, no navegador, dados de cada Pokémon shiny que aparece (nível, bolas usadas, chance informada pelo jogo, resultado, quantos Pokémon apareceram antes), estatísticas das bolas e dados do dex. Botão para copiar o relatório (JSON) e colar na conversa. Base para um futuro Shiny Hunter."]},
 {"v": "2.3.24", "itens": ["Mercado RMT reorganizado: Itens | Pokémon | Histórico. Em Pokémon: Auto-compra (Consultar, Regras, Compra Imediata) e Renovar anúncios. Consulta e Compra Imediata com ordenação (menor preço, maior preço, recentes) e limite de quantidade; Compra Imediata com liga/desliga próprio; regras com resumo claro do que será comprado, modo simulação (só avisa) e confirmação antes de ligar; botão para criar regra a partir da consulta. Tudo em coins."]},
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
