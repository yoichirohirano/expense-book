import reducer from "./reducers";
import selectors from "./selectors";
import actions from "./actions";
import { Category, Categories, sampleState } from ".";

describe("categories reducer", () => {
  let initialState: Categories = {};
  const newCategory: Category = {
    name: "newCategory",
    defaultAmount: 20000,
    sortIndex: 99,
  };

  beforeEach(() => {
    initialState = sampleState;
  });

  describe("createCategory", () => {
    test("should add new category", () => {
      const newState: Categories = reducer(
        initialState,
        actions.createCategory(newCategory)
      );
      const result = Object.entries(newState).find(([key, value]) => {
        return value === newCategory;
      });
      expect(result).toBeTruthy();
    });
  });

  describe("updateCategory", () => {
    test("should update selected category", () => {
      const newState: Categories = reducer(
        initialState,
        actions.updateCategory(newCategory, "E3cnHvL8SwPTbn4ChMWq")
      );
      expect(newState).toMatchObject({
        E3cnHvL8SwPTbn4ChMWq: newCategory,
      });
    });
  });

  describe("deleteCategory", () => {
    test("should delete selected category", () => {
      const newState: Categories = reducer(
        initialState,
        actions.deleteCategory("E3cnHvL8SwPTbn4ChMWq")
      );
      expect(newState).not.toHaveProperty("E3cnHvL8SwPTbn4ChMWq");
    });
  });
});

describe("categories selector", () => {
  let initialState: Categories = {};
  beforeEach(() => {
    initialState = sampleState;
  });

  describe("getSelectedCategory", () => {
    test("shout get selected category", () => {
      const selectedExpense = selectors.getSelectedCategory(
        initialState,
        "E3cnHvL8SwPTbn4ChMWq"
      );
      expect(selectedExpense).toMatchObject(
        sampleState["E3cnHvL8SwPTbn4ChMWq"]
      );
    });
    test("shout get null", () => {
      const selectedExpense = selectors.getSelectedCategory(
        initialState,
        "NOTHING"
      );
      expect(selectedExpense).toBe(null);
    });
  });

  describe("getTotalAmount", () => {
    test("shout get proper total amount", () => {
      const totals = selectors.getTotalAmount(initialState);
      expect(totals).toBe(
        30000 +
          5000 +
          12000 +
          20000 +
          20000 +
          3000 +
          12000 +
          41000 +
          25000 +
          45000
      );
    });
  });
  // TODO: getDefaultBudget
});
