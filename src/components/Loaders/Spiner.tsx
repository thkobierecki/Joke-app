import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spiner = styled.div`
  border: 0.2em solid ${({ theme }) => theme.fontPrimary};
  border-top: 0.2em solid ${({ theme }) => theme.fontActive};
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`;

export default Spiner;
