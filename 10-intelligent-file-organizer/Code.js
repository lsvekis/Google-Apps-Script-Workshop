// Intelligent File Organizer
// Entry point: previewMoves; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","previewMoves").addItem("Apply approved moves","applyApprovedMoves").addItem("Check permissions","checkPermissions").addToUi();}
function previewMoves(){
// Preview only; moving files requires a separate approval action.
const rules=input('Rules'),it=folder().getFiles(),rows=[];while(it.hasNext()){const f=it.next();const r=rules.find(r=>f.getName().startsWith(r[0]));if(r && f.getMimeType()===MimeType.GOOGLE_DOCS && ["FIN-Budget","HR-Onboarding","MISC-Notes"].includes(f.getName()))rows.push([f.getId(),f.getName(),r[1],false]);}const s=output('Plan',['ID','Name','Destination','Approve'],rows);if(rows.length)s.getRange(2,4,rows.length).insertCheckboxes();
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
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
// Recheck source folder and current rules before moving approved files.
function applyApprovedMoves(){const root=folder(),rules=input('Rules');input('Plan').filter(r=>r[3]===true).forEach(([id,name,dest])=>{const f=DriveApp.getFileById(id);const parents=f.getParents();let inside=false;while(parents.hasNext())if(parents.next().getId()===root.getId())inside=true;if(!inside||f.getMimeType()!==MimeType.GOOGLE_DOCS||!["FIN-Budget","HR-Onboarding","MISC-Notes"].includes(f.getName())||!rules.some(r=>f.getName().startsWith(r[0])&&r[1]===dest))return;const it=root.getFoldersByName(dest);f.moveTo(it.hasNext()?it.next():root.createFolder(dest));});}
