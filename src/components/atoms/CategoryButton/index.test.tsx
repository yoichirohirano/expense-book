import React from "react";
import CategoryButton from "./";
import { shallow } from "enzyme";

describe("<CategoryButton />", () => {
  let container = null;

  const props = {
    selected: false,
    label: "Food",
    handleClick: jest.fn(),
  };

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    container = shallow(<CategoryButton {...props} />);
    expect(container.html()).toMatchSnapshot();
  });

  test("should have proper props", () => {
    container = shallow(<CategoryButton {...props} />);
    expect(container.find(".CategoryButton").props()).toMatchObject({
      color: "primary",
      label: "Food",
      onClick: props.handleClick,
    });
  });

  test("should have primary colors", () => {
    container = shallow(<CategoryButton {...props} />);
    expect(container.find(".CategoryButton").props()).toMatchObject({
      color: "primary",
    });
  });

  test("should have secondary colors", () => {
    const props = {
      selected: true,
      label: "Food",
      handleClick: jest.fn(),
    };
    container = shallow(<CategoryButton {...props} />);
    expect(container.find(".CategoryButton").props()).toMatchObject({
      color: "secondary",
    });
  });

  test("click event handler should be triggered", () => {
    container = shallow(<CategoryButton {...props} />);
    container.simulate("click");
    expect(props.handleClick).toBeCalled();
  });
});
