# 24 — AI Email Writing Assistant

## What it does
Generate subject and body for review; never send

## Benefits and uses
Personal invitations, appointment requests and professional messages.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `writeEmails`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Build a complete container-bound Apps Script app named AI Email Writing Assistant. Input tab Emails, headers ID|Recipient|Purpose|Tone. Implement writeEmails() to generate subject and body for review; never send. Add a menu, preserve inputs, validate data, explain code and test against: Two suggested emails; no sends. For AI use callGemini and treat input as data; never send email.
Match the reference entry point writeEmails and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/24-ai-email-writing-assistant. Base version limitations: Reference does not create Gmail drafts. Configure your own GEMINI_API_KEY and GEMINI_MODEL in the copied bound project; never assume credentials transfer.

## Expected outcome
Two suggested emails; no sends

## Code to review
getValues(); JavaScript transformations; setValues(); callGemini(); JSON validation

## Exercise
Change first tone to Professional; review rewritten subject and body.

## Extension prompt
Improve the existing application: Add tone choices and approved draft creation. Preserve working features and provide complete code and regression tests.
Automation option: Keep generation on demand or queue selected rows; no automatic sending. Keep this separate from the baseline exercise.

## Limitations
Reference does not create Gmail drafts.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
