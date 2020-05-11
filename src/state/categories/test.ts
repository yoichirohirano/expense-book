import reducer from "./reducers";
import selectors from "./selectors";
import actions from "./actions";
import { Category, Categories } from ".";

describe("categories reducer", () => {
  let initialState: Categories = {};

  beforeEach(() => {
    initialState = {
      Food: {
        name: "Food",
        defaultBudget: 30000,
        color: "#000000",
      },
      Drink: {
        name: "Drink",
        defaultBudget: 30000,
        color: "#000000",
      },
    };
  });

  describe("createCategory", () => {
    const newCategory: Category = {
      name: "newCategory",
      defaultBudget: 20000,
      color: "#000000",
    };

    test("should add new category", () => {
      const newState: Categories = reducer(
        initialState,
        actions.createCategory(newCategory)
      );
      expect(newState).toMatchObject({
        Food: {
          name: "Food",
          defaultBudget: 30000,
          color: "#000000",
        },
        Drink: {
          name: "Drink",
          defaultBudget: 30000,
          color: "#000000",
        },
        newCategory: {
          name: "newCategory",
          defaultBudget: 20000,
          color: "#000000",
        },
      });
    });
  });

  describe("updateCategory", () => {
    const newCategory: Category = {
      name: "newCategory",
      defaultBudget: 20000,
      color: "#000000",
    };

    test("should update selected category", () => {
      const newState: Categories = reducer(
        initialState,
        actions.updateCategory(newCategory, "Food")
      );
      expect(newState).toMatchObject({
        newCategory: {
          name: "newCategory",
          defaultBudget: 20000,
          color: "#000000",
        },
        Drink: {
          name: "Drink",
          defaultBudget: 30000,
          color: "#000000",
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
        Drink: {
          name: "Drink",
          defaultBudget: 30000,
          color: "#000000",
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
      color: "#000000",
    },
    Drink: {
      name: "Drink",
      defaultBudget: 30000,
      color: "#000000",
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
        color: "#000000",
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
