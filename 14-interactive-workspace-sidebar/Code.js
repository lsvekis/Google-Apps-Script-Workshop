// Interactive Workspace Sidebar
// Entry point: showSidebar; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","showSidebar").addToUi();}
function showSidebar(){
// HTML Service renders a form inside the spreadsheet.
SpreadsheetApp.getUi().showSidebar(HtmlService.createHtmlOutputFromFile('Sidebar').setTitle('New request'));
}

// Server validates submitted values before appending a record.
function addRequest(request,category){request=String(request).trim();if(!request||!['IT','Training','Other'].includes(category))throw Error('Invalid request');SpreadsheetApp.getActive().getSheetByName('Requests').appendRow([/^[=+@-]/.test(request)?"'"+request:request,category,'Open']);return 'Saved';}
