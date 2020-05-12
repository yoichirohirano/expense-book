import React from "react";
import ExpenseChart from "./";
import { shallow } from "enzyme";

describe("<ExpenseChart />", () => {
  let container: any = null;
  const props = {
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

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    container = shallow(<ExpenseChart {...props} />);
    expect(container.html()).toMatchSnapshot();
  });
});
