# PokeIdle Tools by Ateforp

Configurações de PvE, PvP, compras, tudo automático e num painel só, para o [PokeIdle](https://pokeidle.io/).

Versão atual: **2.3.19**

## O que faz
- **Reposição de itens:** compra automática de bolas, poções e revives. Ao cair abaixo do mínimo, compra **de uma vez** até o valor de "compra até" (máx. 9999 por item). Se o jogo limitar a quantidade por compra ou o estoque, a extensão se adapta.
- **Captura:** Auto Captura (liga/desliga e "ligar ao se logar"). Funciona também nos modos **Economia** e **Ultra Economia** do jogo, sem precisar da lista de Pokémon na tela, e tenta todos os Pokémon derrotados em rodízio. Opção: escolher qual bola usar nesses modos.
- **Estatísticas para modo economia:** quadro ao vivo nos modos Economia/Ultra com bolas e gold, Pokémon sendo caçado, vistos/derrotados/capturados/fugiram, PvP e compras. Pode ser ligado ou desligado, escolhendo as seções, e dá para **mover, redimensionar (por todas as bordas), minimizar e fixar**; a posição fica salva.
- **Venda de Pokémon:** vende ou envia para a Coleção, sozinho, segundo regras de P, IV, Q e N, com prévia (Vender / Coleção / Sem ação) e registro.
- **PvP:** entra na fila automaticamente (também ao logar), com histórico de partidas. Não se desliga sozinho após falhas: tenta de novo com espera crescente.
- **Mercado RMT:** compra automática e histórico.
- Painel redimensionável e maximizável, com caixa de ferramentas no cartão do jogador.

## Instalação

### Userscript (Tampermonkey / Violentmonkey)
1. Instale o Tampermonkey ou o Violentmonkey no navegador.
2. Abra [`userscript/pokeidle-tools-by-ateforp.user.js`](userscript/pokeidle-tools-by-ateforp.user.js) e clique em **Raw**; o gerenciador oferece a instalação.

### Extensão do Chrome (modo desenvolvedor)
1. Baixe o `.zip` da [última versão](../../releases/latest) e extraia.
2. Abra `chrome://extensions`, ative **Modo do desenvolvedor**.
3. Clique em **Carregar sem compactação** e escolha a pasta `extension`.

## Desenvolvimento
O userscript é gerado a partir dos mesmos arquivos da extensão:
```
python3 build_userscript.py
```
Ao lançar uma versão: aumente `version` em `extension/manifest.json`, rode o script, atualize `version.json` e o `CHANGELOG.md`.

## Aviso
Ferramenta de terceiros, sem vínculo com o PokeIdle. Use por sua conta e risco e respeite as regras do jogo. A venda de Pokémon ao NPC é irreversível: confira a prévia antes de ligar.

## Apoio
Gratuito e continua assim. Se quiser ajudar, com qualquer valor: https://livepix.gg/ateforp

Licença: MIT.
