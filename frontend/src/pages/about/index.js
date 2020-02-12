import React, { Component } from "react";

import {
  AboutContainer,
  AboutTitle,
  AboutSection,
  AboutSolid,
  AboutImg,
  AboutInfo,
  AboutSubTitle,
  AboutParagraph
} from "./about.styles";

import Deck from "../../components/cards/index";

import { ContainedContainer } from "../../components/homepage/homepage.styles";

class About extends Component {
  render() {
    return (
      <>
        <AboutContainer>
          <AboutTitle items={["Behind The Cat"]} />
        </AboutContainer>
        <ContainedContainer>
          <AboutSection>
            <AboutInfo>
              <AboutSubTitle>This is a subtitle</AboutSubTitle>
              <AboutParagraph>Hello</AboutParagraph>
            </AboutInfo>

            <AboutInfo>
              <AboutSubTitle>This is a subtitle</AboutSubTitle>
              <AboutParagraph>Hello</AboutParagraph>
              <Deck />
            </AboutInfo>
          </AboutSection>
        </ContainedContainer>
      </>
    );
  }
}

export default About;
