import React from "react";
import CompleteButton from "./";
import { shallow } from "enzyme";

describe("<CompleteButton />", () => {
  let container: any = null;
  const handleClickFunction = jest.fn();

  beforeEach(() => {
    container = shallow(<CompleteButton handleClick={handleClickFunction} />);
  });

  afterEach(() => {
    container && container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("should have proper props", () => {
    expect(container.find(".CompleteButton").props()).toMatchObject({
      onClick: handleClickFunction,
    });
  });

  test("click event handler should be triggered", () => {
    container.simulate("click");
    expect(handleClickFunction).toBeCalled();
  });
});
