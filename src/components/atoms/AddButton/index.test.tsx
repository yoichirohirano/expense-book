import React from "react";
import AddButton from "./";
import { shallow } from "enzyme";

describe("<AddButton />", () => {
  let container = null;
  const onClickFunction = jest.fn();

  beforeEach(() => {
    container = shallow(<AddButton handleClick={onClickFunction} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("should have proper props", () => {
    expect(container.find(".AddButton").props()).toMatchObject({
      onClick: onClickFunction,
    });
  });

  test("click event handler should be triggered", () => {
    container.simulate("click");
    expect(onClickFunction).toBeCalled();
  });
});
