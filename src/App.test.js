import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('app exists', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId("app");
  expect(element).toBeInTheDocument();
});
