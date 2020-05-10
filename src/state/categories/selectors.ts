/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Category } from ".";

const selectors = {
  getSelectedCategory: (
    categories: {
      [key: string]: Category;
    },
    selectedId: string
  ): Category | null => {
    const res = Object.entries(categories).find(([key]) => {
      return key === selectedId;
    });
    return res ? res[1] : null;
  },
};

export default selectors;
