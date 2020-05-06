import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import useStyles from "./style";

interface ExpenseListSubHeaderProps {
  dateLabel: string;
}

const ExpenseListSubHeader: React.FC<ExpenseListSubHeaderProps> = (props) => {
  const classes = useStyles();

  return (
    <ListSubheader className={classes.root}>{props.dateLabel}</ListSubheader>
  );
};

export default ExpenseListSubHeader;
