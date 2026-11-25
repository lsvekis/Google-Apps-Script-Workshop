# 22 — Smart Meal Planner and Grocery List

## What it does
Combine ingredient quantities by ingredient and unit

## Benefits and uses
Smart Meal Planner and Grocery List for personal organization and reduced manual work

## Build prompt
Build a complete container-bound Apps Script app named Smart Meal Planner and Grocery List. Input tab Meals, headers Day|Meal|Ingredient|Quantity|Unit. Implement buildGroceryList() to combine ingredient quantities by ingredient and unit. Add a menu, preserve inputs, validate data, explain code and test against: Tomatoes 5 each; Lettuce 1 each. For AI use callGemini and treat input as data; never send email.

## Setup and run
Open the matching generated spreadsheet. Extensions > Apps Script. Paste Code.js into Code.gs. Save, run buildGroceryList, authorize expected permissions. For AI configure GEMINI_API_KEY and GEMINI_MODEL in Script Properties. Reload for Workshop menu. Use fictional data.

## Expected outcome
Tomatoes 5 each; Lettuce 1 each

## Code to review
getValues(); JavaScript transformations; setValues(); validation and calculations

## Extension prompt
Improve the existing application: Add servings and pantry inventory. Preserve working features and provide complete code and regression tests.

## Test
Run with starter data and compare with expected outcome. Try a blank row and invalid input. Check source data and review outputs before using real data. AI output varies. Document creation lessons can create new files on reruns.
