# 04 — External API Data Importer

## What it does
Import public JSON into a spreadsheet

## Benefits and uses
Public datasets and service integrations

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 04: External API Data Importer. Input tab Settings, exact headers: URL, Limit. Create importUsers() using the URL and limit from Settings; fetch JSON, check HTTP status, validate array shape, write id/name/email/city to Users. Include an error message without deleting previous results on failure. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Three user rows if endpoint is available; first user Leanne Graham. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run importUsers, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Three user rows if endpoint is available; first user Leanne Graham.

## Code to review
UrlFetchApp.fetch(); getResponseCode(); JSON.parse(); slice()

## Extension prompt
Update the existing app without removing working features. Add configurable field mapping and a last-refresh timestamp. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
