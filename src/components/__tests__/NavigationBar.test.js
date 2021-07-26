import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationBar from "../NavigationBar";
// import {NameContext, NameProvider, NameConsumer} from '../react-context'
import {} from "../contexts/AuthProvider"
describe("NavigationBar", () => {
  const [auth, setAuth] = useContext(AuthContext);
  
  it("should have home in", () => {
    render(<NavigationBar />);
  //    screen.debug
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    render(<NavigationBar />);
  expect(screen.findByDisplayValue(<NavigationBar/>))

});

  it("renders without crashing", () => {
  //   render(<NavigationBar />);
  //   // const h1 = document.createElement("h1");
  //   // ReactDOM.render(<NavigationBar />);
  //   screen.debug();
  });

  // it("renders without crashing", () => {
  //   render(<NavigationBar />);
  //   expect(screen.findByDisplayValue(<NavigationBar />));
  // });
});
