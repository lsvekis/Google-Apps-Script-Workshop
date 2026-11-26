// Automated Inventory Monitor
// Entry point: checkInventory; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","checkInventory").addItem("Install daily trigger","installDaily").addToUi();}
function checkInventory(){
// Filter only products at or below their reorder threshold.
output('Alerts',['SKU','Item','Stock','Reorder level'],input('Inventory').filter(r=>num(r[2])<=num(r[3])));
}
function input(name) { const s=workshopSpreadsheet().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=workshopSpreadsheet(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}
function installDaily(){PropertiesService.getScriptProperties().setProperty("WORKSHOP_TRIGGER_SHEET",SpreadsheetApp.getActiveSpreadsheet().getId());if(!ScriptApp.getProjectTriggers().some(t=>t.getHandlerFunction()==='checkInventory'))ScriptApp.newTrigger('checkInventory').timeBased().everyDays(1).create();}

function workshopSpreadsheet(){const active=SpreadsheetApp.getActiveSpreadsheet(); if(active)return active; const id=PropertiesService.getScriptProperties().getProperty("WORKSHOP_TRIGGER_SHEET"); if(!id)throw new Error("Run Install daily trigger from your copied spreadsheet first."); return SpreadsheetApp.openById(id);}
