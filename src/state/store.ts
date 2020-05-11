import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import budgets from "./budgets";
import categories from "./categories";
import { Categories } from "./categories/reducers";
import expenses from "./expenses";

export type RootState = {
  categories: Categories;
};
const rootReducer = combineReducers({
  budgets,
  categories,
  expenses,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
