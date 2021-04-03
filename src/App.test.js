import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders intro text", () => {
  render(<App />);
  const pElement = screen.getByText(/Choose an image/i);
  expect(pElement).toBeInTheDocument();
});
