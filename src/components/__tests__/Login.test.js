import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../LogIn";

describe("Login", () => {
    it("should have a title", () => {
      render(<Login />);
       screen.debug
      expect(screen.getByText(/login/i)).toBeInTheDocument();
    });

});