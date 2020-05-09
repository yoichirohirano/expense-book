import reducer from "./reducers";

export type Budget = {
  // categoryId: amount
  [key: string]: number;
};

export { default as budgetsSelectors } from "./selectors";
export { default as budgetsTypes } from "./types";

export default reducer;
