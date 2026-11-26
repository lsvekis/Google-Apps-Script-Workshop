# 06 — Personalized Document Generator

## What it does
Generate personalized letters from a template

## Benefits and uses
Welcome letters, enrollment notices and certificates.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `generateLetters`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 06: Personalized Document Generator. Input tab People, exact headers: Name, Program, Date. Create generateLetters() that copies Letter Template from the lesson folder for each row, replaces {{NAME}}, {{PROGRAM}}, {{DATE}}, saves and writes output links. Use display values for dates. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two personalized Docs; template unchanged. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point generateLetters and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/06-personalized-document-generator. Base version limitations: Reruns create duplicate documents; do not schedule unchanged code. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access. Include Generated columns Name, URL, Status; isolate per-row errors and validate exactly one Google Docs template. Never require a manually configured folder ID. Keep required native sample Docs beside the spreadsheet; reject My Drive root.

## Expected outcome
Two personalized Docs; Generated contains Name, URL, Status; template unchanged.

## Code to review
DriveApp.getFileById(); makeCopy(); DocumentApp.openById(); replaceText()

## Exercise
Add a third person; expect three newly generated letters.

## Extension prompt
Update the existing app without removing working features. Add missing-field validation and skip already generated rows. Return complete updated files, explain changes and give regression tests.
Automation option: Add a generated-ID column and process only new rows before scheduling. Keep this separate from the baseline exercise. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access.

## Limitations
Reruns create duplicate documents; do not schedule unchanged code.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
