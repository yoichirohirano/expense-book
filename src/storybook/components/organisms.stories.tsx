import React from "react";
import List from "@/components/organisms/List";
import CategorySetting from "@/components/organisms/CategorySetting";
import BudgetSetting from "@/components/organisms/BudgetSetting";
import ChartView from "@/components/organisms/ChartView";

export const list = () => {
  return <List />;
};

export const categorySetting = () => {
  return <CategorySetting />;
};

export const budgetSetting = () => {
  return <BudgetSetting />;
};

export const chartView = () => {
  const props = {
    months: [
      "202003",
      "Wed Apr 01 2020",
      "Fri May 01 2020",
      "Mon Jun 01 2020",
      "Wed Jul 01 2020",
    ],
    expenseAmount: 200000,
    budgetAmount: 300000,
    categories: [
      {
        label: "Food",
        amount: 12000,
        color: "#7CB342",
        budget: 30000,
      },
      {
        label: "Cafe",
        amount: 1800,
        color: "#D81B60",
        budget: 5000,
      },
      {
        label: "雑費",
        amount: 8000,
        color: "#FDD835",
        budget: 12000,
      },
      {
        label: "Drink",
        amount: 50000,
        color: "#5E35B1",
        budget: 45000,
      },
      {
        label: "Date",
        amount: 4500,
        color: "#FB8C00",
        budget: 20000,
      },
      {
        label: "Book",
        amount: 3000,
        color: "#1E88E5",
        budget: 3000,
      },
      {
        label: "Gym",
        amount: 11660,
        color: "#F4511E",
        budget: 12000,
      },
      {
        label: "Fixed",
        amount: 30000,
        color: "#00ACC1",
        budget: 33000,
      },
      {
        label: "Sudden",
        amount: 30000,
        color: "#8E24AA",
        budget: 30000,
      },
      {
        label: "Savings",
        amount: 45000,
        color: "#3949AB",
        budget: 45000,
      },
    ],
  };
  return <ChartView {...props}></ChartView>;
};

export default {
  title: "organisms",
};
