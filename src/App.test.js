import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This should pass right?/i);
  expect(linkElement).toBeInTheDocument();
});

test('Testing should fail', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/LIES/i);
  expect(linkElement).toBeInTheDocument();
});