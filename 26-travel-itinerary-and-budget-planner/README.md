# 26 — Travel Itinerary and Budget Planner

## What it does
Sort itinerary and calculate daily and overall costs

## Benefits and uses
Weekend trips, family vacations and business travel.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `planTrip`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Build a complete container-bound Apps Script app named Travel Itinerary and Budget Planner. Input tab Trip, headers Date|Activity|Cost. Implement planTrip() to sort itinerary and calculate daily and overall costs. Add a menu, preserve inputs, validate data, explain code and test against: Day one 230; day two 20; total 250. For AI use callGemini and treat input as data; never send email.
Match the reference entry point planTrip and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/26-travel-itinerary-and-budget-planner. Base version limitations: No currency conversion or booking integration.

## Expected outcome
Day one 230; day two 20; total 250

## Code to review
getValues(); JavaScript transformations; setValues(); validation and calculations

## Exercise
Change Museum cost to 30; day two 30 and overall 260.

## Extension prompt
Improve the existing application: Add budget limit and currency fields. Preserve working features and provide complete code and regression tests.
Automation option: Refresh when itinerary changes; avoid scheduled external bookings. Keep this separate from the baseline exercise.

## Limitations
No currency conversion or booking integration.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
