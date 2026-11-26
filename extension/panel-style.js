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
.fld { display: grid; gap: 3px; }
.fld label { color: var(--mut); font-size: 12px; font-weight: 600; }
.fld input[type=text], .fld input[type=number], .fld select { width: 100%; box-sizing: border-box; }
.fld button { width: 100%; }
.resumo { background: #0c2a1a; border: 1px solid #1f6b3a; color: #bfeccf; border-radius: 6px; padding: 6px 8px; font-size: 12px; line-height: 1.4; }
.resumo.bad { background: #2a1210; border-color: #7a2a22; color: #f3b9b2; }
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
