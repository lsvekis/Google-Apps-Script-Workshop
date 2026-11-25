// Automated Task Management System
// Entry point: updateTasks; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","updateTasks").addItem("Install daily trigger","installDaily").addToUi();}
function updateTasks(){
// Fixed date makes workshop tests reproducible.
markTasks('2026-11-25');
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function day(v){return v instanceof Date?Utilities.formatDate(v,SpreadsheetApp.getActive().getSpreadsheetTimeZone(),'yyyy-MM-dd'):String(v).slice(0,10);}
function markTasks(today){output('Priority',['Task','Owner','Due','Status','Priority'],input('Tasks').map(r=>[...r,r[3]==='Done'?'Done':day(r[2])<today?'Overdue':'Open']));}
function updateToday(){markTasks(day(new Date()));}
function installDaily(){if(!ScriptApp.getProjectTriggers().some(t=>t.getHandlerFunction()==='updateToday'))ScriptApp.newTrigger('updateToday').timeBased().everyDays(1).create();}
