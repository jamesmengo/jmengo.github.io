import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/Projects.module.css";
import pageStyles from "../styles/Page.module.css";
import { Fade } from "react-reveal";
import { ProjectCard } from "./subcomponents/ProjectCard";

const CarouselButton = withStyles(theme => ({
  root: {
    position: "absolute",
    height: "calc(100vh - 98px)"
  }
}))(Button);

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      carouselLength: 3
    };
  }

  handleCarouselClick = increment => {
    const { activeSlide, carouselLength } = this.state;
    const newSlideIndex = activeSlide + increment;
    this.setState(
      {
        activeSlide:
          ((newSlideIndex % carouselLength) + carouselLength) % carouselLength
      },
      () => console.log(this.state)
    );
  };

  /**
   * TODO: Convert the carousel indicator a clickable indicator to allow easier navigation
   */
  render() {
    const { activeSlide, carouselLength } = this.state;
    return (
      <div className={pageStyles.pageContainer} id="Projects">
        <Fade down delay={400} timeout={2000}>
          <h1>My Projects</h1>
        </Fade>
        <Fade up distance={"2.0rem"} timeout={2000} delay={400}>
          <div className={styles.carouselIndicatorContainer}>
            <div
              style={{
                width: `${(1 / carouselLength) * 100}%`,
                marginLeft: `${(1 / carouselLength) * activeSlide * 100}%`
              }}
              className={styles.carouselIndicator}
            />
          </div>
          <div className={styles.carouselContainer}>
            <CarouselButton
              variant="text"
              color="primary"
              size="large"
              style={{ left: 0 }}
              onClick={() => this.handleCarouselClick(-1)}
            >
              <h1>{"<"}</h1>
            </CarouselButton>
            <div
              style={{
                transform: `translateX(calc((100vw - 98px) * -${activeSlide}))`
              }}
              className={styles.carouselBody}
            >
              <div className={styles.carouselPage}>hello1</div>
              <div className={styles.carouselPage}>hello2</div>
              <div className={styles.carouselPage}>hello3</div>
            </div>

            <CarouselButton
              variant="text"
              color="primary"
              size="large"
              style={{ right: 0 }}
              onClick={() => this.handleCarouselClick(1)}
            >
              <h1>{">"}</h1>
            </CarouselButton>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Projects;
