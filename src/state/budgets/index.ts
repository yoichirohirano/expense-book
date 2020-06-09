import reducer, { sampleState } from "./reducers";

export type Budget = {
  // budgetId(random)
  [key: string]: {
    amount: number;
    category: {
      // categoryId
      // TODO: Firestore連携後、リファレンス型にする
      ref: string;
      name: string;
    };
  };
};

export type Budgets = {
  // YYYYMM01T000000: Budget
  [key: string]: {
    budget: Budget;
  };
};

export { default as budgetsSelectors } from "./selectors";
export { default as actions } from "./actions";
export { default as types } from "./types";
export { sampleState };

export default reducer;
