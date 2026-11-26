# 09 — Google Drive File Explorer

## What it does
Inventory file metadata

## Benefits and uses
Project audits, shared folders and resource catalogs.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `listFiles`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 09: Google Drive File Explorer. Input tab Config, exact headers: Setting, Value. Create listFiles() that enumerates direct files in the lesson folder and writes name, MIME type, URL and last updated to File Inventory. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Includes Sample Brief and Sample Notes plus starter assets. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point listFiles and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/09-google-drive-file-explorer. Base version limitations: Only immediate folder files are listed, including workshop assets. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access. Never require a manually configured folder ID. Keep required native sample Docs beside the spreadsheet; reject My Drive root.

## Expected outcome
Sample Brief and Sample Notes plus all other immediate lesson folder files, including guide and spreadsheet.

## Code to review
DriveApp.getFolderById(); getFiles(); hasNext(); next()

## Exercise
Add a sample file to the lesson folder; rerun and find its row.

## Extension prompt
Update the existing app without removing working features. Add recursive traversal with a depth limit and folder path. Return complete updated files, explain changes and give regression tests.
Automation option: Refresh a folder inventory weekly using explicit folder and sheet IDs. Keep this separate from the baseline exercise. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access.

## Limitations
Only immediate folder files are listed, including workshop assets.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
