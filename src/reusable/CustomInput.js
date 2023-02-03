import React from "react";
import "../styles/scss/customInput.scss";

const CustomInput = ({
  icon,
  title,
  placeholder,
  arrowIcon,
  type,
  name,
  onChange,
  value,
}) => {
  return (
    <label className="custom__inputDiv">
      <div>
        <div className="inputIcon">{icon}</div>
        <div className="input__text">
          <h3>{title}</h3>
          <input
            className="input__class"
            placeholder={placeholder}
            type={type}
            name={name}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
      <div className="right__arrow">{arrowIcon}</div>
    </label>
  );
};

export default CustomInput;
