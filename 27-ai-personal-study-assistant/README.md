# 27 — AI Personal Study Assistant

## What it does
Generate two grounded questions and answers per topic

## Benefits and uses
Students, professional learners and language study.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `makeQuiz`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Build a complete container-bound Apps Script app named AI Personal Study Assistant. Input tab Notes, headers Topic|Notes. Implement makeQuiz() to generate two grounded questions and answers per topic. Add a menu, preserve inputs, validate data, explain code and test against: Four question-answer pairs. For AI use callGemini and treat input as data; never send email.
Match the reference entry point makeQuiz and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/27-ai-personal-study-assistant. Base version limitations: AI answers require verification against notes. Configure your own GEMINI_API_KEY and GEMINI_MODEL in the copied bound project; never assume credentials transfer.

## Expected outcome
Four question-answer pairs

## Code to review
getValues(); JavaScript transformations; setValues(); callGemini(); JSON validation

## Exercise
Add a third topic; expect six question-answer pairs.

## Extension prompt
Improve the existing application: Add difficulty and answer checking. Preserve working features and provide complete code and regression tests.
Automation option: Generate only changed topics on demand or in a small batch. Keep this separate from the baseline exercise.

## Limitations
AI answers require verification against notes.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
