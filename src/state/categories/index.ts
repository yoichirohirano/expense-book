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
export { default as categoriesActions } from "./actions";
export { default as categoriesTypes } from "./types";
export { sampleState };

export default reducer;
