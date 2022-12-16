import React from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput.styled";

export const WG_TextInput = ({
  name,
  type,
  placeholder,
  value,
  handleChange,
  ...props
}) => {
  return (
    <TextInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

WG_TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

WG_TextInput.defaultProps = {
  type: "text",
  placeholder: "Text here",
};
