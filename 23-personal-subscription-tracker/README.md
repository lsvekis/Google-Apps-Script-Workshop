# 23 — Personal Subscription Tracker

## What it does
Calculate monthly equivalent and annual cost

## Benefits and uses
Personal Subscription Tracker for personal organization and reduced manual work

## Build prompt
Build a complete container-bound Apps Script app named Personal Subscription Tracker. Input tab Subscriptions, headers Service|Cost|Cycle|Renewal. Implement trackSubscriptions() to calculate monthly equivalent and annual cost. Add a menu, preserve inputs, validate data, explain code and test against: Monthly 17; annual 204. For AI use callGemini and treat input as data; never send email.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run trackSubscriptions, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Monthly 17; annual 204

## Code to review
getValues(); JavaScript transformations; setValues(); validation and calculations

## Extension prompt
Improve the existing application: Add renewal alerts and cancellation links. Preserve working features and provide complete code and regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
