import reducer from "./reducers";
import selectors from "./selectors";
import actions from "./actions";
import { Budget, Budgets } from ".";

describe("budgets reducer", () => {
  let initialState: Budgets = {};

  beforeEach(() => {
    initialState = {
      "Wed Apr 01 2020": {
        Food: 10000,
        Drink: 20000,
      },
      "Fri May 01 2020": {
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
        actions.createBudget(newBudget, "Mon Jun 01 2020")
      );
      expect(newState).toMatchObject({
        "Wed Apr 01 2020": {
          Food: 10000,
          Drink: 20000,
        },
        "Fri May 01 2020": {
          Food: 30000,
          Drink: 40000,
        },
        "Mon Jun 01 2020": {
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
        actions.updateBudget(newBudget, "Wed Apr 01 2020")
      );
      expect(newState).toMatchObject({
        "Wed Apr 01 2020": {
          Food: 15000,
          Drink: 25000,
        },
        "Fri May 01 2020": {
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
        actions.deleteBudget("Wed Apr 01 2020")
      );
      expect(newState).toMatchObject({
        "Fri May 01 2020": {
          Food: 30000,
          Drink: 40000,
        },
      });
    });
  });
});

describe("budgets selector", () => {
  const initialState: Budgets = {
    "Wed Apr 01 2020": {
      Food: 10000,
      Drink: 20000,
    },
    "Fri May 01 2020": {
      Food: 30000,
      Drink: 40000,
    },
  };

  describe("getSelectedBudget", () => {
    test("shout get selected budget", () => {
      const selectedExpense = selectors.getSelectedBudget(
        initialState,
        "Wed Apr 01 2020"
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
