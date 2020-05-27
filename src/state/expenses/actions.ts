/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CreatorsToActions } from "@/state/CreatorsToActions";
import { Expense } from ".";
import types from "./types";

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
};

export type ExpensesAction = CreatorsToActions<typeof actions>;

export default actions;
