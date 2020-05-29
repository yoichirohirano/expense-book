import { Categories } from ".";
import { CategoriesAction } from "./actions";
import actionTypes from "./types";

const initialState: Categories = {
  // TODO: Storybook確認用
  aaaaa: {
    defaultBudget: 30000,
    name: "Food",
    sortIndex: 0,
  },
  bbbbb: {
    defaultBudget: 5000,
    name: "Cafe",
    sortIndex: 1,
  },
  ccccc: {
    defaultBudget: 12000,
    name: "雑費",
    sortIndex: 2,
  },
  ddddd: {
    defaultBudget: 45000,
    name: "Drink",
    sortIndex: 3,
  },
  eeeee: {
    defaultBudget: 20000,
    name: "Date",
    sortIndex: 4,
  },
  fffff: {
    defaultBudget: 3000,
    name: "Book",
    sortIndex: 5,
  },
  ggggg: {
    defaultBudget: 12000,
    name: "Gym",
    sortIndex: 6,
  },
  hhhhh: {
    defaultBudget: 33000,
    name: "Fixed",
    sortIndex: 7,
  },
  iiiii: {
    defaultBudget: 30000,
    name: "Sudden",
    sortIndex: 8,
  },
  jjjjj: {
    defaultBudget: 45000,
    name: "Savings",
    sortIndex: 9,
  },
};

const reducer = (
  state: Categories = initialState,
  action: CategoriesAction
): Categories => {
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY: {
      const id = new Date().getTime();
      state[id] = action.payload.category;
      return state;
    }
    case actionTypes.UPDATE_CATEGORY: {
      state[action.payload.id] = action.payload.category;
      return Object.assign({}, state);
    }
    case actionTypes.DELETE_CATEGORY: {
      delete state[action.payload.id];
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
