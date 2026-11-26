// Google Drive File Explorer
// Entry point: listFiles; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","listFiles").addItem("Check permissions","checkPermissions").addToUi();}
function listFiles(){
// Drive iterators return one file at a time.
const it=folder().getFiles(),rows=[];while(it.hasNext()){const f=it.next();rows.push([f.getName(),f.getMimeType(),f.getUrl(),f.getLastUpdated()]);}output('File Inventory',['Name','Type','URL','Updated'],rows);
}
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
// Resolve this spreadsheet's actual folder; metadata is informational only.
function folder() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Open the lesson spreadsheet first.');
  const parents = DriveApp.getFileById(ss.getId()).getParents();
  if (!parents.hasNext()) throw new Error('Move the spreadsheet into a dedicated lesson folder.');
  const actual = parents.next();
  if (parents.hasNext()) throw new Error('Ambiguous parent folder.');
  if (actual.getId() === DriveApp.getRootFolder().getId()) throw new Error('Move the spreadsheet and sample files into a dedicated lesson folder, not My Drive root.');
  return actual;
}
function checkPermissions() {
  const ui = SpreadsheetApp.getUi();
  try {
    const target = folder();
    ui.alert('Folder access passed: ' + target.getName() + '\n' + target.getUrl() + '\nWrite access is checked when the application runs.');
  } catch (e) { ui.alert('Access check failed: ' + e.message); }
}

