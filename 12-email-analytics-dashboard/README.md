# 12 — Email Analytics Dashboard

## What it does
Summarize inbox activity safely

## Benefits and uses
Support workload analysis

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 12: Email Analytics Dashboard. Input tab Messages, exact headers: Sender, Subject, Date, Unread. Create analyzeMessages() using sample rows by default; count messages and unread by sender. Add optional separate live function using GmailApp.search with a user-entered query and maximum 10 threads; do not write bodies. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Alex 2 messages/1 unread; Jamie 1/1. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run analyzeMessages, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Alex 2 messages/1 unread; Jamie 1/1.

## Code to review
GmailApp.search(); getMessages(); isUnread(); Map

## Extension prompt
Update the existing app without removing working features. Add date grouping and chart; distinguish threads from messages. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
