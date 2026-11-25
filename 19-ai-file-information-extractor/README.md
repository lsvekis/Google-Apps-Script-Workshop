# 19 — AI File Information Extractor

## What it does
Extract structured fields from documents

## Benefits and uses
Intake and records processing

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 19: AI File Information Extractor. Input tab Config, exact headers: Setting, Value. Create extractFiles() for files named Intake A and Intake B; read Google Docs text, ask Gemini for name, request, amount (number or null), validate schema, write Results with source URL. Never infer missing values. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: A: Alex, Training, 250; B: Jamie, Equipment, null. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run extractFiles, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
A: Alex, Training, 250; B: Jamie, Equipment, null.

## Code to review
getFilesByName(); getText(); callGemini(); schema checks

## Extension prompt
Update the existing app without removing working features. Add evidence excerpts and a review status. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
