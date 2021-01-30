import React, { ReactChildren, ReactChild } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "components/Modal";

type MainTemplateProps = {
  children: ReactChild | ReactChildren;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <TemplateContainer>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </TemplateContainer>
      {/* <Modal /> */}
    </>
  );
};

export default MainTemplate;

const TemplateContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: 5rem minmax(70vh, auto) 10rem;
  gap: 0 2rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
    grid-template-rows: 5rem minmax(60vh, auto) 10rem;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`;
const ContentWrapper = styled.main`
  grid-column: 2 / span 12;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
  }
`;
