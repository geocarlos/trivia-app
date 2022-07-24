import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext, AppState } from '../context/AppContext';
import Quiz from './Quiz';

const mockState: AppState = {
    quizItems: [{
        category: 'test',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Testing question',
        correctAnswer: true,
        incorrectAnswers: [false]
    }],
    currentQuestionIndex: 0,
    loading: false,
    error: null
};

describe('Quiz', () => {

    test('renders quiz screen', () => {
        const { getByText } = render(<AppContext.Provider value={{ state: mockState, dispatch: jest.fn() }}>
            <BrowserRouter>
                <Quiz />
            </BrowserRouter>
        </AppContext.Provider>);
        const linkElement = getByText(/testing question/i);
        expect(linkElement).toBeInTheDocument();
    });

})
