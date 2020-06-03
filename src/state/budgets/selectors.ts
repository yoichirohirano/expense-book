/* eslint-disable @typescript-eslint/explicit-function-return-type */
import moment from "moment";
import { Budget, Budgets } from ".";

const selectors = {
  getSelectedBudget: (budgets: Budgets, id: string): Budget | null => {
    const res = Object.entries(budgets).find(([key]) => {
      return key === id;
    });
    return res ? res[1] : null;
  },
  getSelectedBudgetIndex: (budgets: Budgets, id: string): number => {
    const index = Object.entries(budgets).findIndex(([key]) => {
      return key === id;
    });
    return index || 0;
  },
  // 年月(YYYY/MM表示)のリスト
  getMonths: (budgets: Budgets): Array<string> => {
    return Object.entries(budgets).map(([key]) => {
      return moment(key).format("YYYY/MM");
    });
  },
  getBudgetAmount: (budgets: Budgets, id: string): number => {
    console.log(id);
    const budget = budgets[id];
    if (!budget) return 0;
    return Object.entries(budgets[id]).reduce(
      (accumulator: number, [key, value]: [string, number]) => {
        return accumulator + value;
      },
      0
    );
  },
};

export default selectors;
