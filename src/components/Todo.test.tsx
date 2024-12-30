import { render, fireEvent } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import { test, expect } from "vitest";
import Todo from './Todo';

test('adds a todo when input is provided', () => {
  render(<Todo />);

  const inputElement = screen.getByPlaceholderText(/add a todo/i);
  const buttonElement = screen.getByRole('button', { name: /add/i });

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(buttonElement);

  expect(screen.getByText(/new todo/i)).toBeInTheDocument();
});
