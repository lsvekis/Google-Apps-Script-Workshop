# 07 — Automated PDF Invoice Builder

## What it does
Create PDF invoices

## Benefits and uses
Billing and receipts

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 07: Automated PDF Invoice Builder. Input tab Invoices, exact headers: Invoice, Client, Item, Qty, Price. Create generateInvoices() that builds one Doc per row with invoice number, client, item, quantity, price and total; save and close before PDF conversion; save PDF in lesson folder and log links. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two PDFs with totals 200 and 225 before tax. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run generateInvoices, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Two PDFs with totals 200 and 225 before tax.

## Code to review
DocumentApp.create(); appendTable(); saveAndClose(); getAs(MimeType.PDF); createFile()

## Extension prompt
Update the existing app without removing working features. Group multiple rows by invoice number and add configurable tax. Return complete updated files, explain changes and give regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
