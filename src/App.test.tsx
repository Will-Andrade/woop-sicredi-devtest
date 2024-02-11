import { render, screen } from "@testing-library/react";

import App from "./App";

it("should render the App component with a header", async () => {
  render(<App />);

  const header = screen.getByRole("heading", { name: /Coding & Dragons/i });

  expect(header).toBeInTheDocument();
});
