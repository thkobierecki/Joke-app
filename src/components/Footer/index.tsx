import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWraper>
      <p> 2021 JokeApp</p>
    </FooterWraper>
  );
};

export default Footer;

const FooterWraper = styled.footer`
  background-color: ${({ theme }) => theme.bg.secondary};
  grid-column: 1 / span 14;
  grid-row: 3;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-column: 1 / span 8;
  }
`;
