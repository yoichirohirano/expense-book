import { Budgets } from ".";
import { BudgetsAction } from "./actions";
import actionTypes from "./types";

export const sampleState: Budgets = {
  "202005": {
    budget: {
      "9DDlIptkGsz87lqQsxBU": {
        amount: 33000,
        category: {
          name: "Food",
          ref: "E3cnHvL8SwPTbn4ChMWq",
        },
      },
      byemREpa9UJRL4CWjgVy: {
        amount: 12000,
        category: {
          name: "雑費",
          ref: "4fgOOb41j82zZxyCBQcS",
        },
      },
    },
  },
  "202006": {
    budget: {
      ag2NKkGp7PM1gWgGYR8P: {
        amount: 30000,
        category: {
          name: "Food",
          ref: "E3cnHvL8SwPTbn4ChMWq",
        },
      },
      hnQCRIwGO2wbJhSMCH9l: {
        amount: 25000,
        category: {
          name: "Free",
          ref: "fGUwZnNss1Nnmvtdteoi",
        },
      },
      iCjmkMKy2RagyO8UPGib: {
        amount: 3000,
        category: {
          name: "Book",
          ref: "w2IJ86mtXfcNyRm23aw4",
        },
      },
    },
  },
  "202007": {
    budget: {
      OOvrNjAExohP3sMft8qw: {
        amount: 28000,
        category: {
          name: "Food",
          ref: "E3cnHvL8SwPTbn4ChMWq",
        },
      },
      "66oeQ8QCmf3X3in4DPUd": {
        amount: 35000,
        category: {
          name: "Free",
          ref: "fGUwZnNss1Nnmvtdteoi",
        },
      },
    },
  },
};

const initialState: Budgets =
  process.env.REACT_APP_ENV === "storybook" ? sampleState : {};

const reducer = (
  state: Budgets = initialState,
  action: BudgetsAction
): Budgets => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.CREATE_BUDGET:
      newState[action.payload.id] = {
        budget: {},
      };
      newState[action.payload.id].budget = action.payload.budget;
      return newState;
    case actionTypes.UPDATE_BUDGET:
      newState[action.payload.id].budget = action.payload.budget;
      return newState;
    case actionTypes.DELETE_BUDGET:
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
};

export default reducer;
