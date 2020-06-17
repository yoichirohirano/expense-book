import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import ExpenseListItem from "@/components/atoms/ExpenseListItem";
import ExpenseListSubHeader from "@/components/atoms/ExpenseListSubHeader";
import useStyles from "./style";
import { Expenses } from "@/state/expenses";

export interface ExpenseListProps {
  dailyExpenseList: Array<{
    yyyymmddWithSlash: string;
    expenses: Expenses;
  }>;
  edit: (...props: any[]) => any;
}

const ExpenseList: React.FC<ExpenseListProps> = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      {props.dailyExpenseList.map((item, index) => (
        <li key={`section-${index}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ExpenseListSubHeader dateLabel={item.yyyymmddWithSlash} />
            {Object.entries(item.expenses).map(([expenseId, item]) => (
              <ExpenseListItem
                key={`${index}-${expenseId}`}
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
