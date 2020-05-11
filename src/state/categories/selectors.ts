/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Category } from ".";
import { State } from "./reducers";

const selectors = {
  getSelectedCategory: (
    categories: State,
    selectedId: string
  ): Category | null => {
    const res = Object.entries(categories).find(([key]) => {
      return key === selectedId;
    });
    return res ? res[1] : null;
  },
};

export default selectors;
