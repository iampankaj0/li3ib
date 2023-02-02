import React from "react";
import { ArrowSVG, LogoSVG } from "../../reusable/icons";

const CustomSelector = ({ title, subTitle, icon, onClick, className }) => {
  return (
    <div className={`inputDiv ${className}`} onClick={onClick}>
      <div className="inputIcon">
        {title === "SPORT" ? (
          subTitle === "SELECT SPORT" ? (
            <LogoSVG />
          ) : (
            <>
              {/* <i className={`ic ${icon}`} /> */}
              <LogoSVG />
            </>
          )
        ) : (
          icon
        )}
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
