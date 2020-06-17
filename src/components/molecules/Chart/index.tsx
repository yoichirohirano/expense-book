import React from "react";
import Box from "@material-ui/core/Box";
import ChartHeader, { ChartHeaderProps } from "@/components/atoms/ChartHeader";
import ExpenseChart, {
  ExpenseChartProps,
  ChartItem,
} from "@/components/atoms/ExpenseChart";

export interface ChartProps {
  expenseAmount: number;
  budgetAmount: number;
  chartItems: Array<ChartItem>;
}

const Chart: React.FC<ChartProps> = (props) => {
  const expenseChartProps: ExpenseChartProps = {
    chartItems: props.chartItems,
  };

  const chartHeaderProps: ChartHeaderProps = {
    expenseAmount: props.expenseAmount,
    budgetAmount: props.budgetAmount,
  };

  return (
    <>
      <Box margin="50px 0 0">
        <ChartHeader {...chartHeaderProps}></ChartHeader>
        <ExpenseChart {...expenseChartProps}></ExpenseChart>
      </Box>
    </>
  );
};

export default Chart;
