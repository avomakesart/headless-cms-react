import React from "react";
import {
  HeroContainer,
  HeroWrapper,
  HeroTextContainer,
  HeroTitle,
  HeroSubTitle,
  HeroScrollDown,
  ArrowDownIcon
} from "./hero.styles";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroTextContainer>
          <HeroTitle>
            <Fade bottom cascade>
              Commited to the Internet
            </Fade>
          </HeroTitle>

          <HeroSubTitle>
            <Fade bottom cascade>
              Do you need a hand or a paw?
            </Fade>
          </HeroSubTitle>
          <HeroScrollDown>
            <ArrowDownIcon />
            Scroll Down
          </HeroScrollDown>
        </HeroTextContainer>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
