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

const Home = () => {
  const [openSelector, setOpenSelector] = useState(false);
  const [selectionType, setSelectionType] = useState("");

  const [selectedSport, setselectedSport] = useState();

  const handleSelectInput = (type) => {
    setOpenSelector(true);
    setSelectionType(type);
  };

  const selectSportAction = (selectedSport) => {
    console.log(selectedSport);
    setselectedSport(selectedSport);
    setOpenSelector(false);
  };

  return (
    <>
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
            />
            <CustomSelector
              title={`DATE`}
              subTitle={`select date`}
              icon={<BsCalendarEvent />}
              onClick={() => handleSelectInput("date")}
            />
            <CustomSelector
              title={`AREA`}
              subTitle={`any`}
              icon={<BsPinMapFill />}
              onClick={() => handleSelectInput("area")}
            />
            <CustomSelector
              title={`venue`}
              subTitle={`any`}
              icon={<GoLocation />}
              onClick={() => handleSelectInput("venue")}
            />
            <button className="search_venue_btn">
              <FaSearch />
            </button>
          </div>
          <OpenInputSelect
            selectionType={selectionType}
            openSelector={openSelector}
            setOpenSelector={setOpenSelector}
            selectSportAction={selectSportAction}
          />
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Home;
