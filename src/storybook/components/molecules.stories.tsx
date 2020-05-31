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

export const chart = () => {
  return <Chart />;
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

export default {
  title: "molecules",
};
