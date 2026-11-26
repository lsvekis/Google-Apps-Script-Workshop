# 20 — AI Business Workflow Assistant

## What it does
Combine AI triage, reporting and reviewed drafts

## Benefits and uses
Internal service desks, training and IT intake.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `processRequests`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 20: AI Business Workflow Assistant. Input tab Requests, exact headers: ID, Name, Email, Request, Status. Create processRequests() to classify New rows as Training, IT or Other using Gemini, validate IDs, write a Review tab with suggested response and approval checkbox; create a summary Doc in lesson folder. Separate approveDrafts() creates Gmail drafts only for approved rows and records IDs to prevent duplicates. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: R1 Training, R2 IT expected; one summary Doc; no email sent. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point processRequests and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/20-ai-business-workflow-assistant. Base version limitations: Report documents can accumulate; AI classification and reply require review. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access. Configure your own GEMINI_API_KEY and GEMINI_MODEL in the copied bound project; never assume credentials transfer. Never require a manually configured folder ID. Keep required native sample Docs beside the spreadsheet; reject My Drive root.

## Expected outcome
R1 Training, R2 IT expected; one summary Doc; no email sent.

## Code to review
LockService; callGemini(); DocumentApp; GmailApp; idempotency

## Exercise
Add R3 with New status; expect a new review row and report without losing existing approvals.

## Extension prompt
Update the existing app without removing working features. Add locking, audit trail, retry handling and a time-driven review refresh. Return complete updated files, explain changes and give regression tests.
Automation option: Schedule classification of new requests; create drafts only on explicit approval. Keep this separate from the baseline exercise. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access.

## Limitations
Report documents can accumulate; AI classification and reply require review.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
