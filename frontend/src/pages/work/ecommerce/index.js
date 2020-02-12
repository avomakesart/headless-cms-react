import React, { Component } from "react";
import NavWork from "../index";

import {
  AllWorkContainer,
  AllWorkSection,
  AllWorkInfo,
  AllWorkH3
} from "../work.styles";

import IconDEMO from "../../../assets/icons/paw.svg";

class Ecommerce extends Component {
  render() {
    return (
      <>
        <NavWork />
        <AllWorkContainer>
          <AllWorkSection>
            <AllWorkInfo>
              <img src={IconDEMO} alt="Work" style={{ maxWidth: "100%" }} />
              <AllWorkH3>First One</AllWorkH3>
            </AllWorkInfo>
            <AllWorkInfo>
              <img src={IconDEMO} alt="Work" style={{ maxWidth: "100%" }} />
              <AllWorkH3>First One</AllWorkH3>
            </AllWorkInfo>
          </AllWorkSection>
        </AllWorkContainer>
      </>
    );
  }
}

export default Ecommerce;
