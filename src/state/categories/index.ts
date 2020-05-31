import reducer from "./reducers";

export type Category = {
  defaultAmount: number;
  name: string;
  sortIndex: number;
};

export type Categories = {
  // categoryId(random) : category
  [key: string]: Category;
};

export { default as selectors } from "./selectors";
export { default as actions } from "./actions";
export { default as types } from "./types";

export default reducer;
