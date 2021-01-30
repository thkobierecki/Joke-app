import React from "react";
import styled from "styled-components";

type Props = {
  joke: IJoke;
};

const Card = ({ joke }: Props) => {
  return (
    <CardContainer data-testid="card">
      <CardInfoWrapper>
        <Tag>Category: {joke.category}</Tag>
        <Tag>Type: {joke.type}</Tag>
      </CardInfoWrapper>
      <CardContentWrapper>
        {joke.type == "single" ? (
          <p>{joke["joke"]}</p>
        ) : (
          <>
            <p>{joke.setup}</p>
            <p>{joke.delivery}</p>
          </>
        )}
      </CardContentWrapper>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  min-height: 200px;
  flex: 1 1 300px;
  overflow: hidden;
  padding: 10px 20px;
  margin: 0 20px 40px;
  background: #fff 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.08),
    0 0.5rem 0.75rem rgba(0, 0, 0, 0.14);
  transition: all 0.2s ease;
  :hover {
    box-shadow: 0 0 1px rgba(39, 44, 49, 0.1), 0 3px 16px rgba(39, 44, 49, 0.07);
    transition: all 0.3s ease;
    transform: translate3D(0, -1px, 0);
  }
`;
const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const Tag = styled.span`
  border-left: 2px solid #000;
  padding-left: 8px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #a0a6ad;
`;
