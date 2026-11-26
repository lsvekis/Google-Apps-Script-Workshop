# 03 — Custom Spreadsheet Functions

## What it does
Create reusable spreadsheet calculations

## Benefits and uses
Quotes, order forms and discount calculations.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `demoFunctions`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 03: Custom Spreadsheet Functions. Input tab Orders, exact headers: Item, Quantity, Price, Discount. Implement pure custom function NETPRICE(quantity,price,discount), supporting scalar values and rejecting invalid input; demonstrate =NETPRICE(B2,C2,D2). Add a second function PRICEBAND(net) with Low below 50, High otherwise. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Net prices 45, 96, 60; bands Low, High, High. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point demoFunctions and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/03-custom-spreadsheet-functions. Base version limitations: Blank gaps in Orders can misalign generated formula references; use contiguous rows.

## Expected outcome
Net prices 45, 96, 60; bands Low, High, High.

## Code to review
function parameters; Number(); validation; return; array mapping

## Exercise
Set first discount to 0.2; net becomes 40 and band remains Low.

## Extension prompt
Update the existing app without removing working features. Support equally sized range arguments and return a two-dimensional array. Return complete updated files, explain changes and give regression tests.
Automation option: Custom formulas recalculate on cell changes; no trigger needed. Keep this separate from the baseline exercise.

## Limitations
Blank gaps in Orders can misalign generated formula references; use contiguous rows.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
