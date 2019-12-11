import React, { Component } from 'react'
import '../styles/LandingContainer.css'
import { Fade } from 'react-reveal';
import { Link, animateScroll as scroll } from 'react-scroll';
import 'react-typist/dist/Typist.css'
import Typist from 'react-typist';
import Chevron from '../assets/chevronDown.svg';

export class LandingContainer extends Component {
  render() {
    return (
      <div className="LandingContainer">
        <div>
          <span className="NameFirst">{'James  '}</span>
          <span className="NameSecond">{' Meng'}</span>
        </div>
        <div>
          <Typist
            startDelay='2000'
            style={{ color: 'white' }}
          >
            <span className={'scrollText'}>Developer. </span>
            <Typist.Delay ms={1000} />
            <span className={'scrollText'}>Student Leader. </span>
            <Typist.Delay ms={1000} />
            <span className={'scrollText'}>Tech Enthusiast. </span>
          </Typist>
        </div>
        <Fade timeout={2000}>
          <Link to="AboutMe" spy={true} smooth={true} duration={1000}>
            <img className={'Chevron'} style={{ color: 'white', height: 24, marginTop: '2rem' }} src={Chevron} alt='view more' />
          </Link>
        </Fade>
      </div>
    )
  }
}

export default LandingContainer
