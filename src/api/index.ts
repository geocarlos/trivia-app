import React from "react";
import { Action, ActionTypes } from "../context/AppContext";

const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

async function fetchQuestions(dispatch: React.Dispatch<Action>): Promise<void> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && 'results' in data) {
            dispatch({ type: ActionTypes.FETCH_QUESTIONS_FULFILLED, payload: data.results });
        } else {
            throw new Error('Failed to fetch questions.');
        }
    } catch (error) {
        dispatch({ type: ActionTypes.FETCH_QUESTIONS_REJECTED, payload: error as Error });
    }
};

const api = { fetchQuestions };

export default api;