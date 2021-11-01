import React from "react";
import PropTypes from "prop-types";
const styles = {
  outline: "1px solid tomato",
};

const Panel = ({ children, title }) => (
  <div style={styles}>
    <h2>{title}</h2>
    {children}
  </div>
);

Panel.defaultProps = {
  title: "",
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
