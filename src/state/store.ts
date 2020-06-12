import { createStore, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import budgets, { Budgets } from "./budgets";
import categories, { Categories } from "./categories";
import expenses, { Expenses } from "./expenses";
import history from "./history";

export type RootState = {
  budgets: Budgets;
  categories: Categories;
  expenses: Expenses;
};

const rootReducer = combineReducers({
  budgets,
  categories,
  expenses,
  router: connectRouter(history),
});

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(history), thunk)
);

export default store;
