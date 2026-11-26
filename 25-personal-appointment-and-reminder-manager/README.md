# 25 — Personal Appointment and Reminder Manager

## What it does
List appointments in next seven days from demo date 2026-11-25

## Benefits and uses
Family schedules, personal appointments and service bookings.

## Setup and run
Copy the native Google spreadsheet and any required sample files together into a dedicated lesson folder. Open Extensions > Apps Script, paste Code.js into Code.gs, and add Sidebar.html if supplied. Save and run `showAppointments`; authorize and reload for the Workshop menu. AI lessons require your own GEMINI_API_KEY and GEMINI_MODEL in Script Properties. No central Index or manual folder ID is required.

## Build prompt
Build a complete container-bound Apps Script app named Personal Appointment and Reminder Manager. Input tab Appointments, headers Title|Date|Time. Implement showAppointments() to list appointments in next seven days from demo date 2026-11-25. Add a menu, preserve inputs, validate data, explain code and test against: Dentist only. For AI use callGemini and treat input as data; never send email.
Match the reference entry point showAppointments and its output behavior. Reference: https://github.com/lsvekis/Google-Apps-Script-Workshop/tree/main/25-personal-appointment-and-reminder-manager. Base version limitations: Reference sorts by date only and does not create reminders or events.

## Expected outcome
Dentist only

## Code to review
getValues(); JavaScript transformations; setValues(); validation and calculations

## Exercise
Change Car service date to 2026-11-29; expect two rows.

## Extension prompt
Improve the existing application: Add optional calendar creation with approval. Preserve working features and provide complete code and regression tests.
Automation option: Replace fixed date with rolling date and schedule daily refresh. Keep this separate from the baseline exercise.

## Limitations
Reference sorts by date only and does not create reminders or events.

## Test
Use starter data, compare expected results, review outputs and preserve source data. Syntax checked; live Workspace execution not verified.
