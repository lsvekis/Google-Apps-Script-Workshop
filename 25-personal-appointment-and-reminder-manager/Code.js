// Personal Appointment and Reminder Manager
// Entry point: showAppointments; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","showAppointments").addToUi();}
function showAppointments(){
// Use a fixed seven-day window for the workshop example.
output('Upcoming',['Title','Date','Time'],input('Appointments').filter(r=>day(r[1])>='2026-11-25'&&day(r[1])<'2026-12-02').sort((a,b)=>day(a[1]).localeCompare(day(b[1]))));
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function day(v){return v instanceof Date?Utilities.formatDate(v,SpreadsheetApp.getActive().getSpreadsheetTimeZone(),'yyyy-MM-dd'):String(v).slice(0,10);}

