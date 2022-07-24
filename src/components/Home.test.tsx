import { render } from '@testing-library/react';
import AppContextProvider from '../context/AppContext';
import Home from './Home';

jest.mock('../api');

describe('Home', () => {
    test('renders the header text', () => {
        const { getByText } = render(<AppContextProvider><Home /></AppContextProvider> );
        const headingElement = getByText(/welcome to the trivia challenge/i)
        expect(headingElement).toBeInTheDocument();
    });

    test('renders 2 presentation paragraphs', () => {
        const { getAllByText } = render(<AppContextProvider><Home /></AppContextProvider> );
        const paragraphs = getAllByText(/you will be presented with 10 true or false questions\.|can you score 100%\?/i);
        expect(paragraphs).toHaveLength(2);
        expect(paragraphs[0]).toHaveTextContent(/you will be presented with 10 true or false questions\.?/i);
        expect(paragraphs[1]).toHaveTextContent(/can you score 100%\?/i);
    });

    test('renders a button with text BEGIN', async () => {
        const { findByRole } = render(<AppContextProvider><Home /></AppContextProvider> );
        const button = await findByRole('button');
        expect(button).toHaveTextContent('BEGIN');
    });
});
