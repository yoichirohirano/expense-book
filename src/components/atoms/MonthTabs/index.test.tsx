import React from "react";
import MonthTabs from "./";
import { shallow } from "enzyme";

describe("<MonthTabs />", () => {
  let container: any = null;
  const props = {
    months: ["202003", "202004", "202005", "202006", "202007"],
    currentIndex: 0,
    handleChange: jest.fn(),
  };

  beforeEach(() => {
    container = shallow(<MonthTabs {...props} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("event handler should be triggered", () => {
    container
      .find(".MonthTabs-Tabs")
      .simulate("change", { target: { value: "" } });
    expect(props.handleChange).toBeCalled();
  });
});
