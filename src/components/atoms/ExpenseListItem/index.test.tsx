import React from "react";
import ExpenseListItem, { ExpenseListItemProps } from "./";
import { shallow } from "enzyme";

describe("<ExpenseListItem />", () => {
  let container: any = null;
  const props: ExpenseListItemProps = {
    amount: 400,
    name: "スタバ",
    date: new Date("2020-06-09T00:00:00"),
    dateStr: "20200609T000000",
    category: {
      name: "Cafe",
      id: "AjOQWgDdVSVsLQNCEpNP",
    },
    handleClickItem: jest.fn(),
  };

  beforeEach(() => {
    container = shallow(<ExpenseListItem {...props} />);
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  test("ListItem should have proper props", () => {
    expect(container.find(".ExpenseListItem").props()).toMatchObject({
      onClick: props.handleClickItem,
    });
  });

  test("ListItemText should have proper props", () => {
    expect(
      container.find(".ExpenseListItem-ListItemText").props()
    ).toMatchObject({
      primary: props.category.name,
      secondary: props.name,
    });
  });

  test("should show proper amount", () => {
    expect(container.find(".ExpenseListItem-amount").text()).toBe(
      `¥${props.amount}`
    );
  });

  test("click event handler should be triggered", () => {
    container.find(".ExpenseListItem").simulate("click");
    expect(props.handleClickItem).toBeCalled();
  });
});
