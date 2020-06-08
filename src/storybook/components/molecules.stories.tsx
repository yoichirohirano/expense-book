/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import CategorySelector, {
  CategorySelectorProps,
} from "@/components/molecules/CategorySelector";
import AddItemDrawer from "@/components/molecules/AddItemDrawer";
import BudgetEditItem, {
  BudgetEditItemProps,
} from "@/components/molecules/BudgetEditItem";
import ExpenseList, {
  ExpenseListProps,
} from "@/components/molecules/ExpenseList";
import Chart, { ChartProps } from "@/components/molecules/Chart";

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
    editItemId: "aaaaa",
    editingItem: {
      category: "Food",
      amount: 2300,
      date: "20200625T123456",
      name: "スーパー",
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
    selectedCategoryId: "bbbbb",
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
        "20200501T123456": {
          category: "Cafe",
          name: "スタバ",
          amount: 300,
          date: "20200501T123456",
        },
        "20200501T123556": {
          category: "Gym",
          name: "GOLD GYM",
          amount: 11000,
          date: "20200501T123556",
        },
      },
      "2020/05/02": {
        "20200502T123456": {
          category: "Food",
          name: "赤札堂",
          amount: 3000,
          date: "20200501T123456",
        },
      },
      "2020/05/03": {
        "20200503T123456": {
          category: "Food",
          name: "赤札堂",
          amount: 3000,
          date: "20200501T123456",
        },
        "20200503T123556": {
          category: "Gym",
          name: "GOLD GYM",
          amount: 11000,
          date: "20200503T123556",
        },
      },
      "2020/05/04": {
        "20200501T123456": {
          category: "Cafe",
          name: "スタバ",
          amount: 300,
          date: "20200501T123456",
        },
      },
      "2020/05/05": {
        "20200501T123456": {
          category: "Cafe",
          name: "スタバ",
          amount: 300,
          date: "20200501T123456",
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
