import React from "react";
import { string } from "prop-types";

const Input = ({ type, error, active, label, ...props }) => (
  <div
    className={[
      "wrapper-input",
      error ? "error" : "",
      active ? "active" : "",
    ].join(" ")}
  >
    {label && (
      <label className="label" className="label">
        {label}
      </label>
    )}
    <input type={type} {...props} />

    {error && <span className="errorMessage">{error}</span>}
  </div>
);

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: string,
  error: string,
  label: string,
};
export default Input;
