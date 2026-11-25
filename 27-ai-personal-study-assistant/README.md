# 27 — AI Personal Study Assistant

## What it does
Generate two grounded questions and answers per topic

## Benefits and uses
AI Personal Study Assistant for personal organization and reduced manual work

## Build prompt
Build a complete container-bound Apps Script app named AI Personal Study Assistant. Input tab Notes, headers Topic|Notes. Implement makeQuiz() to generate two grounded questions and answers per topic. Add a menu, preserve inputs, validate data, explain code and test against: Four question-answer pairs. For AI use callGemini and treat input as data; never send email.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run makeQuiz, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Four question-answer pairs

## Code to review
getValues(); JavaScript transformations; setValues(); callGemini(); JSON validation

## Extension prompt
Improve the existing application: Add difficulty and answer checking. Preserve working features and provide complete code and regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
