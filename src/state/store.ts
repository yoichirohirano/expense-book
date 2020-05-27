import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import budgets, { Budgets } from "./budgets";
import categories, { Categories } from "./categories";
import expenses, { Expenses } from "./expenses";

export type RootState = {
  budgets: Budgets;
  categories: Categories;
  expenses: Expenses;
};
const rootReducer = combineReducers({
  budgets,
  categories,
  expenses,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
