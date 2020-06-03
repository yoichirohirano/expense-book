import reducer from "./reducers";
import selectors from "./selectors";
import actions from "./actions";
import { Budget, Budgets } from ".";

describe("budgets reducer", () => {
  let initialState: Budgets = {};

  beforeEach(() => {
    initialState = {
      "20200401T000000": {
        Food: 10000,
        Drink: 20000,
      },
      "20200501T000000": {
        Food: 30000,
        Drink: 40000,
      },
    };
  });

  describe("createBudget", () => {
    const newBudget: Budget = {
      Food: 50000,
      Drink: 60000,
    };

    test("should add new budget", () => {
      const newState: Budgets = reducer(
        initialState,
        actions.createBudget(newBudget, "20200601T000000")
      );
      expect(newState).toMatchObject({
        "20200401T000000": {
          Food: 10000,
          Drink: 20000,
        },
        "20200501T000000": {
          Food: 30000,
          Drink: 40000,
        },
        "20200601T000000": {
          Food: 50000,
          Drink: 60000,
        },
      });
    });
  });

  describe("updateBudget", () => {
    const newBudget: Budget = {
      Food: 15000,
      Drink: 25000,
    };

    test("should update selected budget", () => {
      const newState: Budgets = reducer(
        initialState,
        actions.updateBudget(newBudget, "20200401T000000")
      );
      expect(newState).toMatchObject({
        "20200401T000000": {
          Food: 15000,
          Drink: 25000,
        },
        "20200501T000000": {
          Food: 30000,
          Drink: 40000,
        },
      });
    });
  });

  describe("deleteBudget", () => {
    test("should delete selected budget", () => {
      const newState: Budgets = reducer(
        initialState,
        actions.deleteBudget("20200401T000000")
      );
      expect(newState).toMatchObject({
        "20200501T000000": {
          Food: 30000,
          Drink: 40000,
        },
      });
    });
  });
});

describe("budgets selector", () => {
  const initialState: Budgets = {
    "20200401T000000": {
      Food: 10000,
      Drink: 20000,
    },
    "20200501T000000": {
      Food: 30000,
      Drink: 40000,
    },
  };

  describe("getSelectedBudget", () => {
    test("shout get selected budget", () => {
      const selectedExpense = selectors.getSelectedBudget(
        initialState,
        "20200401T000000"
      );
      expect(selectedExpense).toMatchObject({
        Food: 10000,
        Drink: 20000,
      });
    });
    test("shout get null", () => {
      const selectedExpense = selectors.getSelectedBudget(
        initialState,
        "190012"
      );
      expect(selectedExpense).toBe(null);
    });
  });
});
