import reducer from "./reducers";

export type Expense = {
  category: string;
  amount: number;
  date: Date;
  title: string;
};

export type Expenses = {
  // expenseId(date serial): expense
  [key: string]: Expense;
};

export { default as expensesSelectors } from "./selectors";
export { default as actions } from "./actions";
export { default as expensesTypes } from "./types";

export default reducer;
