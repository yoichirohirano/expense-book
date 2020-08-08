import reducer from ".";
import actions from "./actions";
import { Login } from ".";

describe("login reducer", () => {
  const initialState: Login = {
    loggedIn: false,
  };

  describe("login", () => {
    test("should login", () => {
      const { loggedIn } = reducer(initialState, actions.login());
      expect(loggedIn).toBeTruthy();
    });
  });

  describe("logout", () => {
    test("should logout", () => {
      const { loggedIn } = reducer(initialState, actions.logout());
      expect(loggedIn).toBeFalsy();
    });
  });
});
