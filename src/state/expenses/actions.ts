/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Dispatch } from "redux";
import { CreatorsToActions } from "@/state/CreatorsToActions";
import { Expense, Expenses } from ".";
import types from "./types";
import expensesDB from "@/plugins/firebase/firestore/expenses";

function createExpenseFunction(expense: Expense) {
  return { type: types.CREATE_EXPENSE, payload: { expense } };
}

const actions = {
  createExpense: (uid: string, expense: Expense) => {
    return async (dispatch: Dispatch<any>) => {
      await expensesDB.add(uid, expense);
      dispatch(createExpenseFunction(expense));
    };
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

export default actions;
