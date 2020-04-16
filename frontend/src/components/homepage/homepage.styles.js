import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Icons
import { ReactComponent as cafe } from '../../assets/icons/cafe.svg';
import { ReactComponent as paw } from '../../assets/icons/paw.svg';
import { ReactComponent as code } from '../../assets/icons/code.svg';
import { ReactComponent as eye } from '../../assets/icons/eye.svg';
import { ReactComponent as arrowRight } from '../../assets/icons/arrow-right.svg';

export const Cafe = styled(cafe)`
  width: 8rem;
  color: black;
  margin: 0;
`;

export const Paw = styled(paw)`
  width: 8rem;
  color: black;
  margin: 0;
`;

export const Code = styled(code)`
  width: 8rem;
  color: black;
  margin: 0;
`;

export const Eye = styled(eye)`
  width: 4rem;
  color: black;
  margin: 0;
`;

// Icons --^/

export const ContainedContainer = styled.div`
  flex-direction: column;
  @media (min-width: 768px) {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const FullContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
`;

export const TopSection = styled.div`
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    margin: 8rem auto;
    flex-direction: row;
  }
`;

export const TopSectionInfo = styled.div`
  text-align: center;
  margin: 0 5rem;
`;

export const TopSectionParagraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

export const TopSectionH3 = styled.h3`
  font-size: 18px;
  text-align: center;
`;

// Details Section

export const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    flex-direction: row;
  }
`;

export const DetailSolid = styled.div`
  background: black;
  width: 100%;
  color: white;
`;

export const DetailImg = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
`;

export const DetailInfo = styled.div`
  margin: 20rem 9rem;
`;

export const DetailTitle = styled.h3`
  font-size: 22px;
  color: white;
`;

export const DetailParagraph = styled.p`
  font-size: 18px;
  color: white;
`;

// CTA section

export const CtaContainer = styled.div`
  background: white;
  margin: 5rem;
`;

export const CtaValue = styled.p`
  font-size: 14px;
  color: black;
  display: inline-block;
  margin-left: 1rem;
  margin-top: 6rem;
`;

export const CtaDash = styled.hr`
  height: 0;
  width: 2rem;
  display: inline-block;
  vertical-align: middle;
  border-top: 0.2rem solid;
  position: relative;
`;

export const CtaTitle = styled.h2`
  font-size: 30px;
  color: black;
`;

export const CtaButton = styled(Link)`
  background: black;
  cursor: pointer;
  font-size: 15px;
  color: white;
  min-width: 18.5rem;
  padding: 1rem;
  text-transform: uppercase;
  &: hover {
    background: white;
    border: solid 1px black;
    color: black;
  }
`;

// Services Section

export const Services = styled.div`
  margin: 0 auto;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
`;

export const ServicesSolid = styled.div`
  background: black;
  width: 100%;
  max-width: 100%;
  color: white;
  height: auto;
  border-right: 1px solid white;
`;

export const ServicesSolidLight = styled.div`
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  width: 100%;
  max-width: 100%;
  color: black;
  height: auto;
  border: 1px solid black;
`;

export const ServicesSolidClear = styled.div`
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
  width: 100%;
  max-width: 100%;
  color: black;
  height: auto;
  border: 1px solid black;
`;

export const ServicesSolidGray = styled.div`
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  width: 100%;
  max-width: 100%;
  color: black;
  height: auto;
  border: 1px solid black;
`;

export const ServicesInfo = styled.div`
  margin: 20rem 9rem;
`;

export const ServicesTitle = styled.h3`
  font-size: 22px;
  color: white;
`;

export const ServicesDash = styled.hr`
  height: 0;
  width: 2rem;
  display: inline-block;
  vertical-align: middle;
  border-top: 0.2rem solid;
  position: relative;
`;

export const ServicesText = styled.p`
  font-size: 18px;
  color: white;
`;

// CTA Work Section

export const CtaWorkContainer = styled.div`
  margin: 5rem;
  @media (min-width: 768px) {
    background: white;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: flex;
    margin: 8rem;
    justify-content: center;
    flex-direction: column;
  }
`;

export const CtaWorkTitle = styled.h2`
  font-size: 30px;
  color: black;
`;

export const ArrowRightIcon = styled(arrowRight)`
  width: 2rem;
  margin: -0.6rem 0;
  color: black;
`;

export const CtaWorkLink = styled(Link)`
  color: #4a4843;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    color: #b5bab6;
    text-decoration: line-trought;
  }
`;
