import React from "react";
import * as chartjs from "chart.js";
import { HorizontalBar, ChartData } from "react-chartjs-2";
import convertHexToRgba from "@/util/functions/convertHexToRgba";

export type ChartItem = {
  categoryName: string;
  amount: number;
  color: string;
  budget: number;
};
export interface ExpenseChartProps {
  chartItems: Array<ChartItem>;
}

const getBackgroundColors = (chartItems: Array<ChartItem>): Array<string> => {
  return chartItems.map((chartItem) => {
    const rgba = convertHexToRgba(chartItem.color, 0.2);
    return rgba || "";
  });
};

const getBorderColors = (chartItems: Array<ChartItem>): Array<string> => {
  return chartItems.map((chartItem) => {
    const rgba = convertHexToRgba(chartItem.color, 1);
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
    labels: props.chartItems.map((item) => {
      return item.categoryName;
    }),
    datasets: [
      // 出費
      {
        label: "Expense",
        data: props.chartItems.map((item) => {
          return item.amount;
        }),
        backgroundColor: getBackgroundColors(props.chartItems),
        borderColor: getBorderColors(props.chartItems),
        barPercentage: 1,
        borderWidth: 1,
      },
      // 予算
      {
        label: "Budget",
        data: props.chartItems.map((item) => {
          return item.budget;
        }),
        backgroundColor: props.chartItems.map((item) => {
          return item.budget < item.amount
            ? "rgba(255, 0, 0, 0.7)"
            : "rgba(0, 0, 0, 0.1)";
        }),
        barPercentage: 0.5,
      },
    ],
  };

  return <HorizontalBar data={data} width={100} options={options} />;
};

export default ExpenseChart;
