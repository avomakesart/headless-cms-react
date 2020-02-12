import styled from "styled-components";
// Icons
import { ReactComponent as arrowDown } from "../../assets/icons/arrow-down.svg";

export const HeroContainer = styled.div`
  min-height: 850px;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`;

export const HeroTextContainer = styled.div`
  padding: 20rem 0 6rem 0;
  max-width: 90rem;
  margin-left: 2rem;
  margin-right: 1rem;
  @media (min-width: 768px) {
    padding: 20rem 0 6rem 0;
    max-width: 90rem;
    margin-left: 13rem;
    margin-right: 5rem;
    margin-top: 2.5rem;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  color: black;
  font-size: 3.3rem;
`;

export const HeroSubTitle = styled.h3`
  margin: 2rem auto;
  color: #191919;
  font-size: 2rem;
`;

export const HeroScrollDown = styled.p`
  margin: 2rem auto;
  color: #191919;
  font-size 1.3rem;
`;

export const ArrowDownIcon = styled(arrowDown)`
  width: 2rem;
  margin: -0.6rem 1rem;
  color: black;
`;
