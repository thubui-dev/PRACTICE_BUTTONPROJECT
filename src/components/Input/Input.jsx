import React from "react";
import "./input.css";

function Input(props) {
  return (
    <div className="input-container">
      <label>{props.label}</label>
      <input
        className="input-item"
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default Input;
