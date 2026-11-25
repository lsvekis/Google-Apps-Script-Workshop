const LESSONS = [
  {
    "title": "Automated Sales Dashboard",
    "tab": "Sales",
    "headers": [
      "Date",
      "Region",
      "Product",
      "Units",
      "Unit price"
    ],
    "rows": [
      [
        "2026-11-01",
        "East",
        "Course",
        "3",
        "40"
      ],
      [
        "2026-11-02",
        "West",
        "Book",
        "5",
        "20"
      ],
      [
        "2026-11-03",
        "East",
        "Book",
        "2",
        "20"
      ]
    ],
    "goal": "Aggregate revenue by region",
    "uses": "Sales reporting and budget tracking",
    "build": "Create buildDashboard() that reads Sales, converts numeric cells, calculates units \u00d7 price, and replaces a Dashboard tab with regional totals and grand total. Add a column chart and a menu.",
    "expected": "East 160; West 100; total 260.",
    "upgrade": "Add product breakdown and date filters; test a blank row.",
    "blocks": "getValues(); Map or reduce(); setValues(); newChart()",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 01: Automated Sales Dashboard. Input tab Sales, exact headers: Date, Region, Product, Units, Unit price. Create buildDashboard() that reads Sales, converts numeric cells, calculates units \u00d7 price, and replaces a Dashboard tab with regional totals and grand total. Add a column chart and a menu. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: East 160; West 100; total 260. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add product breakdown and date filters; test a blank row. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Smart Data Cleaning Tool",
    "tab": "Contacts",
    "headers": [
      "Name",
      "Email",
      "City"
    ],
    "rows": [
      [
        " Alice Johnson ",
        "ALICE@example.com",
        " Toronto "
      ],
      [
        "Bob",
        "bad-email",
        "Ottawa"
      ],
      [
        "Alice Johnson",
        "alice@example.com",
        "Toronto"
      ],
      [
        "",
        "eve@example.com",
        "Ajax"
      ]
    ],
    "goal": "Normalize and validate contact records without modifying originals",
    "uses": "CRM imports and enrollment lists",
    "build": "Create cleanContacts() that trims fields, lowercases emails, flags missing names and invalid emails, deduplicates valid emails and writes Clean and Issues tabs with source row numbers.",
    "expected": "One valid unique contact; three issue rows (invalid email, duplicate, missing name).",
    "upgrade": "Add configurable required fields and a preview of proposed changes.",
    "blocks": "trim(); toLowerCase(); Set; regular expressions; batch writes",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 02: Smart Data Cleaning Tool. Input tab Contacts, exact headers: Name, Email, City. Create cleanContacts() that trims fields, lowercases emails, flags missing names and invalid emails, deduplicates valid emails and writes Clean and Issues tabs with source row numbers. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: One valid unique contact; three issue rows (invalid email, duplicate, missing name). Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add configurable required fields and a preview of proposed changes. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Custom Spreadsheet Functions",
    "tab": "Orders",
    "headers": [
      "Item",
      "Quantity",
      "Price",
      "Discount"
    ],
    "rows": [
      [
        "Book",
        "2",
        "25",
        "0.1"
      ],
      [
        "Course",
        "3",
        "40",
        "0.2"
      ],
      [
        "Kit",
        "1",
        "60",
        "0"
      ]
    ],
    "goal": "Create reusable spreadsheet calculations",
    "uses": "Pricing and grading formulas",
    "build": "Implement pure custom function NETPRICE(quantity,price,discount), supporting scalar values and rejecting invalid input; demonstrate =NETPRICE(B2,C2,D2). Add a second function PRICEBAND(net) with Low below 50, High otherwise.",
    "expected": "Net prices 45, 96, 60; bands Low, High, High.",
    "upgrade": "Support equally sized range arguments and return a two-dimensional array.",
    "blocks": "function parameters; Number(); validation; return; array mapping",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 03: Custom Spreadsheet Functions. Input tab Orders, exact headers: Item, Quantity, Price, Discount. Implement pure custom function NETPRICE(quantity,price,discount), supporting scalar values and rejecting invalid input; demonstrate =NETPRICE(B2,C2,D2). Add a second function PRICEBAND(net) with Low below 50, High otherwise. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Net prices 45, 96, 60; bands Low, High, High. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Support equally sized range arguments and return a two-dimensional array. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "External API Data Importer",
    "tab": "Settings",
    "headers": [
      "URL",
      "Limit"
    ],
    "rows": [
      [
        "https://jsonplaceholder.typicode.com/users",
        "3"
      ]
    ],
    "goal": "Import public JSON into a spreadsheet",
    "uses": "Public datasets and service integrations",
    "build": "Create importUsers() using the URL and limit from Settings; fetch JSON, check HTTP status, validate array shape, write id/name/email/city to Users. Include an error message without deleting previous results on failure.",
    "expected": "Three user rows if endpoint is available; first user Leanne Graham.",
    "upgrade": "Add configurable field mapping and a last-refresh timestamp.",
    "blocks": "UrlFetchApp.fetch(); getResponseCode(); JSON.parse(); slice()",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 04: External API Data Importer. Input tab Settings, exact headers: URL, Limit. Create importUsers() using the URL and limit from Settings; fetch JSON, check HTTP status, validate array shape, write id/name/email/city to Users. Include an error message without deleting previous results on failure. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Three user rows if endpoint is available; first user Leanne Graham. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add configurable field mapping and a last-refresh timestamp. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Automated Inventory Monitor",
    "tab": "Inventory",
    "headers": [
      "SKU",
      "Item",
      "Stock",
      "Reorder level"
    ],
    "rows": [
      [
        "A01",
        "Paper",
        "4",
        "10"
      ],
      [
        "A02",
        "Pens",
        "20",
        "10"
      ],
      [
        "A03",
        "Folders",
        "5",
        "5"
      ]
    ],
    "goal": "Detect low stock automatically",
    "uses": "Supplies and inventory monitoring",
    "build": "Create checkInventory() that writes items with stock <= reorder level to Alerts; add menu and optional daily trigger installer that avoids duplicate triggers. No email sending.",
    "expected": "A01 and A03 appear in Alerts.",
    "upgrade": "Add an alert history and notify only when status changes, using drafts.",
    "blocks": "filter(); numeric comparisons; ScriptApp.newTrigger(); getProjectTriggers()",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 05: Automated Inventory Monitor. Input tab Inventory, exact headers: SKU, Item, Stock, Reorder level. Create checkInventory() that writes items with stock <= reorder level to Alerts; add menu and optional daily trigger installer that avoids duplicate triggers. No email sending. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: A01 and A03 appear in Alerts. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add an alert history and notify only when status changes, using drafts. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Personalized Document Generator",
    "tab": "People",
    "headers": [
      "Name",
      "Program",
      "Date"
    ],
    "rows": [
      [
        "Alex Morgan",
        "Web Development",
        "2026-12-01"
      ],
      [
        "Jamie Chen",
        "Data Analytics",
        "2026-12-02"
      ]
    ],
    "goal": "Generate personalized letters from a template",
    "uses": "Certificates and onboarding",
    "build": "Create generateLetters() that copies Letter Template from the lesson folder for each row, replaces {{NAME}}, {{PROGRAM}}, {{DATE}}, saves and writes output links. Use display values for dates.",
    "expected": "Two personalized Docs; template unchanged.",
    "upgrade": "Add missing-field validation and skip already generated rows.",
    "blocks": "DriveApp.getFileById(); makeCopy(); DocumentApp.openById(); replaceText()",
    "files": {
      "Letter Template": "Welcome {{NAME}}!\nYour program is {{PROGRAM}}. Start date: {{DATE}}."
    },
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 06: Personalized Document Generator. Input tab People, exact headers: Name, Program, Date. Create generateLetters() that copies Letter Template from the lesson folder for each row, replaces {{NAME}}, {{PROGRAM}}, {{DATE}}, saves and writes output links. Use display values for dates. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two personalized Docs; template unchanged. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add missing-field validation and skip already generated rows. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Automated PDF Invoice Builder",
    "tab": "Invoices",
    "headers": [
      "Invoice",
      "Client",
      "Item",
      "Qty",
      "Price"
    ],
    "rows": [
      [
        "INV-101",
        "North Studio",
        "Consulting",
        "2",
        "100"
      ],
      [
        "INV-102",
        "West Studio",
        "Training",
        "3",
        "75"
      ]
    ],
    "goal": "Create PDF invoices",
    "uses": "Billing and receipts",
    "build": "Create generateInvoices() that builds one Doc per row with invoice number, client, item, quantity, price and total; save and close before PDF conversion; save PDF in lesson folder and log links.",
    "expected": "Two PDFs with totals 200 and 225 before tax.",
    "upgrade": "Group multiple rows by invoice number and add configurable tax.",
    "blocks": "DocumentApp.create(); appendTable(); saveAndClose(); getAs(MimeType.PDF); createFile()",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 07: Automated PDF Invoice Builder. Input tab Invoices, exact headers: Invoice, Client, Item, Qty, Price. Create generateInvoices() that builds one Doc per row with invoice number, client, item, quantity, price and total; save and close before PDF conversion; save PDF in lesson folder and log links. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two PDFs with totals 200 and 225 before tax. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Group multiple rows by invoice number and add configurable tax. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Meeting Minutes Generator",
    "tab": "Meeting",
    "headers": [
      "Speaker",
      "Note",
      "Owner",
      "Due"
    ],
    "rows": [
      [
        "Alex",
        "Prepare slides",
        "Alex",
        "2026-12-01"
      ],
      [
        "Jamie",
        "Review budget",
        "Jamie",
        "2026-12-03"
      ],
      [
        "Sam",
        "Next meeting Friday",
        "",
        ""
      ]
    ],
    "goal": "Convert structured notes into readable minutes",
    "uses": "Project meetings and committees",
    "build": "Create generateMinutes() that builds a Doc with all notes and an action-item table containing only rows with an owner; move Doc into lesson folder and log link.",
    "expected": "Three notes and two action items.",
    "upgrade": "Add overdue flags and an agenda section.",
    "blocks": "appendParagraph(); setHeading(); appendTable(); moveTo()",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 08: Meeting Minutes Generator. Input tab Meeting, exact headers: Speaker, Note, Owner, Due. Create generateMinutes() that builds a Doc with all notes and an action-item table containing only rows with an owner; move Doc into lesson folder and log link. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Three notes and two action items. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add overdue flags and an agenda section. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Google Drive File Explorer",
    "tab": "Config",
    "headers": [
      "Setting",
      "Value"
    ],
    "rows": [
      [
        "Scope",
        "Lesson folder only"
      ]
    ],
    "goal": "Inventory file metadata",
    "uses": "Content audits and asset management",
    "build": "Create listFiles() that enumerates direct files in the lesson folder and writes name, MIME type, URL and last updated to File Inventory.",
    "expected": "Includes Sample Brief and Sample Notes plus starter assets.",
    "upgrade": "Add recursive traversal with a depth limit and folder path.",
    "blocks": "DriveApp.getFolderById(); getFiles(); hasNext(); next()",
    "files": {
      "Sample Brief": "Project brief: update onboarding materials.",
      "Sample Notes": "Notes: review draft on Friday."
    },
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 09: Google Drive File Explorer. Input tab Config, exact headers: Setting, Value. Create listFiles() that enumerates direct files in the lesson folder and writes name, MIME type, URL and last updated to File Inventory. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Includes Sample Brief and Sample Notes plus starter assets. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add recursive traversal with a depth limit and folder path. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Intelligent File Organizer",
    "tab": "Rules",
    "headers": [
      "Prefix",
      "Destination"
    ],
    "rows": [
      [
        "FIN-",
        "Finance"
      ],
      [
        "HR-",
        "People"
      ]
    ],
    "goal": "Preview rule-based file organization",
    "uses": "Shared file cleanup",
    "build": "Create previewMoves() for direct files matching prefixes; write file ID, name, destination and approval checkbox to Plan. Create applyApprovedMoves() that moves only approved matching files within lesson folder; never delete.",
    "expected": "Two proposed moves; MISC stays unchanged.",
    "upgrade": "Add an audit log and undo using original folder IDs.",
    "blocks": "startsWith(); getFoldersByName(); insertCheckboxes(); moveTo()",
    "files": {
      "FIN-Budget": "Budget sample",
      "HR-Onboarding": "Onboarding sample",
      "MISC-Notes": "Uncategorized sample"
    },
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 10: Intelligent File Organizer. Input tab Rules, exact headers: Prefix, Destination. Create previewMoves() for direct files matching prefixes; write file ID, name, destination and approval checkbox to Plan. Create applyApprovedMoves() that moves only approved matching files within lesson folder; never delete. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two proposed moves; MISC stays unchanged. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add an audit log and undo using original folder IDs. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Personalized Gmail Draft Builder",
    "tab": "Recipients",
    "headers": [
      "Name",
      "Email",
      "Topic"
    ],
    "rows": [
      [
        "Alex",
        "alex@example.com",
        "Workshop"
      ],
      [
        "Jamie",
        "jamie@example.com",
        "Orientation"
      ]
    ],
    "goal": "Prepare personalized messages for review",
    "uses": "Outreach and onboarding",
    "build": "Create buildDrafts() that creates Gmail drafts with personalized subject and body, logs draft IDs and skips rows with existing IDs. Never send; use fictional addresses only for draft practice.",
    "expected": "Two drafts; no sent messages.",
    "upgrade": "Add preview-only mode and editable message templates.",
    "blocks": "GmailApp.createDraft(); getId(); template literals",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 11: Personalized Gmail Draft Builder. Input tab Recipients, exact headers: Name, Email, Topic. Create buildDrafts() that creates Gmail drafts with personalized subject and body, logs draft IDs and skips rows with existing IDs. Never send; use fictional addresses only for draft practice. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two drafts; no sent messages. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add preview-only mode and editable message templates. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Email Analytics Dashboard",
    "tab": "Messages",
    "headers": [
      "Sender",
      "Subject",
      "Date",
      "Unread"
    ],
    "rows": [
      [
        "alex@example.com",
        "Question",
        "2026-11-01",
        "TRUE"
      ],
      [
        "alex@example.com",
        "Follow-up",
        "2026-11-02",
        "FALSE"
      ],
      [
        "jamie@example.com",
        "Update",
        "2026-11-02",
        "TRUE"
      ]
    ],
    "goal": "Summarize inbox activity safely",
    "uses": "Support workload analysis",
    "build": "Create analyzeMessages() using sample rows by default; count messages and unread by sender. Add optional separate live function using GmailApp.search with a user-entered query and maximum 10 threads; do not write bodies.",
    "expected": "Alex 2 messages/1 unread; Jamie 1/1.",
    "upgrade": "Add date grouping and chart; distinguish threads from messages.",
    "blocks": "GmailApp.search(); getMessages(); isUnread(); Map",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 12: Email Analytics Dashboard. Input tab Messages, exact headers: Sender, Subject, Date, Unread. Create analyzeMessages() using sample rows by default; count messages and unread by sender. Add optional separate live function using GmailApp.search with a user-entered query and maximum 10 threads; do not write bodies. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Alex 2 messages/1 unread; Jamie 1/1. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add date grouping and chart; distinguish threads from messages. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Automated Task Management System",
    "tab": "Tasks",
    "headers": [
      "Task",
      "Owner",
      "Due",
      "Status"
    ],
    "rows": [
      [
        "Slides",
        "Alex",
        "2026-11-20",
        "Open"
      ],
      [
        "Budget",
        "Jamie",
        "2026-12-05",
        "Open"
      ],
      [
        "Review",
        "Sam",
        "2026-11-19",
        "Done"
      ]
    ],
    "goal": "Prioritize tasks by deadline",
    "uses": "Project coordination",
    "build": "Create updateTasks() with a fixed demo reference date 2026-11-25; compare date-only values, write Overdue/Open/Done to a Priority column; optional daily trigger uses current date in spreadsheet timezone.",
    "expected": "Slides Overdue; Budget Open; Review Done.",
    "upgrade": "Add a dashboard and configurable reference date.",
    "blocks": "Utilities.formatDate(); date comparison; setValues(); triggers",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 13: Automated Task Management System. Input tab Tasks, exact headers: Task, Owner, Due, Status. Create updateTasks() with a fixed demo reference date 2026-11-25; compare date-only values, write Overdue/Open/Done to a Priority column; optional daily trigger uses current date in spreadsheet timezone. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Slides Overdue; Budget Open; Review Done. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add a dashboard and configurable reference date. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Interactive Workspace Sidebar",
    "tab": "Requests",
    "headers": [
      "Request",
      "Category",
      "Status"
    ],
    "rows": [
      [
        "Replace monitor",
        "IT",
        "Open"
      ],
      [
        "Book room",
        "Facilities",
        "Open"
      ]
    ],
    "goal": "Build a form inside Sheets",
    "uses": "Internal request intake",
    "build": "Create Code.gs and Sidebar.html; onOpen menu opens sidebar; form collects request and category, validates on server and appends Open row; use success/failure handlers and disable submit while pending.",
    "expected": "Submitting Test request / IT adds exactly one Open row.",
    "upgrade": "Add status filtering and refresh without closing sidebar.",
    "blocks": "HtmlService.createHtmlOutputFromFile(); showSidebar(); google.script.run; appendRow()",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 14: Interactive Workspace Sidebar. Input tab Requests, exact headers: Request, Category, Status. Create Code.gs and Sidebar.html; onOpen menu opens sidebar; form collects request and category, validates on server and appends Open row; use success/failure handlers and disable submit while pending. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Submitting Test request / IT adds exactly one Open row. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add status filtering and refresh without closing sidebar. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Gemini-Powered Data Classifier",
    "tab": "Feedback",
    "headers": [
      "ID",
      "Feedback"
    ],
    "rows": [
      [
        "1",
        "The course was excellent"
      ],
      [
        "2",
        "The login page fails"
      ],
      [
        "3",
        "Please add dark mode"
      ]
    ],
    "goal": "Classify text into structured categories",
    "uses": "Feedback triage",
    "build": "Create classifyFeedback() using shared Gemini helper; request JSON array with id and category from Praise, Bug, Feature; validate IDs and allowed categories before writing Results.",
    "expected": "Expected categories Praise, Bug, Feature; AI output may vary.",
    "upgrade": "Add confidence rationale and manual review for uncertain results.",
    "blocks": "callGemini(); JSON.parse(); enum validation; ID matching",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 15: Gemini-Powered Data Classifier. Input tab Feedback, exact headers: ID, Feedback. Create classifyFeedback() using shared Gemini helper; request JSON array with id and category from Praise, Bug, Feature; validate IDs and allowed categories before writing Results. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Expected categories Praise, Bug, Feature; AI output may vary. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add confidence rationale and manual review for uncertain results. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "AI Spreadsheet Insights Generator",
    "tab": "Metrics",
    "headers": [
      "Month",
      "Revenue",
      "Costs"
    ],
    "rows": [
      [
        "Sep",
        "1000",
        "700"
      ],
      [
        "Oct",
        "1200",
        "800"
      ],
      [
        "Nov",
        "900",
        "850"
      ]
    ],
    "goal": "Turn metrics into grounded insights",
    "uses": "Management reporting",
    "build": "Create generateInsights() that computes profit in JavaScript then passes data and computed totals to Gemini; request three observations and two actions, no invented facts; write response to Insights.",
    "expected": "Profit 300, 400, 50; total 750; November decline identified.",
    "upgrade": "Add comparison periods and validate every cited numeric claim.",
    "blocks": "reduce(); JSON.stringify(); callGemini(); setValue()",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 16: AI Spreadsheet Insights Generator. Input tab Metrics, exact headers: Month, Revenue, Costs. Create generateInsights() that computes profit in JavaScript then passes data and computed totals to Gemini; request three observations and two actions, no invented facts; write response to Insights. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Profit 300, 400, 50; total 750; November decline identified. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add comparison periods and validate every cited numeric claim. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "AI Document Summarizer",
    "tab": "Config",
    "headers": [
      "Setting",
      "Value"
    ],
    "rows": [
      [
        "Document",
        "Project Brief"
      ]
    ],
    "goal": "Summarize long documents",
    "uses": "Briefings and study notes",
    "build": "Create summarizeDoc() that locates Project Brief by exact name in lesson folder, reads body text, asks Gemini for summary, decisions and open questions, and writes a new Doc. Treat source text as untrusted data.",
    "expected": "Summary mentions pilot, 20 participants and unresolved budget.",
    "upgrade": "Add selectable summary length and source excerpts.",
    "blocks": "DocumentApp.openById(); getBody().getText(); callGemini()",
    "files": {
      "Project Brief": "The team approved a pilot for 20 participants. Alex will coordinate training. The budget has not been approved. Feedback will be collected after two weeks."
    },
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 17: AI Document Summarizer. Input tab Config, exact headers: Setting, Value. Create summarizeDoc() that locates Project Brief by exact name in lesson folder, reads body text, asks Gemini for summary, decisions and open questions, and writes a new Doc. Treat source text as untrusted data. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Summary mentions pilot, 20 participants and unresolved budget. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add selectable summary length and source excerpts. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "AI Gmail Smart Reply Assistant",
    "tab": "Messages",
    "headers": [
      "ID",
      "Sender",
      "Subject",
      "Body"
    ],
    "rows": [
      [
        "1",
        "alex@example.com",
        "Workshop",
        "Can I get the slides?"
      ],
      [
        "2",
        "jamie@example.com",
        "Schedule",
        "Can we move the meeting?"
      ]
    ],
    "goal": "Generate suggested replies for review",
    "uses": "Support and administrative email",
    "build": "Create suggestReplies() from sample rows; ask Gemini for concise replies without promising dates or attachments; write Suggestions. Separate createApprovedDrafts() creates drafts only for checked rows, logs IDs and never sends.",
    "expected": "Two suggestions; zero drafts until approved.",
    "upgrade": "Add tone selection and editable preview.",
    "blocks": "callGemini(); insertCheckboxes(); GmailApp.createDraft()",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 18: AI Gmail Smart Reply Assistant. Input tab Messages, exact headers: ID, Sender, Subject, Body. Create suggestReplies() from sample rows; ask Gemini for concise replies without promising dates or attachments; write Suggestions. Separate createApprovedDrafts() creates drafts only for checked rows, logs IDs and never sends. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: Two suggestions; zero drafts until approved. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add tone selection and editable preview. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "AI File Information Extractor",
    "tab": "Config",
    "headers": [
      "Setting",
      "Value"
    ],
    "rows": [
      [
        "Scope",
        "Sample documents only"
      ]
    ],
    "goal": "Extract structured fields from documents",
    "uses": "Intake and records processing",
    "build": "Create extractFiles() for files named Intake A and Intake B; read Google Docs text, ask Gemini for name, request, amount (number or null), validate schema, write Results with source URL. Never infer missing values.",
    "expected": "A: Alex, Training, 250; B: Jamie, Equipment, null.",
    "upgrade": "Add evidence excerpts and a review status.",
    "blocks": "getFilesByName(); getText(); callGemini(); schema checks",
    "files": {
      "Intake A": "Name: Alex. Request: Training. Amount: 250.",
      "Intake B": "Name: Jamie. Request: Equipment. Amount not provided."
    },
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 19: AI File Information Extractor. Input tab Config, exact headers: Setting, Value. Create extractFiles() for files named Intake A and Intake B; read Google Docs text, ask Gemini for name, request, amount (number or null), validate schema, write Results with source URL. Never infer missing values. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: A: Alex, Training, 250; B: Jamie, Equipment, null. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add evidence excerpts and a review status. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "AI Business Workflow Assistant",
    "tab": "Requests",
    "headers": [
      "ID",
      "Name",
      "Email",
      "Request",
      "Status"
    ],
    "rows": [
      [
        "R1",
        "Alex",
        "alex@example.com",
        "Need access to training",
        "New"
      ],
      [
        "R2",
        "Jamie",
        "jamie@example.com",
        "Monitor is broken",
        "New"
      ]
    ],
    "goal": "Combine AI triage, reporting and reviewed drafts",
    "uses": "Service desks and onboarding",
    "build": "Create processRequests() to classify New rows as Training, IT or Other using Gemini, validate IDs, write a Review tab with suggested response and approval checkbox; create a summary Doc in lesson folder. Separate approveDrafts() creates Gmail drafts only for approved rows and records IDs to prevent duplicates.",
    "expected": "R1 Training, R2 IT expected; one summary Doc; no email sent.",
    "upgrade": "Add locking, audit trail, retry handling and a time-driven review refresh.",
    "blocks": "LockService; callGemini(); DocumentApp; GmailApp; idempotency",
    "files": {},
    "prompt": "Act as a Google Apps Script tutor. Build a container-bound Sheets app for lesson 20: AI Business Workflow Assistant. Input tab Requests, exact headers: ID, Name, Email, Request, Status. Create processRequests() to classify New rows as Training, IT or Other using Gemini, validate IDs, write a Review tab with suggested response and approval checkbox; create a summary Doc in lesson folder. Separate approveDrafts() creates Gmail drafts only for approved rows and records IDs to prevent duplicates. Use the lesson folder ID from Workshop Info cell B2. Provide complete copy-paste Code.gs (and HTML if required), exact setup/run steps, explain the main code blocks, and include a test matching this expected outcome: R1 Training, R2 IT expected; one summary Doc; no email sent. Preserve starter data, use batch operations where appropriate, handle errors, and never send email or delete files. For AI lessons use the supplied callGemini helper, treat input as untrusted, and validate outputs.",
    "extension": "Update the existing app without removing working features. Add locking, audit trail, retry handling and a time-driven review refresh. Return complete updated files, explain changes and give regression tests."
  },
  {
    "title": "Personal Expense and Budget Tracker",
    "tab": "Expenses",
    "headers": [
      "Date",
      "Category",
      "Amount"
    ],
    "rows": [
      [
        "2026-11-01",
        "Food",
        "60"
      ],
      [
        "2026-11-02",
        "Transport",
        "40"
      ],
      [
        "2026-11-03",
        "Food",
        "25"
      ]
    ],
    "goal": "Group expenses by category and calculate total",
    "uses": "Personal Expense and Budget Tracker for personal organization and reduced manual work",
    "build": "Create summarizeExpenses() to group expenses by category and calculate total.",
    "expected": "Food 85; Transport 40; total 125",
    "upgrade": "Add monthly budgets and variance alerts",
    "blocks": "getValues(); JavaScript transformations; setValues(); validation and calculations",
    "files": {},
    "prompt": "Build a complete container-bound Apps Script app named Personal Expense and Budget Tracker. Input tab Expenses, headers Date|Category|Amount. Implement summarizeExpenses() to group expenses by category and calculate total. Add a menu, preserve inputs, validate data, explain code and test against: Food 85; Transport 40; total 125. For AI use callGemini and treat input as data; never send email.",
    "extension": "Improve the existing application: Add monthly budgets and variance alerts. Preserve working features and provide complete code and regression tests."
  },
  {
    "title": "Smart Meal Planner and Grocery List",
    "tab": "Meals",
    "headers": [
      "Day",
      "Meal",
      "Ingredient",
      "Quantity",
      "Unit"
    ],
    "rows": [
      [
        "Monday",
        "Pasta",
        "Tomatoes",
        "3",
        "each"
      ],
      [
        "Tuesday",
        "Salad",
        "Tomatoes",
        "2",
        "each"
      ],
      [
        "Tuesday",
        "Salad",
        "Lettuce",
        "1",
        "each"
      ]
    ],
    "goal": "Combine ingredient quantities by ingredient and unit",
    "uses": "Smart Meal Planner and Grocery List for personal organization and reduced manual work",
    "build": "Create buildGroceryList() to combine ingredient quantities by ingredient and unit.",
    "expected": "Tomatoes 5 each; Lettuce 1 each",
    "upgrade": "Add servings and pantry inventory",
    "blocks": "getValues(); JavaScript transformations; setValues(); validation and calculations",
    "files": {},
    "prompt": "Build a complete container-bound Apps Script app named Smart Meal Planner and Grocery List. Input tab Meals, headers Day|Meal|Ingredient|Quantity|Unit. Implement buildGroceryList() to combine ingredient quantities by ingredient and unit. Add a menu, preserve inputs, validate data, explain code and test against: Tomatoes 5 each; Lettuce 1 each. For AI use callGemini and treat input as data; never send email.",
    "extension": "Improve the existing application: Add servings and pantry inventory. Preserve working features and provide complete code and regression tests."
  },
  {
    "title": "Personal Subscription Tracker",
    "tab": "Subscriptions",
    "headers": [
      "Service",
      "Cost",
      "Cycle",
      "Renewal"
    ],
    "rows": [
      [
        "Music",
        "12",
        "Monthly",
        "2026-12-01"
      ],
      [
        "Cloud",
        "60",
        "Annual",
        "2027-01-01"
      ]
    ],
    "goal": "Calculate monthly equivalent and annual cost",
    "uses": "Personal Subscription Tracker for personal organization and reduced manual work",
    "build": "Create trackSubscriptions() to calculate monthly equivalent and annual cost.",
    "expected": "Monthly 17; annual 204",
    "upgrade": "Add renewal alerts and cancellation links",
    "blocks": "getValues(); JavaScript transformations; setValues(); validation and calculations",
    "files": {},
    "prompt": "Build a complete container-bound Apps Script app named Personal Subscription Tracker. Input tab Subscriptions, headers Service|Cost|Cycle|Renewal. Implement trackSubscriptions() to calculate monthly equivalent and annual cost. Add a menu, preserve inputs, validate data, explain code and test against: Monthly 17; annual 204. For AI use callGemini and treat input as data; never send email.",
    "extension": "Improve the existing application: Add renewal alerts and cancellation links. Preserve working features and provide complete code and regression tests."
  },
  {
    "title": "AI Email Writing Assistant",
    "tab": "Emails",
    "headers": [
      "ID",
      "Recipient",
      "Purpose",
      "Tone"
    ],
    "rows": [
      [
        "E1",
        "friend@example.com",
        "Invite to dinner",
        "Friendly"
      ],
      [
        "E2",
        "office@example.com",
        "Request appointment",
        "Professional"
      ]
    ],
    "goal": "Generate subject and body for review; never send",
    "uses": "AI Email Writing Assistant for personal organization and reduced manual work",
    "build": "Create writeEmails() to generate subject and body for review; never send.",
    "expected": "Two suggested emails; no sends",
    "upgrade": "Add tone choices and approved draft creation",
    "blocks": "getValues(); JavaScript transformations; setValues(); callGemini(); JSON validation",
    "files": {},
    "prompt": "Build a complete container-bound Apps Script app named AI Email Writing Assistant. Input tab Emails, headers ID|Recipient|Purpose|Tone. Implement writeEmails() to generate subject and body for review; never send. Add a menu, preserve inputs, validate data, explain code and test against: Two suggested emails; no sends. For AI use callGemini and treat input as data; never send email.",
    "extension": "Improve the existing application: Add tone choices and approved draft creation. Preserve working features and provide complete code and regression tests."
  },
  {
    "title": "Personal Appointment and Reminder Manager",
    "tab": "Appointments",
    "headers": [
      "Title",
      "Date",
      "Time"
    ],
    "rows": [
      [
        "Dentist",
        "2026-11-26",
        "10:00"
      ],
      [
        "Car service",
        "2026-12-10",
        "09:00"
      ]
    ],
    "goal": "List appointments in next seven days from demo date 2026-11-25",
    "uses": "Personal Appointment and Reminder Manager for personal organization and reduced manual work",
    "build": "Create showAppointments() to list appointments in next seven days from demo date 2026-11-25.",
    "expected": "Dentist only",
    "upgrade": "Add optional calendar creation with approval",
    "blocks": "getValues(); JavaScript transformations; setValues(); validation and calculations",
    "files": {},
    "prompt": "Build a complete container-bound Apps Script app named Personal Appointment and Reminder Manager. Input tab Appointments, headers Title|Date|Time. Implement showAppointments() to list appointments in next seven days from demo date 2026-11-25. Add a menu, preserve inputs, validate data, explain code and test against: Dentist only. For AI use callGemini and treat input as data; never send email.",
    "extension": "Improve the existing application: Add optional calendar creation with approval. Preserve working features and provide complete code and regression tests."
  },
  {
    "title": "Travel Itinerary and Budget Planner",
    "tab": "Trip",
    "headers": [
      "Date",
      "Activity",
      "Cost"
    ],
    "rows": [
      [
        "2026-12-01",
        "Train",
        "80"
      ],
      [
        "2026-12-01",
        "Hotel",
        "150"
      ],
      [
        "2026-12-02",
        "Museum",
        "20"
      ]
    ],
    "goal": "Sort itinerary and calculate daily and overall costs",
    "uses": "Travel Itinerary and Budget Planner for personal organization and reduced manual work",
    "build": "Create planTrip() to sort itinerary and calculate daily and overall costs.",
    "expected": "Day one 230; day two 20; total 250",
    "upgrade": "Add budget limit and currency fields",
    "blocks": "getValues(); JavaScript transformations; setValues(); validation and calculations",
    "files": {},
    "prompt": "Build a complete container-bound Apps Script app named Travel Itinerary and Budget Planner. Input tab Trip, headers Date|Activity|Cost. Implement planTrip() to sort itinerary and calculate daily and overall costs. Add a menu, preserve inputs, validate data, explain code and test against: Day one 230; day two 20; total 250. For AI use callGemini and treat input as data; never send email.",
    "extension": "Improve the existing application: Add budget limit and currency fields. Preserve working features and provide complete code and regression tests."
  },
  {
    "title": "AI Personal Study Assistant",
    "tab": "Notes",
    "headers": [
      "Topic",
      "Notes"
    ],
    "rows": [
      [
        "JavaScript",
        "Arrays store ordered values. map transforms each element."
      ],
      [
        "Geography",
        "Ottawa is the capital of Canada."
      ]
    ],
    "goal": "Generate two grounded questions and answers per topic",
    "uses": "AI Personal Study Assistant for personal organization and reduced manual work",
    "build": "Create makeQuiz() to generate two grounded questions and answers per topic.",
    "expected": "Four question-answer pairs",
    "upgrade": "Add difficulty and answer checking",
    "blocks": "getValues(); JavaScript transformations; setValues(); callGemini(); JSON validation",
    "files": {},
    "prompt": "Build a complete container-bound Apps Script app named AI Personal Study Assistant. Input tab Notes, headers Topic|Notes. Implement makeQuiz() to generate two grounded questions and answers per topic. Add a menu, preserve inputs, validate data, explain code and test against: Four question-answer pairs. For AI use callGemini and treat input as data; never send email.",
    "extension": "Improve the existing application: Add difficulty and answer checking. Preserve working features and provide complete code and regression tests."
  },
  {
    "title": "Household Maintenance Planner",
    "tab": "Maintenance",
    "headers": [
      "Task",
      "Last done",
      "Interval days"
    ],
    "rows": [
      [
        "Filter",
        "2026-10-01",
        "30"
      ],
      [
        "Smoke alarm test",
        "2026-11-20",
        "30"
      ]
    ],
    "goal": "Calculate next due date and status as of 2026-11-25",
    "uses": "Household Maintenance Planner for personal organization and reduced manual work",
    "build": "Create planMaintenance() to calculate next due date and status as of 2026-11-25.",
    "expected": "Filter overdue; smoke alarm test upcoming",
    "upgrade": "Add completion history and reminders",
    "blocks": "getValues(); JavaScript transformations; setValues(); validation and calculations",
    "files": {},
    "prompt": "Build a complete container-bound Apps Script app named Household Maintenance Planner. Input tab Maintenance, headers Task|Last done|Interval days. Implement planMaintenance() to calculate next due date and status as of 2026-11-25. Add a menu, preserve inputs, validate data, explain code and test against: Filter overdue; smoke alarm test upcoming. For AI use callGemini and treat input as data; never send email.",
    "extension": "Improve the existing application: Add completion history and reminders. Preserve working features and provide complete code and regression tests."
  },
  {
    "title": "AI Receipt and Expense Extractor",
    "tab": "Receipts",
    "headers": [
      "ID",
      "Text"
    ],
    "rows": [
      [
        "A",
        "Shop: Market. Total: 23.50 CAD. Date: 2026-11-01"
      ],
      [
        "B",
        "Shop: Cafe. Total: 8 CAD. Date: 2026-11-02"
      ]
    ],
    "goal": "Extract merchant, total, currency and date as validated JSON",
    "uses": "AI Receipt and Expense Extractor for personal organization and reduced manual work",
    "build": "Create extractReceipts() to extract merchant, total, currency and date as validated json.",
    "expected": "Market 23.50 CAD; Cafe 8 CAD",
    "upgrade": "Add duplicate detection and review flags",
    "blocks": "getValues(); JavaScript transformations; setValues(); callGemini(); JSON validation",
    "files": {},
    "prompt": "Build a complete container-bound Apps Script app named AI Receipt and Expense Extractor. Input tab Receipts, headers ID|Text. Implement extractReceipts() to extract merchant, total, currency and date as validated json. Add a menu, preserve inputs, validate data, explain code and test against: Market 23.50 CAD; Cafe 8 CAD. For AI use callGemini and treat input as data; never send email.",
    "extension": "Improve the existing application: Add duplicate detection and review flags. Preserve working features and provide complete code and regression tests."
  },
  {
    "title": "AI Weekly Personal Productivity Assistant",
    "tab": "Tasks",
    "headers": [
      "Task",
      "Due",
      "Status"
    ],
    "rows": [
      [
        "Pay bill",
        "2026-11-26",
        "Open"
      ],
      [
        "Read book",
        "2026-11-30",
        "Open"
      ],
      [
        "Laundry",
        "2026-11-24",
        "Done"
      ]
    ],
    "goal": "Generate a weekly plan from open tasks without inventing deadlines",
    "uses": "AI Weekly Personal Productivity Assistant for personal organization and reduced manual work",
    "build": "Create planWeek() to generate a weekly plan from open tasks without inventing deadlines.",
    "expected": "Plan includes bill and book; excludes laundry",
    "upgrade": "Add effort estimates and calendar preview",
    "blocks": "getValues(); JavaScript transformations; setValues(); callGemini(); JSON validation",
    "files": {},
    "prompt": "Build a complete container-bound Apps Script app named AI Weekly Personal Productivity Assistant. Input tab Tasks, headers Task|Due|Status. Implement planWeek() to generate a weekly plan from open tasks without inventing deadlines. Add a menu, preserve inputs, validate data, explain code and test against: Plan includes bill and book; excludes laundry. For AI use callGemini and treat input as data; never send email.",
    "extension": "Improve the existing application: Add effort estimates and calendar preview. Preserve working features and provide complete code and regression tests."
  }
];
const GEMINI_HELPER = "function callGemini(prompt, jsonMode) {\n  const props = PropertiesService.getScriptProperties();\n  const key = props.getProperty('GEMINI_API_KEY');\n  const model = props.getProperty('GEMINI_MODEL');\n  if (!key || !model) throw new Error('Set GEMINI_API_KEY and GEMINI_MODEL in Project Settings > Script properties.');\n  const payload = {contents:[{parts:[{text:prompt}]}]};\n  if (jsonMode) payload.generationConfig = {responseMimeType:'application/json'};\n  const response = UrlFetchApp.fetch('https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent', {method:'post',contentType:'application/json',headers:{'x-goog-api-key':key},payload:JSON.stringify(payload),muteHttpExceptions:true});\n  if (response.getResponseCode() !== 200) throw new Error('Gemini HTTP '+response.getResponseCode());\n  const data = JSON.parse(response.getContentText());\n  const parts = data.candidates?.[0]?.content?.parts || [];\n  const result = parts.filter(p=>!p.thought).map(p=>p.text||'').join('');\n  if (!result) throw new Error('No Gemini text returned');\n  return result;\n}";
function generateWorkshop() { generateWorkshopBatch(1, 5); }
function generateNextBatch() { const p=PropertiesService.getScriptProperties(); const start=Number(p.getProperty("NEXT_LESSON")||1); if(start>30) {Logger.log("Workshop complete");return;} generateWorkshopBatch(start,Math.min(start+4,30)); }
function generateWorkshopBatch(start,end) {
 const props=PropertiesService.getScriptProperties();
 const root=props.getProperty('WORKSHOP_ROOT')?DriveApp.getFolderById(props.getProperty('WORKSHOP_ROOT')):DriveApp.createFolder('Hands-On AI Workshop '+Utilities.formatDate(new Date(),Session.getScriptTimeZone(),'yyyyMMdd-HHmmss'));
 props.setProperty('WORKSHOP_ROOT',root.getId());
 const index=props.getProperty('WORKSHOP_INDEX')?SpreadsheetApp.openById(props.getProperty('WORKSHOP_INDEX')):SpreadsheetApp.create('Workshop Index'); DriveApp.getFileById(index.getId()).moveTo(root); props.setProperty('WORKSHOP_INDEX',index.getId());
 const ix=index.getSheets()[0]; if(!ix.getLastRow()) ix.appendRow(['Lesson','Application','Starter spreadsheet','Folder','Guide']);
 LESSONS.forEach((l,i)=>{
  if(i+1<start||i+1>end||i+1<Number(props.getProperty("NEXT_LESSON")||1)) return;
  const name=String(i+1).padStart(2,'0')+' - '+l.title;
  const folder=root.createFolder(name);
  const ss=SpreadsheetApp.create(name); DriveApp.getFileById(ss.getId()).moveTo(folder);
  const data=ss.getSheets()[0]; data.setName(l.tab);
  const values=l.rows.map(r=>r.map(v=>/^-?\d+(\.\d+)?$/.test(v)?Number(v):v));
  data.getRange(1,1,1,l.headers.length).setValues([l.headers]);
  data.getRange(2,1,values.length,l.headers.length).setValues(values);
  data.setFrozenRows(1); data.getRange(1,1,1,l.headers.length).setBackground('#174ea6').setFontColor('#ffffff').setFontWeight('bold'); data.autoResizeColumns(1,l.headers.length);
  const info=ss.insertSheet('Workshop Info');
  const notes=[['Field','Details'],['Lesson folder ID',folder.getId()],['Application',l.title],['What it does',l.goal],['Benefits and uses',l.uses],['Build prompt',l.prompt],['Expected outcome',l.expected],['Update prompt',l.extension],['Code blocks to review',l.blocks],['Setup','Extensions > Apps Script; paste generated code; save; run the named function; authorize only expected permissions.']];
  if([14,15,16,17,18,19,23,26,28,29].includes(i)) notes.push(['Gemini helper',GEMINI_HELPER]);
  info.getRange(1,1,notes.length,2).setValues(notes); info.setColumnWidth(1,190); info.setColumnWidth(2,750); info.getDataRange().setWrap(true).setVerticalAlignment('top'); info.setFrozenRows(1); info.getRange('A1:B1').setBackground('#174ea6').setFontColor('white').setFontWeight('bold');
  Object.entries(l.files).forEach(([n,t])=>{const d=DocumentApp.create(n);d.getBody().setText(t);d.saveAndClose();DriveApp.getFileById(d.getId()).moveTo(folder);});
  const guide=DocumentApp.create(name+' - Guide'); const b=guide.getBody(); b.appendParagraph(name).setHeading(DocumentApp.ParagraphHeading.TITLE);
  notes.slice(2).forEach(([k,v])=>{b.appendParagraph(k).setHeading(DocumentApp.ParagraphHeading.HEADING2);b.appendParagraph(v);}); b.appendParagraph('Starter data').setHeading(DocumentApp.ParagraphHeading.HEADING2);b.appendTable([l.headers,...l.rows]);guide.saveAndClose();DriveApp.getFileById(guide.getId()).moveTo(folder);
  ix.appendRow([i+1,l.title,ss.getUrl(),folder.getUrl(),guide.getUrl()]); props.setProperty("NEXT_LESSON",String(i+2));
 });
 ix.setFrozenRows(1);ix.autoResizeColumns(1,5); Logger.log(root.getUrl());
}
