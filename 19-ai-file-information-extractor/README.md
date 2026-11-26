# 19 — AI File Information Extractor

## What it does
Extract structured fields from documents

## Benefits and uses
Training requests, applications and expense intake.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `extractFiles`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 19: AI File Information Extractor. Input tab Config, exact headers: Setting, Value. Create extractFiles() for files named Intake A and Intake B; read Google Docs text, ask Gemini for name, request, amount (number or null), validate schema, write Results with source URL. Never infer missing values. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: A: Alex, Training, 250; B: Jamie, Equipment, null. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point extractFiles and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/19-ai-file-information-extractor. Base version limitations: Only named Google Docs; missing amounts should be blank, not guessed. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access. Configure your own GEMINI_API_KEY and GEMINI_MODEL in the copied bound project; never assume credentials transfer. Never require a manually configured folder ID. Keep required native sample Docs beside the spreadsheet; reject My Drive root.

## Expected outcome
A: Alex, Training, 250; B: Jamie, Equipment, blank amount (AI null becomes blank).

## Code to review
getFilesByName(); getText(); callGemini(); schema checks

## Exercise
Add Amount: 100 to Intake B; verify output against source.

## Extension prompt
Update the existing app without removing working features. Add evidence excerpts and a review status. Return complete updated files, explain changes and give regression tests.
Automation option: Process changed sample documents only and maintain source links. Keep this separate from the baseline exercise. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access.

## Limitations
Only named Google Docs; missing amounts should be blank, not guessed.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
