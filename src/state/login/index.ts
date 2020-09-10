import reducer from "./reducers";

export type Login = {
  loggedIn: boolean;
  uid: string | null;
};

export { default as loginActions } from "./actions";
export { default as loginTypes } from "./types";

export default reducer;
