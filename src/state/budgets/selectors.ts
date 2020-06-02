/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Budget, Budgets } from ".";

const selectors = {
  getSelectedBudget: (budgets: Budgets, id: string): Budget | null => {
    const res = Object.entries(budgets).find(([key]) => {
      return key === id;
    });
    return res ? res[1] : null;
  },
  getBudgetAmount: (budgets: Budgets, id: string) => {
    return Object.entries(budgets[id]).reduce(
      (accumulator: number, [key, value]: [string, number]) => {
        return accumulator + value;
      },
      0
    );
  },
};

export default selectors;
