import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import { Container, Row, Col } from 'react-grid-system';
import './App.css';

import { LandingContainer } from './components/LandingContainer';
import { AboutMe } from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Filter">
          <LandingContainer />
          <AboutMe />
        </div>
      </div>
    );
  }

}

export default App;
