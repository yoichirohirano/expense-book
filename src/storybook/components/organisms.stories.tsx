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
  return <ChartView />;
};

export default {
  title: "organisms",
};
