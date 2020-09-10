/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Dispatch } from "redux";
import { CreatorsToActions } from "@/state/CreatorsToActions";
import { CategoryBudget, CategoryBudgets, Budgets } from ".";
import types from "./types";
import budgetsDB from "@/plugins/firebase/firestore/budgets";

const actions = {
  createBudget: (categoryBudgets: CategoryBudgets, yyyymm: string) => {
    return { type: types.CREATE_BUDGET, payload: { categoryBudgets, yyyymm } };
  },
  updateBudget: ({
    yyyymm,
    budgetId,
    budget,
  }: {
    yyyymm: string;
    budgetId: string;
    budget: CategoryBudget;
  }) => {
    return { type: types.UPDATE_BUDGET, payload: { yyyymm, budgetId, budget } };
  },
  deleteBudget: (yyyymm: string) => {
    return { type: types.DELETE_BUDGET, payload: { yyyymm } };
  },
  updateAllBudgetsFromFirestore: (budgets: Budgets) => {
    return {
      type: types.UPDATE_ALL_BUDGETS_FROM_FIRESTORE,
      payload: budgets,
    };
  },
};

export type BudgetsAction = CreatorsToActions<typeof actions>;

const thunkActions = {
  create: (
    uid: string | null,
    categoryBudgets: CategoryBudgets,
    yyyymm: string
  ) => {
    return async (dispatch: Dispatch<BudgetsAction>) => {
      uid &&
        (await budgetsDB.addMonthlyBudget({ uid, yyyymm, categoryBudgets }));
      return dispatch(actions.createBudget(categoryBudgets, yyyymm));
    };
  },
  update: ({
    uid,
    yyyymm,
    budgetId,
    budget,
  }: {
    uid: string | null;
    budgetId: string;
    budget: CategoryBudget;
    yyyymm: string;
  }) => {
    return async (dispatch: Dispatch<BudgetsAction>) => {
      uid &&
        (await budgetsDB.update({
          uid,
          yyyymm,
          budgetId,
          budget,
        }));
      return dispatch(actions.updateBudget({ yyyymm, budgetId, budget }));
    };
  },
  delete: (uid: string | null, yyyymm: string) => {
    return async (dispatch: Dispatch<BudgetsAction>) => {
      uid && (await budgetsDB.delete(uid, yyyymm));
      return dispatch(actions.deleteBudget(yyyymm));
    };
  },
};

export default Object.assign({}, actions, thunkActions);
