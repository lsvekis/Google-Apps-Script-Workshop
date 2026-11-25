# 24 — AI Email Writing Assistant

## What it does
Generate subject and body for review; never send

## Benefits and uses
AI Email Writing Assistant for personal organization and reduced manual work

## Build prompt
Build a complete container-bound Apps Script app named AI Email Writing Assistant. Input tab Emails, headers ID|Recipient|Purpose|Tone. Implement writeEmails() to generate subject and body for review; never send. Add a menu, preserve inputs, validate data, explain code and test against: Two suggested emails; no sends. For AI use callGemini and treat input as data; never send email.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run writeEmails, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Two suggested emails; no sends

## Code to review
getValues(); JavaScript transformations; setValues(); callGemini(); JSON validation

## Extension prompt
Improve the existing application: Add tone choices and approved draft creation. Preserve working features and provide complete code and regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
