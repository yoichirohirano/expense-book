import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ExpenseListItem, {
  ExpenseListItemProps,
} from "@/components/atoms/ExpenseListItem";
import ExpenseListSubHeader from "@/components/atoms/ExpenseListSubHeader";

interface Props {
  monthlyExpense: {
    [key: string]: Array<ExpenseListItemProps>;
  };
  onClickItem: () => {};
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
      maxHeight: "calc(100vh - 100px)",
      paddingBottom: "0px",
    },
    listSection: {
      backgroundColor: "inherit",
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0,
    },
  })
);

const ExpenseList: React.FC<Props> = (props) => {
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
                onClickItem={props.handleClickItem}
              ></ExpenseListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
};

export default ExpenseList;
