/* eslint-disable @typescript-eslint/explicit-function-return-type */
import moment from "moment";
import { Budget, Budgets } from ".";

const selectors = {
  // 指定月の予算
  getSelectedBudget: (budgets: Budgets, yyyymm: string): Budget | null => {
    const res = Object.entries(budgets).find(([key]) => {
      return key === yyyymm;
    });
    return res ? res[1].budget : null;
  },
  // 指定月の予算のインデックス
  getSelectedBudgetIndex: (budgets: Budgets, yyyymm: string): number => {
    // TODO: 日付順にソートする必要？
    const index = Object.entries(budgets).findIndex(([key]) => {
      return key === yyyymm;
    });
    return index && index > 0 ? index : 0;
  },
  // 年月(YYYY/MM表示)のリスト
  getMonths: (budgets: Budgets): Array<string> => {
    return Object.entries(budgets).map(([key]) => {
      return moment(key).format("YYYY/MM");
    });
  },
  // 指定月の全カテゴリ予算合計額
  getBudgetAmount: (budgets: Budgets, yyyymm: string): number => {
    const selected = budgets[yyyymm];
    if (!selected) return 0;
    const budget = budgets[yyyymm].budget;
    if (!budget) return 0;
    return Object.entries(budget).reduce((accumulator: number, [, value]) => {
      return accumulator + value.amount;
    }, 0);
  },
};

export default selectors;
