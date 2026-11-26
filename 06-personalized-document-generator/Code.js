// Personalized Document Generator
// Entry point: generateLetters; source data stays intact unless explicitly noted.
function onOpen(){SpreadsheetApp.getUi().createMenu("Workshop").addItem("Run application","generateLetters").addItem("Check permissions","checkPermissions").addToUi();}
function generateLetters() {
  const ss = SpreadsheetApp.getActiveSpreadsheet(), ui = SpreadsheetApp.getUi();
  try {
    const people = ss.getSheetByName('People');
    if (!people) throw new Error('Missing People sheet.');
    const target = folder(), template = file('Letter Template', target);
    const rows = people.getDataRange().getDisplayValues().slice(1).filter(r => r[0].trim());
    if (!rows.length) { ui.alert('No people found.'); return; }
    const results = []; let success = 0, failed = 0;
    rows.forEach(([name, program, date]) => {
      let copy;
      try {
        copy = template.makeCopy('Welcome ' + name, target);
        const doc = DocumentApp.openById(copy.getId());
        const body = doc.getBody();
        Object.entries({NAME:name, PROGRAM:program || '', DATE:date || ''}).forEach(([key,value]) => {
          body.replaceText('\\{\\{' + key + '\\}\\}', value);
        });
        doc.saveAndClose();
        results.push([name, copy.getUrl(), 'Success']); success++;
      } catch (e) { results.push([name, copy ? copy.getUrl() : '', 'Error: ' + e.message]); failed++; }
    });
    output('Generated', ['Name','URL','Status'], results);
    ui.alert('Documents created: ' + success + '\nFailed: ' + failed + '\nSee Generated sheet.');
  } catch (e) { console.error(e); ui.alert('Application error: ' + e.message); }
}
function output(name,headers,rows) { const ss=SpreadsheetApp.getActive(); const s=ss.getSheetByName(name)||ss.insertSheet(name); s.clearContents(); s.getRange(1,1,1,headers.length).setValues([headers]).setFontWeight('bold'); if(rows.length) s.getRange(2,1,rows.length,headers.length).setValues(rows.map(r=>r.map(v=>typeof v==='string' && /^[=+@-]/.test(v)?"'"+v:v))); s.getRange(1,1,1,headers.length).setBackground("#1a73e8").setFontColor("#ffffff"); s.autoResizeColumns(1,headers.length); s.setFrozenRows(1); return s; }
// Resolve the actual parent of this spreadsheet, never a stale copied ID.
function folder() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const info = ss.getSheetByName('Workshop Info');
  if (!info) throw new Error('Missing Workshop Info sheet.');
  const parents = DriveApp.getFileById(ss.getId()).getParents();
  if (!parents.hasNext()) throw new Error('Move this spreadsheet into your own lesson folder first.');
  const actual = parents.next();
  if (parents.hasNext()) throw new Error('Ambiguous parent folder. Move into one lesson folder.');
  const value = info.getRange('B2').getDisplayValue().trim();
  const match = value.match(/(?:\/folders\/)([-\w]+)|^([-\w]+)$/);
  const id = match && (match[1] || match[2]);
  // Require explicit confirmation when copied into a different folder.
  if (id !== actual.getId()) throw new Error('Copied spreadsheet detected. Move it and all required sample files into your own dedicated lesson folder, then set Workshop Info!B2 to this folder ID or URL: ' + actual.getUrl());
  if (actual.getId() === DriveApp.getRootFolder().getId()) throw new Error('Use a dedicated lesson folder, not My Drive root.');
  return actual;
}
function checkPermissions() {
  const ui = SpreadsheetApp.getUi();
  try {
    const target = folder();
    const template = file("Letter Template", target);
    DocumentApp.openById(template.getId());
    ui.alert('Folder access passed: ' + target.getName() + '\n' + target.getUrl() + '\nWrite access is checked when the application runs.');
  } catch (e) { ui.alert('Access check failed: ' + e.message); }
}
function file(name, target) {
  const files = (target || folder()).getFilesByName(name);
  const matches = [];
  while (files.hasNext()) { const f = files.next(); if (f.getMimeType() === MimeType.GOOGLE_DOCS) matches.push(f); }
  if (matches.length !== 1) throw new Error('Expected exactly one Google Docs template named ' + name + ' in your lesson folder. Found ' + matches.length);
  return matches[0];
}
