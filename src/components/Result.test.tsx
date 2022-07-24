import { render, screen } from '@testing-library/react';
import Result from './Result';

test('renders learn react link', () => {
  render(<Result />);
  const linkElement = screen.getByText(/you scored/i);
  expect(linkElement).toBeInTheDocument();
});
