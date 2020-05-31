/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import CategorySelector from "@/components/molecules/CategorySelector";
import AddItemDrawer from "@/components/molecules/AddItemDrawer";
import BudgetEditItem, {
  BudgetEditItemProps,
} from "@/components/molecules/BudgetEditItem";
import ExpenseList, {
  ExpenseListProps,
} from "@/components/molecules/ExpenseList";
import Chart from "@/components/molecules/Chart";

const categories = {
  aaaaa: {
    defaultAmount: 30000,
    name: "Food",
    sortIndex: 0,
  },
  bbbbb: {
    defaultAmount: 5000,
    name: "Cafe",
    sortIndex: 1,
  },
  ccccc: {
    defaultAmount: 12000,
    name: "雑費",
    sortIndex: 2,
  },
  ddddd: {
    defaultAmount: 45000,
    name: "Drink",
    sortIndex: 3,
  },
  eeeee: {
    defaultAmount: 20000,
    name: "Date",
    sortIndex: 4,
  },
  fffff: {
    defaultAmount: 3000,
    name: "Book",
    sortIndex: 5,
  },
  ggggg: {
    defaultAmount: 12000,
    name: "Gym",
    sortIndex: 6,
  },
  hhhhh: {
    defaultAmount: 33000,
    name: "Fixed",
    sortIndex: 7,
  },
  iiiii: {
    defaultAmount: 30000,
    name: "Sudden",
    sortIndex: 8,
  },
  jjjjj: {
    defaultAmount: 45000,
    name: "Savings",
    sortIndex: 9,
  },
};

export const addItemDrawer = () => {
  const props = {
    categories: categories,
    title: "ADD ITEM",
    isEditItem: false,
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
  const props = {
    categories: categories,
    title: "EDIT ITEM",
    isEditItem: true,
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
  const props = {
    categories: categories,
    handleChangeCategory: (value: any) => {
      console.log(value);
    },
  };
  return <CategorySelector {...props}></CategorySelector>;
};

export const chart = () => {
  return <Chart />;
};

export const expenseList = (): JSX.Element => {
  const props: ExpenseListProps = {
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
    handleClickItem: (): void => {
      console.log("click!");
    },
  };
  return <ExpenseList {...props}></ExpenseList>;
};

export default {
  title: "molecules",
};
