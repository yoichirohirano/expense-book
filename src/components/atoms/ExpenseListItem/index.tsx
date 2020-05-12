import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export type ExpenseItemData = {
  categoryName: string;
  title: string;
  amount: number;
};
export interface ExpenseListItemProps extends ExpenseItemData {
  handleClickItem: (props: unknown) => unknown;
}

const ExpenseListItem: React.FC<ExpenseListItemProps> = (props) => {
  return (
    <>
      <ListItem
        button
        onClick={props.handleClickItem}
        className="ExpenseListItem"
      >
        <ListItemText
          primary={props.categoryName}
          secondary={props.title}
          className="ExpenseListItem-ListItemText"
        />
        <Typography
          variant="subtitle1"
          className="ExpenseListItem-amount"
        >{`¥${props.amount}`}</Typography>
      </ListItem>
      <Divider />
    </>
  );
};

export default ExpenseListItem;
