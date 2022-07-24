import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import AppContextProvider from './context/AppContext';

jest.mock('./api');

test('renders the App component properly', async () => {
  const { findByRole } = render(<AppContextProvider><App /></AppContextProvider>);
  const button = await findByRole('button');
  expect(button).toBeInTheDocument();
});
