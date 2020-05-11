import reducer from "./reducers";

export type Category = {
  name: string;
  defaultBudget: number;
  color: string;
};

export type Categories = {
  // categoryId(same as category.name) : category
  [key: string]: Category;
};

export { default as selectors } from "./selectors";
export { default as actions } from "./actions";
export { default as types } from "./types";

export default reducer;
