/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Category, Categories } from ".";
import { Budget } from "@/state/budgets";

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
  // カテゴリ名からカテゴリIDを取得する
  getNameFromId: (categories: Categories, name: string): string => {
    const res = Object.entries(categories).find(([id, category]) => {
      return category.name === name;
    });
    return res ? res[0] : "";
  },
  getTotalAmount: (categories: Categories) => {
    return Object.entries(categories).reduce(
      (accumulator: number, [key, value]: [string, Category]) => {
        return accumulator + value.defaultAmount;
      },
      0
    );
  },
  getDefaultBudget: (categories: Categories): Budget => {
    const defaultBudget: Budget = {};
    Object.entries(categories).forEach(([key, value]) => {
      defaultBudget[value.name] = value.defaultAmount;
    });
    return defaultBudget;
  },
};

export default selectors;
