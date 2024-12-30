import { render, fireEvent } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import { test, expect } from "vitest";
import Counter from './Counter';

test('renders counter and increments value', () => {
  render(<Counter />);
  const countElement = screen.getByText(/count:/i);
  expect(countElement).toHaveTextContent('Count: 0');
  const buttonElement = screen.getByRole('button', { name: /increment/i });
  fireEvent.click(buttonElement);
  expect(countElement).toHaveTextContent('Count: 1');
});
