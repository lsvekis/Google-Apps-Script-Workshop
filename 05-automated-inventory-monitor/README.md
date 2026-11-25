# 05 — Automated Inventory Monitor

## What it does
Detect low stock automatically

## Benefits and uses
Supplies and inventory monitoring

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 05: Automated Inventory Monitor. Input tab Inventory, exact headers: SKU, Item, Stock, Reorder level. Create checkInventory() that writes items with stock <= reorder level to Alerts; add menu and optional daily trigger installer that avoids duplicate triggers. No email sending. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: A01 and A03 appear in Alerts. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run checkInventory, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
A01 and A03 appear in Alerts.

## Code to review
filter(); numeric comparisons; ScriptApp.newTrigger(); getProjectTriggers()

## Extension prompt
Update the existing app without removing working features. Add an alert history and notify only when status changes, using drafts. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
