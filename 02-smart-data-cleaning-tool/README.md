# 02 — Smart Data Cleaning Tool

## What it does
Normalize and validate contact records without modifying originals

## Benefits and uses
Volunteer lists, event registrations and customer records.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `cleanContacts`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 02: Smart Data Cleaning Tool. Input tab Contacts, exact headers: Name, Email, City. Create cleanContacts() that trims fields, lowercases emails, flags missing names and invalid emails, deduplicates valid emails and writes Clean and Issues tabs with source row numbers. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: One valid unique contact; three issue rows (invalid email, duplicate, missing name). Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point cleanContacts and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/02-smart-data-cleaning-tool. Base version limitations: Email regex checks shape only, not deliverability.

## Expected outcome
One valid unique contact; three issue rows (invalid email, duplicate, missing name).

## Code to review
trim(); toLowerCase(); Set; regular expressions; batch writes

## Exercise
Correct Bob's email to bob@example.com; expect two clean rows and two issues.

## Extension prompt
Update the existing app without removing working features. Add configurable required fields and a preview of proposed changes. Return complete updated files, explain changes and give regression tests.
Automation option: Run after a batch import; keep Issues for human review. Keep this separate from the baseline exercise.

## Limitations
Email regex checks shape only, not deliverability.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
