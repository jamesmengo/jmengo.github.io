import React, { Component } from "react";
import { Fade } from "react-reveal";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { Computer, School, Group } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import pageStyles from "../styles/Page.module.css";
import ChevronDown from "../components/subcomponents/ChevronDown";

const StyledAvatar = withStyles(theme => ({
  root: {
    backgroundColor: "unset",
    border: "2px solid #FFFFFF",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "5rem",
      width: "5rem",
      marginBottom: "1rem",
      marginTop: "1rem"
    },
    [theme.breakpoints.up("md")]: {
      height: "5rem",
      width: "5rem",
      marginBottom: "1rem",
      marginTop: "1rem"
    },
    [theme.breakpoints.up("lg")]: {
      height: "7.5rem",
      width: "7.5rem"
    }
  }
}))(Avatar);

export class AboutMe extends Component {
  renderAvatar = Component => {
    return (
      <StyledAvatar>
        <Component style={{ fontSize: "4.0rem" }} />
      </StyledAvatar>
    );
  };

  render() {
    return (
      <div className={pageStyles.pageContainer} id="AboutMe">
        <Fade left delay={400} timeout={2000}>
          <h1>About Me</h1>
          <hr />
        </Fade>
        <div className={pageStyles.pageBody}>
          <Grid container>
            <Grid item align="center" xs={12} md={4}>
              <Fade right delay={800} timeout={2000} distance={"3.0rem"}>
                {this.renderAvatar(School)}
                <hr />
                <Typography variant="h6" gutterBottom>
                  I'm currently pursuing a combined major in Business and
                  Computer Science at the University of British Columbia.
                </Typography>
              </Fade>
            </Grid>
            <Grid item align="center" xs={12} md={4}>
              <Fade right delay={1200} timeout={2000} distance={"3.0rem"}>
                {this.renderAvatar(Computer)}
                <hr />
                <Typography variant="h6" gutterBottom>
                  I look for simple solutions to complex problems and prioritize
                  writing readable and reusable code. I build most of my
                  personal projects in JavaScript, but I'm always picking up new
                  frameworks and languages.
                </Typography>
                <Fade delay={1200} timeout={2000}>
                  <ChevronDown to="Projects" />
                </Fade>
              </Fade>
            </Grid>
            <Grid item align="center" xs={12} md={4}>
              <Fade right delay={1600} timeout={2000} distance={"3.0rem"}>
                {this.renderAvatar(Group)}
                <hr />
                <Typography variant="h6" gutterBottom>
                  I enjoy collaborating with others and understand the
                  importance of communication skills. I'm continually trying to
                  improve this skill by exposing myself to new experiences and
                  group dynamics.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AboutMe;
