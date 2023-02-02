import React, { useEffect, useState } from "react";
import { ArrowSVG } from "../../reusable/icons";
import { FiSearch } from "react-icons/fi";
import { sportArray } from "../../utils/sports";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BsCheckLg, BsPersonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAreas } from "../../redux/action/areaAction";
import { getVenues } from "../../redux/action/venuesAction";
import { getSports } from "../../redux/action/sportsAction";

const OpenInputSelect = ({
  selectionType,
  openSelector,
  setOpenSelector,
  selectSportAction,
  selectDateAction,
  selectAreaAction,
  selectVenueAction,
  selectedArea,
  searchString,
  setSearchString,
}) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  // Booking dates are 15 days ahead from today
  const todayDate = new Date();
  const maxDateAvailablity = new Date(
    todayDate.setDate(todayDate.getDate() + 14)
  );

  // GET ALL SPORTS, AREAS, VENUES
  const { sports: allSports } = useSelector((state) => state.sports);
  const { area: allAreas } = useSelector((state) => state.area);
  const { venue: allVenues } = useSelector((state) => state.venues);

  useEffect(() => {
    dispatch(getSports());
    dispatch(getAreas());
    dispatch(getVenues(1, ""));
  }, [dispatch]);

  // Fiter Sports By Name
  const filterSports = allSports?.filter((i) => {
    return i.name
      .toLocaleLowerCase()
      .includes(searchString.toLocaleLowerCase());
  });

  // Fiter Sports By Name
  const filterAreas = allAreas?.filter((i) => {
    return i.title
      .toLocaleLowerCase()
      .includes(searchString.toLocaleLowerCase());
  });

  // Fiter Sports By Name
  const filterVenues = allVenues?.filter((i) => {
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

      {selectionType === "date" ? (
        ""
      ) : (
        <div className="search__box">
          <FiSearch />
          <input
            type="search"
            onChange={(e) => setSearchString(e.target.value)}
          />
        </div>
      )}

      {selectionType === "sport" ? (
        <ul className="selectionType__sport-list">
          {filterSports?.map((sport, id) => {
            return (
              <li
                key={id}
                // className={sport?.background}
                className={sportArray[id]?.background}
                onClick={() => selectSportAction(sport)}
              >
                <div>
                  <i className={`ic ${sportArray[id]?.icon}`}></i>
                  <p>{sport.name}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : selectionType === "date" ? (
        <div className="selectDate__main">
          <div>
            <Calendar
              onChange={setStartDate}
              value={startDate}
              defaultView={`month`}
              maxDate={maxDateAvailablity}
              minDate={new Date()}
            />
          </div>
          <div>
            <button
              className="selectDate__check"
              onClick={() => selectDateAction(startDate)}
            >
              <BsCheckLg />
            </button>
          </div>
        </div>
      ) : selectionType === "area" ? (
        <div className="selectArea__main">
          <ul>
            {filterAreas.map((area) => {
              return (
                <li
                  className={area.title === selectedArea ? `selected` : ""}
                  key={area.id}
                  onClick={() => selectAreaAction(area.title)}
                >
                  {area.title}
                  {area.title === selectedArea ? <BsCheckLg /> : ""}
                </li>
              );
            })}
          </ul>
        </div>
      ) : selectionType === "venue" ? (
        <div className="selectVenue__main">
          {filterVenues.map((venue) => {
            return (
              <div
                className="venue__card"
                key={venue.id}
                onClick={() => selectVenueAction(venue)}
              >
                <div className="image__sec">
                  <img src={venue.thumbnail} alt={venue.title} />
                </div>
                <div className="venue__details">
                  <div>
                    <div className="venue__flag">
                      <img src={venue.flag_thumbnail} alt={venue.title} />
                    </div>
                    <div className="venue__title">
                      <p>
                        {venue.title} <span>{venue.subtitle}</span>
                      </p>
                    </div>
                  </div>
                  <div className="player__count">
                    <BsPersonFill />
                    <p>
                      {venue.size} x {venue.size}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OpenInputSelect;
