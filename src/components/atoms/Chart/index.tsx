import React from "react";
import { HorizontalBar, ChartData } from "react-chartjs-2";
import convertHexToRgba from "@/util/functions/convertHexToRgba";
import * as chartjs from "chart.js";

// export interface Budget {
//   [categoryId: string]: number;
// }

// 呼び出し元のorganismsでredux化する
// const getFormattedCategories = (
//   categories: Array<Category>,
//   budget: Budget
// ) => {
//   const newCategories = categories.map((category: Category) => {
//     const amount = budget[category.label];
//     return Object.assign(category, { budget: amount });
//   });
//   return newCategories;
// };

export interface Category {
  label: string;
  amount: number;
  budget: number;
  color: string;
}

interface Props {
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

const Chart: React.FC<Props> = (props) => {
  const data: ChartData<chartjs.ChartData> = {
    labels: props.categories.map((category) => {
      return category.label;
    }),
    datasets: [
      // 出費
      {
        label: "Expense",
        data: props.categories.map((category) => {
          return category.amount;
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
          return category.budget;
        }),
        backgroundColor: props.categories.map((category) => {
          return category.amount <= category.budget
            ? "rgba(0, 0, 0, 0.1)"
            : "rgba(255, 0, 0, 0.5)";
        }),
        barPercentage: 0.5,
      },
    ],
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

  return <HorizontalBar data={data} width={100} options={options} />;
};

export default Chart;
