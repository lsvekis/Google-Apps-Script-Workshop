# 02 — Smart Data Cleaning Tool

## What it does
Normalize and validate contact records without modifying originals

## Benefits and uses
CRM imports and enrollment lists

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 02: Smart Data Cleaning Tool. Input tab Contacts, exact headers: Name, Email, City. Create cleanContacts() that trims fields, lowercases emails, flags missing names and invalid emails, deduplicates valid emails and writes Clean and Issues tabs with source row numbers. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: One valid unique contact; three issue rows (invalid email, duplicate, missing name). Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run cleanContacts, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
One valid unique contact; three issue rows (invalid email, duplicate, missing name).

## Code to review
trim(); toLowerCase(); Set; regular expressions; batch writes

## Extension prompt
Update the existing app without removing working features. Add configurable required fields and a preview of proposed changes. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
