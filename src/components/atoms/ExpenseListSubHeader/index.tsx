import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";

interface ExpenseListSubHeaderProps {
  dateLabel: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.light,
      color: "#fff",
    },
  })
);

const ExpenseListSubHeader: React.FC<ExpenseListSubHeaderProps> = (props) => {
  const classes = useStyles();

  return <ListSubheader classes={classes}>{props.dateLabel}</ListSubheader>;
};

export default ExpenseListSubHeader;
