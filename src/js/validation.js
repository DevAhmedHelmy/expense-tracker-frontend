export function validateExpenseInput(data = {}) {
  const errors = {
    title: [],
    amount: [],
    category: []
  };

  const addError = (field, message) => {
    if (!errors[field]) errors[field] = [];
    errors[field].push(message);
  };

  const { title, amount, category } = data;
 
  const trimmedTitle = title == null ? "" : String(title).trim();
  if (!trimmedTitle) {
    addError("title", "Title is required");
  } else {
    if (typeof title !== "string") {
      addError("title", "Title must be a string");
    }
    if (trimmedTitle.length < 3) {
      addError("title", "Title must be at least 3 characters");
    }
  }

  
  const numericAmount = Number(amount);
  if (amount == null || String(amount).trim() === "") {
    addError("amount", "Amount is required");
  } else if (Number.isNaN(numericAmount)) {
    addError("amount", "Amount must be a number");
  } else if (numericAmount <= 0) {
    addError("amount", "Amount must be greater than 0");
  }


  if (category && typeof category !== "string") {
    addError("category", "Category must be a string");
  }

  const isValid =
    errors.title.length === 0 &&
    errors.amount.length === 0 &&
    errors.category.length === 0;

  return { isValid, errors };
}
