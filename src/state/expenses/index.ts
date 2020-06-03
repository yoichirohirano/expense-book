import reducer from "./reducers";

export type Expense = {
  amount: number;
  category: string;
  // YYYYMMDDTHHMMSS
  date: string;
  name: string;
};

export type Expenses = {
  // expenseId(random): expense
  [key: string]: Expense;
};

export { default as expensesSelectors } from "./selectors";
export { default as expenseActions } from "./actions";
export { default as expensesTypes } from "./types";

export default reducer;
