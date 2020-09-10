/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CreatorsToActions } from "@/state/CreatorsToActions";
import types from "./types";

const actions = {
  login: (uid: string) => {
    return { type: types.LOGIN, payload: { uid: uid } };
  },
  logout: () => {
    return { type: types.LOGOUT, payload: { uid: null } };
  },
};

export type LoginAction = CreatorsToActions<typeof actions>;

export default actions;
