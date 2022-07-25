import React, { createContext, useMemo, useReducer } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import QuizItem from "../model/QuizItem";

export enum ActionTypes {
  FETCH_QUESTIONS = "FETCH_QUESTIONS",
  FETCH_QUESTIONS_FULFILLED = "FETCH_QUESTIONS_FULFILLED",
  FETCH_QUESTIONS_REJECTED = "FETCH_QUESTIONS_REJECTED",
  SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION",
  PROCESS_USER_ANSWER = "PROCESS_USER_ANSWER",
  RESET_GAME_TO_PLAY_AGAIN = "RESET_GAME_TO_PLAY_AGAIN"
}

export interface AppState {
  quizItems: QuizItem[];
  currentQuestionIndex: number;
  loading: boolean;
  error: Error | null;
}

export interface Action {
  type: ActionTypes;
  payload?: number | QuizItem[] | Error;
}

const INITIAL_STATE: AppState = {
  quizItems: [],
  currentQuestionIndex: 0,
  loading: false,
  error: null
};

export const AppContext = createContext({} as { state: AppState, dispatch: React.Dispatch<Action> });

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_QUESTIONS:
      return { ...state, loading: true };
    case ActionTypes.FETCH_QUESTIONS_FULFILLED:
      return { ...state, quizItems: action.payload as QuizItem[], loading: false };
    case ActionTypes.PROCESS_USER_ANSWER:
      return { ...state, quizItems: action.payload as QuizItem[] };
    case ActionTypes.SET_CURRENT_QUESTION:
      return { ...state, currentQuestionIndex: action.payload as number };
    case ActionTypes.FETCH_QUESTIONS_REJECTED:
      return { ...state, loading: false, error: action.payload as Error };
    case ActionTypes.RESET_GAME_TO_PLAY_AGAIN:
      return {
        ...state,
        quizItems: [],
        currentQuestionIndex: 0,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

type ProviderComponentProps = {
  children: React.ReactNode;
}

const AppContextProvider = ({ children }: ProviderComponentProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        {children}
      </Router>
    </AppContext.Provider>
  );
};

export default AppContextProvider;