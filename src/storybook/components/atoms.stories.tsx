import React from "react";
import AddButton from "@/components/atoms/AddButton";
import CloseButton from "@/components/atoms/CloseButton";
import CompleteButton from "@/components/atoms/CompleteButton";
import DeleteButton from "@/components/atoms/DeleteButton";
import CategoryButton from "@/components/atoms/CategoryButton";
import Navigation from "@/components/atoms/Navigation";
import MonthTabs from "@/components/atoms/MonthTabs";
import ExpenseChart from "@/components/atoms/ExpenseChart";
import ChartLabel from "@/components/atoms/ChartLabel";
import InputWithLabel from "@/components/atoms/InputWithLabel";
import DateInput, { DateInputProps } from "@/components/atoms/DateInput";
import ExpenseListItem from "@/components/atoms/ExpenseListItem";
import ExpenseListSubHeader from "@/components/atoms/ExpenseListSubHeader";
import H6Title from "@/components/atoms/H6Title";

const props = {
  handleClick: (): void => {
    console.log("click!");
  },
};

export const addButton = (): JSX.Element => {
  return <AddButton {...props}></AddButton>;
};

export const closeButton = (): JSX.Element => {
  return <CloseButton {...props}></CloseButton>;
};

export const completeButton = (): JSX.Element => {
  return <CompleteButton {...props}></CompleteButton>;
};

export const deleteButton = (): JSX.Element => {
  return <DeleteButton {...props}></DeleteButton>;
};

export const categoryButton = (): JSX.Element => {
  const props = {
    selected: false,
    label: "Food",
    handleClick: (date): void => {
      console.log(date);
    },
  };
  return <CategoryButton {...props}></CategoryButton>;
};

export const categoryButtonSelected = (): JSX.Element => {
  const props = {
    selected: true,
    label: "Food",
    handleClick: (date): void => {
      console.log(date);
    },
  };
  return <CategoryButton {...props}></CategoryButton>;
};

export const navigation = (): JSX.Element => {
  return <Navigation></Navigation>;
};

export const monthTabs = (): JSX.Element => {
  const props = {
    months: ["2020/03", "2020/04", "2020/05", "2020/06", "2020/07"],
    handleChange: (value): void => {
      console.log(value);
    },
  };
  return <MonthTabs {...props}></MonthTabs>;
};
export const chart = (): JSX.Element => {
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
  return <ExpenseChart {...props}></ExpenseChart>;
};
export const chartLabel = (): JSX.Element => {
  const props = {
    expenseAmount: 200000,
    budgetAmount: 300000,
  };
  return <ChartLabel {...props}></ChartLabel>;
};
export const textInputWithLabel = (): JSX.Element => {
  const props = {
    label: "Item Name",
    defaultValue: "Default Value",
    handleChange: (): void => {
      console.log("change");
    },
  };
  return <InputWithLabel {...props}></InputWithLabel>;
};

export const numberInputWithLabel = (): JSX.Element => {
  const props = {
    label: "金額",
    type: "number",
    onChange: (): void => {
      console.log("change");
    },
  };
  return <InputWithLabel {...props}></InputWithLabel>;
};

export const dateInput = (): JSX.Element => {
  const props: DateInputProps = {
    handleChange: (date) => {
      console.log(date);
    },
  };
  return <DateInput {...props}></DateInput>;
};

export const expenseListItem = (): JSX.Element => {
  const props = {
    categoryLabel: "Cafe",
    title: "スタバ",
    amount: 300,
    handleClickItem: (): void => {
      console.log("click!");
    },
  };
  return <ExpenseListItem {...props}></ExpenseListItem>;
};

export const expenseListSubHeader = (): JSX.Element => {
  const props = {
    dateLabel: "2020/05/01",
  };
  return <ExpenseListSubHeader {...props}></ExpenseListSubHeader>;
};

export const h6Title = (): JSX.Element => {
  const props = {
    text: "タイトル Title",
  };
  return <H6Title {...props}></H6Title>;
};

export default {
  title: "atoms",
};
