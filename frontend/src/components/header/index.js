import React from "react";
import {
  NavContainerHolder,
  NavContainer,
  Navigation,
  NavLogo,
  NavLinkContainer,
  CustomNavLink
} from "./header.styles";

import MobileHeader from "./header.mobile";

const activeStyle = {
  borderBottom: " 1px solid black",
  transition: "0.2s"
};

export const Header = () => {
  return (
    <>
      <NavContainerHolder>
        <MobileHeader />
        <NavContainer>
          <Navigation>
            <NavLogo to="/">Bluecatencode</NavLogo>
            <NavLinkContainer>
              <CustomNavLink activeStyle={activeStyle} to="/work">
                Our Work
              </CustomNavLink>
              <CustomNavLink
                activeStyle={{
                  borderBottom: " 1px solid black",
                  transition: "0.2s"
                }}
                to="/about"
              >
                About
              </CustomNavLink>
              <CustomNavLink activeStyle={activeStyle} to="/news">
                News
              </CustomNavLink>
              <CustomNavLink activeStyle={activeStyle} to="/contact">
                Contact
              </CustomNavLink>
            </NavLinkContainer>
          </Navigation>
        </NavContainer>
      </NavContainerHolder>
    </>
  );
};
