import React from 'react';
import {
  ContainedContainer,
  FullContainer,
  TopSection,
  TopSectionInfo,
  TopSectionH3,
  TopSectionParagraph,
  /** Icons*/
  Cafe,
  Paw,
  Code,
  Eye,
  /** Details Section **/
  DetailSection,
  DetailSolid,
  DetailImg,
  DetailInfo,
  DetailTitle,
  DetailParagraph,
  /** CTA Section **/
  CtaContainer,
  CtaValue,
  CtaDash,
  CtaTitle,
  CtaButton,
  /** Services Section **/
  Services,
  ServicesContainer,
  ServicesSolidLight,
  ServicesSolidClear,
  ServicesSolidGray,
  ServicesSolid,
  ServicesInfo,
  ServicesTitle,
  ServicesText,
  ServicesDash,
  /** CTA Work Container **/
  CtaWorkContainer,
  CtaWorkTitle,
  ArrowRightIcon,
  CtaWorkLink,
} from './homepage.styles';

import Space from '../../assets/gifs/space.gif';

import { useHover } from '../../helpers/hooks/hover';

function HomePage() {
  // const [
  //   isHovering,
  //   isHoveringTwo,
  //   isHoveringThree,
  //   setIsHovering,
  //   setIsHoveringTwo,
  //   setIsHoveringThree,
  // ] = useState(false);

  const [hoverRef, isHovered] = useHover();
  const [hoverRefTwo, isHoveredTwo] = useHover();
  const [hoverRefThree, isHoveredThree] = useHover();

  // const handleMouseHover = () => {
  //   setIsHovering(!isHovering);
  // };

  // const handleMouseHoverTwo = () => {
  //   setIsHoveringTwo(!isHoveringTwo);
  // };

  // const handleMouseHoverThree = () => {
  //   setIsHoveringThree(!isHoveringThree);
  // };

  return (
    <>
      <ContainedContainer>
        <TopSection>
          <TopSectionInfo>
            <Cafe />
            <TopSectionH3>Know the Idea</TopSectionH3>
            <TopSectionParagraph>
              We always make sure we know all your ideas in depth to be
              reflected in the code.
            </TopSectionParagraph>
          </TopSectionInfo>
          <TopSectionInfo>
            <Paw />
            <TopSectionH3>We'll give you a paw</TopSectionH3>
            <TopSectionParagraph>
              If your idea needs only one paw or more, no matter we put each of
              our paws on it.
            </TopSectionParagraph>
          </TopSectionInfo>
          <TopSectionInfo>
            <Code />
            <TopSectionH3>Let's exist in the code</TopSectionH3>
            <TopSectionParagraph>
              Success will be in the unified software architecture as a final
              result.
            </TopSectionParagraph>
          </TopSectionInfo>
        </TopSection>
      </ContainedContainer>
      <FullContainer>
        <DetailSection>
          <DetailSolid>
            <DetailInfo>
              <DetailTitle>Make it happen</DetailTitle>
              <DetailParagraph>
                We provide you with a completely customized software structure,
                we live in the code until it is launched into the internal
                space.
              </DetailParagraph>
            </DetailInfo>
          </DetailSolid>
          <DetailImg src={Space} />
        </DetailSection>
      </FullContainer>
      <ContainedContainer>
        <CtaDash />
        <CtaValue>Principal Value</CtaValue>
        <CtaContainer>
          <CtaTitle>
            We imagine, create, engineer and translate the ideas of paper
            <br />
            to the digital world on different platforms that companies
            <br />
            and companions need
          </CtaTitle>
          <CtaButton>SEE WHAT WE DO</CtaButton>
        </CtaContainer>
      </ContainedContainer>
      <FullContainer>
        <Services>
          <ServicesContainer ref={hoverRef}>
            {!isHovered ? (
              <ServicesSolid>
                <ServicesInfo>
                  <ServicesTitle>01 Software Solutions</ServicesTitle>
                </ServicesInfo>
              </ServicesSolid>
            ) : (
              <ServicesSolidLight>
                <ServicesInfo>
                  <ServicesTitle style={{ color: 'black' }}>
                    01 Software Solutions
                  </ServicesTitle>
                  <ServicesDash />
                  <ServicesText style={{ color: 'black' }}>
                    We provide amazing software engineering solutions to your
                    company looks awesome.
                  </ServicesText>
                </ServicesInfo>
              </ServicesSolidLight>
            )}
          </ServicesContainer>
          <ServicesContainer ref={hoverRefTwo}>
            {!isHoveredTwo ? (
              <ServicesSolid>
                <ServicesInfo>
                  <ServicesTitle>02 Branding</ServicesTitle>
                </ServicesInfo>
              </ServicesSolid>
            ) : (
              <ServicesSolidClear>
                <ServicesInfo>
                  <ServicesTitle style={{ color: 'black' }}>
                    02 Branding
                  </ServicesTitle>
                  <ServicesDash />
                  <ServicesText style={{ color: 'black' }}>
                    Let's talk about your brand, we can do your brand talk by it
                    self.
                  </ServicesText>
                </ServicesInfo>
              </ServicesSolidClear>
            )}
          </ServicesContainer>
          <ServicesContainer ref={hoverRefThree}>
            {!isHoveredThree ? (
              <ServicesSolid>
                <ServicesInfo>
                  <ServicesTitle>03 Audiovisual Production</ServicesTitle>
                </ServicesInfo>
              </ServicesSolid>
            ) : (
              <ServicesSolidGray>
                <ServicesInfo>
                  <ServicesTitle style={{ color: 'black' }}>
                    03 Audiovisual Production
                  </ServicesTitle>
                  <ServicesDash />
                  <ServicesText style={{ color: 'black' }}>
                    We could be your cat eyes, even if it's late we are
                    storytellers about your story.
                  </ServicesText>
                </ServicesInfo>
              </ServicesSolidGray>
            )}
          </ServicesContainer>
        </Services>
        <CtaWorkContainer>
          <Eye />
          <CtaWorkTitle>Do you want to have a look?</CtaWorkTitle>

          <CtaWorkLink to="/work">
            View Our Work! <ArrowRightIcon />
          </CtaWorkLink>
        </CtaWorkContainer>
      </FullContainer>
    </>
  );
}

export default HomePage;
