import React from "react";
import AddItemDrawer from "./";
import { shallow } from "enzyme";

describe("<AddItemDrawer />", () => {
  let container: any = null;
  const categories = {
    aaaaa: {
      defaultAmount: 30000,
      name: "Food",
      sortIndex: 0,
    },
    bbbbb: {
      defaultAmount: 5000,
      name: "Cafe",
      sortIndex: 1,
    },
    ccccc: {
      defaultAmount: 12000,
      name: "雑費",
      sortIndex: 2,
    },
    ddddd: {
      defaultAmount: 45000,
      name: "Drink",
      sortIndex: 3,
    },
    eeeee: {
      defaultAmount: 20000,
      name: "Date",
      sortIndex: 4,
    },
    fffff: {
      defaultAmount: 3000,
      name: "Book",
      sortIndex: 5,
    },
    ggggg: {
      defaultAmount: 12000,
      name: "Gym",
      sortIndex: 6,
    },
    hhhhh: {
      defaultAmount: 33000,
      name: "Fixed",
      sortIndex: 7,
    },
    iiiii: {
      defaultAmount: 30000,
      name: "Sudden",
      sortIndex: 8,
    },
    jjjjj: {
      defaultAmount: 45000,
      name: "Savings",
      sortIndex: 9,
    },
  };

  const props = {
    categories: categories,
    title: "New Item",
    editItemId: "",
    isOpen: true,
    toggleDrawer: jest.fn(),
    add: jest.fn(),
    delete: jest.fn(),
  };

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    container = shallow(<AddItemDrawer {...props} />);
    expect(container.html()).toMatchSnapshot();
  });

  test("should have proper title", () => {
    container = shallow(<AddItemDrawer {...props} />);
    expect(container.find("H6Title").props().text).toBe(props.title);
  });

  test("should not have delete button on add mode", () => {
    container = shallow(<AddItemDrawer {...props} />);
    expect(container.find("DeleteButton").exists()).toBe(false);
  });

  test("should have delete button on edit mode", () => {
    props.editItemId = "aaaaa";
    container = shallow(<AddItemDrawer {...props} />);
    expect(container.find("DeleteButton").exists()).toBe(true);
  });

  test("should have proper handler - CategorySelector", () => {
    container = shallow(<AddItemDrawer {...props} />);
    expect(container.find("CategorySelector").props()).toMatchObject({
      categories: props.categories,
    });
  });
});
