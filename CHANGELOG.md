# Histórico de versões

## v2.3.32
- Filtro de **nível** (mín./máx.) nas regras e na Consulta.
- Botão da regra renomeado para **Consultar Pokémon disponíveis**.
- Criar regra pela Consulta quando já existe regra do mesmo Pokémon: atualizar, descartar (novo nome) ou cancelar (com confirmação de zerar o filtro).
- Consulta tenta de novo (até 3x) quando uma página demora a responder.

## v2.3.31
- Regras de Pokémon: botão **Ver o que casa agora** em cada regra; abre a Consulta com os filtros da regra e lista o que ela compraria, sem comprar nada.
- Aviso na tela quando a compra automática está desligada (nem a simulação avalia anúncios).

## v2.3.30
- Regras de compra de Pokémon **recolhíveis**: fica só o nome, o botão ligada, o resumo e quantos já comprou; o estado é lembrado.
- Corrigido o contador "Comprados" que não acompanhava a quantidade digitada.

## v2.3.29
- Userscript: botão **Atualizar userscript** na aba Novidades; abre a tela de instalação do Tampermonkey (1 clique para atualizar).

## v2.3.28
- Corrigido o botão **Baixar atualização**: agora baixa direto o ZIP da extensão (pasta `download/`), em vez de uma página de releases inexistente.

## v2.3.27
- Shiny Monitor com textos mais claros: resumo em linhas com legenda.

## v2.3.26
- Novidades: o botão **Verificar atualização** agora mostra "Verificando…", o resultado e a hora da última checagem; aparece o botão **Baixar atualização** quando há versão nova.

## v2.3.25
- **Shiny Monitor** (aba Logs): só observa e guarda no navegador os encontros com Pokémon shiny (nível, bolas usadas, chance informada pelo jogo, resultado, quantos Pokémon apareceram antes), estatísticas das bolas e dados do dex. Botão para copiar o relatório. Base para um futuro Shiny Hunter.

## v2.3.24
- **Mercado RMT reorganizado:** Itens | Pokémon | Histórico. Em Pokémon: **Auto-compra** (Consultar, Regras, Compra Imediata) e **Renovar anúncios**.
- Consulta e Compra Imediata com **ordenação** (menor preço, maior preço, recentes) e **limite de quantidade**; Compra Imediata com liga/desliga próprio; cada campo em uma linha.
- Regras com **resumo claro do que será comprado**, **modo simulação** (só avisa, não compra; ligado por padrão) e **confirmação** antes de ligar.
- Botão "Criar regra com estes filtros" na Consulta. Tudo somente em coins.

## v2.3.23
- Nova aba **Renovação** (Mercado RMT): renova sozinha os seus anúncios de Pokémon, alternando o preço entre dois valores (Preço A e Preço B) a cada intervalo (mínimo 30 min, limite do jogo), até vender. Desligada por padrão, com explicação na tela e registro de cada renovação.

## v2.3.22
- Nova aba **Novidades** com o resumo de cada versão.
- **Aviso de nova versão** da extensão: ponto vermelho na aba Novidades (checagem ao abrir e a cada 3 horas). No userscript, o aviso é do Tampermonkey/Greasy Fork.

## v2.3.21
- Compra de Pokémon: opção **Outland** (omitir, incluir ou somente Outland) em cada regra, na Compra Imediata e na Consulta. Antes, Outland era sempre omitido.

## v2.3.20
- **Mercado — compra automática de Pokémon:** nova configuração, separada da de itens, com regras por espécie, preço máximo, quantidade, shiny, potência, IV total, qualidade, nota e **IV individual** (HP, Atk, Def, SpAtk, SpDef, Spd). Modo "todos os critérios" (E) ou "qualquer um" (OU); campo vazio é ignorado.
- **Compra Imediata:** escolha um Pokémon em retenção; a extensão acompanha o relógio do servidor e envia a compra no instante da liberação.
- **Consulta:** lista o que há à venda segundo os filtros (sem comprar).
- **Registro:** log detalhado das compras (consultas, achados, pedidos, respostas do jogo, confirmações) e histórico. Tudo funciona só pela configuração, sem precisar da tela do jogo.

## v2.3.19
- Removida a opção "Beast Ball em shiny e lendário" da aba Captura. A captura nos modos Economia/Ultra continua igual, usando a bola escolhida. (A reposição de Beast Ball da loja VIP é outra função e continua.)

## v2.3.18
- **Reposição de estoque:** corrigido o caso em que a reposição passava a comprar de 1 em 1. Um ganho parcial (por exemplo, falta de ouro naquele momento) não é mais tratado como limite por compra; o limite só é aprendido quando o jogo avisa por mensagem. Depois de cada compra, a extensão espera o estoque do jogo assentar antes de medir o que entrou.
- Ao atingir o mínimo, a compra continua sendo um único pedido até o valor de "compra até".

## v2.3.17 (a anterior publicada era a 2.3.13)
- **Estatísticas para modo economia:** o quadro dos modos Economia/Ultra virou uma opção na aba Captura (ligar/desligar, com escolha das seções: bolas e gold, captura, PvP e compras).
- O quadro abre à esquerda da tela, pode ser movido, redimensionado por todas as bordas e cantos, minimizado (vai para o canto inferior direito) e fixado (trava posição e tamanho). Tudo fica salvo.
- Mostra o Pokémon que está sendo caçado.
- (2.3.14 a 2.3.16 foram versões internas deste mesmo ajuste.)

## v2.3.13 (a anterior publicada era a 2.3.10; a 2.3.12 foi publicada sem o número ser trocado no pacote)
- **Captura nos modos Economia e Ultra Economia:** a Auto Captura passa a funcionar mesmo sem a lista de Pokémon na tela, usando os avisos da batalha (derrotado, bola, fugiu, capturado).
- Quem fugiu depois de uma bola que não segurou não é mais lançado de novo; os outros derrotados são tentados em rodízio (shiny e lendários primeiro).
- **Quadro em tempo real nos modos Economia/Ultra:** recursos e bolas, gold, Pokémon sendo caçado, vistos/derrotados/capturados/fugiram/expiraram, PvP e compras. Pode ser ligado/desligado e por seções no painel (aba Captura).
- Ligar automaticamente ao logar (Captura e PvP) mais confiável; o PvP automático não se desliga mais sozinho após falhas (tenta de novo com espera crescente).
- Contagem de "vistos" corrigida.

## v2.3.10 (a anterior publicada era a 2.3.9)
- O painel da extensão fica com prioridade sobre o jogo; só a caixa de botões (Gyarados, PvP, Tools) fica atrás das janelas do jogo (ex.: Mercado).
- **Correção na Venda automática:** Q (qualidade) e N (nota) agora são comparados em milésimos, como o jogo mostra (Q 1.445 = 1445). Antes quase tudo "batia" a regra de venda.
- Venda automática: a lista mostra Vender, Coleção e Sem ação, com filtros, contagem e o motivo ao passar o mouse.
- Apoio ao criador: o código Pix foi trocado pelo link https://livepix.gg/ateforp.
- Ícone da ferramenta (chave inglesa) na extensão e no userscript.

## Versões anteriores
- v1.5.0
- v1.6.1 - A borda da caixa de ferramentas agora indica a conexao com o jogo (verde = conectado, vermelho = sem conexao). A chave inglesa segue a regra verde/amarelo/vermelho do status.
- v1.6.2 - Reposicao de estoque: cada campo (abaixo de / compra ate) limitado a 9999; valores antigos maiores sao reduzidos. Desempenho: a analise do Deposito (venda automatica) so e refeita quando os dados mudam, os estados so sao enviados ao painel quando mudam (menos redesenho da tela), e os observadores de tela (sorteio, luta PvP) agrupam o trabalho em vez de rodar a cada mudanca da pagina.
- v1.6.3 - Corrigido: a Auto Captura ligada sozinha ao logar agora de fato clica no Pokemon caido (antes so aparecia como ligada). PvP conferido: ao logar entra na fila normalmente.
- v1.6.4 - Reposicao de estoque: ao digitar um valor acima de 9999 o campo ja vira 9999 na hora (nao precisa clicar fora) e nao passa disso.
- v1.6.5 - Removido o botao "So simular" da Venda automatica (agora a venda ligada vende de verdade; ao ligar ainda pede confirmacao).
- v1.6.6 - Corrigido: a janela do sorteio voltava a aparecer durante a disputa mesmo com "Ocultar" ligado (regressao da otimizacao da v1.6.2). O observador volta a vigiar mudancas de classe/estilo e confere antes de a tela ser pintada.
- v1.6.7 - A confirmacao ao ligar a Venda automatica agora aparece dentro da propria janela da extensao (Esc/Cancelar mantem desligada) em vez do alerta do navegador. Revisao geral: todos os testes passam.
- v2.3.5 - Versao 2.3.5; nome oficial "PokeIdle Tools by Ateforp"; nova descricao: Configuracoes de PvE, PvP, compras, tudo automatico e num painel so.
- v2.3.7 - Icone da ferramenta (chave inglesa, desenho proprio): na extensao (icons/) e no userscript (@icon).
- v2.3.8 - As janelas e menus do jogo ficam na frente da extensao: com uma janela do jogo aberta, a extensao desce para logo abaixo dela; sem janela aberta, volta ao topo.
- v2.3.9 - Os botoes (Gyarados, PvP, Tools) nao aparecem mais por cima das janelas do jogo (ex.: Mercado da Comunidade): a caixa nao tem mais camada propria.
