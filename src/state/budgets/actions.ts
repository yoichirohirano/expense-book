/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Dispatch } from "redux";
import { CreatorsToActions } from "@/state/CreatorsToActions";
import { CategoryBudget } from ".";
import types from "./types";
import expensesDB from "@/plugins/firebase/firestore/expenses";

const actions = {
  createBudget: (budget: CategoryBudget, id: string) => {
    return { type: types.CREATE_BUDGET, payload: { budget, id } };
  },
  updateBudget: (budget: CategoryBudget, id: string) => {
    return { type: types.UPDATE_BUDGET, payload: { budget, id } };
  },
  deleteBudget: (id: string) => {
    return { type: types.DELETE_BUDGET, payload: { id } };
  },
};

export type BudgetsAction = CreatorsToActions<typeof actions>;

const thunkActions = {
  create: (uid: string | null, expense: Expense) => {
    return async (dispatch: Dispatch<BudgetsAction>) => {
      uid && (await expensesDB.add(uid, expense));
      return dispatch(actions.createExpense(expense));
    };
  },
  update: (uid: string | null, expense: Expense, expenseId: string) => {
    return async (dispatch: Dispatch<BudgetsAction>) => {
      uid && (await expensesDB.update(uid, expense, expenseId));
      return dispatch(actions.updateExpense(expense, expenseId));
    };
  },
  delete: (uid: string | null, expenseId: string) => {
    return async (dispatch: Dispatch<BudgetsAction>) => {
      uid && (await expensesDB.delete(uid, expenseId));
      return dispatch(actions.deleteExpense(expenseId));
    };
  },
};

export default Object.assign({}, actions, thunkActions);
