import React from "react";
import CloseButton from "./";
import { shallow } from "enzyme";

describe("<CloseButton />", () => {
  let container: any = null;
  const handleClickFunction = jest.fn();

  beforeEach(() => {
    container = shallow(<CloseButton handleClick={handleClickFunction} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("should have proper props", () => {
    expect(container.find(".CloseButton").props()).toMatchObject({
      onClick: handleClickFunction,
    });
  });

  test("click event handler should be triggered", () => {
    container.simulate("click");
    expect(handleClickFunction).toBeCalled();
  });
});
