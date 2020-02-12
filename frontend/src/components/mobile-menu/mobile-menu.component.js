import React from "react";
import { bool, func } from "prop-types";
import { StyledMenu, MobileLink } from "./mobile-menu.styles";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <MobileLink to="/work" onClick={() => setOpen(!open)}>
        Our Work
      </MobileLink>
      <MobileLink to="/about" onClick={() => setOpen(!open)}>
        About
      </MobileLink>
      <MobileLink to="/news" onClick={() => setOpen(!open)}>
        News
      </MobileLink>
      <MobileLink to="/contact" onClick={() => setOpen(!open)}>
        Contact
      </MobileLink>
    </StyledMenu>
  );
};
MobileMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};
export default MobileMenu;
