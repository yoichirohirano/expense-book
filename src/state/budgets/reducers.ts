import { Budgets } from ".";
import { BudgetsAction } from "./actions";
import actionTypes from "./types";

export const sampleState: Budgets = {
  "202001": {
    budget: {
      "3186020163": {
        amount: 30000,
        category: { name: "食費", ref: "E3cnHvL8SwPTbn4ChMWq" },
      },
      "7081388040": {
        amount: 20000,
        category: { name: "娯楽", ref: "fGUwZnNss1Nnmvtdteoi" },
      },
      "9309824704": {
        amount: 3000,
        category: { name: "書籍", ref: "w2IJ86mtXfcNyRm23aw4" },
      },
      "4932031535": {
        amount: 12000,
        category: { name: "雑費", ref: "4fgOOb41j82zZxyCBQcS" },
      },
      "6911870738": {
        amount: 5000,
        category: { name: "交通費", ref: "pXhYzqbyOrjGnSmZJMFN" },
      },
      "8536650673": {
        amount: 30000,
        category: { name: "固定費", ref: "XKZ5LP61ZgRGWeRFTboV" },
      },
      "1483808733": {
        amount: 45000,
        category: { name: "貯金", ref: "WO0O1eUgpwzGj49EmzZW" },
      },
    },
  },
  "202002": {
    budget: {
      "3186020163": {
        amount: 30000,
        category: { name: "食費", ref: "E3cnHvL8SwPTbn4ChMWq" },
      },
      "7081388040": {
        amount: 70000,
        category: { name: "娯楽", ref: "fGUwZnNss1Nnmvtdteoi" },
      },
      "9309824704": {
        amount: 3000,
        category: { name: "書籍", ref: "w2IJ86mtXfcNyRm23aw4" },
      },
      "4932031535": {
        amount: 12000,
        category: { name: "雑費", ref: "4fgOOb41j82zZxyCBQcS" },
      },
      "6911870738": {
        amount: 5000,
        category: { name: "交通費", ref: "pXhYzqbyOrjGnSmZJMFN" },
      },
      "8536650673": {
        amount: 30000,
        category: { name: "固定費", ref: "XKZ5LP61ZgRGWeRFTboV" },
      },
      "1483808733": {
        amount: 45000,
        category: { name: "貯金", ref: "WO0O1eUgpwzGj49EmzZW" },
      },
    },
  },
  "202003": {
    budget: {
      "3186020163": {
        amount: 30000,
        category: { name: "食費", ref: "E3cnHvL8SwPTbn4ChMWq" },
      },
      "7081388040": {
        amount: 10000,
        category: { name: "娯楽", ref: "fGUwZnNss1Nnmvtdteoi" },
      },
      "9309824704": {
        amount: 3000,
        category: { name: "書籍", ref: "w2IJ86mtXfcNyRm23aw4" },
      },
      "4932031535": {
        amount: 12000,
        category: { name: "雑費", ref: "4fgOOb41j82zZxyCBQcS" },
      },
      "6911870738": {
        amount: 5000,
        category: { name: "交通費", ref: "pXhYzqbyOrjGnSmZJMFN" },
      },
      "8536650673": {
        amount: 30000,
        category: { name: "固定費", ref: "XKZ5LP61ZgRGWeRFTboV" },
      },
      "1483808733": {
        amount: 45000,
        category: { name: "貯金", ref: "WO0O1eUgpwzGj49EmzZW" },
      },
    },
  },
  "202004": {
    budget: {
      "3186020163": {
        amount: 30000,
        category: { name: "食費", ref: "E3cnHvL8SwPTbn4ChMWq" },
      },
      "7081388040": {
        amount: 50000,
        category: { name: "娯楽", ref: "fGUwZnNss1Nnmvtdteoi" },
      },
      "9309824704": {
        amount: 3000,
        category: { name: "書籍", ref: "w2IJ86mtXfcNyRm23aw4" },
      },
      "4932031535": {
        amount: 12000,
        category: { name: "雑費", ref: "4fgOOb41j82zZxyCBQcS" },
      },
      "6911870738": {
        amount: 5000,
        category: { name: "交通費", ref: "pXhYzqbyOrjGnSmZJMFN" },
      },
      "8536650673": {
        amount: 30000,
        category: { name: "固定費", ref: "XKZ5LP61ZgRGWeRFTboV" },
      },
      "1483808733": {
        amount: 45000,
        category: { name: "貯金", ref: "WO0O1eUgpwzGj49EmzZW" },
      },
    },
  },
  "202005": {
    budget: {
      "3186020163": {
        amount: 30000,
        category: { name: "食費", ref: "E3cnHvL8SwPTbn4ChMWq" },
      },
      "7081388040": {
        amount: 50000,
        category: { name: "娯楽", ref: "fGUwZnNss1Nnmvtdteoi" },
      },
      "9309824704": {
        amount: 3000,
        category: { name: "書籍", ref: "w2IJ86mtXfcNyRm23aw4" },
      },
      "4932031535": {
        amount: 12000,
        category: { name: "雑費", ref: "4fgOOb41j82zZxyCBQcS" },
      },
      "6911870738": {
        amount: 5000,
        category: { name: "交通費", ref: "pXhYzqbyOrjGnSmZJMFN" },
      },
      "8536650673": {
        amount: 30000,
        category: { name: "固定費", ref: "XKZ5LP61ZgRGWeRFTboV" },
      },
      "1483808733": {
        amount: 45000,
        category: { name: "貯金", ref: "WO0O1eUgpwzGj49EmzZW" },
      },
    },
  },
  "202006": {
    budget: {
      "3186020163": {
        amount: 30000,
        category: { name: "食費", ref: "E3cnHvL8SwPTbn4ChMWq" },
      },
      "7081388040": {
        amount: 50000,
        category: { name: "娯楽", ref: "fGUwZnNss1Nnmvtdteoi" },
      },
      "9309824704": {
        amount: 3000,
        category: { name: "書籍", ref: "w2IJ86mtXfcNyRm23aw4" },
      },
      "4932031535": {
        amount: 12000,
        category: { name: "雑費", ref: "4fgOOb41j82zZxyCBQcS" },
      },
      "6911870738": {
        amount: 5000,
        category: { name: "交通費", ref: "pXhYzqbyOrjGnSmZJMFN" },
      },
      "8536650673": {
        amount: 30000,
        category: { name: "固定費", ref: "XKZ5LP61ZgRGWeRFTboV" },
      },
      "1483808733": {
        amount: 45000,
        category: { name: "貯金", ref: "WO0O1eUgpwzGj49EmzZW" },
      },
    },
  },
};

const initialState: Budgets = sampleState;

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
