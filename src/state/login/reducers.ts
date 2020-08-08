import { Login } from ".";
import { LoginAction } from "./actions";
import actionTypes from "./types";

const reducer = (
  state: Login = { loggedIn: false, uid: "" },
  action: LoginAction
): Login => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return {
        loggedIn: true,
        uid: action.payload.uid,
      };
    }
    case actionTypes.LOGOUT: {
      return {
        loggedIn: false,
        uid: action.payload.uid,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
