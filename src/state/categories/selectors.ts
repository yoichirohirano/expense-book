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
  // TODO: 削除
  // カテゴリ名からカテゴリIDを取得する
  getIdFromName: (categories: Categories, name: string): string => {
    const res = Object.entries(categories).find(([id, category]) => {
      return category.name === name;
    });
    return res ? res[0] : "";
  },
  // 全カテゴリ合計額
  getTotalAmount: (categories: Categories): number => {
    return Object.entries(categories).reduce(
      (accumulator: number, [key, value]: [string, Category]) => {
        return accumulator + value.defaultAmount;
      },
      0
    );
  },
  // デフォルト予算
  getDefaultBudget: (categories: Categories): Budget => {
    const defaultBudget: Budget = {};
    Object.entries(categories).forEach(([id, category]) => {
      const budgetCategoryID = new Date().getTime();
      defaultBudget[budgetCategoryID] = {
        amount: category.defaultAmount,
        category: {
          name: category.name,
          ref: id,
        },
      };
    });
    return defaultBudget;
  },
};

export default selectors;
