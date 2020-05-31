import { Budgets } from ".";
import { BudgetsAction } from "./actions";
import actionTypes from "./types";

const initialState: Budgets = {
  budgets: {},
};

const reducer = (
  state: Budgets = initialState,
  action: BudgetsAction
): Budgets => {
  switch (action.type) {
    case actionTypes.CREATE_BUDGET:
      state[action.payload.id] = action.payload.budget;
      return Object.assign({}, state);
    case actionTypes.UPDATE_BUDGET:
      state[action.payload.id] = action.payload.budget;
      return Object.assign({}, state);
    case actionTypes.DELETE_BUDGET:
      delete state[action.payload.id];
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default reducer;
