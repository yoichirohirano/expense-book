/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Budget, Budgets } from ".";

const selectors = {
  getSelectedBudget: (budgets: Budgets, selectedId: string): Budget | null => {
    const res = Object.entries(budgets).find(([key]) => {
      return key === selectedId;
    });
    return res ? res[1] : null;
  },
  getBudgetAmount: (budgets: Budgets, selectedId: string) => {
    return Object.entries(budgets[selectedId]).reduce(
      (accumulator: number, [key, value]: [string, number]) => {
        return accumulator + value;
      },
      0
    );
  },
};

export default selectors;
