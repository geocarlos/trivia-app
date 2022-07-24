import React from "react";
import { Action, ActionTypes } from "../context/AppContext";
import QuizItem from "../model/QuizItem";

const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

async function fetchQuestions(dispatch: React.Dispatch<Action>): Promise<void> {
    dispatch({ type: ActionTypes.FETCH_QUESTIONS });
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && 'results' in data) {
            const results = data.results.map((r: any) => ({
                question: r.question,
                category: r.category,
                difficulty: r.difficulty,
                type: r.type,
                correctAnswer: r.correct_answer === 'True',
                incorrectAnswers: r.incorrect_answers
            }) as QuizItem);
            dispatch({ type: ActionTypes.FETCH_QUESTIONS_FULFILLED, payload: results });
        } else {
            throw new Error('Failed to fetch questions.');
        }
    } catch (error) {
        dispatch({ type: ActionTypes.FETCH_QUESTIONS_REJECTED, payload: error as Error });
    }
};

const api = { fetchQuestions };

export default api;