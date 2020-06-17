import { Budgets } from ".";
import { BudgetsAction } from "./actions";
import actionTypes from "./types";

export const sampleState: Budgets = {
  "202005": {
    budget: {
      "1483808733": {
        amount: 45000,
        category: { name: "Saving", ref: "WO0O1eUgpwzGj49EmzZW" },
      },
      "3186020163": {
        amount: 30000,
        category: { name: "Food", ref: "E3cnHvL8SwPTbn4ChMWq" },
      },
      "3967372454": {
        amount: 5000,
        category: { name: "Cafe", ref: "AjOQWgDdVSVsLQNCEpNP" },
      },
      "4932031535": {
        amount: 12000,
        category: { name: "雑費", ref: "4fgOOb41j82zZxyCBQcS" },
      },
      "7730759461": {
        amount: 20000,
        category: { name: "Dating", ref: "pXhYzqbyOrjGnSmZJMFN" },
      },
      "7081388040": {
        amount: 20000,
        category: { name: "Free", ref: "fGUwZnNss1Nnmvtdteoi" },
      },
      "9309824704": {
        amount: 3000,
        category: { name: "Book", ref: "w2IJ86mtXfcNyRm23aw4" },
      },
      "6911870738": {
        amount: 12000,
        category: { name: "Gym", ref: "0tMKc5h30IaaRIZnmcAv" },
      },
      "8536650673": {
        amount: 41000,
        category: { name: "Fixed", ref: "XKZ5LP61ZgRGWeRFTboV" },
      },
      "7460784683": {
        amount: 25000,
        category: { name: "Sudden", ref: "3KEecx7xaz3wffH9iwXe" },
      },
    },
  },
  "202006": {
    budget: {
      "1483808733": {
        amount: 45000,
        category: { name: "Saving", ref: "WO0O1eUgpwzGj49EmzZW" },
      },
      "3186020163": {
        amount: 30000,
        category: { name: "Food", ref: "E3cnHvL8SwPTbn4ChMWq" },
      },
      "3967372454": {
        amount: 5000,
        category: { name: "Cafe", ref: "AjOQWgDdVSVsLQNCEpNP" },
      },
      "4932031535": {
        amount: 12000,
        category: { name: "雑費", ref: "4fgOOb41j82zZxyCBQcS" },
      },
      "7730759461": {
        amount: 20000,
        category: { name: "Dating", ref: "pXhYzqbyOrjGnSmZJMFN" },
      },
      "7081388040": {
        amount: 20000,
        category: { name: "Free", ref: "fGUwZnNss1Nnmvtdteoi" },
      },
      "9309824704": {
        amount: 3000,
        category: { name: "Book", ref: "w2IJ86mtXfcNyRm23aw4" },
      },
      "6911870738": {
        amount: 12000,
        category: { name: "Gym", ref: "0tMKc5h30IaaRIZnmcAv" },
      },
      "8536650673": {
        amount: 41000,
        category: { name: "Fixed", ref: "XKZ5LP61ZgRGWeRFTboV" },
      },
      "7460784683": {
        amount: 25000,
        category: { name: "Sudden", ref: "3KEecx7xaz3wffH9iwXe" },
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
