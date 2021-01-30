import React from "react";
import styled from "styled-components";

type Props = { message: string };

const ErrorMessage = ({ message }: Props) => {
  return (
    <ErrorMessageWrapper>
      <p>{message}</p>
    </ErrorMessageWrapper>
  );
};

export default ErrorMessage;

const ErrorMessageWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
