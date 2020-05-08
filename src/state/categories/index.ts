import reducer from "./reducers";

export type Category = {
  name: string;
  defaultBudget: number;
  color: string;
};

export { default as categoriesSelectors } from "./selectors";
export { default as categoriesTypes } from "./types";

export default reducer;
