# 28 — Household Maintenance Planner

## What it does
Calculate next due date and status as of 2026-11-25

## Benefits and uses
Air filters, inspections and seasonal chores.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `planMaintenance`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Build a complete container-bound Apps Script app named Household Maintenance Planner. Input tab Maintenance, headers Task|Last done|Interval days. Implement planMaintenance() to calculate next due date and status as of 2026-11-25. Add a menu, preserve inputs, validate data, explain code and test against: Filter overdue; smoke alarm test upcoming. For AI use callGemini and treat input as data; never send email.
Match the reference entry point planMaintenance and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/28-household-maintenance-planner. Base version limitations: Fixed demonstration date; no reminder action.

## Expected outcome
Filter overdue; smoke alarm test upcoming

## Code to review
getValues(); JavaScript transformations; setValues(); validation and calculations

## Exercise
Set Filter last done to 2026-11-20; expect Upcoming.

## Extension prompt
Improve the existing application: Add completion history and reminders. Preserve working features and provide complete code and regression tests.
Automation option: Use a rolling current date and daily schedule; add completion history. Keep this separate from the baseline exercise.

## Limitations
Fixed demonstration date; no reminder action.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
