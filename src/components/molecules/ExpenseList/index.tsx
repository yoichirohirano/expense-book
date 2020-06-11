import React from "react";
import List from "@material-ui/core/List";
import ExpenseListItem from "@/components/atoms/ExpenseListItem";
import ExpenseListSubHeader from "@/components/atoms/ExpenseListSubHeader";
import useStyles from "./style";
import { Expense } from "@/state/expenses";

export interface ExpenseListProps {
  dailyExpenseList: {
    // YYYY/MM/DD
    [yyyymmddWithSlash: string]: {
      [id: string]: Expense;
    };
  };
  edit: (...props: any[]) => any;
}

const ExpenseList: React.FC<ExpenseListProps> = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      {Object.entries(props.dailyExpenseList).map(([id, expense]) => (
        <li key={`section-${id}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ExpenseListSubHeader dateLabel={id} />
            {Object.entries(expense).map(([expenseId, item]) => (
              <ExpenseListItem
                key={`${id}-${expenseId}`}
                {...item}
                handleClickItem={() => {
                  props.edit(expenseId);
                }}
              ></ExpenseListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export default ExpenseList;
