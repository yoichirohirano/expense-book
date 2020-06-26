import React from "react";
import AmountInput from "./";
import { shallow, mount } from "enzyme";

describe("<AmountInput />", () => {
  let container: any = null;
  const props = {
    label: "Budget",
    defaultValue: "25000",
    error: false,
    handleChange: jest.fn(),
  };

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    container = shallow(<AmountInput {...props} />);
    expect(container.html()).toMatchSnapshot();
  });

  test("should have proper label", () => {
    container = mount(<AmountInput {...props} />);
    expect(container.find("label.MuiInputLabel-root").text()).toBe(props.label);
  });

  test("should have proper default value", () => {
    container = mount(<AmountInput {...props} />);
    expect(container.find("input.MuiInputBase-input").get(0).props.value);
  });

  test("should be disabled", () => {
    const props = {
      label: "Budget",
      defaultValue: "25000",
      error: false,
      handleChange: jest.fn(),
      disabled: true,
    };
    container = mount(<AmountInput {...props} />);
    expect(
      container.find("input.MuiInputBase-input").get(0).props.disabled
    ).toBe(true);
  });

  test("should be error", () => {
    const props = {
      label: "Budget",
      defaultValue: "25000",
      error: true,
      helperText: "helperText",
      handleChange: jest.fn(),
    };
    container = mount(<AmountInput {...props} />);
    expect(container.exists(".MuiInputBase-root.Mui-error")).toBe(true);
  });

  test("should have proper error text", () => {
    const props = {
      label: "Budget",
      defaultValue: "25000",
      error: true,
      helperText: "helperText",
      handleChange: jest.fn(),
    };
    container = mount(<AmountInput {...props} />);
    expect(container.find(".MuiFormHelperText-root").text()).toBe(
      props.helperText
    );
  });
});
