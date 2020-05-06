import React from "react";
import Chart from "@/components/organisms/Chart";
import List from "@/components/organisms/List";

export const chart = () => {
  return <Chart></Chart>;
};

export const list = () => {
  const props = {
    onClickItem: () => {
      console.log("click");
    },
  };
  return <List {...props}></List>;
};

export default {
  title: "organisms",
};
