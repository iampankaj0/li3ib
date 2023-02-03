import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { LogoSVG } from "./icons";
import { Link } from "react-router-dom";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { RiMessage2Line, RiFileList2Line } from "react-icons/ri";
import { langContext } from "../context/localeContext/LocaleContext";

const SidebarWrapper = styled.section`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100vw;
  z-index: 5000;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  opacity: 1;
`;

const OpenSidebarBtn = styled.button`
  font-size: 25px;
  background: transparent;
  font-family: li3ib-bold;
  font-weight: 900;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  margin: 30px 0 0 70px;
  color: #fff;

  @media (max-width: 480px) {
    margin: 30px 0 0 30px;
  }
`;

const SidebarComponent = styled.section`
  position: fixed;
  z-index: 5001;
  top: 0px;
  left: -80px;
  height: 100%;
  width: 400px;
  background-color: #fff;
  border-radius: 0 40px 40px 0;
  overflow-y: auto;
  box-shadow: -15px 0px 23px 0px #000;
  transition: 0.4s;
  transform: translate(-400px);

  > .sidebar__child {
    padding: 20px;
    margin-left: 80px;

    > .closeBtnSec {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > button {
        font-size: 25px;
        background: transparent;
        font-family: li3ib-bold;
        font-weight: 900;
        border: none;
        outline: none;
        cursor: pointer;
        &:last-child {
          color: rgb(52, 213, 52);
          font-size: 20px;
          text-shadow: 0px -1px 1px rgb(0 0 0 / 30%);
        }
        > svg > path {
          stroke: rgb(52, 213, 52);
          fill: rgb(52, 213, 52);
        }
      }
    }

    > .logo__head {
      display: flex;
      align-items: center;
      margin: 30px 0;
      > svg {
        margin-right: 10px;
        fill: rgb(52, 213, 52);
        width: 60px;
        height: 60px;
      }
      > p {
        font-size: 49px;
        font-family: li3ib-bold;
        color: rgb(51, 51, 51);
      }
      > a > p {
        font-size: 28px;
        font-family: li3ib-bold;
        color: rgb(51, 51, 51);
      }
    }

    > .nav-links {
      > ul {
        list-style: none;

        > li {
          > a {
            display: flex;
            align-items: center;
            height: 40px;
            margin: 5px 0px;
            font-family: Li3ib-EN, sans-serif;
            font-size: 17px;
            text-transform: uppercase;
            color: rgb(123, 123, 123);
            cursor: pointer;
            text-decoration: none;
            width: fit-content;

            > svg {
              width: 22px;
              height: 22px;
              fill: rgb(123, 123, 123);
              margin: 0px 6px 0px 0px;
            }
          }
        }
      }

      > .login__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Li3ib-EN, sans-serif;
        font-weight: bold;
        color: rgb(255, 255, 255);
        font-size: 18px;
        height: 60px;
        background: linear-gradient(rgb(255, 216, 0), rgb(255, 196, 0));
        border-radius: 1000px;
        margin-top: 30px;
        width: 100%;
        border: none;
        cursor: pointer;
      }
    }
  }
`;

const Sidebar = ({ isAuthenticated = true }) => {
  const [openSidebar, setopenSidebar] = useState(false);
  const [langSwitch, setlangSwitch] = useState();
  const [t, changeLang] = useContext(langContext);

  return (
    <>
      <OpenSidebarBtn onClick={() => setopenSidebar(true)}>
        <BsThreeDotsVertical />
      </OpenSidebarBtn>
      <SidebarComponent
        style={{
          transform: openSidebar ? "translate(0)" : "translate(-400px)",
        }}
      >
        <div className="sidebar__child">
          <div className="closeBtnSec">
            <button onClick={() => setopenSidebar(false)}>
              <GrClose />
            </button>
            <button onClick={changeLang}>{t(`enlish_btn`)}</button>
          </div>

          <div className="logo__head">
            <LogoSVG />
            {!isAuthenticated ? (
              <Link to="/">
                <p>Li3ib</p>
              </Link>
            ) : (
              <Link to="/">
                <p>{`Pankaj Yadav`}</p>
              </Link>
            )}
          </div>

          <div className="nav-links">
            <ul>
              {isAuthenticated && (
                <>
                  <li>
                    <Link to="/">
                      <IoPersonOutline /> <span> {t(`profile`)}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IoSettingsOutline /> {t(`settings`)}
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/">
                  <RiMessage2Line /> {t(`contact_us`)}
                </Link>
              </li>
              <li>
                <Link to="/">
                  <MdOutlinePrivacyTip /> {t(`privacy`)}
                </Link>
              </li>
              {isAuthenticated && (
                <>
                  <li>
                    <Link to="/">
                      <RiFileList2Line /> {t(`term_condition`)}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <CiLogout /> {t(`log_out`)}
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {!isAuthenticated && (
              <Link to="/login" className="login__btn">
                {t(`log_in`)}
              </Link>
            )}
          </div>
        </div>
      </SidebarComponent>
      <SidebarWrapper
        style={{ display: !openSidebar && "none" }}
      ></SidebarWrapper>
    </>
  );
};

export default Sidebar;
