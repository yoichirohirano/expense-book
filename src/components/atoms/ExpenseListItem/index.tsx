import React from "react";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export interface ExpenseListItemProps {
  categoryLabel: string;
  title: string;
  amount: number;
  onClickItem: () => {};
}

const ExpenseListItem: React.FC<ExpenseListItemProps> = (props) => {
  return (
    <>
      <ListItem button onClick={props.onClickItem}>
        <ListItemText primary={props.categoryLabel} secondary={props.title} />
        <Box fontSize="subtitle1" fontFamily="Roboto">
          {`¥${props.amount}`}{" "}
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default ExpenseListItem;
