import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import Chart, { ChartProps } from "@/components/molecules/Chart";
import AddItemDrawer from "@/components/molecules/AddItemDrawer";
import Navigation from "@/components/atoms/Navigation";
import AddButton from "@/components/atoms/AddButton";
import { Category, Categories } from "@/state/categories";
import {
  expenseActions,
  Expense,
  Expenses,
  expensesSelectors,
} from "@/state/expenses";
import { RootState } from "@/state/store";
import { addButtonWrapperStyle } from "./style";

const ChartView: React.FC = () => {
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );
  const expenses = useSelector<RootState, Expenses>((state) => state.expenses);
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const chartProps: ChartProps = {
    months: expensesSelectors.getMonths(expenses),
    expenseAmount: number;
    budgetAmount: number;
    categories: Categories;
  };

  const addItemDrawerProps = {
    categories: categories,
    title: "ADD ITEM",
    isOpen: drawerOpen,
    isEditItem: false,
    toggleDrawer: setDrawerOpen,
    add: (expense: Expense): void => {
      dispatch(expenseActions.createExpense(expense));
    },
  };

  return (
    <>
      <Box padding="0 0 130px">
        <Chart {...chartProps}></Chart>
      </Box>
      <Box css={addButtonWrapperStyle}>
        <AddButton
          handleClick={(): void => {
            setDrawerOpen(true);
          }}
        ></AddButton>
      </Box>
      <AddItemDrawer {...addItemDrawerProps}></AddItemDrawer>
      <Box position="fixed" bottom="0" zIndex="2">
        <Navigation></Navigation>
      </Box>
    </>
  );
};

export default ChartView;
