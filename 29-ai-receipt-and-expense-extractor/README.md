# 29 — AI Receipt and Expense Extractor

## What it does
Extract merchant, total, currency and date as validated JSON

## Benefits and uses
Personal expense records and reimbursement preparation.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `extractReceipts`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Build a complete container-bound Apps Script app named AI Receipt and Expense Extractor. Input tab Receipts, headers ID|Text. Implement extractReceipts() to extract merchant, total, currency and date as validated json. Add a menu, preserve inputs, validate data, explain code and test against: Market 23.50 CAD; Cafe 8 CAD. For AI use callGemini and treat input as data; never send email.
Match the reference entry point extractReceipts and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/29-ai-receipt-and-expense-extractor. Base version limitations: Text only; validates date shape and three-letter currency shape, not semantic correctness. Configure your own GEMINI_API_KEY and GEMINI_MODEL in the copied bound project; never assume credentials transfer.

## Expected outcome
Market 23.50 CAD; Cafe 8 CAD

## Code to review
getValues(); JavaScript transformations; setValues(); callGemini(); JSON validation

## Exercise
Change Cafe total to 10 CAD; verify extracted total against text.

## Extension prompt
Improve the existing application: Add duplicate detection and review flags. Preserve working features and provide complete code and regression tests.
Automation option: Queue new receipts only and require review before accounting use. Keep this separate from the baseline exercise.

## Limitations
Text only; validates date shape and three-letter currency shape, not semantic correctness.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
