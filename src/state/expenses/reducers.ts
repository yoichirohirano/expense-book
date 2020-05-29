import { Expenses } from ".";
import { ExpensesAction } from "./actions";
import actionTypes from "./types";

const initialState: Expenses = {};

const reducer = (
  state: Expenses = initialState,
  action: ExpensesAction
): Expenses => {
  switch (action.type) {
    case actionTypes.CREATE_EXPENSE: {
      const id = new Date().getTime();
      state[id] = action.payload.expense;
      return state;
    }
    case actionTypes.UPDATE_EXPENSE: {
      state[action.payload.id] = action.payload.expense;
      return Object.assign({}, state);
    }
    case actionTypes.DELETE_EXPENSE: {
      delete state[action.payload.id];
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
