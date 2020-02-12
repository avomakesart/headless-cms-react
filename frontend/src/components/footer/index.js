import React, { Component } from "react";
import {
  GlobalFooter,
  FooterContainer,
  FooterBrandContainer,
  FooterCopyrightContainer,
  BrandLogo,
  BrandInfo,
  BrandCopyright,
  FooterInfoContainer,
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLink
} from "./footer.styles";

class Footer extends Component {
  render() {
    return (
      <GlobalFooter>
        <FooterContainer>
          <FooterBrandContainer>
            <BrandLogo>Bluecatencode©</BrandLogo>
            <BrandInfo>
              We are the digital experience, with 4 paws on it, write us we
              could have a coffee and conquer the world as well.
            </BrandInfo>
          </FooterBrandContainer>
          <FooterInfoContainer>
            <FooterLinkContainer>
              <FooterLinkTitle>Blue Cat House</FooterLinkTitle>

              <FooterLink>
                Paseo Carrilleras 434, <br />
                Zapopan, MX
              </FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLinkTitle>Give us a sign</FooterLinkTitle>

              <FooterLink>hi@bluecatencode.com</FooterLink>
              <FooterLink>33-15-72-68-78</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer>
              <FooterLinkTitle>Social</FooterLinkTitle>

              <FooterLink>Instagram</FooterLink>
              <FooterLink>GitHub</FooterLink>
              <FooterLink>We are shy on the social media</FooterLink>
            </FooterLinkContainer>
          </FooterInfoContainer>
          <FooterCopyrightContainer>
            <BrandCopyright>
              ©2020 Bluecatencode. All rights Reserved
            </BrandCopyright>

            <FooterLink>Privacy Policy</FooterLink>
          </FooterCopyrightContainer>
        </FooterContainer>
      </GlobalFooter>
    );
  }
}

export default Footer;
