import React from "react";
import TextButton from "./";
import { shallow } from "enzyme";

describe("<TextButton />", () => {
  let container: any = null;
  const props = {
    text: "buttonText",
    handleClick: jest.fn(),
  };

  beforeEach(() => {
    container = shallow(<TextButton {...props} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("should have proper props", () => {
    expect(container.find(".TextButton").props()).toMatchObject({
      onClick: props.handleClick,
    });
  });

  test("should show proper text", () => {
    expect(container.find(".TextButton").text()).toBe(props.text);
  });

  test("event handler should be triggered", () => {
    container.simulate("click");
    expect(props.handleClick).toBeCalled();
  });
});
