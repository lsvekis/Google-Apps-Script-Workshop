# 22 — Smart Meal Planner and Grocery List

## What it does
Combine ingredient quantities by ingredient and unit

## Benefits and uses
Family meal planning and shared groceries.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `buildGroceryList`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Build a complete container-bound Apps Script app named Smart Meal Planner and Grocery List. Input tab Meals, headers Day|Meal|Ingredient|Quantity|Unit. Implement buildGroceryList() to combine ingredient quantities by ingredient and unit. Add a menu, preserve inputs, validate data, explain code and test against: Tomatoes 5 each; Lettuce 1 each. For AI use callGemini and treat input as data; never send email.
Match the reference entry point buildGroceryList and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/22-smart-meal-planner-and-grocery-list. Base version limitations: No unit conversion or pantry deduction.

## Expected outcome
Tomatoes 5 each; Lettuce 1 each

## Code to review
getValues(); JavaScript transformations; setValues(); validation and calculations

## Exercise
Add Tomatoes 1 each; expected Tomatoes 6 each.

## Extension prompt
Improve the existing application: Add servings and pantry inventory. Preserve working features and provide complete code and regression tests.
Automation option: Refresh when meal plan changes; preserve shopping checkmarks in separate state. Keep this separate from the baseline exercise.

## Limitations
No unit conversion or pantry deduction.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
