import React from "react";


// Really cool way to deconstruct form. You make a component that you can pass props for variable components. It might be cool to make this into a styled component, then you would be able to do make your form something simple like <Input-Password/> </Input-Name /> etc
const Input = ({name, label, type, handleChange}) => {
  return (
    <div className={name}>
        <label htmlFor={name}>{label}</label>
        <input
        name={name}
        required
        type={type}
        onChange={handleChange}
        />
    </div>
  );
};

export default Input;
