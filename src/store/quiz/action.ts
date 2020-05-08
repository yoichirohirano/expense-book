import { QuizState } from './reducer';
import { ActionCreator, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const FETCH_QUIZ_START = 'FETCH_QUIZ_START';
export const FETCH_QUIZ_FAIL = 'FETCH_QUIZ_FAIL';
export const FETCH_QUIZ_SUCCEED = 'FETCH_QUIZ_SUCCEED';

interface StartFetchQuizAction extends Action {
  type: typeof FETCH_QUIZ_START;
}
interface FailFetchQuizAction extends Action {
  type: typeof FETCH_QUIZ_FAIL;
  payload: {
    error: string;
  };
}
interface SucceedFetchQuizAction extends Action {
  type: typeof FETCH_QUIZ_SUCCEED;
  payload: {
    json: any;
  };
}
export type QuizActionTypes =
  | StartFetchQuizAction
  | FailFetchQuizAction
  | SucceedFetchQuizAction;

export const startFetching: ActionCreator<
  QuizActionTypes
> = (): QuizActionTypes => ({
  type: FETCH_QUIZ_START,
});

export const failFetching: ActionCreator<QuizActionTypes> = (
  error: string,
): QuizActionTypes => ({
  type: FETCH_QUIZ_FAIL,
  payload: {
    error,
  },
});

export const succeedFetching: ActionCreator<QuizActionTypes> = (
  json: any,
): QuizActionTypes => ({
  type: FETCH_QUIZ_SUCCEED,
  payload: {
    json,
  },
});

export const getQuiz = (): ThunkAction<
  void,
  QuizState,
  null,
  QuizActionTypes
> => {
  return async dispatch => {
    dispatch(startFetching());
    const url = `http://localhost:3000/json/quiz.json`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      dispatch(succeedFetching(json));
    } catch (error) {
      dispatch(failFetching());
    }
  };
};
