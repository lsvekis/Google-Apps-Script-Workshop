# 14 — Interactive Workspace Sidebar

## What it does
Build a form inside Sheets

## Benefits and uses
Intake forms, help requests and simple trackers.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `showSidebar`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 14: Interactive Workspace Sidebar. Input tab Requests, exact headers: Request, Category, Status. Create Code.gs and Sidebar.html; onOpen menu opens sidebar; form collects request and category, validates on server and appends Open row; use success/failure handlers and disable submit while pending. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Submitting Test request / IT adds exactly one Open row. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point showSidebar and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/14-interactive-workspace-sidebar. Base version limitations: Existing Facilities sample is not an allowed new category; use IT, Training or Other.

## Expected outcome
Submitting Test request / IT adds exactly one Open row.

## Code to review
HtmlService.createHtmlOutputFromFile(); showSidebar(); google.script.run; appendRow()

## Exercise
Submit an empty request; expect rejection; submit Test request / IT; expect one row.

## Extension prompt
Update the existing app without removing working features. Add status filtering and refresh without closing sidebar. Return complete updated files, explain changes and give regression tests.
Automation option: Use a form-submit integration for unattended intake; sidebar itself needs user interaction. Keep this separate from the baseline exercise.

## Limitations
Existing Facilities sample is not an allowed new category; use IT, Training or Other.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
