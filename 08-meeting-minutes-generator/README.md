# 08 — Meeting Minutes Generator

## What it does
Convert structured notes into readable minutes

## Benefits and uses
Team meetings, clubs and project reviews.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `generateMinutes`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 08: Meeting Minutes Generator. Input tab Meeting, exact headers: Speaker, Note, Owner, Due. Create generateMinutes() that builds a Doc with all notes and an action-item table containing only rows with an owner; move Doc into lesson folder and log link. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Three notes and two action items. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point generateMinutes and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/08-meeting-minutes-generator. Base version limitations: Creates a new document each run; no AI summarization. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access. Never require a manually configured folder ID. Keep required native sample Docs beside the spreadsheet; reject My Drive root.

## Expected outcome
Three notes and two action items.

## Code to review
appendParagraph(); setHeading(); appendTable(); moveTo()

## Exercise
Assign Sam an owner and due date; expect three action rows.

## Extension prompt
Update the existing app without removing working features. Add overdue flags and an agenda section. Return complete updated files, explain changes and give regression tests.
Automation option: Generate after a meeting is marked complete; store a report ID. Keep this separate from the baseline exercise. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access.

## Limitations
Creates a new document each run; no AI summarization.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
