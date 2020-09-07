import { Categories } from ".";
import { CategoriesAction } from "./actions";
import actionTypes from "./types";

export const sampleState: Categories = {
  E3cnHvL8SwPTbn4ChMWq: {
    defaultAmount: 30000,
    name: "食費",
    sortIndex: 0,
  },
  fGUwZnNss1Nnmvtdteoi: {
    defaultAmount: 50000,
    name: "娯楽",
    sortIndex: 1,
  },
  w2IJ86mtXfcNyRm23aw4: {
    defaultAmount: 3000,
    name: "書籍",
    sortIndex: 2,
  },
  "4fgOOb41j82zZxyCBQcS": {
    defaultAmount: 12000,
    name: "雑費",
    sortIndex: 3,
  },
  pXhYzqbyOrjGnSmZJMFN: {
    defaultAmount: 5000,
    name: "交通費",
    sortIndex: 4,
  },
  XKZ5LP61ZgRGWeRFTboV: {
    defaultAmount: 30000,
    name: "固定費",
    sortIndex: 5,
  },
  WO0O1eUgpwzGj49EmzZW: {
    defaultAmount: 40000,
    name: "貯金",
    sortIndex: 6,
  },
};

const initialState: Categories = sampleState;

const reducer = (
  state: Categories = initialState,
  action: CategoriesAction
): Categories => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.CREATE_CATEGORY:
    case actionTypes.UPDATE_CATEGORY: {
      newState[action.payload.id] = action.payload.category;
      return newState;
    }
    case actionTypes.DELETE_CATEGORY: {
      delete newState[action.payload.id];
      return newState;
    }
    case actionTypes.UPDATE_ALL_CATEGORIES_FROM_FIRESTORE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
