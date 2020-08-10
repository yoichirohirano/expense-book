/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Dispatch } from "redux";
import { CreatorsToActions } from "@/state/CreatorsToActions";
import { Expense, Expenses } from ".";
import types from "./types";
import expensesDB from "@/plugins/firebase/firestore/expenses";

const actions = {
  createExpense: (expense: Expense) => {
    return { type: types.CREATE_EXPENSE, payload: { expense } };
  },
  updateExpense: (expense: Expense, id: string) => {
    return { type: types.UPDATE_EXPENSE, payload: { expense, id } };
  },
  deleteExpense: (id: string) => {
    return { type: types.DELETE_EXPENSE, payload: { id } };
  },
  updateAllExpensesFromFirestore: (expenses: Expenses) => {
    return {
      type: types.UPDATE_ALL_EXPENSES_FROM_FIRESTORE,
      payload: expenses,
    };
  },
};

export type ExpensesAction = CreatorsToActions<typeof actions>;

const thunkActions = {
  create: (uid: string | null, expense: Expense) => {
    return async (dispatch: Dispatch<ExpensesAction>) => {
      uid && (await expensesDB.add(uid, expense));
      return dispatch(actions.createExpense(expense));
    };
  },
};

export default Object.assign({}, actions, thunkActions);
