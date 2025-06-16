# 📋 Customer Management CRUD App (Google Apps Script + Google Sheets + Bootstrap)

This project is a simple **CRUD (Create, Read, Update, Delete)** web application built using **Google Apps Script**, **Google Sheets** as a backend database, and **Bootstrap 5** for the frontend UI. It allows users to manage a list of customers with fields: `Customer ID`, `First Name`, `Last Name`, and `Phone`.

---

## 🛠 Features

- ✅ Create a new customer
- 📄 Read and display all customers in a table
- ✏️ Update customer details (can be extended)
- ❌ Delete a customer
- 🔗 Google Sheets used as a backend
- 🎨 Clean UI with Bootstrap 5
- ⚡ Fully serverless deployment using Apps Script

---

## 📁 Project Structure

├── Code.gs # Apps Script backend code (API logic)
├── index.html # Frontend HTML with Bootstrap UI
└── README.md # This file


---

## 🧪 How to Use

1. **Create a Google Sheet**

   - Add this header row in the first sheet (Sheet1):

     ```
     Customer ID | First Name | Last Name | Phone
     ```

2. **Open Apps Script**

   - Go to [script.google.com](https://script.google.com)
   - Click `New Project`

3. **Paste Code**

   - Copy contents of `Code.gs` and `index.html` into your script project.
   - Rename the sheet to `Sheet1` if it's not already.

4. **Deploy**

   - Go to `Deploy > Test deployments` or `Deploy > Web app`
   - Set:
     - **Execute as**: Me
     - **Who has access**: Anyone (or Anyone with the link)
   - Click **Deploy**

5. **Done!** You now have a working web-based CRUD app!

---

## 🧩 Tech Stack

- **Google Apps Script** – serverless backend
- **Google Sheets** – data storage
- **HTML + Bootstrap 5** – UI and layout
- **Apps Script Web App** – deployment platform

---

## 🧠 Future Improvements (Ideas)

- Add customer update functionality with a modal form
- Search/filter customers by name or phone
- Form validation + duplicate check
- Export to CSV or XLSX
- Role-based access

---

## 📸 Demo Screenshot

![Image ALT](https://i.imgur.com/aBYJRNW.png)

---


