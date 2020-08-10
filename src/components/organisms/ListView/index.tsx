import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import MonthTabs, { MonthTabsProps } from "@/components/atoms/MonthTabs";
import ExpenseList, {
  ExpenseListProps,
} from "@/components/molecules/ExpenseList";
import AddItemDrawer, {
  AddItemDrawerProps,
} from "@/components/molecules/AddItemDrawer";
import AddButton, { AddButtonProps } from "@/components/atoms/AddButton";
import { RootState } from "@/state/store";
import { categoriesSelectors, Categories } from "@/state/categories";
import {
  budgetsSelectors,
  budgetsActions,
  Budget,
  Budgets,
} from "@/state/budgets";
import {
  expensesActions,
  Expense,
  Expenses,
  expensesSelectors,
} from "@/state/expenses";
import { Login } from "@/state/login";
import { useSelector, useDispatch } from "react-redux";
import { addButtonWrapperStyle, monthTabsWrapperStyle } from "./style";

const ListView: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );
  const expenses = useSelector<RootState, Expenses>((state) => state.expenses);
  const budgets = useSelector<RootState, Budgets>((state) => state.budgets);
  const { uid } = useSelector<RootState, Login>((state) => state.login);

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  // TODO: itemとIDどちらか一方のみでいけないか？
  const [selectedExpenseId, setSelectedExpenseId] = useState("");
  const [editingItem, setEditingItem] = useState<Expense | null>(null);
  // YYYYMM
  const [currentYYYYMM, setCurrentYYYYMM] = useState<string>(() => {
    return budgetsSelectors.getInitialMonth(budgets);
  });
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
      title: selectedExpenseId ? "出費を編集する" : "出費を追加する",
      editItemId: selectedExpenseId || undefined,
      isOpen: drawerOpen,
      toggleDrawer: setDrawerOpen,
      add: (expense: Expense): void => {
        selectedExpenseId
          ? dispatch(expensesActions.update(uid, expense, selectedExpenseId))
          : dispatch(expensesActions.create(uid, expense));
        // 登録した月の予算がなければ、予算も新規で登録する
        const yyyymm = expense.dateStr.slice(0, 6);
        if (!budgets[yyyymm]) {
          const newBudget: Budget = categoriesSelectors.getDefaultBudget(
            categories
          );
          dispatch(budgetsActions.createBudget(newBudget, yyyymm));
          setCurrentYYYYMM(yyyymm);
        }
      },
      delete: selectedExpenseId
        ? (): void => {
            dispatch(expensesActions.delete(uid, selectedExpenseId));
          }
        : undefined,
      getSelectedCategory: categoriesSelectors.getSelectedCategory,
      getIdFromName: categoriesSelectors.getIdFromName,
    };
    if (editingItem) props.editingItem = editingItem;
    return props;
  };

  const addButtonProps: AddButtonProps = {
    handleClick: (): void => {
      setDrawerOpen(true);
      setEditingItem(null);
      setSelectedExpenseId("");
    },
  };

  return (
    <>
      <Box css={monthTabsWrapperStyle}>
        <MonthTabs {...monthTabsProps}></MonthTabs>
      </Box>
      <Box margin="48px 0 0">
        <ExpenseList {...expenseListProps}></ExpenseList>
      </Box>
      <Box css={addButtonWrapperStyle}>
        <AddButton {...addButtonProps}></AddButton>
      </Box>
      <AddItemDrawer {...addItemDrawerProps()}></AddItemDrawer>
    </>
  );
};

export default ListView;
