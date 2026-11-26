# 12 — Email Analytics Dashboard

## What it does
Summarize inbox activity safely

## Benefits and uses
Support triage and personal email workload.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `analyzeMessages`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 12: Email Analytics Dashboard. Input tab Messages, exact headers: Sender, Subject, Date, Unread. Create analyzeMessages() using sample rows by default; count messages and unread by sender. Add optional separate live function using GmailApp.search with a user-entered query and maximum 10 threads; do not write bodies. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Alex 2 messages/1 unread; Jamie 1/1. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point analyzeMessages and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/12-email-analytics-dashboard. Base version limitations: Live inbox option accesses real messages; default uses synthetic rows.

## Expected outcome
Alex 2 messages/1 unread; Jamie 1/1.

## Code to review
GmailApp.search(); getMessages(); isUnread(); Map

## Exercise
Change first sample unread value to FALSE; Alex unread count becomes zero.

## Extension prompt
Update the existing app without removing working features. Add date grouping and chart; distinguish threads from messages. Return complete updated files, explain changes and give regression tests.
Automation option: Schedule a sample or explicitly scoped query version without UI prompts. Keep this separate from the baseline exercise.

## Limitations
Live inbox option accesses real messages; default uses synthetic rows.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
