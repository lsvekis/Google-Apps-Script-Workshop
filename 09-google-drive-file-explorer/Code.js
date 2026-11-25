// Google Drive File Explorer
// Entry point: listFiles; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","listFiles").addToUi();}
function listFiles(){
// Drive iterators return one file at a time.
const it=folder().getFiles(),rows=[];while(it.hasNext()){const f=it.next();rows.push([f.getName(),f.getMimeType(),f.getUrl(),f.getLastUpdated()]);}output('File Inventory',['Name','Type','URL','Updated'],rows);
}
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function folder(){return DriveApp.getFolderById(SpreadsheetApp.getActive().getSheetByName('Workshop Info').getRange('B2').getValue());}

