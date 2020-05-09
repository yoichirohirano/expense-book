import { CreatorsToActions } from "@/state/CreatorsToActions";
import { Category } from ".";
import types from "./types";

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

export default actions;
