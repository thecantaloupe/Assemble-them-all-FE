import React from "react";

const Input = ({name, label, type, handleChange}) => {
  return (
    <div class={name}>
        <label for={name}>{label}</label>
        <input
        type="text"
        name={name}
        required
        type={type}
        onChange={handleChange}
        />
    </div>
  );
};

export default Input;
