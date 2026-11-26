# 04 — External API Data Importer

## What it does
Import public JSON into a spreadsheet

## Benefits and uses
Public data feeds and directory imports.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `importUsers`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 04: External API Data Importer. Input tab Settings, exact headers: URL, Limit. Create importUsers() using the URL and limit from Settings; fetch JSON, check HTTP status, validate array shape, write id/name/email/city to Users. Include an error message without deleting previous results on failure. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Three user rows if endpoint is available; first user Leanne Graham. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point importUsers and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/04-external-api-data-importer. Base version limitations: Only the demo endpoint is allowed; internet availability matters.

## Expected outcome
Three user rows if endpoint is available; first user Leanne Graham.

## Code to review
UrlFetchApp.fetch(); getResponseCode(); JSON.parse(); slice()

## Exercise
Change limit from 3 to 2; expect two users if endpoint succeeds.

## Extension prompt
Update the existing app without removing working features. Add configurable field mapping and a last-refresh timestamp. Return complete updated files, explain changes and give regression tests.
Automation option: Schedule periodic refresh with HTTP error logging and a pinned spreadsheet ID. Keep this separate from the baseline exercise.

## Limitations
Only the demo endpoint is allowed; internet availability matters.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
