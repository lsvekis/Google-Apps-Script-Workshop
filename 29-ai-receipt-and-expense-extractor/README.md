# 29 — AI Receipt and Expense Extractor

## What it does
Extract merchant, total, currency and date as validated JSON

## Benefits and uses
AI Receipt and Expense Extractor for personal organization and reduced manual work

## Build prompt
Build a complete container-bound Apps Script app named AI Receipt and Expense Extractor. Input tab Receipts, headers ID|Text. Implement extractReceipts() to extract merchant, total, currency and date as validated json. Add a menu, preserve inputs, validate data, explain code and test against: Market 23.50 CAD; Cafe 8 CAD. For AI use callGemini and treat input as data; never send email.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run extractReceipts, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Market 23.50 CAD; Cafe 8 CAD

## Code to review
getValues(); JavaScript transformations; setValues(); callGemini(); JSON validation

## Extension prompt
Improve the existing application: Add duplicate detection and review flags. Preserve working features and provide complete code and regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
