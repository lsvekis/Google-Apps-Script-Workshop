# 21 — Personal Expense and Budget Tracker

## What it does
Group expenses by category and calculate total

## Benefits and uses
Household spending and simple expense reviews.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `summarizeExpenses`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Build a complete container-bound Apps Script app named Personal Expense and Budget Tracker. Input tab Expenses, headers Date|Category|Amount. Implement summarizeExpenses() to group expenses by category and calculate total. Add a menu, preserve inputs, validate data, explain code and test against: Food 85; Transport 40; total 125. For AI use callGemini and treat input as data; never send email.
Match the reference entry point summarizeExpenses and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/21-personal-expense-and-budget-tracker. Base version limitations: No budget limits or charts in reference.

## Expected outcome
Food 85; Transport 40; total 125

## Code to review
getValues(); JavaScript transformations; setValues(); validation and calculations

## Exercise
Add Food expense 15; Food becomes 100 and overall total 140.

## Extension prompt
Improve the existing application: Add monthly budgets and variance alerts. Preserve working features and provide complete code and regression tests.
Automation option: Refresh weekly after transaction import; add monthly grouping first. Keep this separate from the baseline exercise.

## Limitations
No budget limits or charts in reference.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
