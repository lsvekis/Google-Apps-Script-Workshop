// Google Drive File Explorer
// Entry point: listFiles; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","listFiles").addItem("Check permissions","checkPermissions").addToUi();}
function listFiles(){
// Drive iterators return one file at a time.
const it=folder().getFiles(),rows=[];while(it.hasNext()){const f=it.next();rows.push([f.getName(),f.getMimeType(),f.getUrl(),f.getLastUpdated()]);}output('File Inventory',['Name','Type','URL','Updated'],rows);
}
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
// Resolve the actual parent of this spreadsheet, never a stale copied ID.
function folder() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const info = ss.getSheetByName('Workshop Info');
  if (!info) throw new Error('Missing Workshop Info sheet.');
  const parents = DriveApp.getFileById(ss.getId()).getParents();
  if (!parents.hasNext()) throw new Error('Move this spreadsheet into your own lesson folder first.');
  const actual = parents.next();
  if (parents.hasNext()) throw new Error('Ambiguous parent folder. Move into one lesson folder.');
  const value = info.getRange('B2').getDisplayValue().trim();
  const match = value.match(/(?:\/folders\/)([-\w]+)|^([-\w]+)$/);
  const id = match && (match[1] || match[2]);
  // Require explicit confirmation when copied into a different folder.
  if (id !== actual.getId()) throw new Error('Copied spreadsheet detected. Move it and all required sample files into your own dedicated lesson folder, then set Workshop Info!B2 to this folder ID or URL: ' + actual.getUrl());
  if (actual.getId() === DriveApp.getRootFolder().getId()) throw new Error('Use a dedicated lesson folder, not My Drive root.');
  return actual;
}
function checkPermissions() {
  const ui = SpreadsheetApp.getUi();
  try {
    const target = folder();
    ui.alert('Folder access passed: ' + target.getName() + '\n' + target.getUrl() + '\nWrite access is checked when the application runs.');
  } catch (e) { ui.alert('Access check failed: ' + e.message); }
}

