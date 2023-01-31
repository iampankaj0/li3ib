import React from "react";
import Bottombar from "../../reusable/Bottombar";
import { LogoSVG } from "../../reusable/icons";
import { BsCalendarEvent, BsPinMapFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../reusable/Sidebar";
import "../../styles/scss/home.scss";
import CustomSelector from "./CustomSelector";

const Home = () => {
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
              subTitle={`select sport`}
              icon={<LogoSVG />}
            />
            <CustomSelector
              title={`DATE`}
              subTitle={`select date`}
              icon={<BsCalendarEvent />}
            />
            <CustomSelector
              title={`AREA`}
              subTitle={`any`}
              icon={<BsPinMapFill />}
            />
            <CustomSelector
              title={`venue`}
              subTitle={`any`}
              icon={<GoLocation />}
            />
            <button className="search_venue_btn">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Home;
