import styled from "styled-components";
import Card from ".";
import CardLoader from "../Loaders/CardLoader";
const CardsContainer = ({ allJokes }: { allJokes: IJoke[] }) => {
  return (
    <CardsWrapper data-testid="cards-container">
      {allJokes.length > 0
        ? allJokes.map((joke: IJoke, i: number) => <Card key={i} joke={joke} />)
        : [1, 2, 3, 4, 5, 6].map((i) => <CardLoader key={i} />)}
    </CardsWrapper>
  );
};

export default CardsContainer;

const CardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
