import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import categories from "./categories";

const rootReducer = combineReducers({
  categories,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
