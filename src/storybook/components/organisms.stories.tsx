import React from "react";
import Chart from "@/components/organisms/Chart";
import List from "@/components/organisms/List";
import CategorySetting from "@/components/organisms/CategorySetting";

export const chart = () => {
  return <Chart />;
};

export const list = () => {
  return <List />;
};

export const categorySetting = () => {
  return <CategorySetting />;
};

export default {
  title: "organisms",
};
