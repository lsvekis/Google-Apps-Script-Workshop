// Email Analytics Dashboard
// Entry point: analyzeMessages; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","analyzeMessages").addItem("Analyze live inbox","analyzeLive").addToUi();}
function analyzeMessages(){
// Use fictional sample messages by default, not the real inbox.
messageSummary(input('Messages'));
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function messageSummary(rows){const m={};rows.forEach(r=>{const k=r[0];m[k]=m[k]||[0,0];m[k][0]++;if(r[3]===true||String(r[3]).toLowerCase()==='true'||String(r[3]).toLowerCase()==='yes')m[k][1]++;});output('Analytics',['Sender','Messages','Unread'],Object.entries(m).map(([k,v])=>[k,...v]));}
function analyzeLive(){const ui=SpreadsheetApp.getUi(),p=ui.prompt('Gmail search query (max 10 threads)');if(p.getSelectedButton()!==ui.Button.OK||!p.getResponseText().trim())return;const rows=GmailApp.search(p.getResponseText(),0,10).flatMap(t=>t.getMessages().map(m=>[m.getFrom(),m.getSubject(),m.getDate(),m.isUnread()]));messageSummary(rows);}
