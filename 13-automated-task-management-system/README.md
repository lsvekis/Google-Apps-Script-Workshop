# 13 — Automated Task Management System

## What it does
Prioritize tasks by deadline

## Benefits and uses
Project coordination

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 13: Automated Task Management System. Input tab Tasks, exact headers: Task, Owner, Due, Status. Create updateTasks() with a fixed demo reference date 2026-11-25; compare date-only values, write Overdue/Open/Done to a Priority column; optional daily trigger uses current date in spreadsheet timezone. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Slides Overdue; Budget Open; Review Done. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run updateTasks, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Slides Overdue; Budget Open; Review Done.

## Code to review
Utilities.formatDate(); date comparison; setValues(); triggers

## Extension prompt
Update the existing app without removing working features. Add a dashboard and configurable reference date. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
