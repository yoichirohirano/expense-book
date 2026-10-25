import React from "react";
import AddBudgetButton from "./";
import { shallow, mount } from "enzyme";

describe("<AddBudgetButton />", () => {
  let container: any = null;

  const props = {
    addBudget: vi.fn(),
  };

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    // 初期値の年月が現在日時に依存するため固定する
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date(2020, 8, 15));
    container = shallow(<AddBudgetButton {...props} />);
    expect(container.html()).toMatchSnapshot();
    vi.useRealTimers();
  });

  test("should have proper props:TextButton", () => {
    container = shallow(<AddBudgetButton {...props} />);
    expect(container.find("TextButton").props()).toMatchObject({
      text: "予算を追加する",
    });
  });

  test("should show date picker on click", () => {
    container = mount(<AddBudgetButton {...props} />);
    container.find("TextButton").simulate("click");
    expect(container.find(".MuiPickersModal-dialogRoot").length).toBeTruthy();
  });
});
