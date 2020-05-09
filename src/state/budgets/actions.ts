/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CreatorsToActions } from "@/state/CreatorsToActions";
import { Budget } from ".";
import types from "./types";

const actions = {
  createBudget: (budget: Budget, id: string) => {
    return { type: types.CREATE_BUDGET, payload: { budget, id } };
  },
  updateBudget: (budget: Budget, id: string) => {
    return { type: types.UPDATE_BUDGET, payload: { budget, id } };
  },
  deleteBudget: (id: string) => {
    return { type: types.DELETE_BUDGET, payload: { id } };
  },
};

export type BudgetsAction = CreatorsToActions<typeof actions>;

export default actions;
