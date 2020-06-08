import React from "react";
import CategorySelector from "./";
import { shallow, mount } from "enzyme";

describe("<CategorySelector />", () => {
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
    handleChangeCategory: jest.fn(),
    selectedCategoryId: "",
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
