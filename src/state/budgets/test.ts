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
        actions.createBudget(newBudget, "203006")
      );
      expect(newState).toMatchObject({
        "203006": {
          budget: newBudget,
        },
      });
    });
  });

  describe("updateBudget", () => {
    test("should update selected budget", () => {
      const newState: Budgets = reducer(
        initialState,
        actions.updateBudget(newBudget, "202005")
      );
      expect(newState).toMatchObject({
        "202005": {
          budget: newBudget,
        },
      });
    });
  });

  describe("deleteBudget", () => {
    test("should delete selected budget", () => {
      const newState: Budgets = reducer(
        initialState,
        actions.deleteBudget("202005")
      );
      expect(newState).not.toHaveProperty("202005");
    });
  });
});

describe("budgets selector", () => {
  describe("getSelectedBudget", () => {
    test("shout get selected budget", () => {
      const selectedExpense = selectors.getSelectedBudget(
        sampleState,
        "202006"
      );
      expect(selectedExpense).toMatchObject(sampleState["202006"].budget);
    });
    test("shout get null", () => {
      const selectedExpense = selectors.getSelectedBudget(
        sampleState,
        "302005"
      );
      expect(selectedExpense).toBe(null);
    });
  });
});
