import React from "react";

const Input = ({ name, label, helpText, labelIcon, onChange, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <i className={`fas ${labelIcon} mr-2`}></i>
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        name={name}
        id={name}
        aria-describedby={name}
        {...rest}
      />
      <small id={name} className="form-text text-muted">
        {helpText}
      </small>
    </div>
  );
};

export default Input;
