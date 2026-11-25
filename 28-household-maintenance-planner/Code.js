// Household Maintenance Planner
// Entry point: planMaintenance; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","planMaintenance").addToUi();}
function planMaintenance(){
// Add interval days in UTC to avoid daylight-saving date shifts.
output('Schedule',['Task','Next due','Status'],input('Maintenance').map(([task,last,interval])=>{const d=new Date(day(last)+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+num(interval));const due=d.toISOString().slice(0,10);return [task,due,due<'2026-11-25'?'Overdue':'Upcoming'];}));
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}
function day(v){return v instanceof Date?Utilities.formatDate(v,SpreadsheetApp.getActive().getSpreadsheetTimeZone(),'yyyy-MM-dd'):String(v).slice(0,10);}

