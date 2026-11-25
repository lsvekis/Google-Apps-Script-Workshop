# 03 — Custom Spreadsheet Functions

## What it does
Create reusable spreadsheet calculations

## Benefits and uses
Pricing and grading formulas

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 03: Custom Spreadsheet Functions. Input tab Orders, exact headers: Item, Quantity, Price, Discount. Implement pure custom function NETPRICE(quantity,price,discount), supporting scalar values and rejecting invalid input; demonstrate =NETPRICE(B2,C2,D2). Add a second function PRICEBAND(net) with Low below 50, High otherwise. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Net prices 45, 96, 60; bands Low, High, High. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run demoFunctions, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Net prices 45, 96, 60; bands Low, High, High.

## Code to review
function parameters; Number(); validation; return; array mapping

## Extension prompt
Update the existing app without removing working features. Support equally sized range arguments and return a two-dimensional array. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
