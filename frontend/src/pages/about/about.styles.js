import styled from 'styled-components';
import ReactRotatingText from 'react-rotating-text';
import { Link } from 'react-router-dom';

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
  font-size: 5rem;
  line-height: 60px;
`;

export const AboutScroll = styled(ReactRotatingText)`
  font-size: 1rem;
  color: black;
  text-align: center;
  margin: -4rem 0 4rem;
`;

export const VisionTitle = styled(ReactRotatingText)`
  font-size: 2rem;
  color: black;
  text-align: center;
  margin: 3rem auto;
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    flex-direction: row;
    width: 100%;
  }
`;

export const AboutMainSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin: 0 auto 4rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const AboutSolid = styled.div`
  background: black;
  width: 100%;
  color: white;
`;

export const AboutImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;
  width: 70%;
  @media (min-width: 768px) {
    margin: 8rem auto 0;
    max-width: 900px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  margin: 0 auto;
`;

export const AboutImg = styled.img`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 4rem auto;
  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 100%;
    width: 60%;
    height: auto;
  }
`;

export const AboutInfo = styled.div`
  margin: 20rem;
`;

export const AboutSubTitle = styled.h3`
  font-size: 2rem;
  color: black;
  text-align: center;
  margin-top: 4rem;
`;

export const AboutParagraph = styled.p`
  font-size: 18px;
  color: black;
  margin: 0 auto;
  align-items: justify;
`;

export const CtaButton = styled(Link)`
  background: black;
  cursor: pointer;
  font-size: 15px;
  color: white;
  padding: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 auto 3rem;
  display: flex;
  justify-content: center;
  width: 10%;
  min-width: 10%;
  &: hover {
    background: white;
    border: solid 1px black;
    color: black;
  }
`;
