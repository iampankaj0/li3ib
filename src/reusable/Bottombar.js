import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LogoSVG } from "./icons";
import { IoTicketOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const BottomContainer = styled.section`
  height: 100px;

  > .bottombar__child {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;

    > ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      list-style: none;
      > li {
        > a.active {
          color: rgb(52, 213, 52);
          font-size: 18px;

          > svg {
            width: 50px;
            font-size: 50px;
            fill: rgb(52, 213, 52);
          }
        }
        > a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #7c7c7c;
          font-family: li3ib-bold;
          text-transform: uppercase;
          font-size: 16px;

          > svg {
            width: 40px;
            font-size: 40px;
            fill: #d0d0d0;
            margin-bottom: 7px;
          }
        }
      }
    }
  }
`;

const Bottombar = () => {
  const linksname = [
    {
      title: "Home",
      link: "/",
      icon: <LogoSVG />,
    },
    {
      title: "Bookings",
      link: "/bookings",
      icon: <IoTicketOutline />,
    },
    {
      title: "Venues",
      link: "/venue",
      icon: <IoLocationOutline />,
    },
  ];

  return (
    <BottomContainer>
      <div className="bottombar__child">
        <ul>
          {linksname.map((item, id) => (
            <li key={id}>
              <NavLink to={item.link}>
                {item.icon} {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </BottomContainer>
  );
};

export default Bottombar;
