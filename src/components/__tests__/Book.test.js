import React from "react";
import { render, screen } from "@testing-library/react";
import Book from "../Book";

describe("Book", () => {
  it("should have a title", () => {
    render(<Book />);
    // screen.debug
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });

  it("should have a author", () => {
    render(<Book />);
    // screen.debug
    expect(screen.getByText(/author/i)).toBeInTheDocument();
  });
  it("should have a yearr", () => {
    render(<Book />);
    // screen.debug
    expect(screen.getByText(/year/i)).toBeInTheDocument();
  });
  it("should have a genre", () => {
    render(<Book />);
    // screen.debug
    expect(screen.getByText(/genre/i)).toBeInTheDocument();
  });
  it("should have a status", () => {
    render(<Book />);
    // screen.debug
    expect(screen.getByText(/status/i)).toBeInTheDocument();
  });

  // it("renders without crashing", () => {
  //     render(<Book />);
  //   expect(screen.findByDisplayValue(<Book/>))

  // });

});
