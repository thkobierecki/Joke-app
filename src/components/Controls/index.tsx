import React, { useState } from "react";
import styled from "styled-components";
import Chip from "./Chip";
import SearchBar from "./SearchBar";

type Props = {
  categories: CategoryType[];
  currentCategory: CategoryType;
  totalCount: number | null;
  handleSetActiveCategory: (category: CategoryType) => void;
  handleSearchJokes: (inputSearch: string) => void;
};

const ControlPanel = ({
  categories,
  currentCategory,
  totalCount,
  handleSetActiveCategory,
  handleSearchJokes,
}: Props) => {
  const [inputSearch, setInputSearch] = useState<string>("");

  const isActive = (category: CategoryType): boolean =>
    currentCategory === category;

  const handleChange = (val: string): void => {
    setInputSearch(val);
    handleSearchJokes(val);
  };
  return (
    <Container>
      <Wrapper>
        <h2>Select Category</h2>
        <ChipsWrapper>
          {categories &&
            categories.map((category: CategoryType) => (
              <Chip
                key={`chip-${category}`}
                value={category}
                handleClick={() => handleSetActiveCategory(category)}
                active={isActive(category)}
              />
            ))}
        </ChipsWrapper>
      </Wrapper>
      <Wrapper>
        <h2>Total jokes available: {totalCount && totalCount}</h2>
        <SearchBar
          placeholder="Search for a joke"
          value={inputSearch}
          handleChange={handleChange}
        />
      </Wrapper>
    </Container>
  );
};

export default ControlPanel;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChipsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
