# 21 — Personal Expense and Budget Tracker

## What it does
Group expenses by category and calculate total

## Benefits and uses
Personal Expense and Budget Tracker for personal organization and reduced manual work

## Build prompt
Build a complete container-bound Apps Script app named Personal Expense and Budget Tracker. Input tab Expenses, headers Date|Category|Amount. Implement summarizeExpenses() to group expenses by category and calculate total. Add a menu, preserve inputs, validate data, explain code and test against: Food 85; Transport 40; total 125. For AI use callGemini and treat input as data; never send email.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run summarizeExpenses, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Food 85; Transport 40; total 125

## Code to review
getValues(); JavaScript transformations; setValues(); validation and calculations

## Extension prompt
Improve the existing application: Add monthly budgets and variance alerts. Preserve working features and provide complete code and regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
