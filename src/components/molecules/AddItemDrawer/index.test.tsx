import React from "react";
import AddItemDrawer from "./";
import { shallow } from "enzyme";
import { sampleState } from "@/state/categories";

describe("<AddItemDrawer />", () => {
  let container: any = null;
  const categories = sampleState;

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
