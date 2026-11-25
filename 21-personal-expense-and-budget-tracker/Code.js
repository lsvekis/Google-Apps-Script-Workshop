// Personal Expense and Budget Tracker
// Entry point: summarizeExpenses; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","summarizeExpenses").addToUi();}
function summarizeExpenses(){
// Sum each category and calculate the overall total.
const m={};input('Expenses').forEach(r=>m[r[1]]=(m[r[1]]||0)+num(r[2]));const rows=Object.entries(m);output('Budget',['Category','Amount'],[...rows,['Total',rows.reduce((a,r)=>a+r[1],0)]]);
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}

