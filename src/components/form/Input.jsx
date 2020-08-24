import React from "react";

const Input = ({ label, htmlFor, type }) => {
  return (
    <div className="label-custom">
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} className="custom-input" />
    </div>
  );
};

export default Input;
