import React from "react";
import styles from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ text, type }) => {
  return <p className={styles[type]}>{text}</p>;
};

Notification.defaultProps = {
  type: "success",
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]),
};

export default Notification;
