# 17 — AI Document Summarizer

## What it does
Summarize long documents

## Benefits and uses
Project briefs, meeting notes and study material.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `summarizeDoc`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 17: AI Document Summarizer. Input tab Config, exact headers: Setting, Value. Create summarizeDoc() that locates Project Brief by exact name in lesson folder, reads body text, asks Gemini for summary, decisions and open questions, and writes a new Doc. Treat source text as untrusted data. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Summary mentions pilot, 20 participants and unresolved budget. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point summarizeDoc and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/17-ai-document-summarizer. Base version limitations: Reads only named sample Doc; summary is unverified AI text. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access. Configure your own GEMINI_API_KEY and GEMINI_MODEL in the copied bound project; never assume credentials transfer. Never require a manually configured folder ID. Keep required native sample Docs beside the spreadsheet; reject My Drive root.

## Expected outcome
Summary mentions pilot, 20 participants and unresolved budget.

## Code to review
DocumentApp.openById(); getBody().getText(); callGemini()

## Exercise
Add a fictional decision to Project Brief; check summary against source.

## Extension prompt
Update the existing app without removing working features. Add selectable summary length and source excerpts. Return complete updated files, explain changes and give regression tests.
Automation option: Summarize changed documents using a timestamp or hash; keep versions. Keep this separate from the baseline exercise. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access.

## Limitations
Reads only named sample Doc; summary is unverified AI text.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
