import React from "react";
import PropTypes from "prop-types";
import TextArea from "./TextArea.styled";

export const WG_TextArea = ({
  name,
  rows,
  placeholder,
  value,
  handleChange,
  ...props
}) => {
  return (
    <TextArea
      name={name}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

WG_TextArea.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

WG_TextArea.defaultProps = {
  type: "text",
  placeholder: "Text here",
};
