import React from "react";
import CategorySelector from "./";
import { shallow, mount } from "enzyme";
import { sampleState } from "@/state/categories";

describe("<CategorySelector />", () => {
  let container: any = null;
  const categories = sampleState;

  const props = {
    categories: categories,
    handleChangeCategory: jest.fn(),
    selectedCategoryId: "E3cnHvL8SwPTbn4ChMWq",
  };

  afterEach(() => {
    container.unmount();
    container = null;
  });

  test("should match the snapshot", () => {
    container = shallow(<CategorySelector {...props} />);
    expect(container.html()).toMatchSnapshot();
  });

  test("should have proper length of CategoryButton", () => {
    container = shallow(<CategorySelector {...props} />);
    expect(container.find("CategoryButton").getElements().length).toBe(
      Object.keys(props.categories).length
    );
  });

  test("should have selected first category", () => {
    container = mount(<CategorySelector {...props} />);
    expect(container.find(".CategoryButton").at(0).props().color).toBe(
      "secondary"
    );
  });

  test("should change selected category", () => {
    container = mount(<CategorySelector {...props} />);
    container.find(".CategoryButton").at(1).simulate("click");
    expect(container.find(".CategoryButton").at(1).props().color).toBe(
      "secondary"
    );
  });

  test("event handler should be triggered", () => {
    container = mount(<CategorySelector {...props} />);
    container.find(".CategoryButton").at(1).simulate("click");
    expect(props.handleChangeCategory).toBeCalled();
  });
});
