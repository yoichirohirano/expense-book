import { Category } from ".";
import { CategoriesAction } from "./actions";
import actionTypes from "./types";

export type Categories = {
  // categoryId(same as category.name) : category
  [key: string]: Category;
};

const initialState: Categories = {
  // TODO: Storybook確認用
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

const reducer = (
  state: Categories = initialState,
  action: CategoriesAction
): Categories => {
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY:
      state[action.payload.category.name] = action.payload.category;
      return Object.assign({}, state);
    case actionTypes.UPDATE_CATEGORY:
      delete state[action.payload.id];
      state[action.payload.category.name] = action.payload.category;
      return Object.assign({}, state);
    case actionTypes.DELETE_CATEGORY:
      delete state[action.payload.id];
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default reducer;
