import React from 'react';

import {
  WorkContainer,
  WorkHeader,
  WorkValue,
  WorkDash,
  WorkTitle,
  WorkNav,
  WorkLink,
} from './work.styles';

const activeStyle = {
  borderBottom: ' 1px solid black',
  transition: '0.2s',
};

function NavWork() {
  return (
    <WorkContainer>
      <WorkHeader>
        <WorkDash />
        <WorkValue>Happy clients</WorkValue>
        <WorkTitle>Results of hardwork</WorkTitle>
        <WorkNav>
          <WorkLink activeStyle={activeStyle} to="/work">
            All
          </WorkLink>
          <WorkLink activeStyle={activeStyle} to="/business">
            Business
          </WorkLink>
          <WorkLink activeStyle={activeStyle} to="/ecommerce">
            Ecommerce
          </WorkLink>
          <WorkLink activeStyle={activeStyle} to="/health">
            Health
          </WorkLink>
          <WorkLink activeStyle={activeStyle} to="/ux-ui">
            UX / UI
          </WorkLink>
          <WorkLink activeStyle={activeStyle} to="/elearning">
            E-Learning
          </WorkLink>
        </WorkNav>
      </WorkHeader>
    </WorkContainer>
  );
}

export default NavWork;
