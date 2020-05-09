import { Expense } from ".";
import { ExpensesAction } from "./actions";
import actionTypes from "./types";

export type State = {
  expenses: {
    // expenseId(date serial): expense
    [key: string]: Expense;
  };
};

const initialState: State = {
  expenses: {},
};

const reducer = (
  state: State = initialState,
  action: ExpensesAction
): State => {
  switch (action.type) {
    case actionTypes.CREATE_EXPENSE:
      state.expenses[action.payload.id] = action.payload.expense;
      return state;
    case actionTypes.UPDATE_EXPENSE:
      state.expenses[action.payload.id] = action.payload.expense;
      return state;
    case actionTypes.DELETE_EXPENSE:
      delete state.expenses[action.payload.id];
      return state;
    default:
      return state;
  }
};

export default reducer;
