// Smart Data Cleaning Tool
// Entry point: cleanContacts; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","cleanContacts").addToUi();}
function cleanContacts(){
// Normalize values before checking duplicates; retain source row numbers.
const seen=new Set(),clean=[],issues=[]; const s=SpreadsheetApp.getActive().getSheetByName('Contacts'); s.getDataRange().getValues().slice(1).forEach((r,i)=>{if(r.every(v=>v===''))return; const [n,e,c]=r.map(v=>String(v).trim()); const email=e.toLowerCase(); const issue=!n?'Missing name':!/^\S+@\S+\.\S+$/.test(email)?'Invalid email':seen.has(email)?'Duplicate':''; if(issue)issues.push([i+2,issue]); else {seen.add(email);clean.push([n,email,c]);}}); output('Clean',['Name','Email','City'],clean);output('Issues',['Row','Issue'],issues);
}
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }

