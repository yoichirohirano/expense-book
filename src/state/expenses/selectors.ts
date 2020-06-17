/* eslint-disable @typescript-eslint/explicit-function-return-type */
import moment from "moment";
import { Expense, Expenses } from ".";

/**
 * 指定月の支出を絞込んで取得する
 * @param expenses
 * @param id YYYYMM
 */
const getExpensesOfMonth = (expenses: Expenses, yyyymm: string): Expenses => {
  const result: Record<string, Expense> = {};
  const firstDayOfMonth = moment(yyyymm);
  const firstDayOfNextMonth = moment(yyyymm).add(1, "M");
  Object.entries(expenses)
    .filter(([, expense]) => {
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
  getExpenseListOfMonth: (
    expenses: Expenses,
    yyyymm: string
  ): Array<Expense> => {
    return Object.entries(getExpensesOfMonth(expenses, yyyymm)).map(
      ([, expense]) => {
        return expense;
      }
    );
  },
  // 指定月の日付別出費リスト配列 {YYYY/MM/DD :Expenses}
  getDailyExpenseListOfMonth: (
    expenses: Expenses,
    yyyymm: string
  ): Array<{
    yyyymmddWithSlash: string;
    expenses: Expenses;
  }> => {
    const result: Array<{
      yyyymmddWithSlash: string;
      expenses: Expenses;
    }> = [];
    Object.entries(getExpensesOfMonth(expenses, yyyymm)).forEach(
      ([expenseId, expense]) => {
        const yyyymmddWithSlash = moment(expense.dateStr).format("YYYY/MM/DD");

        // すでに同日付のアイテムがあるかを検索する
        const resultItem = result.find((item) => {
          return item.yyyymmddWithSlash === yyyymmddWithSlash;
        });
        // すでに同日付のアイテムがある場合、既存のアイテム内のexpensesに追加する
        if (resultItem) {
          resultItem.expenses[expenseId] = expense;
          // 同日付のアイテムがない場合、新しくアイテムを作成する
        } else {
          const expenses: Expenses = {};
          expenses[expenseId] = expense;
          result.push({
            yyyymmddWithSlash,
            expenses,
          });
        }
      }
    );
    // 日付の降順にソート
    result.sort((a, b) => {
      return a.yyyymmddWithSlash < b.yyyymmddWithSlash ? 1 : -1;
    });
    return result;
  },
  // 指定月の出費合計金額
  getExpenseAmountOfMonth: (expenses: Expenses, yyyymm: string): number => {
    const expensesOfMonth: Array<number> = Object.entries(
      getExpensesOfMonth(expenses, yyyymm)
    ).map(([, expense]) => {
      return expense.amount;
    });
    return expensesOfMonth.reduce(
      (accumulator: number, currentValue: number): number => {
        return accumulator + currentValue;
      },
      0
    );
  },
};

export default selectors;
