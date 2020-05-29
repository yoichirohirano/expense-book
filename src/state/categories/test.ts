import reducer from "./reducers";
import selectors from "./selectors";
import actions from "./actions";
import { Category, Categories } from ".";

describe("categories reducer", () => {
  let initialState: Categories = {};

  beforeEach(() => {
    initialState = {
      aaaaa: {
        name: "Food",
        defaultBudget: 30000,
        sortIndex: 0,
      },
      bbbbb: {
        name: "Drink",
        defaultBudget: 30000,
        sortIndex: 1,
      },
    };
  });

  describe("createCategory", () => {
    const newCategory: Category = {
      name: "newCategory",
      defaultBudget: 20000,
      sortIndex: 2,
    };

    test("should add new category", () => {
      const newState: Categories = reducer(
        initialState,
        actions.createCategory(newCategory)
      );
      const index = Object.entries(newState).findIndex(([key, value]) => {
        return value === newCategory;
      });
      expect(index).toBeGreaterThan(0);
    });
  });

  describe("updateCategory", () => {
    const newCategory: Category = {
      name: "newCategory",
      defaultBudget: 20000,
      sortIndex: 2,
    };

    test("should update selected category", () => {
      const newState: Categories = reducer(
        initialState,
        actions.updateCategory(newCategory, "aaaaa")
      );
      expect(newState).toMatchObject({
        aaaaa: {
          name: "newCategory",
          defaultBudget: 20000,
          sortIndex: 2,
        },
        bbbbb: {
          name: "Drink",
          defaultBudget: 30000,
          sortIndex: 1,
        },
      });
    });
  });

  describe("deleteCategory", () => {
    test("should delete selected category", () => {
      const newState: Categories = reducer(
        initialState,
        actions.deleteCategory("Food")
      );
      expect(newState).toMatchObject({
        bbbbb: {
          name: "Drink",
          defaultBudget: 30000,
          sortIndex: 1,
        },
      });
    });
  });
});

describe("categories selector", () => {
  const initialState: Categories = {
    Food: {
      name: "Food",
      defaultBudget: 30000,
      sortIndex: 0,
    },
    Drink: {
      name: "Drink",
      defaultBudget: 30000,
      sortIndex: 1,
    },
  };

  describe("getSelectedCategory", () => {
    test("shout get selected category", () => {
      const selectedExpense = selectors.getSelectedCategory(
        initialState,
        "Food"
      );
      expect(selectedExpense).toMatchObject({
        name: "Food",
        defaultBudget: 30000,
        sortIndex: 0,
      });
    });
    test("shout get null", () => {
      const selectedExpense = selectors.getSelectedCategory(
        initialState,
        "NOTHING"
      );
      expect(selectedExpense).toBe(null);
    });
  });
});
