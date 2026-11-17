# AI-CONTEXT — PokeIdle Tools by Ateforp (v1.5.0)

Extensão Chrome MV3 (e userscript gerado por `build_userscript.py`) para pokeidle.io. Painel em Shadow DOM, tema azul do Auto Captura.

## Arquitetura
- MAIN world: `engine.js` (compra no Mercado, cria `window.__PM_BUS` com `on(f)` e `ws()`), `catch.js` (auto captura, estoque, popups), `autovenda.js` (venda automática do Depósito por regras P/IV/Q/N), `pvp.js` (busca contínua de partida PvP, oculta o replay).
- ISOLATED world: `bridge.js` (chrome.storage <-> engine), `gyarados.js`, `panel-style.js`, `ui.js`, `panel.js`.
- Canais postMessage: `pokeidle-auto` (engine<->bridge), `ateforp` (catch<->ui), `ateforp-venda` (autovenda<->ui), `ateforp-pvp` (pvp<->ui).
- Abas: PvE (sub-abas Reposição de itens | Captura (Auto Captura) | Venda Pokémon (sub-abas Configurar Venda Automática | Registro de Vendas); id interno `tab-captura`) | PvP (sub-abas Configurações | Partidas) | Reposição itens | Mercado RMT (Compras | Histórico de compras) | Logs (inclui "Conexão com o jogo"). Botões no jogo: Gyarados e PvP no cartão do jogador (`#p-treinador .tr-dados`), Tools acima do Pokémon ativo.

## Protocolo do jogo (wss://pokeidle.io/, frames JSON `{"t": ...}`)
- Comprar: `market.comprar` `{id,qtd,preco,moeda:'gold',sorteioUi:1}` (compra é sorteio de ~3 s; só o vencedor paga). Limite do servidor: 3 `pedidos` por `market.atualizar`; excesso gera `erro` "Devagar aí".
- Anunciar Pokémon: `{"t":"market.criar","tipo":"pokemon","pokemonId":ID,"casaId":null,"bicicletaId":null,"qtd":1,"preco":N,"moeda":"gold","dias":1|3|7|15|30}`.
  - Sucesso: `{"t":"market","aba":"criado","anuncio":{id,pokemonId,ficha,preco,moeda,dias,estado,compravelEm,...}}`; o jogo então manda `market.meus` e recebe `{"t":"market","aba":"meus","linhas":[...]}`.
  - Regras: preço mínimo 2 coins/un.; comissão 15% só na venda; pensão da feira 100.000 coins/dia paga na hora e não volta; item retido 2 min antes de ser comprável; sem venda no prazo o Pokémon volta para a equipe.
- Lista de Pokémon: vem no login (`welcome.estado.pokemons`) e em `estado` (`pokemons`, `pkMud` alterados, `pkFora` removidos). Abrir picker/aba Vender não gera pedido.
- `shop.sellPokemon` `{pokemonId}` (botão "Vender" dos cards do Market NPC) VENDE na hora ao jogo, irreversível. Nunca clicar em testes. Cards têm `data-chave="p<ID>"`.

## Venda automática (autovenda.js)
- Depósito = `slot == null` e id fora de `estado.automation.pokemonTravado` (Coleção). Decisão em ordem: shiny, lendário (lista de nomes + extras; o servidor não manda essa marca), regra da Coleção (P/IV/Q/N >=, OU/E), regra de venda (<=, E/OU, ou "vender o resto"), senão manter.
- Venda: `{"t":"shop.sellPokemon","pokemonId":ID}` (irreversível; o servidor calcula o preço). Confirma por `pkFora`; limite por minuto; "devagar" pausa 60 s; 3 falhas desligam. Começa desligada e em modo SIMULAÇÃO (só mostra a prévia).
- "Enviar para a Coleção": `{"t":"colecao.mover","pokemonId":ID,"para":"colecao"}` (capturado clicando o botão num Delibird, 17/11). Confirmação: id entra em `pokemonTravado` ou sai da lista. Resposta do servidor não observada.
- Anunciar no Mercado RMT (`market.criar`) foi removido da extensão; o protocolo acima fica como referência.
- Decisão: NÃO forjar atributos nem burlar validação do servidor.

## Pendências
- Descobrir o comando "Enviar para a Coleção" e preencher `COLECAO_CMD`; verificar layout/ocultar replay do PvP no jogo real.
- Anúncio de teste aberto: Furious Scizor id 131006106 a 999.999.999.999 coins (cancelável em "Meus anúncios").

## Segurança
- Compra/venda só com flags ligadas pelo usuário; moeda só coins; Turnstile/captcha desliga tudo, nunca contornar; token do `hello` nunca é impresso.


## v1.6.0 - caixa de ferramentas
- `#ateforp-wrap.ate-dock.toolbox` fica em `#p-treinador .tr-dados` com 3 botões: Gyarados, PvP e Tools (chave inglesa). A cor da borda (`--tb`) segue `host.dataset.status` (a mesma lógica da antiga bolinha: verde = on, amarelo = warn, vermelho = off).
- Auto Captura (Gyarados) e PvP sempre começam DESLIGADOS. Opção "Ligar automaticamente ao se logar" em cada um (`autoLigar` em `autocaptura_cfg3` e `ateforp_pvp`): liga ao receber o primeiro `welcome` depois de carregar a página.
- Reposição de estoque: `comprarAte()` em catch.js (lotes aprendidos, teto de estoque ajusta "compra até", falta de ouro).
