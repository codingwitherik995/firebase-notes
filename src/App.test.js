import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./pages/Login";

describe("Login Page", () => {
  it("renders the 'Login' title", () => {
    // Render the Login component
    render(<Login />);

    // Check if the "Login" title is in the document
    const loginTitle = screen.getByText(/Logins/i);
    expect(loginTitle).toBeInTheDocument();
  });
});
