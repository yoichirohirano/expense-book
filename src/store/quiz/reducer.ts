import actionTypes from "../actionTypes";
import * as actionCreators from "../actionCreators";
import { CreatorsToActions } from "../CreatorsToActions";

export interface QuizState {
  isFetching: boolean;
  quizList: Array<any>;
}

type Actions = CreatorsToActions<typeof actionCreators>;

const initialState: QuizState = {
  isFetching: true,
  quizList: [],
};

export const quizReducer = (
  state: QuizState = initialState,
  action: Actions
): QuizState => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return Object.assign({}, state, { isFetching: true });
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {});
    default:
      return initialState;
  }
};
