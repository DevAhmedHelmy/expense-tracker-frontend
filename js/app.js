import { clearForm, clearValidationErrors, renderExpensesTable, renderHighestExpenseSummary, renderTotalSummary, showValidationErrors } from "./dom.js";
import { addExpense, deleteExpenseById, getExpensesByCategory, getHighestExpense, getTotalExpenses } from "./state.js";
import { validateExpenseInput } from "./validation.js";

const form = document.getElementById("expense-form");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const filterCategorySelect = document.getElementById("filter-category");

 

function refreshUI() {
  const currentCategory = filterCategorySelect.value;
  const expenses = getExpensesByCategory(currentCategory);
  const total = getTotalExpenses(expenses);
  const highest = getHighestExpense(expenses);

  renderExpensesTable(expenses,handleDeleteExpense);
  renderTotalSummary(total);
  renderHighestExpenseSummary(highest)
}

function handleDeleteExpense(id) {
  console.log("Deleting expense with id:", id);
  const expenses =  deleteExpenseById(id);
  console.log(expenses);
  refreshUI();
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    title: titleInput.value,
    amount: amountInput.value,
    category: categoryInput.value,
    date: dateInput.value
  };

  const { isValid, errors } = validateExpenseInput(data);
  if (!isValid) {
    console.log(errors);
    showValidationErrors(errors);
    return;
  }
  clearValidationErrors();
  addExpense(data);
  clearForm(form);
  refreshUI();
});

// filter expenses by category
filterCategorySelect.addEventListener("change", () => {
  refreshUI();
});

// delete expense
