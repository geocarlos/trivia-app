import { render, screen } from '@testing-library/react';
import Quiz from './Quiz';

test('renders learn react link', () => {
  render(<Quiz />);
  const linkElement = screen.getByText(/entertainment\: \w+/i);
  expect(linkElement).toBeInTheDocument();
});
