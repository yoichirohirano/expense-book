import React from "react";
import CategorySelector from "../../src/components/molecules/CategorySelector";

export const categorySelector = () => {
  const props = {
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
  return <CategorySelector {...props}></CategorySelector>;
};

export default {
  title: "molecules",
};
