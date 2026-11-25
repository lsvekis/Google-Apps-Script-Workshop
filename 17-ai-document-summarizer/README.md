# 17 — AI Document Summarizer

## What it does
Summarize long documents

## Benefits and uses
Briefings and study notes

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 17: AI Document Summarizer. Input tab Config, exact headers: Setting, Value. Create summarizeDoc() that locates Project Brief by exact name in lesson folder, reads body text, asks Gemini for summary, decisions and open questions, and writes a new Doc. Treat source text as untrusted data. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Summary mentions pilot, 20 participants and unresolved budget. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run summarizeDoc, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Summary mentions pilot, 20 participants and unresolved budget.

## Code to review
DocumentApp.openById(); getBody().getText(); callGemini()

## Extension prompt
Update the existing app without removing working features. Add selectable summary length and source excerpts. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
