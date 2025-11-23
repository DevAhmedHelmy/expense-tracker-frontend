# Expense Tracker – Mini Budget App

A simple **Expense Tracker** built using **HTML, CSS, and Vanilla JavaScript (ES Modules)**.  
The app allows users to record, manage, sort, and analyze their daily expenses with a clean user interface and modular JavaScript structure.

---
## 📸 Screenshots

### ➤ Add Expense Form (Empty)
![Add Expense Form Empty](/assets/screenshots/3025accf-a3c9-4252-b064-7c0ed4237d83.png)

---

### ➤ Validation Errors
![Validation Errors](/assets/screenshots/6eb449a7-251d-45a2-ae20-f7e3ef890bea.png)

---

### ➤ Expenses Table (After Adding Expenses)
![Expenses Table](/assets/screenshots/4b083588-1d0c-4c2a-97ea-7a4a1d03e6e9.png)

---

### ➤ Full Dashboard View
![Full Dashboard](/assets/screenshots/3f603c93-0618-4212-a2d0-d560021d4d19.png)

## 📌 Project Description

This project is a basic budgeting tool designed for students learning JavaScript fundamentals.  
It demonstrates how to:

- Work with **DOM** (Document Object Model)
- Manage state using **JavaScript arrays**
- Apply **modular code structure** with multiple JS files
- Handle **forms** and **validation**
- Use essential JavaScript features such as:
  - `map`
  - `filter`
  - `find`
  - `forEach`
  - `reduce`
  - Spread operator `...`
  - ES6 modules (`import` / `export`)

The app provides an interactive UI to add, delete, filter, and sort expenses while dynamically updating total and highest expense values.

---

## 🚀 Features

### ✔️ Core Features
- Add new expenses (with validation: title & amount required)
- Delete an expense
- List all expenses in a table
- Filter by category
- Sort expenses by date (newest → oldest)
- Live calculation of:
  - Total expense amount
  - Highest expense
- Auto-generate unique IDs for expenses
- Form error messages below each input
- Clean and responsive UI

### ✔️ Code Architecture (JS Modules)
The project uses a multi-file JavaScript structure:
expense-tracker/
│
├── index.html
├── README.md
│
├── css/
│ └── style.css
│
└── js/
├── app.js
├── state.js
├── dom.js
├── validation.js
├── utils.js

## ▶️ How to Run the Project

Because the project uses **ES Modules**, you *must* run it from a local server.  
Opening `index.html` directly using `file://` will break imports.

### 🔹 Using VSCode Live Server (Recommended)
1. Install the VS Code extension **Live Server**
2. Right-click `index.html`
3. Click **"Open with Live Server"**
4. Your browser will open at
   `http://127.0.0.1:5500/` or similar.