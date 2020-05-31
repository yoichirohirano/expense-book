import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import MonthTabs, { MonthTabsProps } from "@/components/atoms/MonthTabs";
import ExpenseList, {
  ExpenseListProps,
} from "@/components/molecules/ExpenseList";
import AddItemDrawer, {
  AddItemDrawerProps,
} from "@/components/molecules/AddItemDrawer";
import { RootState } from "@/state/store";
import { actions, Expense, Expenses } from "@/state/expenses";
import { useSelector, useDispatch } from "react-redux";

const categories = {
  Food: {
    name: "Food",
    color: "#7CB342",
    defaultAmount: 30000,
  },
  Cafe: {
    name: "Cafe",
    color: "#D81B60",
    defaultAmount: 5000,
  },
  雑費: {
    name: "雑費",
    color: "#FDD835",
    defaultAmount: 12000,
  },
  Drink: {
    name: "Drink",
    color: "#5E35B1",
    defaultAmount: 45000,
  },
  Date: {
    name: "Date",
    color: "#FB8C00",
    defaultAmount: 20000,
  },
  Book: {
    name: "Book",
    color: "#1E88E5",
    defaultAmount: 3000,
  },
  Gym: {
    name: "Gym",
    color: "#F4511E",
    defaultAmount: 12000,
  },
  Fixed: {
    name: "Fixed",
    color: "#00ACC1",
    defaultAmount: 33000,
  },
  Sudden: {
    name: "Sudden",
    color: "#8E24AA",
    defaultAmount: 30000,
  },
  Savings: {
    name: "Savings",
    color: "#3949AB",
    defaultAmount: 45000,
  },
};

const List: React.FC = () => {
  const expenses = useSelector<RootState, Expenses>((state) => state.expenses);
  const dispatch = useDispatch();

  const [monthTabIndex, setMonthTabIndex] = useState<number>(0);
  const [selectedExpenseId, setSelectedExpenseId] = useState("");
  const [addItemOpen, setAddItemOpen] = useState(false);

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
  const addItemDrawerProps: AddItemDrawerProps = {
    categories,
    title: "EDIT ITEM",
    isEditItem: true,
    isOpen: addItemOpen,
    toggleDrawer: setAddItemOpen,
    add: (expense: Expense): void => {
      selectedExpenseId
        ? dispatch(actions.updateExpense(expense, selectedExpenseId))
        : dispatch(actions.createExpense(expense));
    },
    delete: () => {
      dispatch(actions.deleteExpense(selectedExpenseId));
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
      <AddItemDrawer {...addItemDrawerProps}></AddItemDrawer>
    </>
  );
};

export default List;
