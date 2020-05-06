import React from "react";
import List from "@material-ui/core/List";
import ExpenseListItem, {
  ExpenseListItemProps,
} from "@/components/atoms/ExpenseListItem";
import ExpenseListSubHeader from "@/components/atoms/ExpenseListSubHeader";
import useStyles from "./style";
export interface ExpenseListProps {
  monthlyExpense: {
    [key: string]: Array<ExpenseListItemProps>;
  };
  handleClickItem: (props: unknown) => unknown;
}

const ExpenseList: React.FC<ExpenseListProps> = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      {Object.entries(props.monthlyExpense).map(([key, value]) => (
        <li key={`section-${key}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ExpenseListSubHeader dateLabel={key} />
            {value.map((item, index) => (
              <ExpenseListItem
                key={`${key}-${index}`}
                {...item}
                handleClickItem={props.handleClickItem}
              ></ExpenseListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export default ExpenseList;
