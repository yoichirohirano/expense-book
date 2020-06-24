import React from "react";
import MonthInput, { MonthInputProps } from ".";
import { shallow, mount } from "enzyme";

describe("<MonthInput />", () => {
  let container: any = null;
  const props: MonthInputProps = {
    isOpen: true,
    handleChange: jest.fn(),
    handleClose: jest.fn(),
  };

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should visible if isOpen is true", () => {
    container = mount(<MonthInput {...props} />);
    expect(container.find(".MuiPickersModal-dialogRoot").length).toBeTruthy();
  });

  test("should invisible if isOpen is false", () => {
    const props: MonthInputProps = {
      isOpen: false,
      handleChange: jest.fn(),
    };
    container = mount(<MonthInput {...props} />);
    expect(container.find(".MuiPickersModal-dialogRoot").length).toBe(0);
  });

  test("event handler should be triggered:change", () => {
    container = shallow(<MonthInput {...props} />);
    container
      .find(".MonthInput-DatePicker")
      .simulate("change", { target: { value: "" } });
    expect(props.handleChange).toBeCalled();
  });
});
