import { generateUUID } from "./utils.js";
let expenses = [];

export function addExpense(expense) {
  expense = { ...expense, id: generateUUID(expense.title) };
  expenses = [...expenses, expense];
  return expense;
}

export function getExpensesByCategory(category = "") {
  let result =
    !category || category === "all"
      ? [...expenses]
      : expenses.filter((exp) => exp.category === category);

  // sort by date DESC
  result.sort((a, b) => new Date(b.date) - new Date(a.date));
  return result;
}

export function deleteExpenseById(id) {
  return expenses.filter((expense) => expense.id !== id);
}

export function getTotalExpenses(list = []) {
  let total = 0;
  list.forEach((exp) => (total += exp.amount));
  return total;
}

export function getHighestExpense(list = []) {
  if (!list.length) return null;
  return list.reduce((max, expense) =>
    expense.amount > max.amount ? expense : max
  );
}
