import React from "react";
import Box from "@material-ui/core/Box";
import MonthlyExpense from "@/components/organisms/MonthlyExpense";
import Footer from "@/components/organisms/Footer";
import Chart, { Category } from "@/components/atoms/Chart";

interface Props {
  months: Array<string>;
  expenseAmount: number;
  budgetAmount: number;
  categories: Array<Category>;
}

const Top: React.FC<Props> = (props) => {
  const handleAddButtonClick = () => {
    console.log("addButton");
  };

  return (
    <>
      <Box padding="0 0 130px">
        <MonthlyExpense {...props}></MonthlyExpense>
      </Box>
      <Box position="fixed" bottom="0">
        <Footer onClick={handleAddButtonClick}></Footer>
      </Box>
    </>
  );
};

export default Top;
