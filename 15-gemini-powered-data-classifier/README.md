# 15 — Gemini-Powered Data Classifier

## What it does
Classify text into structured categories

## Benefits and uses
Course evaluations, customer comments and ticket routing.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `classifyFeedback`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 15: Gemini-Powered Data Classifier. Input tab Feedback, exact headers: ID, Feedback. Create classifyFeedback() using shared Gemini helper; request JSON array with id and category from Praise, Bug, Feature; validate IDs and allowed categories before writing Results. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Expected categories Praise, Bug, Feature; AI output may vary. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point classifyFeedback and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/15-gemini-powered-data-classifier. Base version limitations: AI may misclassify; schema checks do not verify meaning. Configure your own GEMINI_API_KEY and GEMINI_MODEL in the copied bound project; never assume credentials transfer.

## Expected outcome
Expected categories Praise, Bug, Feature; AI output may vary.

## Code to review
callGemini(); JSON.parse(); enum validation; ID matching

## Exercise
Add ID 4 with a clear bug report; expect four IDs and Bug for ID 4 after review.

## Extension prompt
Update the existing app without removing working features. Add confidence rationale and manual review for uncertain results. Return complete updated files, explain changes and give regression tests.
Automation option: Process only new IDs in small scheduled batches; retain a review queue. Keep this separate from the baseline exercise.

## Limitations
AI may misclassify; schema checks do not verify meaning.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
