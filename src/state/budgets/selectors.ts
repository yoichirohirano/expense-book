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
  // 指定月の予算のインデックス 指定月がなければ0を返す
  getSelectedBudgetIndex: (budgets: Budgets, yyyymm: string): number => {
    const index = Object.entries(budgets).findIndex(([key]) => {
      return key === yyyymm;
    });
    return index >= 0 ? index : 0;
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
  /**
   * 初期表示時の月をYYYYMM形式で取得する
   * 今月の予算が設定されていれば今月、設定されていなければ予算登録月の最新月を返却する
   * 予算登録がなければ空文字を返却する
   * @param budgets
   * @returns YYYYMM
   */
  getInitialMonth: (budgets: Budgets): string => {
    const thisYYYYMM = `${moment(new Date()).format("YYYYMM")}`;
    if (budgets[thisYYYYMM]) {
      return thisYYYYMM;
    } else {
      return Object.keys(budgets).length
        ? Object.keys(budgets)[Object.keys(budgets).length - 1]
        : "";
    }
  },
};

export default selectors;
