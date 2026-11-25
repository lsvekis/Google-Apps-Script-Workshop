// Personal Subscription Tracker
// Entry point: trackSubscriptions; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","trackSubscriptions").addToUi();}
function trackSubscriptions(){
// Normalize annual and monthly charges to a common monthly basis.
const rows=input('Subscriptions').map(([s,c,cycle,d])=>{if(!['Monthly','Annual'].includes(cycle))throw Error('Invalid cycle');const m=num(c)/(cycle==='Annual'?12:1);return [s,m,m*12,day(d)];});const total=rows.reduce((a,r)=>a+r[1],0);output('Costs',['Service','Monthly','Annual','Renewal'],[...rows,['Total',total,total*12,'']]);
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}
function day(v){return v instanceof Date?Utilities.formatDate(v,SpreadsheetApp.getActive().getSpreadsheetTimeZone(),'yyyy-MM-dd'):String(v).slice(0,10);}

