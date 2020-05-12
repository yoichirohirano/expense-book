import React from "react";
import MonthTabs from "./";
import { shallow } from "enzyme";

describe("<MonthTabs />", () => {
  let container: any = null;
  const props = {
    months: ["2020/03", "2020/04", "2020/05", "2020/06", "2020/07"],
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
