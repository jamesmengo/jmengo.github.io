import React, { Component } from 'react';
import logo from './logo.svg';
import { Zoom, Fade } from 'react-reveal';
import Typist from 'react-typist';
import Chevron from './chevronDown.svg';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';

const displayStrings = ['Developer', 'Student Leader', 'Critical Thinker']
// TODO: refactor styling (withStyles ?)
// fix the github pages deploy

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
                <Typist.Delay ms={1000} />
                <span className={'header1'}>Developer. </span>
                <Typist.Delay ms={500} />
                <span className={'header1'}> Student Leader. </span>
                <Typist.Delay ms={500} />
                <span className={'header1'}> Tech Enthusiast. </span>
              </Typist>
            </div>
            <Fade timeout={2000}>
              <Link
                to="AboutMe"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <img className={'Chevron'} style={{ color: 'white', height: 24, marginTop: '2rem' }} src={Chevron} alt='view more' />
              </Link>
            </Fade>
          </div>
          <div className='AboutMeContainer' id='AboutMe'>
            <Fade left delay={400} timeout={2000}>
              <h1 >About Me</h1>
              <hr />
            </Fade>
            <Fade right delay={800} timeout={2000}>
              <div className='AboutMeBody'>
                <ul>
                  <li>
                    I'm passionate about finding simple solutions to complex problems
                  </li>
                  <li>
                    I'm always looking for opportunities to push myself by learning new things
                  </li>
                </ul>
                {/* <h3>
                  I'm passionate about finding simple solutions to complex problems
                  <br />
                  As someone who believes in continuous growth, I'm always trying find
                  new opportunities to push myself.
                </h3> */}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }

}

export default App;