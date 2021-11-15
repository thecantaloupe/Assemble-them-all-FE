import React from "react";

const Input = ({name, label, type, handleChange}) => {
  return (
    <input
      type="text"
      name={name}
      required
      label={label}
      type={type}
      onChange={handleChange}
    />
  );
};

export default Input;
