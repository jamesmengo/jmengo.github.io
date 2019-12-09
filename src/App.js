import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import Typist from 'react-typist';
import Chevron from './assets/chevronDown.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Container, Row, Col } from 'react-grid-system';
import { appStyles } from './Style.js';
import './App.css';

const styles = appStyles();

// Convert the about me page to 3 columns - more effective use ofthe white space

class App extends Component {
  renderLandingContainer = () => {
    return <div className="LandingContainer">
      <div>
        <span className="NameFirst">{'James  '}</span>
        <span className="NameSecond">{' Meng'}</span>
      </div>
      <div>
        <Typist style={{ color: 'white' }}>
          <Typist.Delay ms={1000} />
          <span className={'scrollText'}>Developer.</span>
          <Typist.Delay ms={500} />
          <span className={'scrollText'}> Student Leader.</span>
          <Typist.Delay ms={500} />
          <span className={'scrollText'}> Tech Enthusiast.</span>
        </Typist>
      </div>
      <Fade timeout={2000}>
        <Link to="AboutMe" spy={true} smooth={true} duration={1000}>
          <img className={'Chevron'} style={{ color: 'white', height: 24, marginTop: '2rem' }} src={Chevron} alt='view more' />
        </Link>
      </Fade>
    </div>;
  }


  render() {
    return (
      <div className="App">
        <div className="Filter">
          {this.renderLandingContainer()}
          <div className='AboutMeContainer' id='AboutMe'>
            <Fade left delay={400} timeout={2000}>
              <h1 >About Me</h1>
              <hr />
            </Fade>
            <Fade right delay={800} timeout={2000}>
              <div className='AboutMeBody'>
                <Container className='AboutMeList'>
                <Row>
                  <Col xs={12} sm={4}>
                      I enjoy working with new technologies and
                      finding simple solutions to complex problems
                  </Col>
                  <Col xs={12} sm={4}>
                    I'm always picking up new hobbies, but photography, snowboarding, and hiking are consistent.
                  </Col>
                  <Col xs={12} sm={4}>
                    I'm always picking up new hobbies, but photography, snowboarding, and hiking are consistent.
                  </Col>
                </Row>  
                </Container>
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
