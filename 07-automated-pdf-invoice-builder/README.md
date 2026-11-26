# 07 — Automated PDF Invoice Builder

## What it does
Create PDF invoices

## Benefits and uses
Freelancers, consulting and small service businesses.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `generateInvoices`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 07: Automated PDF Invoice Builder. Input tab Invoices, exact headers: Invoice, Client, Item, Qty, Price. Create generateInvoices() that builds one Doc per row with invoice number, client, item, quantity, price and total; save and close before PDF conversion; save PDF in lesson folder and log links. Do not depend on Workshop Info or the Workshop Index. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two PDFs with totals 200 and 225 before tax. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.
Match the reference entry point generateInvoices and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/07-automated-pdf-invoice-builder. Base version limitations: Reruns create duplicate Docs and PDFs; no tax calculation. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access. Never require a manually configured folder ID. Keep required native sample Docs beside the spreadsheet; reject My Drive root.

## Expected outcome
Two PDFs with totals 200 and 225 before tax.

## Code to review
DocumentApp.create(); appendTable(); saveAndClose(); getAs(MimeType.PDF); createFile()

## Exercise
Change INV-101 quantity to 3; total becomes 300.

## Extension prompt
Update the existing app without removing working features. Group multiple rows by invoice number and add configurable tax. Return complete updated files, explain changes and give regression tests.
Automation option: Track invoice IDs and only generate new approved invoices in a scheduled batch. Keep this separate from the baseline exercise. Copy the spreadsheet AND required sample files into a dedicated lesson folder. Resolve its actual parent using DriveApp.getFileById(ss.getId()).getParents(); use that parent directly. Never read, create or update Workshop Info or the Workshop Index. Add Check permissions menu; read access is not proof of write access.

## Limitations
Reruns create duplicate Docs and PDFs; no tax calculation.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
