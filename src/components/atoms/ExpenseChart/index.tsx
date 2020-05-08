import React from "react";
import * as chartjs from "chart.js";
import { HorizontalBar, ChartData } from "react-chartjs-2";
import convertHexToRgba from "@/util/functions/convertHexToRgba";
import { Category } from "state/categories";

export interface ExpenseChartProps {
  categories: Array<Category>;
}

const getBackgroundColors = (categories: Array<Category>): Array<string> => {
  return categories.map((category) => {
    const rgba = convertHexToRgba(category.color, 0.2);
    return rgba || "";
  });
};

const getBorderColors = (categories: Array<Category>): Array<string> => {
  return categories.map((category) => {
    const rgba = convertHexToRgba(category.color, 1);
    return rgba || "";
  });
};

const options: chartjs.ChartOptions = {
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ExpenseChart: React.FC<ExpenseChartProps> = (props) => {
  const data: ChartData<chartjs.ChartData> = {
    labels: props.categories.map((category) => {
      return category.name;
    }),
    datasets: [
      // 出費
      {
        label: "Expense",
        data: props.categories.map((category) => {
          return category.defaultBudget;
        }),
        backgroundColor: getBackgroundColors(props.categories),
        borderColor: getBorderColors(props.categories),
        barPercentage: 1,
        borderWidth: 1,
      },
      // 予算
      {
        label: "Budget",
        data: props.categories.map((category) => {
          return category.defaultBudget;
        }),
        backgroundColor: props.categories.map((category) => {
          return category.defaultBudget <= category.defaultBudget
            ? "rgba(0, 0, 0, 0.1)"
            : "rgba(255, 0, 0, 0.5)";
        }),
        barPercentage: 0.5,
      },
    ],
  };

  return <HorizontalBar data={data} width={100} options={options} />;
};

export default ExpenseChart;
