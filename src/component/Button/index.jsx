import React from "react";
import PropTypes from "prop-types";
import "./button.styles.scss";

const Button = ({ text, click, type, fullWidth, variant}) => {


  return (
    <button onClick={click} type={type} >
      {text}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
  type: "button",
};

Button.propTypes = {
  click: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default Button;
