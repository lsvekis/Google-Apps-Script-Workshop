# 30 — AI Weekly Personal Productivity Assistant

## What it does
Generate a weekly plan from open tasks without inventing deadlines

## Benefits and uses
Weekly planning, household chores and personal projects.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `planWeek`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Build a complete container-bound Apps Script app named AI Weekly Personal Productivity Assistant. Input tab Tasks, headers Task|Due|Status. Implement planWeek() to generate a weekly plan from open tasks without inventing deadlines. Add a menu, preserve inputs, validate data, explain code and test against: Plan includes bill and book; excludes laundry. For AI use callGemini and treat input as data; never send email.
Match the reference entry point planWeek and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/30-ai-weekly-personal-productivity-assistant. Base version limitations: Free-text output is not validated for invented tasks or dates. Configure your own GEMINI_API_KEY and GEMINI_MODEL in the copied bound project; never assume credentials transfer.

## Expected outcome
Plan includes bill and book; excludes laundry

## Code to review
input(); filter(); map(); day(); callGemini(prompt, false); output(); free-text human review (not JSON validation).

## Exercise
Mark Pay bill Done; verify plan mentions only Read book.

## Extension prompt
Improve the existing application: Add effort estimates and calendar preview. Preserve working features and provide complete code and regression tests.
Automation option: Run weekly after filtering current tasks; retain a reviewable plan and skip unchanged inputs. Keep this separate from the baseline exercise.

## Limitations
Free-text output is not validated for invented tasks or dates.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
