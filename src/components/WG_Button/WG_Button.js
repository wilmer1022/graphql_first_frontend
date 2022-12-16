import React from "react";
import PropTypes from "prop-types";
import Button from "./Button.styled";

export const WG_Button = ({ children, size, type, action, ...props }) => {
  return (
    <Button size={size} type={type} onClick={(e) => action(e)}>
      {children}
    </Button>
  );
};

WG_Button.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.func.isRequired,
};

WG_Button.defaultProps = {
  children: "Enter",
  size: "sm",
};
