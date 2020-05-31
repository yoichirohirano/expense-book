import React from "react";
import TextInput from "./";
import { shallow, mount } from "enzyme";

describe("<TextInput />", () => {
  let container: any = null;
  const props = {
    label: "Budget",
    defaultValue: "25000",
    error: false,
    type: "number",
    handleChange: jest.fn(),
  };

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    container = shallow(<TextInput {...props} />);
    expect(container.html()).toMatchSnapshot();
  });

  test("should have proper label", () => {
    container = mount(<TextInput {...props} />);
    expect(container.find("label.MuiInputLabel-root").text()).toBe(props.label);
  });

  test("should have proper default value", () => {
    container = mount(<TextInput {...props} />);
    expect(
      container.find("input.MuiInputBase-input").get(0).props.defaultValue
    ).toBe(props.defaultValue);
  });

  test("should be proper input type", () => {
    container = mount(<TextInput {...props} />);
    expect(container.find("input.MuiInputBase-input").get(0).props.type).toBe(
      props.type
    );
  });

  test("should be disabled", () => {
    const props = {
      label: "Budget",
      defaultValue: "25000",
      error: false,
      type: "number",
      handleChange: jest.fn(),
      disabled: true,
    };
    container = mount(<TextInput {...props} />);
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
    container = mount(<TextInput {...props} />);
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
    container = mount(<TextInput {...props} />);
    expect(container.find(".MuiFormHelperText-root").text()).toBe(
      props.helperText
    );
  });

  test("event handler should be triggered", () => {
    container = shallow(<TextInput {...props} />);
    container
      .find(".TextInput")
      .simulate("change", { target: { value: "test" } });
    expect(props.handleChange).toBeCalled();
  });
});
