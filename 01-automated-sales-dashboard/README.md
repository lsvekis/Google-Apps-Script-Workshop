# 01 — Automated Sales Dashboard

## What it does
Aggregate revenue by region

## Benefits and uses
Small shops, course sales and department reporting.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `buildDashboard`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 01: Automated Sales Dashboard. Input tab Sales, exact headers: Date, Region, Product, Units, Unit price. Create buildDashboard() that reads Sales, converts numeric cells, calculates units × price, and replaces a Dashboard tab with regional totals and grand total. Add a column chart and a menu. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: East 160; West 100; total 260. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point buildDashboard and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/01-automated-sales-dashboard. Base version limitations: No date filter or product breakdown yet.

## Expected outcome
East 160; West 100; total 260.

## Code to review
getValues(); Map or reduce(); setValues(); newChart()

## Exercise
Change East Course units from 3 to 4; total becomes 300.

## Extension prompt
Update the existing app without removing working features. Add product breakdown and date filters; test a blank row. Return complete updated files, explain changes and give regression tests.
Automation option: Refresh daily after importing transactions; use an explicit spreadsheet ID in scheduled code. Keep this separate from the baseline exercise.

## Limitations
No date filter or product breakdown yet.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
