# 05 — Automated Inventory Monitor

## What it does
Detect low stock automatically

## Benefits and uses
Office supplies, classroom materials and small inventory.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `checkInventory`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 05: Automated Inventory Monitor. Input tab Inventory, exact headers: SKU, Item, Stock, Reorder level. Create checkInventory() that writes items with stock <= reorder level to Alerts; add menu and optional daily trigger installer that avoids duplicate triggers. No email sending. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: A01 and A03 appear in Alerts. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point checkInventory and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/05-automated-inventory-monitor. Base version limitations: Alerts tab only; no email notification. For scheduled execution, save the current spreadsheet ID when installing the trigger and use openById when no active spreadsheet exists. Reinstall in each copy.

## Expected outcome
A01 and A03 appear in Alerts.

## Code to review
filter(); numeric comparisons; ScriptApp.newTrigger(); getProjectTriggers()

## Exercise
Change A02 stock to 10; expect three alerts.

## Extension prompt
Update the existing app without removing working features. Add an alert history and notify only when status changes, using drafts. Return complete updated files, explain changes and give regression tests.
Automation option: The existing Install daily trigger menu creates a daily check; verify background spreadsheet access. Keep this separate from the baseline exercise.

## Limitations
Alerts tab only; no email notification.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
