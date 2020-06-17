import moment from "moment";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import Chart, { ChartProps } from "@/components/molecules/Chart";
import MonthTabs, { MonthTabsProps } from "@/components/atoms/MonthTabs";
import AddItemDrawer from "@/components/molecules/AddItemDrawer";
import Navigation from "@/components/atoms/Navigation";
import AddButton from "@/components/atoms/AddButton";
import { ChartItem } from "@/components/atoms/ExpenseChart";
import { categoriesSelectors, Categories } from "@/state/categories";
import {
  expenseActions,
  Expense,
  Expenses,
  expensesSelectors,
} from "@/state/expenses";
import { budgetsSelectors, Budgets } from "@/state/budgets";
import { RootState } from "@/state/store";
import { addButtonWrapperStyle } from "./style";

const colorList = ["#489ec8", "#5f3aaf", "#ca4555"];

// インデックスから色を取得する
const getColor = (index: number, colorList: Array<string>): string => {
  const num = index % colorList.length;
  const color = colorList.find((item, index) => {
    return index === num;
  });
  return color || colorList[0];
};

const ChartView: React.FC = () => {
  const budgets = useSelector<RootState, Budgets>((state) => state.budgets);
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );
  const expenses = useSelector<RootState, Expenses>((state) => state.expenses);
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  // YYYYMM
  const [currentYYYYMM, setCurrentYYYYMM] = useState<string>(
    `${moment(new Date()).format("YYYYMM")}`
  );

  // チャートに表示するデータをstoreの情報から生成する
  const getChartItems = (): Array<ChartItem> => {
    const budget =
      budgetsSelectors.getSelectedBudget(budgets, currentYYYYMM) ||
      categoriesSelectors.getDefaultBudget(categories);
    // 予算からカテゴリ名/予算の情報配列を作成
    const chartItems: Array<ChartItem> = Object.entries(budget).map(
      ([id, budget], index) => {
        return {
          categoryName: budget.category.name,
          budget: budget.amount,
          amount: 0,
          sortIndex: 0,
          color: getColor(index, colorList),
        };
      }
    );
    // TODO: 未分類を追加
    // chartItems.push({
    //   categoryName: "未分類",
    //   budget: 0,
    //   amount: 0,
    //   sortIndex: chartItems.length,
    //   color: getColor(chartItems.length, colorList),
    // });
    // 出費をカテゴリ別に計上
    const expenseList = expensesSelectors.getExpenseListOfMonth(
      expenses,
      currentYYYYMM
    );
    expenseList.forEach((expense) => {
      chartItems.forEach((item) => {
        if (item.categoryName === expense.category.name) {
          item.amount += expense.amount;
          return;
        }
      });
    });
    // ソート順の情報をcategoriesから付与
    Object.entries(categories).forEach(([id, category]) => {
      chartItems.forEach((item) => {
        if (item.categoryName === category.name) {
          item.sortIndex = category.sortIndex;
        }
      });
    });
    // indexの降順にソート(結果的に昇順に表示される)
    chartItems.sort((a, b) => {
      return a.sortIndex > b.sortIndex ? 1 : -1;
    });
    return chartItems;
  };

  const changeMonth = (index: number): void => {
    // indexからbudgetIdを取得して設定
    const [id] = Object.entries(budgets)[index];
    setCurrentYYYYMM(id);
  };

  const chartProps: ChartProps = {
    expenseAmount: expensesSelectors.getExpenseAmountOfMonth(
      expenses,
      currentYYYYMM
    ),
    budgetAmount: budgetsSelectors.getBudgetAmount(budgets, currentYYYYMM),
    chartItems: getChartItems(),
  };

  const monthTabsProps: MonthTabsProps = {
    months: budgetsSelectors.getMonths(budgets),
    handleChange: (index: number): void => {
      changeMonth(index);
    },
    initialMonthIndex: budgetsSelectors.getSelectedBudgetIndex(
      budgets,
      currentYYYYMM
    ),
  };

  const addItemDrawerProps = {
    categories: categories,
    title: "ADD ITEM",
    isOpen: drawerOpen,
    toggleDrawer: setDrawerOpen,
    add: (expense: Expense): void => {
      dispatch(expenseActions.createExpense(expense));
    },
  };

  return (
    <>
      <Box padding="0 0 130px">
        <Box position="fixed" top="0">
          <MonthTabs {...monthTabsProps}></MonthTabs>
        </Box>
        <Chart {...chartProps}></Chart>
      </Box>
      <Box css={addButtonWrapperStyle}>
        <AddButton
          handleClick={(): void => {
            setDrawerOpen(true);
          }}
        ></AddButton>
      </Box>
      <AddItemDrawer {...addItemDrawerProps}></AddItemDrawer>
      <Box position="fixed" bottom="0" zIndex="2">
        <Navigation></Navigation>
      </Box>
    </>
  );
};

export default ChartView;
