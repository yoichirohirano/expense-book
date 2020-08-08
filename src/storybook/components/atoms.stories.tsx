/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TextButton from "@/components/atoms/TextButton";
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
import MonthInput, { MonthInputProps } from "@/components/atoms/MonthInput";
import ExpenseListItem, {
  ExpenseListItemProps,
} from "@/components/atoms/ExpenseListItem";
import ExpenseListSubHeader from "@/components/atoms/ExpenseListSubHeader";
import H6Title from "@/components/atoms/H6Title";
import AmountInput, { AmountInputProps } from "@/components/atoms/AmountInput";

const props = {
  handleClick: (): void => {
    console.log("click!");
  },
};

export const textButton = (): JSX.Element => {
  const props = {
    handleClick: (): void => {
      console.log("click!");
    },
    text: "ADD CATEGORY",
  };
  return <TextButton {...props}></TextButton>;
};

export const textButtonNegative = (): JSX.Element => {
  const props = {
    handleClick: (): void => {
      console.log("click!");
    },
    text: "DELETE CATEGORY",
    isNegative: true,
  };
  return <TextButton {...props}></TextButton>;
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

export const deleteButtonDisabled = (): JSX.Element => {
  return <DeleteButton {...props} disabled={true}></DeleteButton>;
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
    months: [
      "2020/03",
      "2020/04",
      "2020/05",
      "2020/06",
      "2020/07",
      "2020/08",
      "2020/09",
    ],
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
        budget: 30000,
        sortIndex: 0,
        color: "#489ec8",
      },
      {
        categoryName: "Cafe",
        amount: 7000,
        budget: 5000,
        sortIndex: 1,
        color: "#489ec8",
      },
      {
        categoryName: "test",
        amount: 12000,
        budget: 12000,
        sortIndex: 2,
        color: "#489ec8",
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
    error: false,
    handleChange: (): void => {
      console.log("change");
    },
  };
  return <TextInput {...props}></TextInput>;
};

export const textInputWithDefaultValue = (): JSX.Element => {
  const props = {
    label: "CategoryName",
    defaultValue: "Food",
    error: false,
    handleChange: (): void => {
      console.log("change");
    },
  };
  return <TextInput {...props}></TextInput>;
};

export const textInputDisabled = (): JSX.Element => {
  const props = {
    label: "Item Name",
    error: false,
    handleChange: (): void => {
      console.log("change");
    },
    disabled: true,
  };
  return <TextInput {...props}></TextInput>;
};

export const textInputWithNoInputError = (): JSX.Element => {
  const props = {
    label: "ItemName",
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

export const numberInputWithDefaultValue = (): JSX.Element => {
  const props = {
    label: "Budget",
    defaultValue: "25000",
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

export const amountInput = (): JSX.Element => {
  const props: AmountInputProps = {
    label: "Price",
    error: false,
    handleChange: (value: string): void => {
      console.log(value);
    },
  };
  return <AmountInput {...props}></AmountInput>;
};

export const amountInputWithDefaultValue = (): JSX.Element => {
  const props: AmountInputProps = {
    label: "Price",
    error: false,
    defaultValue: "1000000",
    handleChange: (value: string): void => {
      console.log(value);
    },
  };
  return <AmountInput {...props}></AmountInput>;
};

export const amountInputWithNoInputError = (): JSX.Element => {
  const props: AmountInputProps = {
    label: "Price",
    error: true,
    helperText: "入力してください。",
    handleChange: (value: string): void => {
      console.log(value);
    },
  };
  return <AmountInput {...props}></AmountInput>;
};

export const dateInput = (): JSX.Element => {
  const props: DateInputProps = {
    handleChange: (date) => {
      console.log(date);
    },
  };
  return <DateInput {...props}></DateInput>;
};

export const monthInput = (): JSX.Element => {
  const props: MonthInputProps = {
    isOpen: true,
    handleChange: (date) => {
      console.log(date);
    },
    handleClose: () => {
      console.log("close");
    },
  };
  return <MonthInput {...props}></MonthInput>;
};

export const expenseListItem = (): JSX.Element => {
  const props: ExpenseListItemProps = {
    amount: 400,
    name: "スタバ",
    date: new Date("2020-06-09T00:00:00"),
    dateStr: "20200609T000000",
    category: {
      name: "Cafe",
      id: "AjOQWgDdVSVsLQNCEpNP",
    },
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
