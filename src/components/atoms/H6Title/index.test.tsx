import React from "react";
import H6Title from "./";
import { shallow } from "enzyme";

describe("<H6Title />", () => {
  let container: any = null;
  const props = {
    text: "title",
  };

  beforeEach(() => {
    container = shallow(<H6Title {...props} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("should show proper text", () => {
    expect(container.find(".H6Title").text()).toBe(props.text);
  });
});
