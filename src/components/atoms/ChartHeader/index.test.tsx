import React from "react";
import ChartHeader from "./";
import { shallow } from "enzyme";

describe("<ChartHeader />", () => {
  let container = null;
  const props = {
    expenseAmount: 200000,
    budgetAmount: 300000,
  };

  beforeEach(() => {
    container = shallow(<ChartHeader {...props} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("should render total amount", () => {
    expect(container.find(".ChartHeader-total").text()).toBe("Total: ¥200,000");
  });

  test("should render budget amount", () => {
    expect(container.find(".ChartHeader-budget").text()).toBe(
      "Budget: ¥300,000"
    );
  });
});
