import React from "react";
import DateInput from "./";
import { shallow, mount } from "enzyme";

describe("<DateInput />", () => {
  let container: any = null;
  const onChangeFunction = jest.fn();

  beforeEach(() => {
    container = shallow(<DateInput handleChange={onChangeFunction} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  // 実行日付によってsnapshotが変わるので捨象
  // test("should match the snapshot", () => {
  //   expect(container.html()).toMatchSnapshot();
  // });

  test("should have proper defaultTimestamp", () => {
    container = mount(
      <DateInput
        handleChange={onChangeFunction}
        // 2020/06/25
        defaultTimestamp={1593056096000}
      />
    );
    expect(container.find(".MuiOutlinedInput-input").props()).toMatchObject({
      value: "2020/06/25",
    });
  });

  test("event handler should be triggered", () => {
    container
      .find(".DateInput-datepicker")
      .simulate("change", { target: { value: "" } });
    expect(onChangeFunction).toBeCalled();
  });
});
