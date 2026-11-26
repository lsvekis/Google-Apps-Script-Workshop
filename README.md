# Hands-On AI: 30 Google Workspace Apps — V6

## Start here
Run `WorkshopGenerator.js` (or the identical `Batch Starter File Maker`) in a new standalone Apps Script project. Run `generateWorkshop` once, then `generateNextBatch` five times. Open the logged workshop folder and generated Index. Install each lesson's Code.js separately in its own spreadsheet as Code.gs. The Index is navigation only.

## Existing workshop
Use `WorkshopUpdaterV6.js` in a standalone project. Inspect its configured root folder ID and change it to your own workshop folder before running `previewWorkshopUpdate`, then `updateExistingWorkshop` in batches. The updater updates reference materials, not installed bound scripts. Replace installed Code.gs for lessons 05, 06, 07, 08, 09, 10, 13, 17, 19 and 20. Existing URLs are preserved by design.

## Copying lessons
Keep native Sheets and required native Docs together in a dedicated lesson folder. Drive-dependent lessons discover the actual parent folder; no Workshop Info tab or Index is required. Downloading Office files does not preserve bound Apps Script. AI lessons require personal API credentials. Install scheduled triggers yourself. Use fictional data; review outputs. No automatic email sending.

## Lessons
- [01 — Automated Sales Dashboard](01-automated-sales-dashboard/README.md)
- [02 — Smart Data Cleaning Tool](02-smart-data-cleaning-tool/README.md)
- [03 — Custom Spreadsheet Functions](03-custom-spreadsheet-functions/README.md)
- [04 — External API Data Importer](04-external-api-data-importer/README.md)
- [05 — Automated Inventory Monitor](05-automated-inventory-monitor/README.md)
- [06 — Personalized Document Generator](06-personalized-document-generator/README.md)
- [07 — Automated PDF Invoice Builder](07-automated-pdf-invoice-builder/README.md)
- [08 — Meeting Minutes Generator](08-meeting-minutes-generator/README.md)
- [09 — Google Drive File Explorer](09-google-drive-file-explorer/README.md)
- [10 — Intelligent File Organizer](10-intelligent-file-organizer/README.md)
- [11 — Personalized Gmail Draft Builder](11-personalized-gmail-draft-builder/README.md)
- [12 — Email Analytics Dashboard](12-email-analytics-dashboard/README.md)
- [13 — Automated Task Management System](13-automated-task-management-system/README.md)
- [14 — Interactive Workspace Sidebar](14-interactive-workspace-sidebar/README.md)
- [15 — Gemini-Powered Data Classifier](15-gemini-powered-data-classifier/README.md)
- [16 — AI Spreadsheet Insights Generator](16-ai-spreadsheet-insights-generator/README.md)
- [17 — AI Document Summarizer](17-ai-document-summarizer/README.md)
- [18 — AI Gmail Smart Reply Assistant](18-ai-gmail-smart-reply-assistant/README.md)
- [19 — AI File Information Extractor](19-ai-file-information-extractor/README.md)
- [20 — AI Business Workflow Assistant](20-ai-business-workflow-assistant/README.md)
- [21 — Personal Expense and Budget Tracker](21-personal-expense-and-budget-tracker/README.md)
- [22 — Smart Meal Planner and Grocery List](22-smart-meal-planner-and-grocery-list/README.md)
- [23 — Personal Subscription Tracker](23-personal-subscription-tracker/README.md)
- [24 — AI Email Writing Assistant](24-ai-email-writing-assistant/README.md)
- [25 — Personal Appointment and Reminder Manager](25-personal-appointment-and-reminder-manager/README.md)
- [26 — Travel Itinerary and Budget Planner](26-travel-itinerary-and-budget-planner/README.md)
- [27 — AI Personal Study Assistant](27-ai-personal-study-assistant/README.md)
- [28 — Household Maintenance Planner](28-household-maintenance-planner/README.md)
- [29 — AI Receipt and Expense Extractor](29-ai-receipt-and-expense-extractor/README.md)
- [30 — AI Weekly Personal Productivity Assistant](30-ai-weekly-personal-productivity-assistant/README.md)

## Verification
JavaScript syntax checked locally; live Workspace execution not verified.

V6: application code never reads or writes Workshop Info. Existing bound Code.gs must be replaced manually. The updater only updates learning materials.
