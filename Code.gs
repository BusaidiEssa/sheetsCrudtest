function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

// Used to include HTML partials
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Read all customers
function getCustomers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);

  const customers = rows.map(row => {
    let customer = {};
    headers.forEach((header, index) => {
      customer[header] = row[index];
    });
    return customer;
  });

  return customers;
}

// Add a new customer
function addCustomer(customer) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const lastRow = sheet.getLastRow();
  let newId = 1;

  if (lastRow > 1) {
    const existingIds = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();
    newId = Math.max(...existingIds) + 1;
  }

  sheet.appendRow([newId, customer.firstName, customer.lastName, customer.phone]);
  return { success: true, id: newId };
}

// Update existing customer
function updateCustomer(customer) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == customer.id) {
      sheet.getRange(i + 1, 1, 1, 4).setValues([[
        customer.id,
        customer.firstName,
        customer.lastName,
        customer.phone
      ]]);
      return { success: true };
    }
  }

  return { success: false, error: "Customer not found" };
}

// Delete a customer by ID
function deleteCustomer(id) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == id) {
      sheet.deleteRow(i + 1);
      return { success: true };
    }
  }

  return { success: false, error: "Customer not found" };
}
