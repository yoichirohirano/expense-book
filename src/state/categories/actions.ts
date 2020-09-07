/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Dispatch } from "redux";
import { CreatorsToActions } from "@/state/CreatorsToActions";
import { Category, Categories } from ".";
import types from "./types";
import categoriesDB from "@/plugins/firebase/firestore/categories";

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
  updateAllCategoriesFromFirestore: (categories: Categories) => {
    return {
      type: types.UPDATE_ALL_CATEGORIES_FROM_FIRESTORE,
      payload: categories,
    };
  },
};

export type CategoriesAction = CreatorsToActions<typeof actions>;

const thunkActions = {
  create: (uid: string | null, category: Category) => {
    return async (dispatch: Dispatch<CategoriesAction>) => {
      uid && (await categoriesDB.add(uid, category));
      return dispatch(actions.createCategory(category));
    };
  },
  update: ({
    uid,
    categoryId,
    category,
  }: {
    uid: string | null;
    categoryId: string;
    category: Category;
  }) => {
    return async (dispatch: Dispatch<CategoriesAction>) => {
      uid && (await categoriesDB.update(uid, category, categoryId));
      return dispatch(actions.updateCategory(category, categoryId));
    };
  },
  delete: (uid: string | null, categoryId: string) => {
    return async (dispatch: Dispatch<CategoriesAction>) => {
      uid && (await categoriesDB.delete(uid, categoryId));
      return dispatch(actions.deleteCategory(categoryId));
    };
  },
};

export default Object.assign({}, actions, thunkActions);
