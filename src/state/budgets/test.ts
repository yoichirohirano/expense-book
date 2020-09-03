import reducer from "./reducers";
import selectors from "./selectors";
import actions from "./actions";
import { CategoryBudgets, CategoryBudget, Budgets, sampleState } from ".";

describe("budgets reducer", () => {
  let initialState: Budgets = {};

  const newBudget: CategoryBudgets = {
    aaaaa: {
      userId: "test",
      amount: 33000,
      category: {
        name: "Food",
        id: "E3cnHvL8SwPTbn4ChMWq",
      },
    },
    bbbbb: {
      userId: "test",
      amount: 12000,
      category: {
        name: "雑費",
        id: "4fgOOb41j82zZxyCBQcS",
      },
    },
  };

  const newCategoryBudget: CategoryBudget = {
    userId: "test",
    amount: 1200,
    category: {
      name: "雑費",
      id: "4fgOOb41j82zZxyCBQcS",
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
          categoryBudgets: newBudget,
        },
      });
    });
  });

  describe("updateBudget", () => {
    test("should update selected budget", () => {
      const newState: Budgets = reducer(
        initialState,
        actions.updateBudget({
          yyyymm: "202005",
          budgetId: "4932031535",
          budget: newCategoryBudget,
        })
      );
      expect(newState["202005"].categoryBudgets["4932031535"]).toMatchObject(
        newCategoryBudget
      );
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
    test("should get selected budget", () => {
      const selectedExpense = selectors.getSelectedBudget(
        sampleState,
        "202006"
      );
      expect(selectedExpense).toMatchObject(
        sampleState["202006"].categoryBudgets
      );
    });
    test("should get null", () => {
      const selectedExpense = selectors.getSelectedBudget(
        sampleState,
        "302005"
      );
      expect(selectedExpense).toBe(null);
    });
  });
  describe("getSelectedBudgetIndex", () => {
    test("should get selected budget index", () => {
      const index = selectors.getSelectedBudgetIndex(sampleState, "202006");
      expect(index).toBe(5);
    });
    test("should get 0 when not found", () => {
      const index = selectors.getSelectedBudgetIndex(sampleState, "202007");
      expect(index).toBe(0);
    });
  });
  describe("getInitialMonth", () => {
    test("should get latest month in budgets", () => {
      const index = selectors.getInitialMonth(sampleState);
      expect(index).toBe("202006");
    });
    test("should get empty string", () => {
      const index = selectors.getInitialMonth({});
      expect(index).toBe("");
    });
  });
});
