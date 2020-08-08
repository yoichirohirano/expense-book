import reducer, { sampleState } from "./reducers";

export type Expense = {
  amount: number;
  category: {
    id: string;
    name: string;
  };
  // クエリ検索用
  date: Date;
  // YYYYMMDDTHHmmSS
  dateStr: string;
  name: string;
};

export type Expenses = {
  [id: string]: Expense;
};

export { default as expensesSelectors } from "./selectors";
export { default as expensesActions } from "./actions";
export { default as expensesTypes } from "./types";
export { sampleState };

export default reducer;
