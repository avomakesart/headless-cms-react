import styled from "styled-components";
import ReactRotatingText from "react-rotating-text";

export const AboutContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutTitle = styled(ReactRotatingText)`
  font-size: 48px;
  line-height: 60px;
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    flex-direction: row;
  }
`;

export const AboutSolid = styled.div`
  background: black;
  width: 100%;
  color: white;
`;

export const AboutImg = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
`;

export const AboutInfo = styled.div`
  margin: 20rem;
`;

export const AboutSubTitle = styled.h3`
  font-size: 22px;
  color: white;
`;

export const AboutParagraph = styled.p`
  font-size: 18px;
  color: black;
`;
