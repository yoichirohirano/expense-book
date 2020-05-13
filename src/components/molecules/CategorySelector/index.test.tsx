import React from "react";
import CategorySelector from "./";
import { shallow, mount } from "enzyme";

describe("<CategorySelector />", () => {
  let container: any = null;
  const categories = {
    Food: {
      name: "Food",
      color: "#7CB342",
      defaultBudget: 30000,
    },
    Cafe: {
      name: "Cafe",
      color: "#D81B60",
      defaultBudget: 5000,
    },
    雑費: {
      name: "雑費",
      color: "#FDD835",
      defaultBudget: 12000,
    },
    Drink: {
      name: "Drink",
      color: "#5E35B1",
      defaultBudget: 45000,
    },
    Date: {
      name: "Date",
      color: "#FB8C00",
      defaultBudget: 20000,
    },
    Book: {
      name: "Book",
      color: "#1E88E5",
      defaultBudget: 3000,
    },
    Gym: {
      name: "Gym",
      color: "#F4511E",
      defaultBudget: 12000,
    },
    Fixed: {
      name: "Fixed",
      color: "#00ACC1",
      defaultBudget: 33000,
    },
    Sudden: {
      name: "Sudden",
      color: "#8E24AA",
      defaultBudget: 30000,
    },
    Savings: {
      name: "Savings",
      color: "#3949AB",
      defaultBudget: 45000,
    },
  };

  const props = {
    categories: categories,
    handleChangeCategory: jest.fn(),
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
});
