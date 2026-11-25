// Personalized Document Generator
// Entry point: generateLetters; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","generateLetters").addToUi();}
function generateLetters(){
// Copy the template before replacing placeholders; never edit the original.
const rows=SpreadsheetApp.getActive().getSheetByName('People').getDataRange().getDisplayValues().slice(1).filter(r=>r[0]); output('Generated',['Name','URL'],rows.map(([name,program,date])=>{const f=file('Letter Template').makeCopy('Welcome '+name,folder());const d=DocumentApp.openById(f.getId());const b=d.getBody();[['NAME',name],['PROGRAM',program],['DATE',date]].forEach(([k,v])=>b.replaceText('\\{\\{'+k+'\\}\\}',v));d.saveAndClose();return [name,f.getUrl()];}));
}
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function folder(){return DriveApp.getFolderById(SpreadsheetApp.getActive().getSheetByName('Workshop Info').getRange('B2').getValue());}
function file(name){const it=folder().getFilesByName(name); if(!it.hasNext()) throw Error('Missing file '+name); return it.next();}

