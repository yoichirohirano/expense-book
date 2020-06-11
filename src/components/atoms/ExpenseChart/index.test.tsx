import React from "react";
import ExpenseChart, { ExpenseChartProps } from "./";
import { shallow } from "enzyme";

export const expenseChartSampleProps: ExpenseChartProps = {
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

describe("<ExpenseChart />", () => {
  let container: any = null;
  const props: ExpenseChartProps = expenseChartSampleProps;

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    container = shallow(<ExpenseChart {...props} />);
    expect(container.html()).toMatchSnapshot();
  });
});
