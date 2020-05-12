import React from "react";
import DeleteButton from "./";
import { shallow } from "enzyme";

describe("<DeleteButton />", () => {
  let container: any = null;
  const props = {
    handleClick: jest.fn(),
    disabled: true,
  };

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    container = shallow(<DeleteButton {...props} />);
    expect(container.html()).toMatchSnapshot();
  });

  test("should have proper props", () => {
    container = shallow(<DeleteButton {...props} />);
    expect(container.find(".DeleteButton").props()).toMatchObject({
      onClick: props.handleClick,
      disabled: true,
    });
  });

  test("should have proper props(disable false)", () => {
    const props = {
      handleClick: jest.fn(),
      disabled: false,
    };
    container = shallow(<DeleteButton {...props} />);
    expect(container.find(".DeleteButton").props()).toMatchObject({
      onClick: props.handleClick,
      disabled: false,
    });
  });

  test("click event handler should be triggered", () => {
    container = shallow(<DeleteButton {...props} />);
    container.simulate("click");
    expect(props.handleClick).toBeCalled();
  });
});
