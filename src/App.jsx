import React, { Component } from "react";
import "./App.css";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import styles from "./styles/index.module.css";
import { LandingContainer } from "./components/LandingContainer";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins"]
  },
  palette: {
    primary: {
      main: "#FFFFFF"
    }
  }
});
theme = responsiveFontSizes(theme);

if (typeof window !== "undefined") {
  window.onscroll = () => {
    renderScrollBar();
  };
}
const renderScrollBar = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator").style.width = scrolled + "%";
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className={styles.App}>
          <div className={styles.scrollContainer}>
            <div className={styles.scrollIndicator} id="scrollIndicator" />
          </div>
          <LandingContainer />
          {/* <AboutMe />
          <Projects /> */}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
