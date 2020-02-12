import React, { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks";

import { HeaderMobileContainer, MobileLogoContainer } from "./header.styles";

import Burger from "../mobile-menu/burger/burger.component";
import MobileMenu from "../mobile-menu/mobile-menu.component";

function MobileHeader() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <HeaderMobileContainer ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <MobileLogoContainer>
        <h2>Bluecatencode</h2>
      </MobileLogoContainer>
    </HeaderMobileContainer>
  );
}

export default MobileHeader;
