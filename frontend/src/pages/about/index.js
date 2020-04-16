import React from 'react';

import {
  AboutContainer,
  AboutTitle,
  AboutImageContainer,
  AboutImg,
  AboutMainSection,
  VisionTitle,
  InfoContainer,
  AboutScroll,
  AboutSubTitle,
  AboutParagraph,
  CtaButton,
} from './about.styles';

// import Deck from '../../components/cards/index';

import aboutUs from '../../assets/about.png';
import bulbs from '../../assets/bulbs.png';
import catVision from '../../assets/cat.png';

import Fade from 'react-reveal/Fade';
import { ContainedContainer } from '../../components/homepage/homepage.styles';

function About() {
  return (
    <>
      <AboutContainer>
        <AboutTitle items={['Behind The Cat']} pause={10500} />
      </AboutContainer>
      <ContainedContainer>
        <AboutMainSection>
          <AboutScroll items={['Scroll down']} />
          <AboutSubTitle>Driving solutions to the world</AboutSubTitle>
          <AboutParagraph>
            We are a team of nerds, lovers of technology, good code practices,
            cats and coffee. We offer solutions that can impact the world and
            help anyone to belong to the technological world.
          </AboutParagraph>
        </AboutMainSection>
        <img
          src={bulbs}
          style={{
            maxWidth: '100%',
            width: '20rem',
            margin: '6rem auto',
            display: 'flex',
            borderTop: '1.5px solid black',
          }}
          alt="Bulbs"
        />
        <AboutImageContainer>
          <Fade>
            <InfoContainer>
              <AboutSubTitle>Commited to the internet</AboutSubTitle>
              <AboutParagraph>
                The internet grows every day, that is why we are always
                interested in being updated, in order to offer you the best
                comprehensive solution.
              </AboutParagraph>
            </InfoContainer>
          </Fade>
          <AboutImg src={aboutUs} />
        </AboutImageContainer>
        <AboutMainSection>
          <VisionTitle items={['Vision', 'Cats can see at night']} />
          <AboutParagraph>
            Being the blue cat that innovates in the world of technology,
            reaching even the smallest devices.
          </AboutParagraph>
        </AboutMainSection>
        <img
          src={catVision}
          style={{
            maxWidth: '100%',
            width: '8rem',
            margin: '6rem auto 0',
            display: 'flex',
            border: '1.5px solid black',
          }}
          alt="Vision Cat"
        />
        <InfoContainer>
          <AboutSubTitle>Ready to talk?</AboutSubTitle>
          <CtaButton to="/contact" target="_blank">
            GET IN TOUCH
          </CtaButton>
        </InfoContainer>
      </ContainedContainer>
    </>
  );
}

export default About;
