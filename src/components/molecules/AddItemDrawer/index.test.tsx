import React from "react";
import AddItemDrawer from "./";
import { shallow } from "enzyme";

describe("<AddItemDrawer />", () => {
  let container: any = null;
  const categories = {
    Food: {
      name: "Food",
      color: "#7CB342",
      defaultAmount: 30000,
    },
    Cafe: {
      name: "Cafe",
      color: "#D81B60",
      defaultAmount: 5000,
    },
    雑費: {
      name: "雑費",
      color: "#FDD835",
      defaultAmount: 12000,
    },
    Drink: {
      name: "Drink",
      color: "#5E35B1",
      defaultAmount: 45000,
    },
    Date: {
      name: "Date",
      color: "#FB8C00",
      defaultAmount: 20000,
    },
    Book: {
      name: "Book",
      color: "#1E88E5",
      defaultAmount: 3000,
    },
    Gym: {
      name: "Gym",
      color: "#F4511E",
      defaultAmount: 12000,
    },
    Fixed: {
      name: "Fixed",
      color: "#00ACC1",
      defaultAmount: 33000,
    },
    Sudden: {
      name: "Sudden",
      color: "#8E24AA",
      defaultAmount: 30000,
    },
    Savings: {
      name: "Savings",
      color: "#3949AB",
      defaultAmount: 45000,
    },
  };

  const props = {
    categories: categories,
    title: "New Item",
    isEditItem: false,
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
    props.isEditItem = true;
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
