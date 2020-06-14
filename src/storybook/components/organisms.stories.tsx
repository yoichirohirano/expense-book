import React from "react";
import ListView from "@/components/organisms/ListView";
import CategoryView from "@/components/organisms/CategoryView";
import BudgetView from "@/components/organisms/BudgetView";
import ChartView from "@/components/organisms/ChartView";

export const categoryView = () => {
  return <CategoryView />;
};

export const budgetView = () => {
  return <BudgetView />;
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
