/*
 * PokeIdle Tools by Ateforp — painel dentro do jogo.
 * Visual do Auto Captura: botão do Gyarados (liga/desliga a captura) + botão "Tools" encaixados logo
 * acima do card do Pokémon em campo; abrem uma janela azul arrastável pelo cabeçalho.
 * Fica num Shadow DOM, então o CSS do jogo não mexe nele e a janela não fecha sozinha nem ao digitar.
 */
(() => {
  'use strict';
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
        <button data-tab="novidades" id="novBtn">Novidades</button>
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
          <label class="row" style="display:flex;align-items:center;gap:8px;margin-top:8px">
            <span class="lbl"><b>Bola quando a tela do jogo está no modo Economia/Ultra</b><small>nesses modos a lista de caídos some e a captura é feita direto; escolha a bola (sem estoque, usa a primeira que tiver)</small></span>
            <select id="capBolaTela"><option value="0">Automática (como o jogo)</option><option value="1">Poke Ball</option><option value="2">Great Ball</option><option value="3">Super Ball</option><option value="4">Ultra Ball</option></select>
          </label>
          <label class="switch">
            <input type="checkbox" id="capBeastShiny">
            <span class="slider"></span>
            <span class="lbl"><b>Usar Beast Ball para capturar shiny</b><small>desligado por padrão. Ligado: quando um Pokémon shiny cai, a Beast Ball é lançada nele (uma única vez, pois se falhar o shiny foge). Só usa as que você já tem; não compra. Sem estoque, usa a bola normal. Os Pokémon comuns não mudam.</small></span>
          </label>
          <div class="mut" id="capTelaInfo"></div>
          <label class="switch">
            <input type="checkbox" id="capHud">
            <span class="slider"></span>
            <span class="lbl"><b>Estatísticas para modo economia</b><small>quadro ao vivo nos modos Economia/Ultra (recursos, captura, PvP, compras). Dá para mover, redimensionar, minimizar e fixar</small></span>
          </label>
          <div class="hudsec" id="hudSec" style="display:flex;flex-wrap:wrap;gap:10px;margin:4px 0 0 4px;font-size:12px">
            <label><input type="checkbox" data-hs="recursos"> Bolas e gold</label>
            <label><input type="checkbox" data-hs="captura"> Captura</label>
            <label><input type="checkbox" data-hs="pvp"> PvP</label>
            <label><input type="checkbox" data-hs="compras"> Compras</label>
          </div>
        </div>
                <div class="card">
          <h2>SHINY HUNT <small>beta</small></h2>
          <label class="switch">
            <input type="checkbox" id="hnOn">
            <span class="slider"></span>
            <span class="lbl"><b>Caçar shiny nos mapas</b><small id="hnHint">desligado</small></span>
          </label>
          <div class="mut" id="hnInfo"></div>
          <div class="fld"><label for="hnPasso">Intervalo mínimo entre ações (s)</label><input id="hnPasso" type="number" min="1" max="10" step="0.5" value="1"></div>
          <div class="fld"><label for="hnOlhar">Tempo olhando cada mapa (s)</label><input id="hnOlhar" type="number" min="0.3" max="5" step="0.1" value="0.3"></div>
          <label class="switch">
            <input type="checkbox" id="hnAuto">
            <span class="slider"></span>
            <span class="lbl"><b>Ligar automaticamente ao se logar</b><small>desmarcado: o Shiny Hunt sempre começa desligado quando você entra no jogo</small></span>
          </label>
          <div class="fld"><label><input id="hnParar" type="checkbox"> parar depois de resolver um shiny</label></div>
          <div class="fld"><label><input id="hnCentro" type="checkbox"> passar pelo Centro Pokémon entre os mapas</label><small class="mut">Costuma ser um pouco mais rápido (cerca de 1 a 2 s por mapa) e mais constante, porque sai do mapa antes de o herói começar a lutar. Sem o Centro, a troca direta às vezes é recusada por combate e espera um pouco. O jogo só deixa trocar de mapa a cada ~10 s nos dois casos.</small></div>
          <div class="mut" id="hnStats"></div>
          <details class="rotabox"><summary>Rota esperada</summary>
            <div class="mut" id="hnRotaResumo"></div>
            <div id="hnRota" class="rota"></div>
            <div class="btns"><button id="hnRotaReset" class="icon">Resetar rota</button><button id="hnRotaCopiar" class="link">copiar</button><button id="hnZerar" class="link">zerar contagens</button></div>
          </details>
          <h2>REGISTRO <button id="hnLogCopiar" class="link">copiar</button> <button id="hnLogLimpar" class="link">limpar</button></h2>
          <div id="hnLog" class="log"></div>
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


      <section id="tab-novidades" class="tab" hidden>
        <div class="card">
          <h2>NOVIDADES <small id="novVer"></small></h2>
          <div class="mut" id="novAviso"></div>
          <div class="btns"><button id="novChecar" class="icon">Verificar atualização</button><a id="novBaixar" class="icon" href="https://github.com/aasj94/PokeIdle-Tools/raw/main/download/pokeidle-tools-by-ateforp.zip" target="_blank" rel="noopener" hidden>⬇ Baixar atualização</a></div>
        </div>
        <div id="novLista"></div>
      </section>

      <section id="tab-itens" class="tab" hidden>
        <nav class="tabs sub" id="subtabs">
          <button data-sub="compras" class="on">Itens</button>
          <button data-sub="pokemon">Pokémon</button>
          <button data-sub="hist">Histórico</button>
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
        <div id="sub-pokemon" hidden>
          <nav class="tabs sub" id="pknav">
            <button data-pk="auto" class="on">Auto-compra</button>
            <button data-pk="ren">Renovar anúncios</button>
          </nav>
          <div id="pk-auto">
            <nav class="tabs sub" id="autonav">
              <button data-au="cons" class="on">Consultar</button>
              <button data-au="poke">Regras</button>
              <button data-au="imed">Compra Imediata</button>
            </nav>
        <div id="sub-cons" hidden>
          <div class="card">
            <h2>CONSULTAR O MERCADO</h2>
            <div class="mut">Veja o que há à venda (só coins) de acordo com os filtros. <b>Não compra nada.</b> Campos vazios são ignorados. Depois de achar o que quer, use "Criar regra com estes filtros" para pôr na compra automática.</div>
            <div class="fld"><label for="csEsp">Pokémon</label><input id="csEsp" type="text" placeholder="ex.: Snorlax (vazio = todos)"></div>
            <div class="fld"><label for="csPreco">Preço máximo (coins)</label><input id="csPreco" type="text" placeholder="ex.: 30M"></div>
            <div class="fld"><label for="csOutl">Outland</label><select id="csOutl"><option value="omitir">omitir Outland</option><option value="incluir">incluir Outland</option><option value="so">somente Outland</option></select></div>
            <div class="fld"><label for="csOrdem">Ordenar por</label><select id="csOrdem"><option value="baratos">Menor preço</option><option value="recentes">Adicionados recentemente</option><option value="caros">Maior preço</option></select></div>
            <div class="fld"><label for="csLim">Quantidade máxima de resultados</label><input id="csLim" type="number" min="1" max="500" step="1" value="20"></div>
            <div class="fld"><label><input id="csShiny" type="checkbox"> ✨ só shiny</label></div>
            <div class="est4" id="csEst"></div>
            <div class="mut">IV individual (31 = perfeito):</div>
            <div class="est4" id="csIv"></div>
            <div class="btns"><button id="csGo" class="icon">Consultar</button><button id="csRegra" class="icon">Criar regra com estes filtros</button></div>
            <div class="mut" id="csMsg"></div>
            <div id="csLista" class="list"></div>
          </div>
        </div>
        <div id="sub-poke" hidden>
          <div class="card master">
            <label class="switch big">
              <input type="checkbox" id="pkOn">
              <span class="slider"></span>
              <span class="lbl"><b>Compra automática de Pokémon</b><small id="pkHint">desligada</small></span>
            </label>
            <div class="mut" id="pkInfo">Desligada.</div>
            <div class="row inline">
              <label>Consultar a cada <input id="pkInt" type="number" min="4" step="0.5" value="5"> s <small>(uma regra por vez, em rodízio)</small></label>
            </div>
          </div>
          <div id="pkRegras"></div>
          <div class="btns"><button id="pkNova" class="icon">+ Nova regra</button><button id="pkZerar" class="link">zerar contagens</button></div>
          <h2>REGISTRO <button id="pkLogCopiar" class="link">copiar</button> <button id="pkLogLimpar" class="link">limpar</button></h2>
          <div id="pkLog" class="log"></div>
          <div class="mut">Cada regra compra Pokémon do Mercado (em coins) quando o anúncio atende aos critérios e custa até o preço máximo. P = potência, IV = soma dos IVs, Q = qualidade e N = nota (em milésimos, como na Venda automática: 1700, 3500). Campo vazio = ignorado. Preço máximo é obrigatório e vale sempre. Se o anúncio ainda estiver em retenção, a compra é agendada para o instante da liberação.</div>
        </div>
        <div id="sub-imed" hidden>
          <div class="card master">
            <label class="switch big">
              <input type="checkbox" id="imOn">
              <span class="slider"></span>
              <span class="lbl"><b>Compra Imediata</b><small id="imHint">desligada — nada será comprado</small></span>
            </label>
            <div class="mut">Escolha um Pokémon que está no Mercado aguardando o tempo de retenção (2 min). A extensão acompanha o relógio do servidor e envia a compra no instante em que ele é liberado. Só em coins. Com a chave desligada, ela apenas mostra e arma, mas não compra.</div>
          </div>
          <div class="card">
            <h2>BUSCAR EM RETENÇÃO</h2>
            <div class="fld"><label for="imNome">Pokémon</label><input id="imNome" type="text" placeholder="nome (vazio = qualquer)"></div>
            <div class="fld"><label for="imPreco">Preço máximo (coins)</label><input id="imPreco" type="text" placeholder="ex.: 30M (vazio = sem limite)"></div>
            <div class="fld"><label for="imOutl">Outland</label><select id="imOutl"><option value="omitir">omitir Outland</option><option value="incluir">incluir Outland</option><option value="so">somente Outland</option></select></div>
            <div class="fld"><label for="imOrdem">Ordenar por</label><select id="imOrdem"><option value="recentes">Adicionados recentemente</option><option value="baratos">Menor preço</option><option value="caros">Maior preço</option></select></div>
            <div class="fld"><label for="imLim">Quantidade (buscar e comprar até)</label><input id="imLim" type="number" min="1" max="100" step="1" value="5"></div>
            <div class="fld"><button id="imBuscar" class="icon">Buscar em retenção</button></div>
            <div class="mut" id="imMsg"></div>
            <div id="imLista" class="list"></div>
          </div>
          <div class="card">
            <h2>ARMADAS <small id="imArmN"></small></h2>
            <div id="imArmadas" class="list"></div>
            <div class="row inline"><label>Antecipar o envio em <input id="imAnte" type="number" min="0" max="1000" step="10" value="0"> ms <small>(compensa a demora da rede; 0 = no instante exato)</small></label></div>
          </div>
          <div class="card">
            <h2>REGISTRO <button id="imLogCopiar" class="link">copiar</button> <button id="imLogLimpar" class="link">limpar</button></h2>
            <div id="imLog" class="log"></div>
          </div>
        </div>
          </div>
        <div id="sub-ren" hidden>
          <div class="card">
            <h2>RENOVAÇÃO AUTOMÁTICA DE ANÚNCIOS <small id="rnHint"></small></h2>
            <div class="mut">
              <b>Para que serve:</b> quando você muda o preço de um anúncio, o jogo o leva de volta ao topo dos "recentes", e quem não o tinha visto passa a ver. Esta função faz isso sozinha, trocando o preço entre dois valores.<br>
              <b>Como funciona:</b> a cada intervalo, se o anúncio ainda não vendeu, a extensão edita o preço: se estiver em <b>Preço A</b> vai para <b>Preço B</b>, e vice-versa (ex.: A = 100.000.000 e B = 99.999.999). Segue assim até vender, até você remover o anúncio ou desligar.<br>
              <b>Preço A / Preço B:</b> os dois valores entre os quais o anúncio alterna (mínimo 2 e diferentes entre si).<br>
              <b>Intervalo (min):</b> tempo entre renovações. O jogo só permite um novo ajuste 30 min depois do anterior, então o mínimo é 30.<br>
              <b>Atenção:</b> cada renovação reinicia a retenção de 2 min do anúncio (ninguém consegue comprar nesse tempo). Fica desligada até você ligar.
            </div>
            <div class="row inline"><label class="switch"><input id="rnOn" type="checkbox"><span class="slider"></span></label> <span id="rnInfo" class="mut"></span></div>
            <div class="btns"><button id="rnCarregar" class="icon">↻ Carregar meus anúncios</button></div>
          </div>
          <div id="rnLista"></div>
          <div class="card">
            <h2>REGISTRO <button id="rnLogCopiar" class="link">copiar</button> <button id="rnLogLimpar" class="link">limpar</button></h2>
            <div id="rnLog" class="log"></div>
          </div>
        </div>
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

        <h2>Compras de Pokémon pela extensão <button id="pkLimpar" class="link">limpar</button></h2>
        <div id="pkHist" class="list tall"></div>
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
        <div class="card">
          <h2>SHINY MONITOR <small id="smHint"></small></h2>
          <div class="mut">Anota, sem mexer em nada no jogo, o que acontece em cada encontro com um Pokémon shiny: nível, bolas usadas, chance de captura e se deu certo. Serve para estudarmos como funciona a captura de shiny. Os dados ficam salvos neste navegador; quando quiser analisar, clique em "Copiar relatório" e cole na conversa.</div>
          <label class="switch"><input type="checkbox" id="smOn" checked><span class="slider"></span><span class="lbl"><b>Registrar encontros com shiny</b><small>desligue para parar de coletar</small></span></label>
          <div id="smResumo" class="mut"></div>
          <div id="smEnc" class="list"></div>
          <div class="btns"><button id="smCopiar" class="icon">📋 Copiar relatório</button><button id="smLimpar" class="link">limpar dados</button></div>
          <div class="mut" id="smMsg"></div>
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
.ate-dock .at-gy:not(.at-sh):not(.at-open) img { object-fit: contain; }
.ate-dock .at-gy:not(.at-sh):not(.at-open) img { height: 34px !important; max-width: 50px !important; }
.ate-dock .at-sh img { height: 32px; width: auto; max-width: 48px; pointer-events: none; image-rendering: auto; }
.ate-dock .at-sh.sh-on img { animation: ate-brilho 1.8s ease-in-out infinite; }
.ate-dock .at-sh.sh-on { box-shadow: inset 0 0 0 1px #ff7b85, 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 12px rgba(230,70,80,.65); }
.ate-dock .at-sh.sh-on img { filter: drop-shadow(0 0 3px rgba(255,110,120,.8)); }
@keyframes ate-brilho { 0%, 100% { filter: drop-shadow(0 0 1px rgba(255,220,120,.4)) brightness(1); } 50% { filter: drop-shadow(0 0 7px rgba(255,225,120,.95)) brightness(1.18); } }
.ate-dock .at-open.on { box-shadow: inset 0 1px 0 #fff, inset 0 -3px 0 rgba(6,22,48,.45), inset 0 0 0 1px #ffd166, 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 14px rgba(255,209,102,.6); }
/* caixa de ferramentas: a cor da borda mostra a conexão (verde = conectado, amarelo = aguardando, vermelho = sem conexão) */
.ate-dock.toolbox { --tb: #ff4d4f; position: relative; display: grid; grid-template-columns: repeat(2, auto); align-items: center; justify-items: center; justify-content: center; gap: 9px; box-sizing: border-box; width: fit-content; max-width: 100%;
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
  const pvpIcon = (on) => {
    if (window.__ATE.pvpImg) { const im = document.createElement('img'); im.src = on ? window.__ATE.pvpImg.on : window.__ATE.pvpImg.off; im.alt = on ? 'Zamazenta' : 'Zacian'; im.draggable = false; return im; }
    return pvpIconSvg(on);
  };
  const pvpIconSvg = (on) => { const d = new DOMParser().parseFromString(pvpSvg(on), 'image/svg+xml'); return document.importNode(d.documentElement, true); };
  let pvBtn = null, pvShown = null, shBtn = null, shShown = null;

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

    shBtn = document.createElement('button');
    shBtn.type = 'button';
    shBtn.className = 'at-btn at-gy at-sh';
    shBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); api.setShiny(!api.shiny()); });

    openBtn = document.createElement('button');
    openBtn.type = 'button';
    openBtn.className = 'at-btn at-gy at-open';
    openBtn.title = 'Abrir/fechar o PokeIdle Tools by Ateforp';
    openBtn.append(toolIcon());
    openBtn.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); toggle(); });

    wrap.append(gyBtn, shBtn, pvBtn, openBtn);
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
      const old = gyBtn.querySelector('svg,img');
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
      const old = pvBtn.querySelector('svg,img');
      const nv = pvpIcon(pon);
      if (old) pvBtn.replaceChild(nv, old); else pvBtn.appendChild(nv);
    }
    const son = api.shiny();
    if (force || shShown !== son) {
      shShown = son;
      shBtn.title = son ? 'Shiny Hunt LIGADO - Luxio brilhando (clique para desligar)' : 'Shiny Hunt DESLIGADO - Shinx (clique para ligar)';
      shBtn.classList.toggle('sh-on', son);
      shBtn.style.borderColor = son ? '#5a1a1f' : '#0b1b33';
      shBtn.textContent = '';
      const im = document.createElement('img'); im.src = son ? window.__ATE.shinx.on : window.__ATE.shinx.off; im.alt = son ? 'Luxio' : 'Shinx'; im.draggable = false;
      shBtn.append(im);
    }
    // borda da caixa: verde se o jogo está online (conectado), vermelho se não
    const online = api.conectado();
    wrap.style.setProperty('--tb', online ? '#6fd08a' : '#ff4d4f');
    wrap.title = online ? 'Jogo conectado' : 'Jogo sem conexão';
    // chave inglesa: verde / amarelo / vermelho (a regra do status da extensão)
    const st = host.dataset.status || 'off';
    // chave inglesa: vermelha só quando conectado E há alguma funcionalidade ativa além de PvP, Auto Captura e Shiny Hunt; senão verde
    const extras = api.outrasAtivas();
    const cor = st === 'warn' || !online ? '#ffd166' : extras.length ? '#ff4d4f' : '#6fd08a';
    openBtn.style.borderColor = cor;
    openBtn.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,.35), inset 0 0 0 1px ' + cor + ', 0 0 0 1px #14355f, 0 2px 0 1px #0b1b33, 0 0 12px ' + cor + (panel.hidden ? '88' : 'ff');
    const tp = openBtn.querySelector('svg path'); if (tp) tp.setAttribute('fill', cor);
    openBtn.title = [
      'PokeIdle Tools by Ateforp — clique para abrir ou fechar o painel',
      '',
      'PvE: reposição de itens, captura (Auto Captura), Shiny Hunt e venda de Pokémon',
      'PvP: PvP automático e histórico',
      'Mercado RMT: compra de itens, compra e renovação de Pokémon (Consulta e Compra Imediata) e histórico',
      'Logs: conexão com o jogo, Shiny Monitor e registros',
      '',
      'Cor da chave: verde = nenhuma função extra ligada · vermelho = há função ativa · amarelo = aguardando o jogo',
      'Agora: ' + (cor === '#ffd166' ? 'aguardando o jogo / atenção' : extras.length ? 'ativo: ' + extras.join(', ') : 'nenhuma função extra ativa (PvP, Auto Captura e Shiny Hunt não contam)')
    ].join('\n');
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
