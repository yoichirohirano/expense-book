import reducer from "./reducers";

export type Expense = {
  category: string;
  amount: number;
  date: Date;
  title: string;
};

export { default as expensesSelectors } from "./selectors";
export { default as expensesTypes } from "./types";

export default reducer;
