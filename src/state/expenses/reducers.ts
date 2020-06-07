import { Expenses } from ".";
import { ExpensesAction } from "./actions";
import actionTypes from "./types";

const initialState: Expenses = {
  // TODO: Storybook確認用
  "1589011584031": {
    category: "Food",
    amount: 2300,
    date: "20200625T123456",
    name: "スーパー",
  },
  "1589011597561": {
    category: "Book",
    amount: 300,
    date: "20200401T123456",
    name: "飲み会",
  },
  "1589011584035": {
    category: "Drink",
    amount: 30000,
    date: "20200601T123456",
    name: "飲み会",
  },
  "158901158465": {
    category: "Book",
    amount: 300,
    date: "20200601T123456",
    name: "その他",
  },
  "158902158465": {
    category: "Book",
    amount: 2392,
    date: "20200530T123456",
    name: "その他",
  },
};

const reducer = (
  state: Expenses = initialState,
  action: ExpensesAction
): Expenses => {
  switch (action.type) {
    case actionTypes.CREATE_EXPENSE: {
      const id = new Date().getTime();
      state[id] = action.payload.expense;
      return Object.assign({}, state);
    }
    case actionTypes.UPDATE_EXPENSE: {
      state[action.payload.id] = action.payload.expense;
      return Object.assign({}, state);
    }
    case actionTypes.DELETE_EXPENSE: {
      delete state[action.payload.id];
      return Object.assign({}, state);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
