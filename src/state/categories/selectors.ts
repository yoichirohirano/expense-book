/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Category, Categories } from ".";

const selectors = {
  getSelectedCategory: (
    categories: Categories,
    selectedId: string
  ): Category | null => {
    const res = Object.entries(categories).find(([key]) => {
      return key === selectedId;
    });
    return res ? res[1] : null;
  },
  getTotalAmount: (categories: Categories) => {
    return Object.entries(categories).reduce(
      (accumulator: number, [key, value]: [string, Category]) => {
        return accumulator + value.defaultAmount;
      },
      0
    );
  },
};

export default selectors;
