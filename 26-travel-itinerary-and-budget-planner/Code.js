// Travel Itinerary and Budget Planner
// Entry point: planTrip; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","planTrip").addToUi();}
function planTrip(){
// Sort activities and aggregate costs by day.
const rows=input('Trip').map(r=>[day(r[0]),r[1],num(r[2])]).sort((a,b)=>a[0].localeCompare(b[0]));const m={};rows.forEach(r=>m[r[0]]=(m[r[0]]||0)+r[2]);output('Itinerary',['Date','Activity','Cost'],rows);output('Budget',['Date','Cost'],[...Object.entries(m),['Total',rows.reduce((a,r)=>a+r[2],0)]]);
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}
function day(v){return v instanceof Date?Utilities.formatDate(v,SpreadsheetApp.getActive().getSpreadsheetTimeZone(),'yyyy-MM-dd'):String(v).slice(0,10);}

