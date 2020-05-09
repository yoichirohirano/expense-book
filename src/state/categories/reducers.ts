import { Category } from ".";
import { CategoriesAction } from "./actions";
import actionTypes from "./types";

export type State = {
  categories: {
    // categoryId(same as category.name) : category
    [key: string]: Category;
  };
};

const initialState: State = {
  categories: {},
};

const reducer = (
  state: State = initialState,
  action: CategoriesAction
): State => {
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY:
      state.categories[action.payload.category.name] = action.payload.category;
      return state;
    case actionTypes.UPDATE_CATEGORY:
      delete state.categories[action.payload.id];
      state.categories[action.payload.category.name] = action.payload.category;
      return state;
    case actionTypes.DELETE_CATEGORY:
      delete state.categories[action.payload.id];
      return state;
    default:
      return state;
  }
};

export default reducer;
