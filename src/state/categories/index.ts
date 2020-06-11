import reducer, { sampleState } from "./reducers";

export type Category = {
  defaultAmount: number;
  name: string;
  sortIndex: number;
};

export type Categories = {
  [id: string]: Category;
};

export { default as categoriesSelectors } from "./selectors";
export { default as actions } from "./actions";
export { default as types } from "./types";
export { sampleState };

export default reducer;
