import React from "react";
import * as chartjs from "chart.js";
import { ChartData, HorizontalBar } from "react-chartjs-2";
import convertHexToRgba from "@/util/functions/convertHexToRgba";

export type ChartItem = {
  categoryName: string;
  budget: number;
  amount: number;
  sortIndex: number;
  color: string;
};
export interface ExpenseChartProps {
  chartItems: Array<ChartItem>;
}

const options: chartjs.ChartOptions = {
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [{ display: true, position: "top" }],
  },
  animation: {
    duration: 300,
    easing: "easeInOutCubic",
  },
};

const ExpenseChart: React.FC<ExpenseChartProps> = (props) => {
  const data: ChartData<chartjs.ChartData> = {
    labels: props.chartItems.map((item) => {
      return item.categoryName;
    }),
    datasets: [
      // 予算
      {
        type: "bubble",
        label: "予算",
        data: props.chartItems.map((item, index) => {
          return {
            x: item.budget,
            y: props.chartItems[index].categoryName,
          };
        }),
        borderColor: "rgba(63,81,181, 0.5)",
        radius: 4,
        pointStyle: "rectRot",
      },
      // 出費
      {
        type: "horizontalBar",
        label: "支出",
        data: props.chartItems.map((item) => {
          return item.amount;
        }),
        backgroundColor: props.chartItems.map((item) => {
          return item.budget < item.amount
            ? "rgba(255, 0, 0, 0.7)"
            : convertHexToRgba(item.color, 0.2) || "";
        }),
        borderColor: props.chartItems.map((item) => {
          return item.budget < item.amount
            ? "rgba(255, 0, 0)"
            : convertHexToRgba(item.color) || "";
        }),
        barPercentage: 1,
        borderWidth: 1,
      },
    ],
  };

  return <HorizontalBar data={data} width={100} options={options} />;
};

export default ExpenseChart;
