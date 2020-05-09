/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Budget } from ".";

const selectors = {
  getSelectedBudget: (budgets: Array<Budget>, selectedId: string) => {
    return Object.entries(budgets).find(([key]) => {
      return key === selectedId;
    });
  },
};

export default selectors;
