/* eslint-disable @typescript-eslint/explicit-function-return-type */
import moment from "moment";
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
  // 年月のリスト
  getMonths: (expenses: Expenses): Array<string> => {
    return Object.entries(expenses).map(([key]) => {
      return key;
    });
  },
  // 指定月の出費リスト
  getListOfMonth: (expenses: Expenses, id: string): Array<Expense> => {
    const firstDayOfMonth = moment(id);
    const firstDayOfNextMonth = moment(id).add(1, "M");
    return Object.entries(expenses)
      .filter(([id, expense]) => {
        return (
          moment(expense.date).isAfter(firstDayOfMonth) &&
          moment(expense.date).isBefore(firstDayOfNextMonth)
        );
      })
      .map(([id, expense]) => {
        return expense;
      });
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
