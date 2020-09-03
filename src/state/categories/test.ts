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
    test("should get selected category", () => {
      const selectedExpense = selectors.getSelectedCategory(
        initialState,
        "E3cnHvL8SwPTbn4ChMWq"
      );
      expect(selectedExpense).toMatchObject(
        sampleState["E3cnHvL8SwPTbn4ChMWq"]
      );
    });
    test("should get null", () => {
      const selectedExpense = selectors.getSelectedCategory(
        initialState,
        "NOTHING"
      );
      expect(selectedExpense).toBe(null);
    });
  });

  describe("getTotalAmount", () => {
    test("should get proper total amount", () => {
      const totals = selectors.getTotalAmount(initialState);
      expect(totals).toBe(
        sampleState["E3cnHvL8SwPTbn4ChMWq"].defaultAmount +
          sampleState["fGUwZnNss1Nnmvtdteoi"].defaultAmount +
          sampleState["w2IJ86mtXfcNyRm23aw4"].defaultAmount +
          sampleState["4fgOOb41j82zZxyCBQcS"].defaultAmount +
          sampleState["pXhYzqbyOrjGnSmZJMFN"].defaultAmount +
          sampleState["XKZ5LP61ZgRGWeRFTboV"].defaultAmount +
          sampleState["WO0O1eUgpwzGj49EmzZW"].defaultAmount
      );
    });
  });

  describe("getDefaultBudget", () => {
    test("should get default budget", () => {
      const budget = selectors.getDefaultBudget("testUser", initialState);
      const first = Object.values(budget).find((value) => {
        return value.category.name == sampleState["E3cnHvL8SwPTbn4ChMWq"].name;
      });
      const second = Object.values(budget).find((value) => {
        return value.category.name == sampleState["fGUwZnNss1Nnmvtdteoi"].name;
      });
      expect(first).toEqual({
        amount: sampleState["E3cnHvL8SwPTbn4ChMWq"].defaultAmount,
        category: {
          name: sampleState["E3cnHvL8SwPTbn4ChMWq"].name,
          id: "E3cnHvL8SwPTbn4ChMWq",
        },
        userId: "testUser",
      });
      expect(second).toEqual({
        amount: sampleState["fGUwZnNss1Nnmvtdteoi"].defaultAmount,
        category: {
          name: sampleState["fGUwZnNss1Nnmvtdteoi"].name,
          id: "fGUwZnNss1Nnmvtdteoi",
        },
        userId: "testUser",
      });
    });
  });
});
