# 09 — Google Drive File Explorer

## What it does
Inventory file metadata

## Benefits and uses
Content audits and asset management

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 09: Google Drive File Explorer. Input tab Config, exact headers: Setting, Value. Create listFiles() that enumerates direct files in the lesson folder and writes name, MIME type, URL and last updated to File Inventory. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Includes Sample Brief and Sample Notes plus starter assets. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run listFiles, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Includes Sample Brief and Sample Notes plus starter assets.

## Code to review
DriveApp.getFolderById(); getFiles(); hasNext(); next()

## Extension prompt
Update the existing app without removing working features. Add recursive traversal with a depth limit and folder path. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
