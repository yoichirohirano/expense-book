import React from "react";
import MonthInput, { MonthInputProps } from ".";
import { shallow, mount } from "enzyme";

describe("<MonthInput />", () => {
  let container: any = null;
  const props: MonthInputProps = {
    isOpen: true,
    handleChange: jest.fn(),
  };

  beforeEach(() => {
    container = shallow(<MonthInput {...props} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should have proper defaultTimestamp", () => {
    container = mount(
      <MonthInput
        {...props}
        // 2020/06/25
        defaultTimestamp={1593056096000}
      />
    );
    expect(container.find(".MuiOutlinedInput-input").props()).toMatchObject({
      value: "2020/06",
    });
  });

  test("should visible if isOpen is true", () => {
    container = mount(<MonthInput {...props} />);
    expect(container.find("[role='presentation']").length).toBe(1);
  });

  test("should invisible if isOpen is false", () => {
    const props: MonthInputProps = {
      isOpen: false,
      handleChange: jest.fn(),
    };
    container = mount(<MonthInput {...props} />);
    expect(container.find("[role='presentation']").length).toBe(0);
  });

  test("event handler should be triggered", () => {
    container
      .find(".MonthInput-datepicker")
      .simulate("change", { target: { value: "" } });
    expect(props.handleChange).toBeCalled();
  });
});
