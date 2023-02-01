import React, { useState } from "react";
import { ArrowSVG } from "../../reusable/icons";
import { FiSearch } from "react-icons/fi";
import { sportArray } from "../../utils/sports";

const OpenInputSelect = ({
  selectionType,
  openSelector,
  setOpenSelector,
  selectSportAction,
}) => {
  const [searchString, setSearchString] = useState("");

  const filterSports = sportArray?.filter((i) => {
    return i.title
      .toLocaleLowerCase()
      .includes(searchString.toLocaleLowerCase());
  });

  return (
    <div
      className={`openInputSelect__main ${
        openSelector ? "openInputSelect__main-show" : ""
      }`}
    >
      <div className="top__header-label">
        <span className="backbtn" onClick={() => setOpenSelector(false)}>
          <ArrowSVG />
        </span>
        <span className="title__main">
          {selectionType === "sport"
            ? "SELECT SPORT"
            : selectionType === "date"
            ? "SELECT DATE"
            : selectionType === "area"
            ? "SELECT AREA"
            : selectionType === "venue"
            ? "SELECT VENUE"
            : ""}
        </span>
      </div>

      <div className="search__box">
        <FiSearch />
        <input
          type="search"
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>

      {selectionType === "sport" ? (
        <ul className="selectionType__sport-list">
          {filterSports?.map((sport, id) => {
            return (
              <li
                key={id}
                className={sport.background}
                onClick={() => selectSportAction(sport)}
              >
                <div>
                  <i className={`ic ${sport.icon}`}></i>
                  <p>{sport.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
      {/* <i className="ic ic-sport-1"></i>
          <i className="ic ic-sport-2"></i>
          <i className="ic ic-sport-3"></i>
          <i className="ic ic-sport-4"></i>
          <i className="ic ic-sport-5"></i>
          <i className="ic ic-sport-6"></i>
          <i className="ic ic-sport-7"></i>
          <i className="ic ic-sport-8"></i>
          <i className="ic ic-sport-9"></i>
          <i className="ic ic-sport-10"></i>
          <i className="ic ic-sport-11"></i>
          <i className="ic ic-sport-12"></i>
          <i className="ic ic-sport-13"></i>
          <i className="ic ic-sport-14"></i>
          <i className="ic ic-sport-15"></i>
          <i className="ic ic-sport-16"></i> */}
    </div>
  );
};

export default OpenInputSelect;
