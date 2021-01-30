import React from "react";
import styled from "styled-components";
import { IoAddOutline } from "react-icons/io5";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoTitle>JokeApp</LogoTitle>
      <AddNewButton>
        <Icon as={IoAddOutline} />
        Add new joke
      </AddNewButton>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  grid-column: 1 / span 14;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-column: 1 / span 7;
  }
`;

const LogoTitle = styled.span`
  font-size: 1.5rem;
  letter-spacing: 0.1.5px;
`;
const AddNewButton = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-weight: 500;
  color: ${({ theme }) => theme.fontActive};
  border: 1px solid ${({ theme }) => theme.fontActive};
  box-shadow: none;
  border-radius: 5px;
  padding: 0 8px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  :focus,
  :active {
    outline: none;
  }
`;

const Icon = styled.i`
  color: ${({ theme }) => theme.fontActive};
  font-size: 16px;
  margin-right: 5px;
`;
