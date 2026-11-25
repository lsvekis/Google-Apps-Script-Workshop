# 11 — Personalized Gmail Draft Builder

## What it does
Prepare personalized messages for review

## Benefits and uses
Outreach and onboarding

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 11: Personalized Gmail Draft Builder. Input tab Recipients, exact headers: Name, Email, Topic. Create buildDrafts() that creates Gmail drafts with personalized subject and body, logs draft IDs and skips rows with existing IDs. Never send; use fictional addresses only for draft practice. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two drafts; no sent messages. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run buildDrafts, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Two drafts; no sent messages.

## Code to review
GmailApp.createDraft(); getId(); template literals

## Extension prompt
Update the existing app without removing working features. Add preview-only mode and editable message templates. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
