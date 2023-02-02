import React, { useState } from "react";
import Bottombar from "../../reusable/Bottombar";
import { LogoSVG } from "../../reusable/icons";
import { BsCalendarEvent, BsPinMapFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../reusable/Sidebar";
import "../../styles/scss/home.scss";
import CustomSelector from "./CustomSelector";
import OpenInputSelect from "./OpenInputSelect";
import { homeBgArray } from "../../utils/homeBgImg";
// import MetaTitle from "../../reusable/MetaTitle";
// import { sportArray } from "../../utils/sports";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState("");
  const [openSelector, setOpenSelector] = useState(false); // For opening the selecter Items Modal
  const [selectionType, setSelectionType] = useState(""); // Send the selection type
  const [selectedSport, setselectedSport] = useState({}); // set selected sport from list
  const [selectedDate, setselectedDate] = useState(""); // set selected date from list
  const [selectedArea, setSelectedArea] = useState(""); // set selected area from list
  const [selectedVenue, setSelectedVenue] = useState({}); // set selected area from list

  const randomIndex = Math.floor(Math.random() * 5);

  // INPUT/SELECT ONCLICK FUNCTION
  const handleSelectInput = (type) => {
    setOpenSelector(true);
    setSelectionType(type);
  };

  // SELECTION OF SPORT - ONCLICK FUNCTION
  const selectSportAction = (selectedSport) => {
    setselectedSport(selectedSport);
    setOpenSelector(false);
    setselectedDate("");
    setSelectedArea("");
    setSelectedVenue("");
    setSearchString("");
  };

  // SELECTION OF DATE - ONCLICK FUNCTION
  const selectDateAction = (date) => {
    setselectedDate(date);
    setOpenSelector(false);
    setSelectedArea("");
    setSelectedVenue("");
  };

  // SELECTION OF DATE - ONCLICK FUNCTION
  const selectAreaAction = (area) => {
    setSelectedArea(area);
    setOpenSelector(false);
    setSelectedVenue("");
    setSearchString("");
  };

  // SELECTION OF DATE - ONCLICK FUNCTION
  const selectVenueAction = (venue) => {
    setSelectedVenue(venue);
    setOpenSelector(false);
    setSearchString("");
  };

  // HANDLE SEARCH BUTTON FUNTION
  const handleSearch = () => {
    navigate(
      `?venues/${selectedSport.id}&&date=${selectedDate}&&area=${selectedArea}&&venue=${selectedVenue?.title}`
    );
  };

  return (
    <>
      {/* <MetaTitle title="Home - Li3ib" /> */}
      <Sidebar />
      <div
        className="home__main"
        style={{
          backgroundImage: `url(${homeBgArray[randomIndex].img})`,
          backgroundSize: "180px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundPositionX: "102%",
          backgroundPositionY: "-25px",
        }}
      >
        <div>
          <h1>
            Book <br /> your game!
          </h1>
          <div className="selectBoxInput">
            <CustomSelector
              title={`SPORT`}
              subTitle={selectedSport?.name ?? "SELECT SPORT"}
              icon={selectedSport?.icon ? <LogoSVG /> : <LogoSVG />}
              onClick={() => handleSelectInput("sport")}
              className={selectedSport.name ? `option__selected` : ""}
            />
            <CustomSelector
              title={`DATE`}
              subTitle={
                selectedDate ? selectedDate.toDateString() : "select date"
              }
              icon={<BsCalendarEvent />}
              onClick={() => handleSelectInput("date")}
              className={selectedDate ? `option__selected` : ""}
            />
            <CustomSelector
              title={`AREA`}
              subTitle={selectedArea ? selectedArea : `any`}
              icon={<BsPinMapFill />}
              onClick={() => handleSelectInput("area")}
              className={`${
                selectedSport?.name && selectedDate ? "" : "disabled__input"
              }
              ${selectedArea ? `option__selected` : ""}
              `}
            />
            <CustomSelector
              title={`venue`}
              subTitle={selectedVenue.title ? selectedVenue.title : `any`}
              icon={<GoLocation />}
              onClick={() => handleSelectInput("venue")}
              className={`
                ${selectedSport?.name && selectedDate ? "" : "disabled__input"}
                ${selectedVenue.title ? "option__selected" : ""}
              `}
            />
            <button
              className="search_venue_btn"
              disabled={selectedSport?.name && selectedDate ? false : true}
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>
          <OpenInputSelect
            selectionType={selectionType}
            openSelector={openSelector}
            setOpenSelector={setOpenSelector}
            selectSportAction={selectSportAction}
            selectDateAction={selectDateAction}
            selectAreaAction={selectAreaAction}
            selectVenueAction={selectVenueAction}
            selectedArea={selectedArea}
            searchString={searchString}
            setSearchString={setSearchString}
          />
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Home;
