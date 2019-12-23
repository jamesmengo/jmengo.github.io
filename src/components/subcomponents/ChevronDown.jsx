import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import Chevron from "../../assets/chevronDown.svg";
import styles from "../../styles/subcomponents/ChevronDown.module.css";

function ChevronDown(props) {
  const { to, duration } = props;
  return (
    <Link to={to} spy={true} smooth={true} duration={duration}>
      <img className={styles.chevronImage} src={Chevron} alt="view About Me" />
    </Link>
  );
}

ChevronDown.propTypes = {
  to: PropTypes.string.isRequired,
  duration: PropTypes.number
};

ChevronDown.defaultProps = {
  duration: 1000
};

export default ChevronDown;
