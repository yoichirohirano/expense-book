import actionTypes from "./actionTypes";

export const increment = () => {
  return { type: actionTypes.INCREMENT };
};

export function decrement() {
  return { type: actionTypes.DECREMENT };
}
