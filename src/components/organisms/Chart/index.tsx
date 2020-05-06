import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import MonthTabs, { MonthTabsProps } from "@/components/atoms/MonthTabs";
import ChartHeader, { ChartHeaderProps } from "@/components/atoms/ChartHeader";
import ExpenseChart, {
  ExpenseChartProps,
} from "@/components/atoms/ExpenseChart";

const months = ["2020/03", "2020/04", "2020/05", "2020/06", "2020/07"];

const Chart: React.FC = () => {
  const [monthTabIndex, setMonthTabIndex] = useState<number>(0);

  const monthTabsProps: MonthTabsProps = {
    months: months,
    currentIndex: monthTabIndex,
    handleChange: (value: number): void => {
      setMonthTabIndex(value);
    },
  };

  const expenseChartProps: ExpenseChartProps = {
    // TODO: Reduxから整形して落とし込み
    categories: [
      {
        label: "Food",
        amount: 12000,
        color: "#7CB342",
        budget: 30000,
      },
      {
        label: "Cafe",
        amount: 1800,
        color: "#D81B60",
        budget: 5000,
      },
      {
        label: "雑費",
        amount: 8000,
        color: "#FDD835",
        budget: 12000,
      },
      {
        label: "Drink",
        amount: 50000,
        color: "#5E35B1",
        budget: 45000,
      },
      {
        label: "Date",
        amount: 4500,
        color: "#FB8C00",
        budget: 20000,
      },
      {
        label: "Book",
        amount: 3000,
        color: "#1E88E5",
        budget: 3000,
      },
      {
        label: "Gym",
        amount: 11660,
        color: "#F4511E",
        budget: 12000,
      },
      {
        label: "Fixed",
        amount: 30000,
        color: "#00ACC1",
        budget: 33000,
      },
      {
        label: "Sudden",
        amount: 30000,
        color: "#8E24AA",
        budget: 30000,
      },
      {
        label: "Savings",
        amount: 45000,
        color: "#3949AB",
        budget: 45000,
      },
    ],
  };

  const chartHeaderProps: ChartHeaderProps = {
    // TODO: DBのexpenseから指定月の出費合計を計算
    expenseAmount: 200000,
    // TODO: DBのbudgetから指定月の予算合計を計算
    budgetAmount: 300000,
  };

  return (
    <>
      <Box position="fixed" top="0">
        <MonthTabs {...monthTabsProps}></MonthTabs>
      </Box>
      <Box margin="50px 0 0">
        <ChartHeader {...chartHeaderProps}></ChartHeader>
        <ExpenseChart {...expenseChartProps}></ExpenseChart>
      </Box>
    </>
  );
};

export default Chart;
