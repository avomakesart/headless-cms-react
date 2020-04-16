import React, { Component } from 'react';
import Hero from '../../components/hero/index';
import HomePage from '../../components/homepage/index';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <HomePage />
      </div>
    );
  }
}

export default Home;
