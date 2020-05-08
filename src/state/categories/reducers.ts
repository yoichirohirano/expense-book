import { Category } from ".";
import { CategoriesActions } from "./actions";
import actionTypes from "./types";

export type State = {
  categories: Array<Category>;
};

const initialState: State = {
  categories: [],
};

const reducer = (
  state: State = initialState,
  action: CategoriesActions
): State => {
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY:
      return Object.assign({}, state, {});
    case actionTypes.UPDATE_CATEGORY:
      return Object.assign({}, state, {});
    case actionTypes.DELETE_CATEGORY:
      return Object.assign({}, state, {});
    default:
      return state;
  }
};

export default reducer;
