import React from "react";
import MonthInput from ".";
import { shallow, mount } from "enzyme";

describe("<MonthInput />", () => {
  let container: any = null;
  const onChangeFunction = jest.fn();

  beforeEach(() => {
    container = shallow(<MonthInput handleChange={onChangeFunction} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should have proper defaultTimestamp", () => {
    container = mount(
      <MonthInput
        handleChange={onChangeFunction}
        // 2020/06/25
        defaultTimestamp={1593056096000}
      />
    );
    expect(container.find(".MuiOutlinedInput-input").props()).toMatchObject({
      value: "2020/06",
    });
  });

  test("event handler should be triggered", () => {
    container
      .find(".MonthInput-datepicker")
      .simulate("change", { target: { value: "" } });
    expect(onChangeFunction).toBeCalled();
  });
});
