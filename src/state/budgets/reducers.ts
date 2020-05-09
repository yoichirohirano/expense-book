import { Budget } from ".";
import { BudgetsAction } from "./actions";
import actionTypes from "./types";

export type State = {
  budgets: {
    // YYYYMM: budget
    [key: string]: Budget;
  };
};

const initialState: State = {
  budgets: {},
};

const reducer = (state: State = initialState, action: BudgetsAction): State => {
  switch (action.type) {
    case actionTypes.CREATE_BUDGET:
      state.budgets[action.payload.id] = action.payload.budget;
      return state;
    case actionTypes.UPDATE_BUDGET:
      state.budgets[action.payload.id] = action.payload.budget;
      return state;
    case actionTypes.DELETE_BUDGET:
      delete state.budgets[action.payload.id];
      return state;
    default:
      return state;
  }
};

export default reducer;
