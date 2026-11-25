// External API Data Importer
// Entry point: importUsers; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","importUsers").addToUi();}
function importUsers(){
// Fetch and validate the complete response before changing the output.
const [url,limit]=input('Settings')[0]; if(url!=='https://jsonplaceholder.typicode.com/users')throw Error('Use the workshop endpoint');const res=UrlFetchApp.fetch(url,{muteHttpExceptions:true});if(res.getResponseCode()!==200)throw Error('HTTP '+res.getResponseCode());const data=JSON.parse(res.getContentText());if(!Array.isArray(data))throw Error('Expected array');const rows=data.slice(0,num(limit)).map(u=>[u.id,textField(u.name),textField(u.email),textField(u.address.city)]);output('Users',['ID','Name','Email','City'],rows);
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}
function textField(v){if(typeof v!=='string'||!v.trim()) throw Error('Invalid AI text'); return v;}

