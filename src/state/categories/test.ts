import reducer, { State } from "./reducers";
import actions from "./actions";
import { Category } from ".";

describe("categories reducer", () => {
  let initialState: State = {
    categories: {},
  };

  beforeEach(() => {
    initialState = {
      categories: {
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
      const newState: State = reducer(
        initialState,
        actions.createCategory(newCategory)
      );
      expect(newState.categories).toMatchObject({
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
      const newState: State = reducer(
        initialState,
        actions.updateCategory(newCategory, "Food")
      );
      expect(newState.categories).toMatchObject({
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
      const newState: State = reducer(
        initialState,
        actions.deleteCategory("Food")
      );
      expect(newState.categories).toMatchObject({
        Drink: {
          name: "Drink",
          defaultBudget: 30000,
          color: "#000000",
        },
      });
    });
  });
});
