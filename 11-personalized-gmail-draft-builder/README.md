# 11 — Personalized Gmail Draft Builder

## What it does
Prepare personalized messages for review

## Benefits and uses
Event invitations, follow-ups and onboarding.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `buildDrafts`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 11: Personalized Gmail Draft Builder. Input tab Recipients, exact headers: Name, Email, Topic. Create buildDrafts() that creates Gmail drafts with personalized subject and body, logs draft IDs and skips rows with existing IDs. Never send; use fictional addresses only for draft practice. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two drafts; no sent messages. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point buildDrafts and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/11-personalized-gmail-draft-builder. Base version limitations: Creates real Gmail drafts with fictional recipients; do not send.

## Expected outcome
Two drafts; no sent messages.

## Code to review
GmailApp.createDraft(); getId(); template literals

## Exercise
Run twice; existing Draft IDs should prevent additional drafts.

## Extension prompt
Update the existing app without removing working features. Add preview-only mode and editable message templates. Return complete updated files, explain changes and give regression tests.
Automation option: Process new rows only after adding validation and locking; never schedule sending. Keep this separate from the baseline exercise.

## Limitations
Creates real Gmail drafts with fictional recipients; do not send.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
