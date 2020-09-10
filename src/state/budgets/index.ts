import reducer, { sampleState } from "./reducers";

// カテゴリの予算
export type CategoryBudget = {
  amount: number;
  category: {
    id: string;
    name: string;
  };
  userId: string;
};

// 月予算(FirestoreのcategoryBudgetsコレクション)
export type CategoryBudgets = {
  [budgetId: string]: CategoryBudget;
};

// 予算(Firestoreのbudgetsコレクション)
export type Budgets = {
  [yyyymm: string]: {
    categoryBudgets: CategoryBudgets;
  };
};

export { default as budgetsSelectors } from "./selectors";
export { default as budgetsActions } from "./actions";
export { default as budgetsTypes } from "./types";
export { sampleState };

export default reducer;
