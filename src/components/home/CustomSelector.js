import React from "react";
import { ArrowSVG } from "../../reusable/icons";

const CustomSelector = ({ title, subTitle, icon }) => {
  return (
    <div className="inputDiv">
      <div className="inputIcon">{icon}</div>
      <div className="sportName">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div className="right__arrow">
        <ArrowSVG />
      </div>
    </div>
  );
};

export default CustomSelector;
