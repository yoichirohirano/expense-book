import { Categories } from ".";
import { CategoriesAction } from "./actions";
import actionTypes from "./types";

const initialState: Categories = {
  // TODO: Storybook確認用
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

const reducer = (
  state: Categories = initialState,
  action: CategoriesAction
): Categories => {
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY: {
      const id = new Date().getTime();
      state[id] = action.payload.category;
      return Object.assign({}, state);
    }
    case actionTypes.UPDATE_CATEGORY: {
      state[action.payload.id] = action.payload.category;
      return Object.assign({}, state);
    }
    case actionTypes.DELETE_CATEGORY: {
      delete state[action.payload.id];
      return Object.assign({}, state);
    }
    default:
      return state;
  }
};

export default reducer;
