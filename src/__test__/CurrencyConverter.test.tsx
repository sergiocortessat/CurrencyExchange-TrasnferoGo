import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CurrencyConverter from "../components/CurrencyConverter";
import store from "../redux/store";

describe("CurrencyConverter", () => {
  it("renders correctly", () => {
    const {asFragment} = render(
      <Provider store={store}>
        <CurrencyConverter />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("Convert")).toBeInTheDocument();
    expect(screen.getByText("From")).toBeInTheDocument();
    expect(screen.getByText("To")).toBeInTheDocument();
  });
});
