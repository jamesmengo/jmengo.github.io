import React, { Component } from 'react'
import { Fade } from 'react-reveal';
import { Container, Row, Col } from 'react-grid-system';
import '../styles/AboutMe.css'

export class AboutMe extends Component {
  render() {
    return (
      <div className='AboutMeContainer' id='AboutMe'>
        <Fade left delay={400} timeout={2000}>
          <h1>About Me</h1>
          <hr />
        </Fade>
        <Fade right delay={800} timeout={2000}>
          <div className='AboutMeBody'>
            <Container className='AboutMeList'>
              <Row>
                <Col xs={12} sm={4}>
                      working with new technologies and
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

          </div>
        </Fade>
      </div>
    )
  }
}

export default AboutMe
