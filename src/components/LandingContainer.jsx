import React, { Component } from "react";
import landingStyles from "../styles/LandingContainer.module.css";
import { Fade } from "react-reveal";
import Typist from "react-typist";
import { Typography, Grid } from "@material-ui/core";
import ChevronDown from "./subcomponents/ChevronDown";

export class LandingContainer extends Component {
  render() {
    return (
      <Grid container className={landingStyles.landingContainer}>
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
        <Fade timeout={2000}>
          <ChevronDown to="AboutMe" />
        </Fade>
      </Grid>
    );
  }
}

export default LandingContainer;
