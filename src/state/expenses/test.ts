import reducer from "./";
import selectors from "./selectors";
import actions from "./actions";
import { Expense, Expenses, sampleState } from ".";

describe("expenses reducer", () => {
  let initialState: Expenses = {};
  const newExpense: Expense = {
    amount: 400,
    name: "スタバ",
    date: new Date("2020-06-09T00:00:00"),
    dateStr: "20200609T000000",
    category: {
      name: "Cafe",
      ref: "AjOQWgDdVSVsLQNCEpNP",
    },
  };

  beforeEach(() => {
    initialState = sampleState;
  });

  describe("createExpense", () => {
    test("should add new expense", () => {
      const newState: Expenses = reducer(
        initialState,
        actions.createExpense(newExpense)
      );
      const result = Object.entries(newState).find(([key, value]) => {
        return value === newExpense;
      });
      expect(result).toBeTruthy();
    });
  });

  describe("updateExpense", () => {
    test("should update selected expense", () => {
      const newState: Expenses = reducer(
        initialState,
        actions.updateExpense(newExpense, "TSTHeB4tTwrf7DjCOmJc")
      );
      expect(newState).toMatchObject({
        TSTHeB4tTwrf7DjCOmJc: newExpense,
      });
    });
  });

  describe("deleteExpense", () => {
    test("should delete selected expense", () => {
      const newState: Expenses = reducer(
        initialState,
        actions.deleteExpense("K0Sivmdt67a26IMWOw20")
      );
      expect(newState).not.toHaveProperty("K0Sivmdt67a26IMWOw20");
    });
  });
});

describe("expenses selector", () => {
  let initialState: Expenses = {};
  beforeEach(() => {
    initialState = sampleState;
  });

  describe("getSelectedExpense", () => {
    test("should get selected expense", () => {
      const selectedExpense = selectors.getSelectedExpense(
        initialState,
        "TSTHeB4tTwrf7DjCOmJc"
      );
      expect(selectedExpense).toMatchObject(
        sampleState["TSTHeB4tTwrf7DjCOmJc"]
      );
    });
    test("should get null", () => {
      const selectedExpense = selectors.getSelectedExpense(
        initialState,
        "123456789"
      );
      expect(selectedExpense).toBe(null);
    });
  });

  describe("getExpenseListOfMonth", () => {
    test("should get all expenses of selected month", () => {
      const total = selectors.getExpenseListOfMonth(initialState, "202006");
      expect(total).toEqual(
        expect.arrayContaining([
          sampleState["TSTHeB4tTwrf7DjCOmJc"],
          sampleState["K0Sivmdt67a26IMWOw20"],
        ])
      );
    });
    test("should get empty array", () => {
      const total = selectors.getExpenseListOfMonth(initialState, "102006");
      expect(total).toEqual(expect.arrayContaining([]));
    });
  });

  describe("getDailyExpenseListOfMonth", () => {
    test("should get all expenses of selected month", () => {
      const total = selectors.getDailyExpenseListOfMonth(
        initialState,
        "202006"
      );
      expect(total).toEqual([
        {
          yyyymmddWithSlash: "2020/06/25",
          expenses: {
            K0Sivmdt67a26IMWOw20: sampleState["K0Sivmdt67a26IMWOw20"],
          },
        },
        {
          yyyymmddWithSlash: "2020/06/09",
          expenses: {
            TSTHeB4tTwrf7DjCOmJc: sampleState["TSTHeB4tTwrf7DjCOmJc"],
          },
        },
      ]);
    });
  });

  describe("getExpenseAmountOfMonth", () => {
    test("should get total amount of selected month", () => {
      const total = selectors.getExpenseAmountOfMonth(initialState, "202006");
      expect(total).toBe(1300);
    });
    test("should get 0 of month with no expenses", () => {
      const total = selectors.getExpenseAmountOfMonth(initialState, "102006");
      expect(total).toBe(0);
    });
  });
});
