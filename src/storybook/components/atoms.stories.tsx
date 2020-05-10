/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AddButton from "@/components/atoms/AddButton";
import CloseButton from "@/components/atoms/CloseButton";
import CompleteButton from "@/components/atoms/CompleteButton";
import DeleteButton from "@/components/atoms/DeleteButton";
import CategoryButton from "@/components/atoms/CategoryButton";
import Navigation from "@/components/atoms/Navigation";
import MonthTabs from "@/components/atoms/MonthTabs";
import ExpenseChart, {
  ExpenseChartProps,
} from "@/components/atoms/ExpenseChart";
import ChartHeader from "@/components/atoms/ChartHeader";
import TextInput from "@/components/atoms/TextInput";
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
    handleClick: (param: any): void => {
      console.log(param);
    },
  };
  return <CategoryButton {...props}></CategoryButton>;
};

export const categoryButtonSelected = (): JSX.Element => {
  const props = {
    selected: true,
    label: "Food",
    handleClick: (param: any): void => {
      console.log(param);
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
    currentIndex: 0,
    handleChange: (value: number): void => {
      console.log(value);
    },
  };
  return <MonthTabs {...props}></MonthTabs>;
};
export const expenseChart = (): JSX.Element => {
  const props: ExpenseChartProps = {
    chartItems: [
      {
        categoryName: "Food",
        amount: 24000,
        color: "#7CB342",
        budget: 30000,
      },
      {
        categoryName: "Cafe",
        amount: 7000,
        color: "#D81B60",
        budget: 5000,
      },
      {
        categoryName: "test",
        amount: 12000,
        color: "#FDD835",
        budget: 12000,
      },
    ],
  };
  return <ExpenseChart {...props}></ExpenseChart>;
};
export const chartHeader = (): JSX.Element => {
  const props = {
    expenseAmount: 200000,
    budgetAmount: 300000,
  };
  return <ChartHeader {...props}></ChartHeader>;
};
export const textInput = (): JSX.Element => {
  const props = {
    label: "Item Name",
    defaultValue: "Default Value",
    error: false,
    handleChange: (): void => {
      console.log("change");
    },
  };
  return <TextInput {...props}></TextInput>;
};

export const textInputWithNoInputError = (): JSX.Element => {
  const props = {
    label: "Item Name",
    defaultValue: "Default Value",
    error: true,
    helperText: "入力してください。",
    handleChange: (): void => {
      console.log("change");
    },
  };
  return <TextInput {...props}></TextInput>;
};

export const numberInput = (): JSX.Element => {
  const props = {
    label: "Price",
    error: false,
    type: "number",
    handleChange: (): void => {
      console.log("change");
    },
  };
  return <TextInput {...props}></TextInput>;
};

export const numberInputWithNoInputError = (): JSX.Element => {
  const props = {
    label: "Price",
    error: true,
    type: "number",
    helperText: "入力してください。",
    handleChange: (): void => {
      console.log("change");
    },
  };
  return <TextInput {...props}></TextInput>;
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
    categoryName: "Cafe",
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
