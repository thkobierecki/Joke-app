import React from "react";
import { screen } from "@testing-library/react";
import Header from ".";

import { renderComponent } from "../../../utils/renderComponent";
const handleOpenModal = jest.fn();
it("Should render a Header", async () => {
  renderComponent(<Header handleOpenModal={handleOpenModal} />);
  expect(await screen.getByText("JokeApp")).toBeInTheDocument();
});
