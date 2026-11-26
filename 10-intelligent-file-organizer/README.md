# 10 — Intelligent File Organizer

## What it does
Preview rule-based file organization

## Benefits and uses
Household records, finance and HR sample folders.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `previewMoves`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 10: Intelligent File Organizer. Input tab Rules, exact headers: Prefix, Destination. Create previewMoves() for direct files matching prefixes; write file ID, name, destination and approval checkbox to Plan. Create applyApprovedMoves() that moves only approved matching files within lesson folder; never delete. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two proposed moves; MISC stays unchanged. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point previewMoves and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/10-intelligent-file-organizer. Base version limitations: Preview reruns reset approvals; moves alter Drive location. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access. Never require a manually configured folder ID. Keep required native sample Docs beside the spreadsheet; reject My Drive root. Restrict moves and previews to the named sample Docs FIN-Budget, HR-Onboarding, MISC-Notes; retain approval and parent checks.

## Expected outcome
Two proposed moves; MISC stays unchanged.

## Code to review
startsWith(); getFoldersByName(); insertCheckboxes(); moveTo()

## Exercise
Preview, approve FIN-Budget only, then apply moves and verify Finance folder.

## Extension prompt
Update the existing app without removing working features. Add an audit log and undo using original folder IDs. Return complete updated files, explain changes and give regression tests.
Automation option: Schedule preview generation only; keep actual moves manual. Keep this separate from the baseline exercise. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access.

## Limitations
Preview reruns reset approvals; moves alter Drive location. Workshop moves are restricted to the three named sample Docs.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
