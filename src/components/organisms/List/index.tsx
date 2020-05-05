import React from "react";
import Box from "@material-ui/core/Box";
import MonthTabs from "@/components/atoms/MonthTabs";
import ExpenseList from "@/components/molecules/ExpenseList";

const months = ["2020/03", "2020/04", "2020/05", "2020/06", "2020/07"];

const monthlyExpense = {
  "2020/05/01": [
    {
      categoryLabel: "Cafe",
      title: "スタバ",
      amount: 300,
    },
  ],
  "2020/05/02": [
    {
      categoryLabel: "Food",
      title: "赤札堂",
      amount: 3000,
    },
    {
      categoryLabel: "Gym",
      title: "GOLD GYM",
      amount: 11000,
    },
  ],
  "2020/05/03": [
    {
      categoryLabel: "Food",
      title: "赤札堂",
      amount: 3000,
    },
    {
      categoryLabel: "Gym",
      title: "GOLD GYM",
      amount: 11000,
    },
  ],
  "2020/05/04": [
    {
      categoryLabel: "Cafe",
      title: "スタバ",
      amount: 300,
    },
  ],
  "2020/05/05": [
    {
      categoryLabel: "Cafe",
      title: "スタバ",
      amount: 300,
    },
  ],
  "2020/05/06": [
    {
      categoryLabel: "Cafe",
      title: "スタバ",
      amount: 300,
    },
  ],
};

interface Props {
  onClickItem: () => {};
}

const List: React.FC<Props> = (props) => {
  return (
    <>
      <Box position="fixed" top="0" zIndex="2">
        <MonthTabs months={months}></MonthTabs>
      </Box>
      <Box margin="50px 0 0">
        <ExpenseList
          monthlyExpense={monthlyExpense}
          onClickItem={props.onClickItem}
        ></ExpenseList>
      </Box>
    </>
  );
};

export default List;
