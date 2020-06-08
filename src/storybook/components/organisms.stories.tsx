import React from "react";
import ListView from "@/components/organisms/ListView";
import CategorySetting from "@/components/organisms/CategorySetting";
import BudgetSetting from "@/components/organisms/BudgetSetting";
import ChartView from "@/components/organisms/ChartView";

export const categorySetting = () => {
  return <CategorySetting />;
};

export const budgetSetting = () => {
  return <BudgetSetting />;
};

export const chartView = () => {
  return <ChartView />;
};

export const listView = () => {
  return <ListView />;
};

export default {
  title: "organisms",
};
