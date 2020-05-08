import { CreatorsToActions } from "@/state/CreatorsToActions";
import { Category } from ".";
import types from "./types";

const actions = {
  createCategory: (category: Category) => {
    return { type: types.CREATE_CATEGORY, payload: category };
  },
  updateCategory: (category: Category) => {
    return { type: types.UPDATE_CATEGORY, payload: category };
  },
  deleteCategory: (category: Category) => {
    return { type: types.DELETE_CATEGORY, payload: category };
  },
};

export type CategoriesActions = CreatorsToActions<typeof actions>;

export default actions;
