import React from 'react'
import { render, cleanup } from 'react-testing-library'
import App from './App'

afterEach(() => {
  cleanup();
  console.error.mockClear();
});
console.error = jest.fn();

it.only('renders the app', () => {
  const { getByText } = render(<App />)
  expect(getByText('App Movies')).toBeInTheDocument();
});
