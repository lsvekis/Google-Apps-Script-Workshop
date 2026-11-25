// Meeting Minutes Generator
// Entry point: generateMinutes; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","generateMinutes").addToUi();}
function generateMinutes(){
// Separate discussion notes from assigned actions.
const rows=input('Meeting');const d=DocumentApp.create('Meeting Minutes');const b=d.getBody();rows.forEach(r=>b.appendParagraph(r[0]+': '+r[1]));b.appendParagraph('Action items');b.appendTable([['Action','Owner','Due'],...rows.filter(r=>r[2]).map(r=>[String(r[1]),String(r[2]),day(r[3])])]);d.saveAndClose();const f=DriveApp.getFileById(d.getId());f.moveTo(folder());output('Generated',['URL'],[[f.getUrl()]]);
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function folder(){return DriveApp.getFolderById(SpreadsheetApp.getActive().getSheetByName('Workshop Info').getRange('B2').getValue());}
function day(v){return v instanceof Date?Utilities.formatDate(v,SpreadsheetApp.getActive().getSpreadsheetTimeZone(),'yyyy-MM-dd'):String(v).slice(0,10);}

