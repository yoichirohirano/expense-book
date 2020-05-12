import React from "react";
import DateInput from "./";
import { shallow } from "enzyme";

describe("<DateInput />", () => {
  let container = null;
  const onChangeFunction = jest.fn();

  beforeEach(() => {
    container = shallow(<DateInput handleChange={onChangeFunction} />);
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
      .find(".DateInput-datepicker")
      .simulate("change", { target: { value: "" } });
    expect(onChangeFunction).toBeCalled();
  });
});
