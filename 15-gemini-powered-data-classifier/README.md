# 15 — Gemini-Powered Data Classifier

## What it does
Classify text into structured categories

## Benefits and uses
Feedback triage

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 15: Gemini-Powered Data Classifier. Input tab Feedback, exact headers: ID, Feedback. Create classifyFeedback() using shared Gemini helper; request JSON array with id and category from Praise, Bug, Feature; validate IDs and allowed categories before writing Results. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Expected categories Praise, Bug, Feature; AI output may vary. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run classifyFeedback, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Expected categories Praise, Bug, Feature; AI output may vary.

## Code to review
callGemini(); JSON.parse(); enum validation; ID matching

## Extension prompt
Update the existing app without removing working features. Add confidence rationale and manual review for uncertain results. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
