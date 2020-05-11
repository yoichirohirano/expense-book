import reducer from "./reducers";
import selectors from "./selectors";
import actions from "./actions";
import { Expense, Expenses } from ".";

describe("expenses reducer", () => {
  let initialState: Expenses = {};
  const date = new Date();

  beforeEach(() => {
    initialState = {
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
      const newState: Expenses = reducer(
        initialState,
        actions.createExpense(newExpense, id)
      );
      expect(newState).toMatchObject({
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
      const newState: Expenses = reducer(
        initialState,
        actions.updateExpense(newExpense, "1589011584031")
      );
      expect(newState).toMatchObject({
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
      const newState: Expenses = reducer(
        initialState,
        actions.deleteExpense("1589011584031")
      );
      expect(newState).toMatchObject({
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

describe("expenses selector", () => {
  const date = new Date();
  const initialState: Expenses = {
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
  };

  describe("getSelectedExpense", () => {
    test("shout get selected expense", () => {
      const selectedExpense = selectors.getSelectedExpense(
        initialState,
        "1589011584031"
      );
      expect(selectedExpense).toMatchObject({
        category: "Food",
        amount: 3000,
        date,
        title: "スーパー",
      });
    });
    test("shout get null", () => {
      const selectedExpense = selectors.getSelectedExpense(
        initialState,
        "123456789"
      );
      expect(selectedExpense).toBe(null);
    });
  });
});
