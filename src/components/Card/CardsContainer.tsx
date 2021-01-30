import styled from "styled-components";
import Card from ".";

const CardsContainer = ({ allJokes }: { allJokes: IJoke[] }) => {
  return (
    <CardsWrapper data-testid="cards-container">
      {allJokes &&
        allJokes.map((joke: IJoke, i: number) => <Card key={i} joke={joke} />)}
    </CardsWrapper>
  );
};

export default CardsContainer;

const CardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
