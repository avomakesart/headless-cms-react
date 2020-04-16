import React from 'react';
import {
  HeroContainer,
  HeroWrapper,
  HeroTextContainer,
  HeroTitle,
  HeroSubTitle,
  HeroScrollDown,
  ArrowDownIcon,
} from './hero.styles';
import Fade from 'react-reveal/Fade';
import { withTranslation, Trans } from 'react-i18next';

const Hero = ({ t }) => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroTextContainer>
          <HeroTitle className="App-title">
            <Fade bottom cascade>
              {t('welcome.title')}
            </Fade>
          </HeroTitle>
          {/* <Trans i18nKey="welcome.title">Commited to the Internet</Trans> */}
          <HeroSubTitle>
            <Fade bottom cascade>
              {t('welcome.subtitle')}
            </Fade>
          </HeroSubTitle>
          <HeroScrollDown>
            <ArrowDownIcon />
            {t('welcome.action')}
          </HeroScrollDown>
        </HeroTextContainer>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default withTranslation('common')(Hero);
