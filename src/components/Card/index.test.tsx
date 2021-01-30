import React from "react";
import { render, screen } from "@testing-library/react";
import Card from ".";
import CardsContainer from "./CardsContainer";

const jokes: IJoke[] = [
  {
    category: "Any",
    flags: {},
    id: 123,
    joke: `Can I tell you a TCP joke? Please tell me a TCP joke. "OK, I'll tell you a TCP joke.`,
    lang: "en",
    safe: true,
    type: "single",
  },
];

describe("Card and cards wraper component tests", () => {
  it("Should render a card with joke provided as props", async () => {
    render(<Card joke={jokes[0]} />);
    expect(await screen.findByTestId("card")).toBeInTheDocument();
    expect(
      await screen.getByText(`Category: ${jokes[0].category}`)
    ).toBeInTheDocument();
    expect(
      await screen.getByText(`Type: ${jokes[0].type}`)
    ).toBeInTheDocument();
    expect(await screen.getByText(jokes[0]["joke"])).toBeInTheDocument();
  });

  it("Should render a card container with cards", async () => {
    render(<CardsContainer allJokes={jokes} />);
    expect(await screen.findByTestId("cards-container")).toBeInTheDocument();
    expect(await screen.findByTestId("card")).toBeInTheDocument();
    expect(
      await screen.getByText(`Category: ${jokes[0].category}`)
    ).toBeInTheDocument();
    expect(
      await screen.getByText(`Type: ${jokes[0].type}`)
    ).toBeInTheDocument();
    expect(await screen.getByText(jokes[0]["joke"])).toBeInTheDocument();
  });
});
