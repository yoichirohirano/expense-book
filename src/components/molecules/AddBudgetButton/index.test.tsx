import React from "react";
import AddBudgetButton from "./";
import { shallow, mount } from "enzyme";

describe("<AddBudgetButton />", () => {
  let container: any = null;

  const props = {
    addBudget: jest.fn(),
  };

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    container = shallow(<AddBudgetButton {...props} />);
    expect(container.html()).toMatchSnapshot();
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
