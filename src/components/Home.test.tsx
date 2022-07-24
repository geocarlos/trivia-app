import { render } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
    test('renders the header text', () => {
        const { getByText } = render(<Home />);
        const headingElement = getByText(/welcome to the trivia challenge/i)
        expect(headingElement).toBeInTheDocument();
    });

    test('renders 2 presentation paragraphs', () => {
        const { getAllByText } = render(<Home />);
        const paragraphs = getAllByText(/you will be presented with 10 true or false questions\.|can you score 100%\?/gi);
        expect(paragraphs).toHaveLength(2);
        expect(paragraphs[0]).toHaveTextContent(/you will be presented with 10 true or false questions\.?/gi);
        expect(paragraphs[1]).toHaveTextContent(/can you score 100%\?/gi);
    });

    test('renders a button with text BEGIN', async () => {
        const { findByRole } = render(<Home />);
        const button = await findByRole('button');
        expect(button).toHaveTextContent('BEGIN');
    });
});
