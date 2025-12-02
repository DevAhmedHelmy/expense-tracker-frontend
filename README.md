
# Expense Tracker – Mini Budget App (Webpack Version)

A simple **Expense Tracker** built using **HTML, CSS, Vanilla JavaScript (ES Modules), and Webpack**.  
The app allows users to record, manage, sort, and analyze daily expenses with a clean UI and a modular JavaScript structure bundled via Webpack.

---

## 📦 Tech Stack (Updated)

- **JavaScript (ES6 Modules)**
- **Webpack 5**
- **Webpack Dev Server**
- **CSS**
- **HTML**
- **Node.js / npm**

Webpack handles:

- Bundling JS modules  
- Optimizing & hashing output files  
- Serving files in development via Webpack Dev Server  
- Cleaning the `dist/` folder on each build

---

## 📸 Screenshots

*(Paths remain the same as your project structure)*

```
src/assets/screenshots/3025accf-a3c9-4252-b064-7c0ed4237d83.png
src/assets/screenshots/6eb449a7-251d-45a2-ae20-f7e3ef890bea.png
src/assets/screenshots/4b083588-1d0c-4c2a-97ea-7a4a1d03e6e9.png
src/assets/screenshots/3f603c93-0618-4212-a2d0-d560021d4d19.png
```

---

## 📌 Project Description

This project is a basic budgeting tool designed for learners improving their JavaScript and module bundling skills.  
It demonstrates:

- DOM manipulation  
- State management using arrays  
- Modular architecture (multiple JS files)  
- Handling forms and validation  
- Using array functions:
  - `map`, `filter`, `find`, `reduce`, `forEach`
- Spread operator `...`
- ES6 Module imports/exports  
- Webpack bundling + hashing + optimization  

The app provides an interactive UI to add, delete, sort, and filter expenses while dynamically updating totals.

---

## 🚀 Features

### ✔ Core Features

- Add new expenses (with validation)  
- Delete an expense  
- Display all expenses in a table  
- Filter by category  
- Sort by date  
- Live totals (total spent & highest expense)  
- Unique ID generation  
- Responsive UI  
- Webpack Dev Server  
- Hashed JS bundles for production

---

## 📂 Project Structure (With Webpack)

```text
expense-tracker/
│
├── dist/
│
├── src/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── app.js
│   │   ├── state.js
│   │   ├── dom.js
│   │   ├── validation.js
│   │   └── utils.js
│   └── assets/
│       └── screenshots/
│
├── webpack.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ▶️ Running the Project (Using Webpack)

### 🔹 Install Dependencies
```
npm install
```

### 🔹 Start Development Server
```
npm run start
```

### 🔹 Build For Production
```
npm run build
```

Built files will appear in `/dist`.

---

## ❤️ Author

A lightweight practical project to strengthen **JavaScript fundamentals + Webpack skills**.
