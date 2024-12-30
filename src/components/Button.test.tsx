import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom';
import { test, expect } from "vitest";
import Button from "./Button";

test('renders a button with text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText(/click me/i)).toBeDefined()
})
