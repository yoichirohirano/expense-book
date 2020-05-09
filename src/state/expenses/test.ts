import reducer, { State } from "./reducers";
import actions from "./actions";
import { Expense } from ".";

describe("expenses reducer", () => {
  let initialState: State = {
    expenses: {},
  };
  const date = new Date();

  beforeEach(() => {
    initialState = {
      expenses: {
        "1589011584031": {
          category: "Food",
          amount: 3000,
          date,
          title: "スーパー",
        },
        "1589011597561": {
          category: "Drink",
          amount: 300,
          date,
          title: "飲み会",
        },
      },
    };
  });

  describe("createExpense", () => {
    const newExpense: Expense = {
      category: "Cafe",
      amount: 400,
      date,
      title: "スタバ",
    };

    test("should add new expense", () => {
      const id = new Date().getTime().toString();
      const newState: State = reducer(
        initialState,
        actions.createExpense(newExpense, id)
      );
      expect(newState.expenses).toMatchObject({
        "1589011584031": {
          category: "Food",
          amount: 3000,
          date,
          title: "スーパー",
        },
        "1589011597561": {
          category: "Drink",
          amount: 300,
          date,
          title: "飲み会",
        },
        [id]: {
          category: "Cafe",
          amount: 400,
          date,
          title: "スタバ",
        },
      });
    });
  });

  describe("updateExpense", () => {
    const newExpense: Expense = {
      category: "Cafe",
      amount: 400,
      date,
      title: "スタバ",
    };

    test("should update selected expense", () => {
      const newState: State = reducer(
        initialState,
        actions.updateExpense(newExpense, "1589011584031")
      );
      expect(newState.expenses).toMatchObject({
        "1589011584031": {
          category: "Cafe",
          amount: 400,
          date,
          title: "スタバ",
        },
        "1589011597561": {
          category: "Drink",
          amount: 300,
          date,
          title: "飲み会",
        },
      });
    });
  });

  describe("deleteExpense", () => {
    test("should delete selected expense", () => {
      const newState: State = reducer(
        initialState,
        actions.deleteExpense("1589011584031")
      );
      expect(newState.expenses).toMatchObject({
        "1589011597561": {
          category: "Drink",
          amount: 300,
          date,
          title: "飲み会",
        },
      });
    });
  });
});
