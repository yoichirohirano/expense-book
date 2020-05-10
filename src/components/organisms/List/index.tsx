import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import MonthTabs, { MonthTabsProps } from "@/components/atoms/MonthTabs";
import ExpenseList, {
  ExpenseListProps,
} from "@/components/molecules/ExpenseList";

interface Props {
  onClickItem: (props: unknown) => unknown;
}

const List: React.FC = () => {
  const [monthTabIndex, setMonthTabIndex] = useState<number>(0);
  // TODO: Reduxから取得して整形
  const monthTabsProps: MonthTabsProps = {
    months: ["2020/03", "2020/04", "2020/05", "2020/06", "2020/07"],
    currentIndex: monthTabIndex,
    handleChange: (newIndex) => {
      setMonthTabIndex(newIndex);
    },
  };
  const expenseListProps: ExpenseListProps = {
    monthlyExpense: {
      "2020/05/01": [
        {
          categoryName: "Cafe",
          title: "スタバ",
          amount: 300,
        },
      ],
      "2020/05/02": [
        {
          categoryName: "Food",
          title: "赤札堂",
          amount: 3000,
        },
        {
          categoryName: "Gym",
          title: "GOLD GYM",
          amount: 11000,
        },
      ],
      "2020/05/03": [
        {
          categoryName: "Food",
          title: "赤札堂",
          amount: 3000,
        },
        {
          categoryName: "Gym",
          title: "GOLD GYM",
          amount: 11000,
        },
      ],
      "2020/05/04": [
        {
          categoryName: "Cafe",
          title: "スタバ",
          amount: 300,
        },
      ],
      "2020/05/05": [
        {
          categoryName: "Cafe",
          title: "スタバ",
          amount: 300,
        },
      ],
      "2020/05/06": [
        {
          categoryName: "Cafe",
          title: "スタバ",
          amount: 300,
        },
      ],
    },
    handleClickItem: (itemId) => {
      // EDIT ITEMを開く
    },
  };
  return (
    <>
      <Box position="fixed" top="0" zIndex="2">
        <MonthTabs {...monthTabsProps}></MonthTabs>
      </Box>
      <Box margin="50px 0 0">
        <ExpenseList {...expenseListProps}></ExpenseList>
      </Box>
    </>
  );
};

export default List;
