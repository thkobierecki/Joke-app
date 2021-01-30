import React from "react";
import { screen } from "@testing-library/react";
import ErrorMessage from ".";

import { renderComponent } from "../../../utils/renderComponent";

describe("Test error message", () => {
  it("Should render a error message", async () => {
    renderComponent(<ErrorMessage message="This is an error message" />);
    expect(
      await screen.getByText("This is an error message")
    ).toBeInTheDocument();
  });
});
