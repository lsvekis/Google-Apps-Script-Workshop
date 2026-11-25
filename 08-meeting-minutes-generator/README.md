# 08 — Meeting Minutes Generator

## What it does
Convert structured notes into readable minutes

## Benefits and uses
Project meetings and committees

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 08: Meeting Minutes Generator. Input tab Meeting, exact headers: Speaker, Note, Owner, Due. Create generateMinutes() that builds a Doc with all notes and an action-item table containing only rows with an owner; move Doc into lesson folder and log link. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Three notes and two action items. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run generateMinutes, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Three notes and two action items.

## Code to review
appendParagraph(); setHeading(); appendTable(); moveTo()

## Extension prompt
Update the existing app without removing working features. Add overdue flags and an agenda section. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
