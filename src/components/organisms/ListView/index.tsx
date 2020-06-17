import React, { useState } from "react";
import moment from "moment";
import Box from "@material-ui/core/Box";
import MonthTabs, { MonthTabsProps } from "@/components/atoms/MonthTabs";
import ExpenseList, {
  ExpenseListProps,
} from "@/components/molecules/ExpenseList";
import AddItemDrawer, {
  AddItemDrawerProps,
} from "@/components/molecules/AddItemDrawer";
import { RootState } from "@/state/store";
import { Categories } from "@/state/categories";
import { budgetsSelectors, Budgets } from "@/state/budgets";
import {
  expenseActions,
  Expense,
  Expenses,
  expensesSelectors,
} from "@/state/expenses";
import { useSelector, useDispatch } from "react-redux";

const ListView: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );
  const expenses = useSelector<RootState, Expenses>((state) => state.expenses);
  const budgets = useSelector<RootState, Budgets>((state) => state.budgets);

  const [selectedExpenseId, setSelectedExpenseId] = useState("");
  const [editingItem, setEditingItem] = useState<Expense | null>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  // YYYYMM
  const [currentYYYYMM, setCurrentYYYYMM] = useState<string>(
    `${moment(new Date()).format("YYYYMM")}`
  );
  const monthList = budgetsSelectors.getMonths(budgets);

  const monthTabsProps: MonthTabsProps = {
    months: monthList,
    handleChange: (index) => {
      // indexからbudgetIdを取得して設定
      const [id] = Object.entries(budgets)[index];
      setCurrentYYYYMM(id);
    },
    initialMonthIndex: budgetsSelectors.getSelectedBudgetIndex(
      budgets,
      currentYYYYMM
    ),
  };

  const expenseListProps: ExpenseListProps = {
    dailyExpenseList: expensesSelectors.getDailyExpenseListOfMonth(
      expenses,
      currentYYYYMM
    ),
    edit: (itemId: string) => {
      // EDIT ITEMを開く
      setEditingItem(expensesSelectors.getSelectedExpense(expenses, itemId));
      setSelectedExpenseId(itemId);
      setDrawerOpen(true);
    },
  };
  const addItemDrawerProps = (): AddItemDrawerProps => {
    const props: AddItemDrawerProps = {
      categories,
      title: "EDIT ITEM",
      editItemId: selectedExpenseId,
      isOpen: drawerOpen,
      toggleDrawer: setDrawerOpen,
      add: (expense: Expense): void => {
        selectedExpenseId
          ? dispatch(expenseActions.updateExpense(expense, selectedExpenseId))
          : dispatch(expenseActions.createExpense(expense));
      },
      delete: () => {
        dispatch(expenseActions.deleteExpense(selectedExpenseId));
      },
    };
    if (editingItem) props.editingItem = editingItem;
    return props;
  };
  return (
    <>
      <Box position="fixed" top="0" zIndex="2">
        <MonthTabs {...monthTabsProps}></MonthTabs>
      </Box>
      <Box margin="50px 0 0">
        <ExpenseList {...expenseListProps}></ExpenseList>
      </Box>
      <AddItemDrawer {...addItemDrawerProps()}></AddItemDrawer>
    </>
  );
};

export default ListView;
