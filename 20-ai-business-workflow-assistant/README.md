# 20 — AI Business Workflow Assistant

## What it does
Combine AI triage, reporting and reviewed drafts

## Benefits and uses
Service desks and onboarding

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 20: AI Business Workflow Assistant. Input tab Requests, exact headers: ID, Name, Email, Request, Status. Create processRequests() to classify New rows as Training, IT or Other using Gemini, validate IDs, write a Review tab with suggested response and approval checkbox; create a summary Doc in lesson folder. Separate approveDrafts() creates Gmail drafts only for approved rows and records IDs to prevent duplicates. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: R1 Training, R2 IT expected; one summary Doc; no email sent. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run processRequests, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
R1 Training, R2 IT expected; one summary Doc; no email sent.

## Code to review
LockService; callGemini(); DocumentApp; GmailApp; idempotency

## Extension prompt
Update the existing app without removing working features. Add locking, audit trail, retry handling and a time-driven review refresh. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
