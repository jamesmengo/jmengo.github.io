import React, { Component } from 'react';
import logo from './logo.svg';
import { Zoom, Fade } from 'react-reveal';
import Typist from 'react-typist';
import Chevron from './chevronDown.svg';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';

const displayStrings = ['Developer', 'Student Leader', 'Critical Thinker']

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Filter">
          <div className="LandingContainer">
            <div>
              <span className="NameFirst">{'James  '}</span>
              <span className="NameSecond">{' Meng'}</span>
            </div>
            <div>
              <Typist style={{ color: 'white' }}>
                <Typist.Delay ms={2000} />
                <span className={'header1'}>Developer.</span>
                <Typist.Delay ms={1000} />
                <span className={'header1'}>  Student Leader.</span>
                <Typist.Delay ms={1000} />
                <span className={'header1'}>  Tech Enthusiast.</span>
              </Typist>
            </div>
            <Zoom>
              <Link
                to="AboutMe"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <img className={'Chevron'} style={{ color: 'white', height: 24, marginTop: '2rem' }} src={Chevron} alt='view more' />
              </Link>
            </Zoom>
          </div>
          <div className='AboutMeContainer' id='AboutMe'>
            <Fade left timeout={2000}>
              <h1 >About Me</h1>
              <hr />
            </Fade>
            <Fade right timeout={2000}>
              <div className='AboutMeBody'>
                <h2 id='section1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }

}

export default App;