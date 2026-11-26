# 18 — AI Gmail Smart Reply Assistant

## What it does
Generate suggested replies for review

## Benefits and uses
Support replies, scheduling and class communications.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `suggestReplies`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 18: AI Gmail Smart Reply Assistant. Input tab Messages, exact headers: ID, Sender, Subject, Body. Create suggestReplies() from sample rows; ask Gemini for concise replies without promising dates or attachments; write Suggestions. Separate createApprovedDrafts() creates drafts only for checked rows, logs IDs and never sends. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two suggestions; zero drafts until approved. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point suggestReplies and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/18-ai-gmail-smart-reply-assistant. Base version limitations: Reads sample Messages, not live Gmail; real drafts are created only by approval action. Configure your own GEMINI_API_KEY and GEMINI_MODEL in the copied bound project; never assume credentials transfer.

## Expected outcome
Two suggestions; zero drafts until approved.

## Code to review
callGemini(); insertCheckboxes(); GmailApp.createDraft()

## Exercise
Generate suggestions, approve one, create drafts twice; expect one draft for that ID.

## Extension prompt
Update the existing app without removing working features. Add tone selection and editable preview. Return complete updated files, explain changes and give regression tests.
Automation option: Schedule suggestion generation only; preserve manual approval for drafts. Keep this separate from the baseline exercise.

## Limitations
Reads sample Messages, not live Gmail; real drafts are created only by approval action.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
