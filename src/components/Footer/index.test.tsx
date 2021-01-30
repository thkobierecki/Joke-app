import React from "react";
import { screen } from "@testing-library/react";
import Footer from ".";

import { renderComponent } from "../../../utils/renderComponent";

it("Should render a footer", async () => {
  renderComponent(<Footer />);
  expect(await screen.getByText("2021 JokeApp")).toBeInTheDocument();
});
