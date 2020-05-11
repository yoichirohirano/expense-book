/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Expense, Expenses } from ".";

const selectors = {
  getSelectedExpense: (
    expenses: Expenses,
    selectedId: string
  ): Expense | null => {
    const res = Object.entries(expenses).find(([key]) => {
      return key === selectedId;
    });
    return res ? res[1] : null;
  },
};

export default selectors;
