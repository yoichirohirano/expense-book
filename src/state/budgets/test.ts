import reducer from "./reducers";
import selectors from "./selectors";
import actions from "./actions";
import { Budget, Budgets, sampleState } from ".";

describe("budgets reducer", () => {
  let initialState: Budgets = {};

  const newBudget: Budget = {
    aaaaa: {
      amount: 33000,
      category: {
        name: "Food",
        ref: "E3cnHvL8SwPTbn4ChMWq",
      },
    },
    bbbbb: {
      amount: 12000,
      category: {
        name: "雑費",
        ref: "4fgOOb41j82zZxyCBQcS",
      },
    },
  };

  beforeEach(() => {
    initialState = sampleState;
  });

  describe("createBudget", () => {
    test("should add new budget", () => {
      const newState: Budgets = reducer(
        initialState,
        actions.createBudget(newBudget, "20300601T000000")
      );
      expect(newState).toMatchObject({
        "20300601T000000": {
          budget: newBudget,
        },
      });
    });
  });

  describe("updateBudget", () => {
    test("should update selected budget", () => {
      const newState: Budgets = reducer(
        initialState,
        actions.updateBudget(newBudget, "20200501T000000")
      );
      expect(newState).toMatchObject({
        "20200501T000000": {
          budget: newBudget,
        },
      });
    });
  });

  describe("deleteBudget", () => {
    test("should delete selected budget", () => {
      const newState: Budgets = reducer(
        initialState,
        actions.deleteBudget("20200501T000000")
      );
      expect(newState).not.toHaveProperty("20200501T000000");
    });
  });
});

describe("budgets selector", () => {
  describe("getSelectedBudget", () => {
    test("shout get selected budget", () => {
      const selectedExpense = selectors.getSelectedBudget(
        sampleState,
        "20200601T000000"
      );
      expect(selectedExpense).toMatchObject(
        sampleState["20200601T000000"].budget
      );
    });
    test("shout get null", () => {
      const selectedExpense = selectors.getSelectedBudget(
        sampleState,
        "30200501T000000"
      );
      expect(selectedExpense).toBe(null);
    });
  });
});
