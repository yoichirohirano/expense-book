import { createStore, applyMiddleware, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import { RouterState } from "connected-react-router";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import budgets, { Budgets } from "./budgets";
import categories, { Categories } from "./categories";
import expenses, { Expenses } from "./expenses";
import history from "./history";
import login, { Login } from "./login";
import { composeWithDevTools } from "redux-devtools-extension";

export type RootState = {
  budgets: Budgets;
  categories: Categories;
  expenses: Expenses;
  login: Login;
  router: RouterState;
};

const rootReducer = combineReducers({
  budgets,
  categories,
  expenses,
  login,
  router: connectRouter(history),
});

const persistConfig = {
  key: "root",
  storage,
};

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);

export const persistor = persistStore(store);

export default store;
