/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import CategorySelector, {
  CategorySelectorProps,
} from "@/components/molecules/CategorySelector";
import AddItemDrawer, {
  AddItemDrawerProps,
} from "@/components/molecules/AddItemDrawer";
import BudgetEditItem, {
  BudgetEditItemProps,
} from "@/components/molecules/BudgetEditItem";
import ExpenseList, {
  ExpenseListProps,
} from "@/components/molecules/ExpenseList";
import Chart, { ChartProps } from "@/components/molecules/Chart";
import { sampleState } from "@/state/categories";

const categories = sampleState;

export const addItemDrawer = () => {
  const props: AddItemDrawerProps = {
    categories: categories,
    title: "ADD ITEM",
    isOpen: true,
    toggleDrawer: (open: any): void => {
      console.log(open);
    },
    add: (open: any): void => {
      console.log(open);
    },
    delete: (): void => {
      console.log(open);
    },
  };
  return <AddItemDrawer {...props}></AddItemDrawer>;
};

export const addItemDrawerEdit = (): JSX.Element => {
  const props: AddItemDrawerProps = {
    categories: categories,
    title: "EDIT ITEM",
    editItemId: "aaaaa",
    editingItem: {
      amount: 400,
      name: "スタバ",
      date: new Date("2020-06-09T00:00:00"),
      dateStr: "20200609T000000",
      category: {
        name: "Cafe",
        ref: "AjOQWgDdVSVsLQNCEpNP",
      },
    },
    isOpen: true,
    toggleDrawer: (open: any): void => {
      console.log(open);
    },
    add: (open: any): void => {
      console.log(open);
    },
    delete: (): void => {
      console.log(open);
    },
  };
  return <AddItemDrawer {...props}></AddItemDrawer>;
};

export const budgetEditItem = () => {
  const props: BudgetEditItemProps = {
    categoryName: "Food",
    budget: 30000,
    handleChangeCategoryName: (props: any): void => {
      console.log(props);
    },
    handleChangeBudget: (props: any): void => {
      console.log(props);
    },
    handleClickDeleteButton: (props: any): void => {
      console.log(props);
    },
  };
  return <BudgetEditItem {...props}></BudgetEditItem>;
};

export const budgetEditItemDisabled = () => {
  const props: BudgetEditItemProps = {
    categoryName: "Food",
    budget: 30000,
    handleChangeCategoryName: (props: any): void => {
      console.log(props);
    },
    handleChangeBudget: (props: any): void => {
      console.log(props);
    },
    handleClickDeleteButton: (props: any): void => {
      console.log(props);
    },
    categoryEditDisabled: true,
    deleteDisabled: true,
  };
  return <BudgetEditItem {...props}></BudgetEditItem>;
};

export const categorySelector = (): JSX.Element => {
  const props: CategorySelectorProps = {
    categories: categories,
    handleChangeCategory: (value: any) => {
      console.log(value);
    },
    selectedCategoryId: "E3cnHvL8SwPTbn4ChMWq",
  };
  return <CategorySelector {...props}></CategorySelector>;
};

export const chart = () => {
  const props: ChartProps = {
    months: ["2020/03", "2020/04", "2020/05", "2020/06", "2020/07"],
    expenseAmount: 20000,
    budgetAmount: 300000,
    chartItems: [
      {
        categoryName: "Food",
        amount: 24000,
        budget: 30000,
        sortIndex: 0,
        color: "#489ec8",
      },
      {
        categoryName: "Cafe",
        amount: 7000,
        budget: 5000,
        sortIndex: 1,
        color: "#489ec8",
      },
      {
        categoryName: "test",
        amount: 12000,
        budget: 12000,
        sortIndex: 2,
        color: "#489ec8",
      },
    ],
    changeMonth: (value: any) => {
      console.log(value);
    },
    initialMonthIndex: 0,
  };
  return <Chart {...props} />;
};

export const expenseList = (): JSX.Element => {
  const props: ExpenseListProps = {
    dailyExpenseList: {
      "2020/05/01": {
        aaaaaaaaaaaa: {
          amount: 400,
          name: "スタバ",
          date: new Date("2020-05-01T00:00:00"),
          dateStr: "20200501T123455",
          category: {
            name: "Cafe",
            ref: "AjOQWgDdVSVsLQNCEpNP",
          },
        },
        K0Sivmdt67a26IMWOw20: {
          amount: 300,
          category: {
            name: "Food",
            ref: "E3cnHvL8SwPTbn4ChMWq",
          },
          date: new Date("2020-05-01T12:34:56"),
          dateStr: "20200501T123456",
          name: "赤札堂",
        },
      },
      "2020/05/02": {
        TSTHeB4tTwrf7DjCOmJc: {
          amount: 1000,
          category: {
            name: "Food",
            ref: "E3cnHvL8SwPTbn4ChMWq",
          },
          date: new Date("2020-05-02T00:00:00"),
          dateStr: "20200502T000000",
          name: "赤札堂",
        },
      },
    },
    edit: (): void => {
      console.log("click!");
    },
  };
  return <ExpenseList {...props}></ExpenseList>;
};

export default {
  title: "molecules",
};
