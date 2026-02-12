import React from "react";
import "./Input.css";

const Input = ({ label, error, helpText, className = "", ...props }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input
        className={`input ${error ? "input-error" : ""} ${className}`}
        {...props}
      />
      {helpText && <small className="input-help">{helpText}</small>}
      {error && <small className="input-error-text">{error}</small>}
    </div>
  );
};

export default Input;
