# 06 — Personalized Document Generator

## What it does
Generate personalized letters from a template

## Benefits and uses
Certificates and onboarding

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 06: Personalized Document Generator. Input tab People, exact headers: Name, Program, Date. Create generateLetters() that copies Letter Template from the lesson folder for each row, replaces {{NAME}}, {{PROGRAM}}, {{DATE}}, saves and writes output links. Use display values for dates. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two personalized Docs; template unchanged. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run generateLetters, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Two personalized Docs; template unchanged.

## Code to review
DriveApp.getFileById(); makeCopy(); DocumentApp.openById(); replaceText()

## Extension prompt
Update the existing app without removing working features. Add missing-field validation and skip already generated rows. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
