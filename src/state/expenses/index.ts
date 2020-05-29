import reducer from "./reducers";

export type Expense = {
  amount: number;
  category: string;
  date: Date;
  name: string;
};

export type Expenses = {
  // expenseId(random): expense
  [key: string]: Expense;
};

export { default as expensesSelectors } from "./selectors";
export { default as actions } from "./actions";
export { default as expensesTypes } from "./types";

export default reducer;
