import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Book from "../Book";
import {Router} from 'react-router-dom'
// have to pass in the params that it is expecting
describe("Book", () => {
  it("should have a title", () => {
    render(<Book match={{ params: { id: 1 } }} />);
    // screen.debug
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });

  {
    /* <Router history={history}>
      <Book />
    </Router> */
  }

  it("should have a author", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Book />
      </Router>
    );
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

  it("renders without crashing", () => {
      render(<Book />);
    expect(screen.findByDisplayValue(<Book/>))

  });
});
