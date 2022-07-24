import React, { createContext, useMemo, useReducer } from "react";
import QuizItem from "../model/QuizItem";

export enum ActionTypes {
  FETCH_QUESTIONS = "FETCH_QUESTIONS",
  FETCH_QUESTIONS_FULFILLED = "FETCH_QUESTIONS_FULFILLED",
  FETCH_QUESTIONS_REJECTED = "FETCH_QUESTIONS_REJECTED",
  MOVE_TO_NEXT_QUESTION = "MOVE_TO_NEXT_QUESTION",
  PROCESS_USER_ANSWER = "PROCESS_USER_ANSWER"
}

export interface AppState {
  quizItems: QuizItem[];
  currentQuestion: number;
  loading: boolean;
  error: Error | null;
}

export interface Action {
  type: string;
  payload?: number | QuizItem[] | Error;
}

const INITIAL_STATE: AppState = {
  quizItems: [],
  currentQuestion: 0,
  loading: false,
  error: null
};

export const AppContext = createContext({} as {state: AppState, dispatch: React.Dispatch<Action>});

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_QUESTIONS:
      return { ...state, loading: true };
    case ActionTypes.FETCH_QUESTIONS_FULFILLED:
      return { ...state, quizItems: action.payload as QuizItem[], loading: false };
    case ActionTypes.PROCESS_USER_ANSWER:
      return { ...state, quizItems: action.payload as QuizItem[] }; 
    case ActionTypes.MOVE_TO_NEXT_QUESTION:
      return { ...state, currentQuestion: action.payload as number };
    case ActionTypes.FETCH_QUESTIONS_REJECTED:
      return { ...state, loading: false, error: action.payload as Error };
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
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;