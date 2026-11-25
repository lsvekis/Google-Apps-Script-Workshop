// Personalized Gmail Draft Builder
// Entry point: buildDrafts; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","buildDrafts").addToUi();}
function buildDrafts(){
// Persist each draft ID immediately to reduce duplicate creation on reruns.
const s=SpreadsheetApp.getActive().getSheetByName('Recipients');s.getRange(1,4).setValue('Draft ID');s.getDataRange().getValues().slice(1).forEach(([name,email,topic,id],i)=>{if(!name||id)return;const d=GmailApp.createDraft(email,'Regarding '+topic,`Hi ${name},\nI am writing about ${topic}.\nThank you.`);s.getRange(i+2,4).setValue(d.getId());});
}


