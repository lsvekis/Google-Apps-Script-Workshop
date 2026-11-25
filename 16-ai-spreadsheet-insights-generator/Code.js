// AI Spreadsheet Insights Generator
// Entry point: generateInsights; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","generateInsights").addToUi();}
function generateInsights(){
// Calculate facts in JavaScript, then ask AI to interpret them.
const rows=input('Metrics').map(([m,r,c])=>[m,num(r)-num(c)]);const total=rows.reduce((a,r)=>a+r[1],0);const t=callGemini('Give three observations and two actions using only these computed profits: '+JSON.stringify({rows,total}),false);output('Insights',['Metric','Value'],[...rows,['Total',total],['AI commentary',t]]);
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}


// Shared Gemini transport; configure Script Properties before running.
function callGemini(prompt, jsonMode) {
  const props = PropertiesService.getScriptProperties();
  const key = props.getProperty('GEMINI_API_KEY');
  const model = props.getProperty('GEMINI_MODEL');
  if (!key || !model) throw new Error('Set GEMINI_API_KEY and GEMINI_MODEL in Project Settings > Script properties.');
  const payload = {contents:[{parts:[{text:prompt}]}]};
  if (jsonMode) payload.generationConfig = {responseMimeType:'application/json'};
  const response = UrlFetchApp.fetch('https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent', {method:'post',contentType:'application/json',headers:{'x-goog-api-key':key},payload:JSON.stringify(payload),muteHttpExceptions:true});
  if (response.getResponseCode() !== 200) throw new Error('Gemini HTTP '+response.getResponseCode());
  const data = JSON.parse(response.getContentText());
  const parts = data.candidates?.[0]?.content?.parts || [];
  const result = parts.filter(p=>!p.thought).map(p=>p.text||'').join('');
  if (!result) throw new Error('No Gemini text returned');
  return result;
}