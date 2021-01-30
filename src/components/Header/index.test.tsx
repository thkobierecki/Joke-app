import React from "react";
import { screen } from "@testing-library/react";
import Header from ".";

import { renderComponent } from "../../../utils/renderComponent";

it("Should render a Header", async () => {
  renderComponent(<Header />);
  expect(await screen.getByText("JokeApp")).toBeInTheDocument();
});
