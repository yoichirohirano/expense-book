import reducer from "./reducers";

export type Budget = {
  // categoryId: amount
  [key: string]: number;
};

export type Budgets = {
  // YYYYMM: budget
  [key: string]: Budget;
};

export { default as selectors } from "./selectors";
export { default as types } from "./types";

export default reducer;
