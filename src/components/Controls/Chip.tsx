import React from "react";
import styled from "styled-components";

type ChipProps = {
  value: string;
  handleClick: (value: string) => void;
  active: boolean;
};
const Chip = ({ value, handleClick, active }: ChipProps) => {
  return (
    <ChipContainer active={active} onClick={() => handleClick(value)}>
      {value}
    </ChipContainer>
  );
};

export default Chip;

const ChipContainer = styled.button<{ active: boolean }>`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  background-color: transparent;
  font-weight: 500;
  color: ${({ theme, active }) =>
    active ? theme.fontActive : theme.fontPrimary};
  border: 1px solid
    ${({ theme, active }) => (active ? theme.fontActive : theme.fontPrimary)};
  box-shadow: none;
  border-radius: 5px;
  padding: 0 8px;
  height: 30px;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  cursor: pointer;
  :focus,
  :active {
    border: 1px solid #4fa4fdb8;
    box-shadow: 0 0 8px 0 #4fa4fdb8;
    outline: none;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    margin-bottom: 5px;
  }
`;
