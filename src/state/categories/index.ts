import reducer from "./reducers";

export type Category = {
  name: string;
  defaultBudget: number;
  color: string;
};

export { default as selectors } from "./selectors";
export { default as actions } from "./actions";
export { default as categoriesTypes } from "./types";

export default reducer;
