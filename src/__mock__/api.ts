import api from '../api';
import { ActionTypes } from '../context/AppContext';

api.fetchQuestions = jest.fn(async dispatch => {
    console.log('MOCKING...')
    dispatch({ type: ActionTypes.FETCH_QUESTIONS });
    dispatch({
        type: ActionTypes.FETCH_QUESTIONS_FULFILLED, payload: [{
            category: 'boolean',
            type: 'boolean',
            difficulty: 'hard',
            question: 'Testing question',
            correctAnswer: true,
            incorrectAnswers: [false]
        }]
    });
});

export default api;