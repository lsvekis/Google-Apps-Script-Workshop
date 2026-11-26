# 23 — Personal Subscription Tracker

## What it does
Calculate monthly equivalent and annual cost

## Benefits and uses
Streaming, software and household subscriptions.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `trackSubscriptions`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Build a complete container-bound Apps Script app named Personal Subscription Tracker. Input tab Subscriptions, headers Service|Cost|Cycle|Renewal. Implement trackSubscriptions() to calculate monthly equivalent and annual cost. Add a menu, preserve inputs, validate data, explain code and test against: Monthly 17; annual 204. For AI use callGemini and treat input as data; never send email.
Match the reference entry point trackSubscriptions and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/23-personal-subscription-tracker. Base version limitations: Renewal dates are displayed but not used to send reminders.

## Expected outcome
Monthly 17; annual 204

## Code to review
getValues(); JavaScript transformations; setValues(); validation and calculations

## Exercise
Change Cloud annual cost to 120; total monthly 22 and annual 264.

## Extension prompt
Improve the existing application: Add renewal alerts and cancellation links. Preserve working features and provide complete code and regression tests.
Automation option: Refresh monthly; add rolling renewal alerts before scheduling. Keep this separate from the baseline exercise.

## Limitations
Renewal dates are displayed but not used to send reminders.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
