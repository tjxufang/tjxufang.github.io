import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello there! Welcome to my page!/i);
  expect(linkElement).toBeInTheDocument();
});
