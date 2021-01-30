import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

type Props = {
  value: string;
  handleChange: (searchValue: string) => void;
  placeholder: string;
};
const SearchBar = ({ value, handleChange, placeholder }: Props) => {
  return (
    <StyledInputWrapper>
      <Icon as={BsSearch} />
      <StyledInput
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
    </StyledInputWrapper>
  );
};

export default SearchBar;

const StyledInputWrapper = styled.div`
  position: relative;
  width: 300px;
`;
const StyledInput = styled.input.attrs(() => ({ type: "text" }))`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.fontPrimary};
  border-radius: 4px;
  margin: 8px 0;
  padding: 8px;
  padding-left: 40px;
  outline: none;
  box-sizing: border-box;
  transition: 0.3s;
  :focus {
    border-color: #4fa4fdb8;
    box-shadow: 0 0 8px 0 #4fa4fdb8;
  }
`;
const Icon = styled.i`
  position: absolute;
  left: 0;
  top: 8px;
  padding: 9px 8px;
  color: #aaa;
  transition: 0.3s;
`;
