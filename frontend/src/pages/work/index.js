import React, { Component } from "react";

import {
  WorkContainer,
  WorkHeader,
  WorkValue,
  WorkDash,
  WorkTitle,
  WorkNav,
  WorkLink
} from "./work.styles";

class NavWork extends Component {
  render() {
    return (
      <WorkContainer>
        <WorkHeader>
          <WorkDash />
          <WorkValue>Happy clients</WorkValue>
          <WorkTitle>Results of hardwork</WorkTitle>
          <WorkNav>
            <WorkLink to="/work">All</WorkLink>
            <WorkLink to="/business">Business</WorkLink>
            <WorkLink to="/ecommerce">Ecommerce</WorkLink>
            <WorkLink to="/health">Health</WorkLink>
            <WorkLink to="/ux-ui">UX / UI</WorkLink>
            <WorkLink to="/elearning">E-Learning</WorkLink>
          </WorkNav>
        </WorkHeader>
      </WorkContainer>
    );
  }
}

export default NavWork;
