// Automated PDF Invoice Builder
// Entry point: generateInvoices; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","generateInvoices").addToUi();}
function generateInvoices(){
// Save the document before converting its content to PDF.
output('Generated',['Invoice','Total','PDF'],input('Invoices').map(([id,client,item,qty,price])=>{const total=num(qty)*num(price);const f=doc('Invoice '+id,`Invoice ${id}\nClient: ${client}\n${item}: ${qty} × ${price}\nTotal: ${total}`);const pdf=folder().createFile(f.getAs(MimeType.PDF).setName('Invoice '+id+'.pdf'));return [id,total,pdf.getUrl()];}));
}
function input(name) { const s=SpreadsheetApp.getActive().getSheetByName(name); if(!s) throw Error('Missing tab: '+name); return s.getDataRange().getValues().slice(1).filter(r=>r.some(v=>v!=='')); }
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.setFrozenRows(1); return s; }
function folder(){return DriveApp.getFolderById(SpreadsheetApp.getActive().getSheetByName('Workshop Info').getRange('B2').getValue());}
function doc(name,text){const d=DocumentApp.create(name); d.getBody().setText(text); d.saveAndClose(); const f=DriveApp.getFileById(d.getId()); f.moveTo(folder()); return f;}
function num(v){if(v===''||!Number.isFinite(Number(v))) throw Error('Invalid number: '+v); return Number(v);}

