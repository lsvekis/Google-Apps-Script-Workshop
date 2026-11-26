# 13 — Automated Task Management System

## What it does
Prioritize tasks by deadline

## Benefits and uses
Team deadlines, assignments and personal chores.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `updateTasks`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 13: Automated Task Management System. Input tab Tasks, exact headers: Task, Owner, Due, Status. Create updateTasks() with a fixed demo reference date 2026-11-25; compare date-only values, write Overdue/Open/Done to a Priority column; optional daily trigger uses current date in spreadsheet timezone. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Slides Overdue; Budget Open; Review Done. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point updateTasks and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/13-automated-task-management-system. Base version limitations: Workshop run uses fixed date; background access must be tested. For scheduled execution, save the current spreadsheet ID when installing the trigger and use openById when no active spreadsheet exists. Reinstall in each copy.

## Expected outcome
Slides Overdue; Budget Open; Review Done.

## Code to review
Utilities.formatDate(); date comparison; setValues(); triggers

## Exercise
Mark Slides Done; its priority becomes Done.

## Extension prompt
Update the existing app without removing working features. Add a dashboard and configurable reference date. Return complete updated files, explain changes and give regression tests.
Automation option: Existing Install daily trigger invokes updateToday using current date. Keep this separate from the baseline exercise.

## Limitations
Workshop run uses fixed date; background access must be tested.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
