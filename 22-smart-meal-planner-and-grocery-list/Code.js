// Smart Meal Planner and Grocery List
// Entry point: buildGroceryList; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","buildGroceryList").addToUi();}
function buildGroceryList(){
// Group by ingredient AND unit to avoid adding incompatible quantities.
const m=new Map();input('Meals').forEach(r=>{const k=JSON.stringify([r[2],r[4]]);m.set(k,(m.get(k)||0)+num(r[3]));});output('Groceries',['Ingredient','Unit','Quantity'],Array.from(m,([k,v])=>[...JSON.parse(k),v]));
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}

