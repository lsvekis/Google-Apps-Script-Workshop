// Custom Spreadsheet Functions
// Entry point: demoFunctions; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","demoFunctions").addToUi();}
function demoFunctions(){
// Install formulas in a separate sheet so the source remains unchanged.
const s=output('Results',['Net','Band'],input('Orders').map(()=>['',''])); input('Orders').forEach((r,i)=>{const n=i+2;s.getRange(n,1,1,2).setFormulas([[`=NETPRICE(Orders!B${n},Orders!C${n},Orders!D${n})`,`=PRICEBAND(A${n})`]]);});
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}
// Pure custom functions: no Workspace service calls.
function NETPRICE(quantity,price,discount){const q=num(quantity),p=num(price),d=num(discount);if(q<0||p<0||d<0||d>1)throw Error('Invalid order');return q*p*(1-d);}
function PRICEBAND(net){return num(net)<50?'Low':'High';}
