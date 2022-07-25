import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext, AppState } from '../context/AppContext';
import Result from './Result';

const mockState: AppState = {
    quizItems: new Array(10).fill({
        category: 'test',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Testing question',
        correctAnswer: true,
        incorrectAnswers: [false]
    }).map((q, i) => ({...q, question: `${q.question}_${i}`, userAnswer: i % 2 === 0})),
    currentQuestionIndex: 0,
    loading: false,
    error: null
};

describe('Result', () => {
    test('renders result screen', () => {
        const { getByText } = render(<AppContext.Provider value={{ state: mockState, dispatch: jest.fn() }}>
            <BrowserRouter>
                <Result />
            </BrowserRouter>
        </AppContext.Provider>);
        const element = getByText(/you scored/i);
        expect(element).toBeInTheDocument();
    });

    test('renders user\'s score', () => {
        const { getByText } = render(<AppContext.Provider value={{ state: mockState, dispatch: jest.fn() }}>
            <BrowserRouter>
                <Result />
            </BrowserRouter>
        </AppContext.Provider>);
        const element = getByText(/5 \/ 10/i);
        expect(element).toBeInTheDocument();
    });

    test('renders button for user to play again', () => {
        const { getByText } = render(<AppContext.Provider value={{ state: mockState, dispatch: jest.fn() }}>
            <BrowserRouter>
                <Result />
            </BrowserRouter>
        </AppContext.Provider>);
        const element = getByText(/play again\?/i);
        expect(element).toBeInTheDocument();
    });
})
