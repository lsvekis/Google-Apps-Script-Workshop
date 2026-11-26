# 16 — AI Spreadsheet Insights Generator

## What it does
Turn metrics into grounded insights

## Benefits and uses
Monthly budgets, project metrics and sales reviews.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `generateInsights`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 16: AI Spreadsheet Insights Generator. Input tab Metrics, exact headers: Month, Revenue, Costs. Create generateInsights() that computes profit in JavaScript then passes data and computed totals to Gemini; request three observations and two actions, no invented facts; write response to Insights. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Profit 300, 400, 50; total 750; November decline identified. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point generateInsights and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/16-ai-spreadsheet-insights-generator. Base version limitations: AI commentary can be wrong; calculated profits are authoritative. Configure your own GEMINI_API_KEY and GEMINI_MODEL in the copied bound project; never assume credentials transfer.

## Expected outcome
Profit 300, 400, 50; total 750; November decline identified.

## Code to review
reduce(); JSON.stringify(); callGemini(); setValue()

## Exercise
Change Nov cost to 800; profit becomes 100 and total 800.

## Extension prompt
Update the existing app without removing working features. Add comparison periods and validate every cited numeric claim. Return complete updated files, explain changes and give regression tests.
Automation option: Refresh scheduled commentary after metric updates; avoid sending unchanged data repeatedly. Keep this separate from the baseline exercise.

## Limitations
AI commentary can be wrong; calculated profits are authoritative.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
