import React, { Component } from "react";
import landingStyles from "../styles/LandingContainer.module.css";
import { Fade } from "react-reveal";
import Typist from "react-typist";
import { Typography, Grid } from "@material-ui/core";
import ChevronDown from "./subcomponents/ChevronDown";
import githubIcon from '../assets/githubIcon.png'
import linkedInIcon from '../assets/linkIcon.png'
import galleryIcon from '../assets/galleryIcon.png'

export class LandingContainer extends Component {
  render() {
    return (
      <Grid container className={landingStyles.landingContainer}>
        <Fade delay={400} timeout={800}>
          <div className={landingStyles.titleContainer}>
            <Typography variant="h1">
              {"James  "}
              <span className={landingStyles.titleBold}>{" Meng"}</span>
            </Typography>
          </div>
          <div>
            <Typist>
              <Typist.Delay ms={1000} />
              <span>Developer.</span>
              <Typist.Delay ms={1000} />
              <span> Student Leader.</span>
              <Typist.Delay ms={1000} />
              <span> Tech Enthusiast.</span>
            </Typist>
          </div>

          <div className={landingStyles.logoContainer}>
            <Fade delay={1200} timeout={2500}>
              <a href='https://www.linkedin.com/in/james-meng/'>
                <img src={linkedInIcon} alt="linkedIn Link" className={landingStyles.logo} />
              </a>
              <a href="https://github.com/jmengo">
                <img src={githubIcon} alt="Github Link" className={landingStyles.logo} />
              </a>
              <a href="https://www.instagram.com/mengo.jpg/">
                <img src={galleryIcon} alt="Instagram Link" className={landingStyles.logo} />
              </a>
            </Fade>
          </div>
        </Fade>
        {/* <Fade timeout={2000}>
          <ChevronDown to="AboutMe" />
        </Fade> */}
      </Grid >
    );
  }
}

export default LandingContainer;
