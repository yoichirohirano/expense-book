/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Category } from ".";

const selectors = {
  getSelectedCategory: (categories: Array<Category>, selectedId: string) => {
    return Object.entries(categories).find(([key]) => {
      return key === selectedId;
    });
  },
};

export default selectors;
