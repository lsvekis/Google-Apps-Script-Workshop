# 16 — AI Spreadsheet Insights Generator

## What it does
Turn metrics into grounded insights

## Benefits and uses
Management reporting

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 16: AI Spreadsheet Insights Generator. Input tab Metrics, exact headers: Month, Revenue, Costs. Create generateInsights() that computes profit in JavaScript then passes data and computed totals to Gemini; request three observations and two actions, no invented facts; write response to Insights. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Profit 300, 400, 50; total 750; November decline identified. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run generateInsights, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Profit 300, 400, 50; total 750; November decline identified.

## Code to review
reduce(); JSON.stringify(); callGemini(); setValue()

## Extension prompt
Update the existing app without removing working features. Add comparison periods and validate every cited numeric claim. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
