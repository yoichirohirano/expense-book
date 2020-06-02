import reducer from "./reducers";

export type Budget = {
  // Food: 30000
  [key: string]: number;
};

export type Budgets = {
  // Date.prototype.toDateString(): budget
  [key: string]: Budget;
};

export { default as budgetsSelectors } from "./selectors";
export { default as actions } from "./actions";
export { default as types } from "./types";

export default reducer;
