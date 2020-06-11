import reducer, { sampleState } from "./reducers";

export type Expense = {
  amount: number;
  // categoryId
  // TODO: Firestore連携後、リファレンス型にする
  category: {
    name: string;
    ref: string;
  };
  // クエリ検索用
  // TODO: Firestore連携後、タイムスタンプ型にする
  date: Date;
  // YYYYMMDDTHHmmSS
  dateStr: string;
  name: string;
};

export type Expenses = {
  [id: string]: Expense;
};

export { default as expensesSelectors } from "./selectors";
export { default as expenseActions } from "./actions";
export { default as expensesTypes } from "./types";
export { sampleState };

export default reducer;
