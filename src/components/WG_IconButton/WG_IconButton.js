import React from "react";
import PropTypes from "prop-types";
import IconButton from "./IconButton.styled";

// React icons
import { FaPlus } from "react-icons/fa";

export const WG_IconButton = ({ children, size, type, action, ...props }) => {
  return (
    <IconButton size={size} type={type} onClick={(e) => action(e)}>
      {children}
    </IconButton>
  );
};

WG_IconButton.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string,
  type: PropTypes.string,
  action: PropTypes.func.isRequired,
};

WG_IconButton.defaultProps = {
  children: <FaPlus />,
};
