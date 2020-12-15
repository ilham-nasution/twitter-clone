import React, { forwardRef } from "react";

const TwitterInput = forwardRef(({ label, ...restProps }, ref) => (
  <div className="custom-form-group">
    <label>{label}</label>
    <input className="custom-input" ref={ref} {...restProps} />
  </div>
));

export default TwitterInput;
