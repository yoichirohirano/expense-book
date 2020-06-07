/* eslint-disable @typescript-eslint/explicit-function-return-type */
import moment from "moment";
import { Expense, Expenses } from ".";

// 指定月の支出を絞込んで取得する
const getListOfMonth = (expenses: Expenses, id: string): Expenses => {
  const result: Record<string, Expense> = {};
  const firstDayOfMonth = moment(id);
  const firstDayOfNextMonth = moment(id).add(1, "M");
  Object.entries(expenses)
    .filter(([id, expense]) => {
      return (
        moment(expense.date).isAfter(firstDayOfMonth) &&
        moment(expense.date).isBefore(firstDayOfNextMonth)
      );
    })
    .forEach(([id, expense]) => {
      result[id] = expense;
    });
  return result;
};

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
  // 指定月の出費リスト(Array)
  getListOfMonth: (expenses: Expenses, id: string): Array<Expense> => {
    return Object.entries(getListOfMonth(expenses, id)).map(
      ([key, expense]) => {
        return expense;
      }
    );
  },
  // 指定月の日付別出費リスト {YYYY/MM/DD :Expenses}
  getDailyExpenseListOfMonth: (
    expenses: Expenses,
    id: string
  ): Record<string, Expenses> => {
    const result: Record<string, Expenses> = {};
    Object.entries(getListOfMonth(expenses, id)).forEach(([id, item]) => {
      const yyyymmdd = moment(item.date).format("YYYY/MM/DD");
      if (!result[yyyymmdd]) result[yyyymmdd] = {};
      result[yyyymmdd][id] = item;
    });
    return result;
  },
  // 指定月の出費合計金額
  getExpenseAmountOfMonth: (expenses: Expenses, id: string): number => {
    const firstDayOfMonth = moment(id);
    const firstDayOfNextMonth = moment(id).add(1, "M");
    const expensesOfMonth = Object.entries(expenses)
      // 当月の出費を抽出
      .filter(([id, expense]) => {
        return (
          moment(expense.date).isAfter(firstDayOfMonth) &&
          moment(expense.date).isBefore(firstDayOfNextMonth)
        );
      })
      // 金額の配列を生成
      .map(([id, expense]) => {
        return expense.amount;
      });
    const incrementor = (accumulator: number, currentValue: number): number => {
      return accumulator + currentValue;
    };
    return expensesOfMonth.reduce(incrementor, 0);
  },
};

export default selectors;
