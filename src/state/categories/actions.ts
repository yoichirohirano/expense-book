/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CreatorsToActions } from "@/state/CreatorsToActions";
import { Category } from ".";
import types from "./types";
import budgetsDB from "@/plugins/firebase/firestore/budgets";

const actions = {
  createCategory: (category: Category) => {
    return { type: types.CREATE_CATEGORY, payload: { category } };
  },
  updateCategory: (category: Category, id: string) => {
    return { type: types.UPDATE_CATEGORY, payload: { category, id } };
  },
  deleteCategory: (id: string) => {
    return { type: types.DELETE_CATEGORY, payload: { id } };
  },
};

export type CategoriesAction = CreatorsToActions<typeof actions>;

// const thunkActions = {
//   create: (
//     uid: string | null,
//     categoryBudgets: CategoryBudgets,
//     yyyymm: string
//   ) => {
//     return async (dispatch: Dispatch<BudgetsAction>) => {
//       uid &&
//         (await budgetsDB.addMonthlyBudget({ uid, yyyymm, categoryBudgets }));
//       return dispatch(actions.createBudget(categoryBudgets, yyyymm));
//     };
//   },
//   update: ({
//     uid,
//     yyyymm,
//     budgetId,
//     budget,
//   }: {
//     uid: string | null;
//     budgetId: string;
//     budget: CategoryBudget;
//     yyyymm: string;
//   }) => {
//     return async (dispatch: Dispatch<BudgetsAction>) => {
//       uid &&
//         (await budgetsDB.update({
//           uid,
//           yyyymm,
//           budgetId,
//           budget,
//         }));
//       return dispatch(actions.updateBudget({ yyyymm, budgetId, budget }));
//     };
//   },
//   delete: (uid: string | null, yyyymm: string) => {
//     return async (dispatch: Dispatch<BudgetsAction>) => {
//       uid && (await budgetsDB.delete(uid, yyyymm));
//       return dispatch(actions.deleteBudget(yyyymm));
//     };
//   },
// };

export default Object.assign({}, actions);
// export default Object.assign({}, actions, thunkActions);
