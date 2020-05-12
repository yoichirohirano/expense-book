import React from "react";
import Box from "@material-ui/core/Box";
import getPriceSeparatedByComma from "@/util/functions/getPriceSeparatedByComma";
import useStyles from "./style";

export interface ChartHeaderProps {
  expenseAmount: number;
  budgetAmount: number;
}

const ChartHeader: React.FC<ChartHeaderProps> = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} fontFamily="h2.fontFamily">
      <Box className="ChartHeader-total">
        Total: ¥{getPriceSeparatedByComma(props.expenseAmount)}
      </Box>
      <Box padding="0 10px">/</Box>
      <Box className="ChartHeader-budget">
        Budget: ¥{getPriceSeparatedByComma(props.budgetAmount)}
      </Box>
    </Box>
  );
};

export default ChartHeader;
