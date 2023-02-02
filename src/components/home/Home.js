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
// import MetaTitle from "../../reusable/MetaTitle";

const Home = () => {
  const [openSelector, setOpenSelector] = useState(false); // For opening the selecter Items Modal
  const [selectionType, setSelectionType] = useState(""); // Send the selection type
  const [selectedSport, setselectedSport] = useState({}); // set selected sport from list
  const [selectedDate, setselectedDate] = useState(""); // set selected date from list
  const [selectedArea, setSelectedArea] = useState(""); // set selected area from list
  const [selectedVenue, setSelectedVenue] = useState({}); // set selected area from list

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
  };

  // SELECTION OF DATE - ONCLICK FUNCTION
  const selectVenueAction = (venue) => {
    setSelectedVenue(venue);
    setOpenSelector(false);
  };

  return (
    <>
      {/* <MetaTitle title="Home - Li3ib" /> */}
      <Sidebar />
      <div className="home__main">
        <div>
          <h1>
            Book <br /> your game!
          </h1>
          <div className="selectBoxInput">
            <CustomSelector
              title={`SPORT`}
              subTitle={selectedSport?.title ?? "SELECT SPORT"}
              icon={selectedSport?.icon ?? <LogoSVG />}
              onClick={() => handleSelectInput("sport")}
              className={selectedSport.title ? `option__selected` : ""}
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
                selectedSport?.title && selectedDate ? "" : "disabled__input"
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
                ${selectedSport?.title && selectedDate ? "" : "disabled__input"}
                ${selectedVenue.title ? "option__selected" : ""}
              `}
            />
            <button
              className="search_venue_btn"
              disabled={selectedSport?.title && selectedDate ? false : true}
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
          />
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Home;
