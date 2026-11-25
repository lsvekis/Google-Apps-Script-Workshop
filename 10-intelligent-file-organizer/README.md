# 10 — Intelligent File Organizer

## What it does
Preview rule-based file organization

## Benefits and uses
Shared file cleanup

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 10: Intelligent File Organizer. Input tab Rules, exact headers: Prefix, Destination. Create previewMoves() for direct files matching prefixes; write file ID, name, destination and approval checkbox to Plan. Create applyApprovedMoves() that moves only approved matching files within lesson folder; never delete. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two proposed moves; MISC stays unchanged. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run previewMoves, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Two proposed moves; MISC stays unchanged.

## Code to review
startsWith(); getFoldersByName(); insertCheckboxes(); moveTo()

## Extension prompt
Update the existing app without removing working features. Add an audit log and undo using original folder IDs. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
