import React from "react";
import Box from "@material-ui/core/Box";
import MonthTabs from "@/components/atoms/MonthTabs";
import Chart, { Category } from "@/components/atoms/Chart";
import ChartLabel from "@/components/atoms/ChartLabel";

interface Props {
  months: Array<string>;
  expenseAmount: number;
  budgetAmount: number;
  categories: Array<Category>;
}

const MonthlyExpense: React.FC<Props> = (props) => {
  return (
    <>
      <Box position="fixed" top="0">
        <MonthTabs {...props}></MonthTabs>
      </Box>
      <Box margin="50px 0 0">
        <ChartLabel {...props}></ChartLabel>
        <Chart {...props}></Chart>
      </Box>
    </>
  );
};

export default MonthlyExpense;
