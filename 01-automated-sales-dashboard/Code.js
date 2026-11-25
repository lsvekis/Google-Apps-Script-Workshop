// Automated Sales Dashboard
// Entry point: buildDashboard; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","buildDashboard").addToUi();}
function buildDashboard(){
// Aggregate revenue by region, then replace the previous chart.
const totals={}; input('Sales').forEach(r=>{totals[r[1]]=(totals[r[1]]||0)+num(r[3])*num(r[4]);}); const rows=Object.entries(totals); const s=output('Dashboard',['Region','Revenue'],[...rows,['Total',rows.reduce((a,r)=>a+r[1],0)]]); s.getCharts().forEach(c=>s.removeChart(c)); if(rows.length)s.insertChart(s.newChart().setChartType(Charts.ChartType.COLUMN).addRange(s.getRange(1,1,rows.length+1,2)).setPosition(2,4,0,0).build());
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}

