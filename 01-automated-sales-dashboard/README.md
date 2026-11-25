# 01 — Automated Sales Dashboard

## What it does
Aggregate revenue by region

## Benefits and uses
Sales reporting and budget tracking

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 01: Automated Sales Dashboard. Input tab Sales, exact headers: Date, Region, Product, Units, Unit price. Create buildDashboard() that reads Sales, converts numeric cells, calculates units × price, and replaces a Dashboard tab with regional totals and grand total. Add a column chart and a menu. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: East 160; West 100; total 260. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run buildDashboard, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
East 160; West 100; total 260.

## Code to review
getValues(); Map or reduce(); setValues(); newChart()

## Extension prompt
Update the existing app without removing working features. Add product breakdown and date filters; test a blank row. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
