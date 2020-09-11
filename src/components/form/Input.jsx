import React from "react";

const Input = ({ label, htmlFor, type, value, handleChange }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        name={htmlFor}
        type={type}
        className="custom-input"
        value={value}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default Input;
