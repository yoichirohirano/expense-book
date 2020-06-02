import { Budgets } from ".";
import { BudgetsAction } from "./actions";
import actionTypes from "./types";

const initialState: Budgets = {
  "Wed Apr 01 2020": {
    Food: 30000,
    Drink: 20000,
  },
  "Fri May 01 2020": {
    Food: 30000,
    Book: 3000,
  },
  "Mon Jun 01 2020": {
    Food: 30000,
    Drink: 20000,
    Book: 3000,
  },
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
