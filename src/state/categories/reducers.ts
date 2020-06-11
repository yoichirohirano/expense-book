import { Categories } from ".";
import { CategoriesAction } from "./actions";
import actionTypes from "./types";

export const sampleState: Categories = {
  E3cnHvL8SwPTbn4ChMWq: {
    defaultAmount: 30000,
    name: "Food",
    sortIndex: 0,
  },
  AjOQWgDdVSVsLQNCEpNP: {
    defaultAmount: 5000,
    name: "Cafe",
    sortIndex: 1,
  },
  "4fgOOb41j82zZxyCBQcS": {
    defaultAmount: 12000,
    name: "雑費",
    sortIndex: 2,
  },
  pXhYzqbyOrjGnSmZJMFN: {
    defaultAmount: 20000,
    name: "Dating",
    sortIndex: 3,
  },
  fGUwZnNss1Nnmvtdteoi: {
    defaultAmount: 20000,
    name: "Free",
    sortIndex: 4,
  },
  w2IJ86mtXfcNyRm23aw4: {
    defaultAmount: 3000,
    name: "Book",
    sortIndex: 5,
  },
  "0tMKc5h30IaaRIZnmcAv": {
    defaultAmount: 12000,
    name: "Gym",
    sortIndex: 6,
  },
  XKZ5LP61ZgRGWeRFTboV: {
    defaultAmount: 41000,
    name: "Fixed",
    sortIndex: 7,
  },
  "3KEecx7xaz3wffH9iwXe": {
    defaultAmount: 25000,
    name: "Sudden",
    sortIndex: 8,
  },
  WO0O1eUgpwzGj49EmzZW: {
    defaultAmount: 45000,
    name: "Saving",
    sortIndex: 9,
  },
};

const initialState: Categories =
  process.env.NODE_ENV === "test" ? sampleState : {};

const reducer = (
  state: Categories = initialState,
  action: CategoriesAction
): Categories => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY: {
      const id = new Date().getTime();
      newState[id] = action.payload.category;
      return newState;
    }
    case actionTypes.UPDATE_CATEGORY: {
      newState[action.payload.id] = action.payload.category;
      return newState;
    }
    case actionTypes.DELETE_CATEGORY: {
      delete newState[action.payload.id];
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
