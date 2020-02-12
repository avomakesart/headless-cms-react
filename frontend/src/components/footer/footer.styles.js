import styled from "styled-components";

export const GlobalFooter = styled.footer`
  background-color: #1b1b1c;
  color: #fff;
  padding-top: 8.49618vw;
  padding-bottom: 10.62022vw;
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  width: 85%;
  max-width: 192rem;
`;

export const FooterBrandContainer = styled.div`
  flex-direction: column;
  margin: 0;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    flex-direction: row;
  }
`;

export const BrandLogo = styled.h2`
  font-size: 1.5em;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  width: 33.33%;
  color: white;
`;

export const BrandInfo = styled.p`
  font-size: 20px;
  color: white;
  max-width: 192rem;
  width: 66.66%;
`;

export const FooterCopyrightContainer = styled.div`
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    justify-content: start;
    flex-direction: row;
  }
`;

export const BrandCopyright = styled.p`
  font-size: 10px;
  color: white;
  max-width: 192rem;
  width: 33.33%;
`;

export const FooterInfoContainer = styled.div`
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    max-width: 192rem;
    width: 66.66%;
    margin: 5rem 21rem;
    flex-direction: row;
  }
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

export const FooterLinkTitle = styled.h5`
  font-size: 15px;
  color: white;
  margin: 1rem 0;
`;

export const FooterLink = styled.a`
  font-size: 13px;
  color: white;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;
