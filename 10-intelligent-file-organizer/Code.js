// Intelligent File Organizer
// Entry point: previewMoves; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","previewMoves").addItem("Apply approved moves","applyApprovedMoves").addToUi();}
function previewMoves(){
// Preview only; moving files requires a separate approval action.
const rules=input('Rules'),it=folder().getFiles(),rows=[];while(it.hasNext()){const f=it.next();const r=rules.find(r=>f.getName().startsWith(r[0]));if(r)rows.push([f.getId(),f.getName(),r[1],false]);}const s=output('Plan',['ID','Name','Destination','Approve'],rows);if(rows.length)s.getRange(2,4,rows.length).insertCheckboxes();
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function folder(){return DriveApp.getFolderById(SpreadsheetApp.getActive().getSheetByName('Workshop Info').getRange('B2').getValue());}
// Recheck source folder and current rules before moving approved files.
function applyApprovedMoves(){const root=folder(),rules=input('Rules');input('Plan').filter(r=>r[3]===true).forEach(([id,name,dest])=>{const f=DriveApp.getFileById(id);const parents=f.getParents();let inside=false;while(parents.hasNext())if(parents.next().getId()===root.getId())inside=true;if(!inside||!rules.some(r=>f.getName().startsWith(r[0])&&r[1]===dest))return;const it=root.getFoldersByName(dest);f.moveTo(it.hasNext()?it.next():root.createFolder(dest));});}
