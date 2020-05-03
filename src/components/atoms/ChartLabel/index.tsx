import React from "react";
import Box from "@material-ui/core/Box";

interface Props {
  expenseAmount: number;
  budgetAmount: number;
}

const ChartLabel: React.FC<Props> = (props) => {
  return (
    <Box
      display="flex"
      fontFamily="h2.fontFamily"
      lineHeight="1.5"
      justifyContent="center"
      paddingTop="10px"
    >
      <Box>Total: ¥{props.expenseAmount}</Box>
      <Box padding="0 10px">/</Box>
      <Box>Budget: ¥{props.budgetAmount}</Box>
    </Box>
  );
};

export default ChartLabel;
