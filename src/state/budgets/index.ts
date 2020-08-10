import reducer, { sampleState } from "./reducers";

export type Budget = {
  amount: number;
  category: {
    id: string;
    name: string;
  };
};

export type BudgetCollection = {
  [budgetId: string]: Budget;
};

export type Budgets = {
  [yyyymm: string]: {
    budget: BudgetCollection;
  };
};

export type BudgetsCollection = {
  [budgetId: string]: Budgets;
};

export { default as budgetsSelectors } from "./selectors";
export { default as budgetsActions } from "./actions";
export { default as budgetsTypes } from "./types";
export { sampleState };

export default reducer;
