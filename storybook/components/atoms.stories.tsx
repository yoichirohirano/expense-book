import React from "react";
import AddButton from "@/components/atoms/AddButton";
import CloseButton from "@/components/atoms/CloseButton";
import CompleteButton from "@/components/atoms/CompleteButton";
import TextButton from "@/components/atoms/TextButton";
import DeleteButton from "@/components/atoms/DeleteButton";
import Navigation from "@/components/atoms/Navigation";
import MonthTabs from "@/components/atoms/MonthTabs";
import Chart from "@/components/atoms/Chart";
import ChartLabel from "@/components/atoms/ChartLabel";
import InputWithLabel from "@/components/atoms/InputWithLabel";
import DateInput from "@/components/atoms/DateInput";
import CategoryButton from "@/components/atoms/CategoryButton";

const props = {
  onClick: (): boolean => {
    return true;
  },
  text: "BUTTON",
};

export const navigation = () => {
  return <Navigation></Navigation>;
};
export const addButton = () => {
  return <AddButton {...props}></AddButton>;
};
export const closeButton = () => {
  return <CloseButton {...props}></CloseButton>;
};
export const completeButton = () => {
  return <CompleteButton {...props}></CompleteButton>;
};
export const removeButton = () => {
  return <TextButton {...props} text="REMOVE"></TextButton>;
};
export const deleteButton = () => {
  return <DeleteButton {...props}></DeleteButton>;
};
export const deleteButtonDisabled = () => {
  return <DeleteButton {...props} disabled={true}></DeleteButton>;
};
export const monthTabs = () => {
  const months = ["2020/03", "2020/04", "2020/05", "2020/06", "2020/07"];
  return <MonthTabs {...props} disabled={true} months={months}></MonthTabs>;
};
export const chart = () => {
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
  return <Chart {...props}></Chart>;
};
export const chartLabel = () => {
  const props = {
    expenseAmount: 200000,
    budgetAmount: 300000,
  };
  return <ChartLabel {...props}></ChartLabel>;
};
export const textInputWithLabel = () => {
  const props = {
    label: "Item Name",
    onChange: () => {
      console.log("change");
    },
  };
  return <InputWithLabel {...props}></InputWithLabel>;
};

export const numberInputWithLabel = () => {
  const props = {
    label: "金額",
    type: "number",
    onChange: () => {
      console.log("change");
    },
  };
  return <InputWithLabel {...props}></InputWithLabel>;
};

export const dateInput = () => {
  const props = {
    onChange: (date) => {
      console.log(date);
    },
  };
  return <DateInput {...props}></DateInput>;
};

export const categoryButton = () => {
  const props = {
    selected: false,
    label: "Food",
    onClick: (date) => {
      console.log(date);
    },
  };
  return <CategoryButton {...props}></CategoryButton>;
};

export const categoryButtonSelected = () => {
  const props = {
    selected: true,
    label: "Food",
    onClick: (date) => {
      console.log(date);
    },
  };
  return <CategoryButton {...props}></CategoryButton>;
};

export default {
  title: "atoms",
};
