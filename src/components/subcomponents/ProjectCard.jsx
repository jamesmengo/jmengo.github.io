import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Card, Typography } from "@material-ui/core";
import Gal1 from "../../assets/gal1.png";
import demoGif from '../../assets/gif/demo.gif'

export class ProjectCard extends Component {
  static propTypes = {};

  render() {
    const { type } = this.props
    return type == 0 ? (
      <Grid container>
        <Grid item xs={6}>
          <Card>
            <img src={Gal1} alt="Gallery" style={{ maxWidth: "100%" }} />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h2">Photo Gallery</Typography>
        </Grid>
      </Grid>
    )
      : (
        <Grid container>
          <Grid item xs={6}>
            <Card>
              <img src={demoGif} alt="Gallery" style={{ maxWidth: "100%" }} />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2">Photo Gallery</Typography>
          </Grid>
        </Grid>
      );
  }
}

export default ProjectCard;
