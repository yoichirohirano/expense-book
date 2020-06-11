import { Expenses } from ".";
import { ExpensesAction } from "./actions";
import actionTypes from "./types";

export const sampleState: Expenses = {
  TSTHeB4tTwrf7DjCOmJc: {
    amount: 1000,
    category: {
      name: "Food",
      ref: "E3cnHvL8SwPTbn4ChMWq",
    },
    date: new Date("2020-06-09T00:00:00"),
    dateStr: "20200609T000000",
    name: "赤札堂",
  },
  K0Sivmdt67a26IMWOw20: {
    amount: 300,
    category: {
      name: "Cafe",
      ref: "AjOQWgDdVSVsLQNCEpNP",
    },
    date: new Date("2020-06-25T12:34:56"),
    dateStr: "20200625T123456",
    name: "赤札堂",
  },
  joGcRIZuw4lsPzwOG19q: {
    amount: 8000,
    category: {
      name: "Free",
      ref: "fGUwZnNss1Nnmvtdteoi",
    },
    date: new Date("2020-07-02T18:00:00"),
    dateStr: "20200702T180000",
    name: "飲み会",
  },
};

const initialState: Expenses =
  process.env.NODE_ENV === "test" ? sampleState : {};

const reducer = (
  state: Expenses = initialState,
  action: ExpensesAction
): Expenses => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.CREATE_EXPENSE: {
      const id = new Date().getTime();
      newState[id] = action.payload.expense;
      return newState;
    }
    case actionTypes.UPDATE_EXPENSE: {
      newState[action.payload.id] = action.payload.expense;
      return newState;
    }
    case actionTypes.DELETE_EXPENSE: {
      delete newState[action.payload.id];
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
