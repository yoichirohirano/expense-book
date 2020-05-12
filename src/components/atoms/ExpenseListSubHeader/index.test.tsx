import React from "react";
import ExpenseListSubHeader from "./";
import { shallow } from "enzyme";

describe("<ExpenseListSubHeader />", () => {
  let container: any = null;
  const props = {
    dateLabel: "2020/05/01",
  };

  beforeEach(() => {
    container = shallow(<ExpenseListSubHeader {...props} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("should show proper text", () => {
    expect(container.find(".ExpenseListSubHeader").text()).toBe(
      props.dateLabel
    );
  });
});
