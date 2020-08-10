import reducer, { sampleState } from "./reducers";

export type BudgetDocumentData = {
  amount: number;
  category: {
    id: string;
    name: string;
  };
};

export type Budget = {
  [budgetId: string]: BudgetDocumentData;
};

export type Budgets = {
  [yyyymm: string]: {
    budget: Budget;
  };
};

export { default as budgetsSelectors } from "./selectors";
export { default as budgetsActions } from "./actions";
export { default as budgetsTypes } from "./types";
export { sampleState };

export default reducer;
