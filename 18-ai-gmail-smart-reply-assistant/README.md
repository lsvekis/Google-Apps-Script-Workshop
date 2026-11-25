# 18 — AI Gmail Smart Reply Assistant

## What it does
Generate suggested replies for review

## Benefits and uses
Support and administrative email

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 18: AI Gmail Smart Reply Assistant. Input tab Messages, exact headers: ID, Sender, Subject, Body. Create suggestReplies() from sample rows; ask Gemini for concise replies without promising dates or attachments; write Suggestions. Separate createApprovedDrafts() creates drafts only for checked rows, logs IDs and never sends. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two suggestions; zero drafts until approved. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run suggestReplies, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Two suggestions; zero drafts until approved.

## Code to review
callGemini(); insertCheckboxes(); GmailApp.createDraft()

## Extension prompt
Update the existing app without removing working features. Add tone selection and editable preview. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
