import React, { Component } from 'react';
import NavWork from '../index';

import { AllWorkContainer, AllWorkSection, AllWorkInfo } from '../work.styles';

// import IconDEMO from '../../../assets/icons/paw.svg';

class AllWork extends Component {
  render() {
    return (
      <>
        <NavWork />
        <AllWorkContainer>
          <AllWorkSection>
            <AllWorkInfo>
              <h1>We're Working on this, coming soon</h1>
            </AllWorkInfo>
            {/* <AllWorkInfo>
              <img src={IconDEMO} alt="Work" style={{ maxWidth: "100%" }} />
              <AllWorkH3>First One</AllWorkH3>
            </AllWorkInfo>
            <AllWorkInfo>
              <img src={IconDEMO} alt="Work" style={{ maxWidth: "100%" }} />
              <AllWorkH3>First One</AllWorkH3>
            </AllWorkInfo> */}
          </AllWorkSection>
        </AllWorkContainer>
      </>
    );
  }
}

export default AllWork;
