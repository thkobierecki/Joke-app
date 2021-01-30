import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import Chip from "./Chip";
import SearchBar from "./SearchBar";
import { renderComponent } from "../../../utils/renderComponent";

describe("Test controls components", () => {
  describe("Test Chip component", () => {
    const handleClick = jest.fn();
    it("Should render a chip", async () => {
      renderComponent(
        <Chip value="Any" handleClick={handleClick} active={false} />
      );
    });
    it("Should render with a provided value", async () => {
      renderComponent(
        <Chip value="Any" handleClick={handleClick} active={false} />
      );
      expect(await screen.getByText(`Any`)).toBeInTheDocument();
    });
    it("Should call handleClick when clicked ", async () => {
      renderComponent(
        <Chip value="Any" handleClick={handleClick} active={false} />
      );
      fireEvent.click(screen.getByText(/any/i));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Test SearchBar", () => {
    const handleChange = jest.fn();
    it("Should render a SearchBar", async () => {
      renderComponent(
        <SearchBar
          value=""
          handleChange={handleChange}
          placeholder="Search for a joke"
        />
      );
      const input = screen.getByPlaceholderText("Search for a joke");
      expect(input).toBeInTheDocument();
    });
  });
});
