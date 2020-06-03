import React from "react";
import Box from "@material-ui/core/Box";
import MonthTabs, { MonthTabsProps } from "@/components/atoms/MonthTabs";
import ChartHeader, { ChartHeaderProps } from "@/components/atoms/ChartHeader";
import ExpenseChart, {
  ExpenseChartProps,
  ChartItem,
} from "@/components/atoms/ExpenseChart";

export interface ChartProps {
  months: Array<string>;
  expenseAmount: number;
  budgetAmount: number;
  chartItems: Array<ChartItem>;
  changeMonth: (index: number) => void;
  initialMonthIndex: number;
}

const Chart: React.FC<ChartProps> = (props) => {
  const monthTabsProps: MonthTabsProps = {
    months: props.months,
    handleChange: (index: number): void => {
      props.changeMonth(index);
    },
    initialMonthIndex: props.initialMonthIndex,
  };

  const expenseChartProps: ExpenseChartProps = {
    chartItems: props.chartItems,
  };

  const chartHeaderProps: ChartHeaderProps = {
    expenseAmount: props.expenseAmount,
    budgetAmount: props.budgetAmount,
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
