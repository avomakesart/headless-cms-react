import React, { Component } from "react";
import Hero from "../../components/hero/index";
import HomePage from "../../components/homepage/index";
import { HomeContainer } from "./home.styles";

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Hero />
        <HomePage />
      </HomeContainer>
    );
  }
}

export default Home;
