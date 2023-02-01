import React from "react";
import { ArrowSVG } from "../../reusable/icons";

const CustomSelector = ({ title, subTitle, icon, onClick }) => {
  return (
    <div className={`inputDiv`} onClick={onClick}>
      <div className="inputIcon">
        {title === "SPORT" ? <i className={`ic ${icon}`} /> : icon}
      </div>
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
