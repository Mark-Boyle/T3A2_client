import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationBar from "../NavigationBar";

describe("NavigationBar", () => {
    // it("should have a title", () => {
    //   render(<NavigationBar />);
    // //    screen.debug
    //   expect(screen.getByText(/login/i)).toBeInTheDocument();
    // });

    it("renders without crashing", () => {
        render(<NavigationBar />)
        // const h1 = document.createElement("h1");
        ReactDOM.render(<NavigationBar />))
    })

      it("renders without crashing", () => {
      render(<NavigationBar />);
    expect(screen.findByDisplayValue(<NavigationBar/>))

  });

});