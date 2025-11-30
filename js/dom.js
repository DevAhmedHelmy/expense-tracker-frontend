// show validation errors
import { formatCurrency } from "./utils.js";
const tbody = document.getElementById("expense-tbody");
const totalAmountEl = document.getElementById("total-amount");
const highestExpenseEl = document.getElementById("highest-expense");
const noExpensesMsg = document.getElementById("no-expenses-msg");
export function showValidationErrors(errors = []) {
  const fields = ["title", "amount", "category"];

  fields.forEach((field) => {
    const el = document.querySelector(`.error-msg[data-error-for="${field}"]`);
    if (!el) return;
    const fieldErrors = errors[field] || [];
    el.textContent = fieldErrors.length ? fieldErrors[0] : "";
  });
}

export function clearValidationErrors() {
  document
    .querySelectorAll(".error-msg")
    .forEach((el) => (el.textContent = ""));
}
export function clearForm(form) {
  form.reset();
}

export function renderExpensesTable(expenses = [],onDeleteClick) {
  tbody.innerHTML = "";

  if (!expenses.length) {
    noExpensesMsg.style.display = "block";
    return;
  }

  noExpensesMsg.style.display = "none";

  expenses.forEach((exp) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${exp.title}</td>
      <td>${formatCurrency(exp.amount)}</td>
      <td>${exp.category}</td>
      <td>${exp.date}</td>
      <td>
        <button class="btn-delete" data-id="${exp.id}">Delete</button>
      </td>
    `;

    tbody.appendChild(tr);
  });

    tbody.querySelectorAll(".btn-delete").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        onDeleteClick(id);
      });
    });
}

export function renderTotalSummary(total=0){
    totalAmountEl.textContent = formatCurrency(total);
}

export function renderHighestExpenseSummary(highestExpense=null){
    if (!highestExpense) {
    highestExpenseEl.textContent = "—";
  } else {
    highestExpenseEl.textContent = `${highestExpense.title} (${formatCurrency(
      highestExpense.amount
    )})`;
  }
}