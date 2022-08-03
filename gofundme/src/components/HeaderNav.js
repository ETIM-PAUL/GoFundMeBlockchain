import React, { useRef, useState } from "react";

import logo from "../logo.jpeg";
import "../styles/Header.scss";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const HeaderNav = () => {
  const [arrow, setArrow] = useState(true);

  const changeArrow = () => {
    if (arrow === false) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };

  return (
    <div>
      <header>
        <div className="header-search">
          <div className="search-full">
            <BsSearch className="icon" />
            <span className="search-div">Search</span>
          </div>
          <div className="search-full" onClick={() => changeArrow()}>
            <span>For individuals</span>
            {arrow ? (
              <IoIosArrowDown className="arrow-down" />
            ) : (
              <IoIosArrowUp className="arrow-down" />
            )}
          </div>
          <span>For charities</span>
        </div>
        <div className="header-logo">
          <img src={logo} alt="fundmeLogo" className="logo" />
        </div>
        <div className="header-nav">
          <span className="padd-how">How it works</span>
          <span className="padd-how">Sign In</span>
          <span className="padd-how">
            <button className="start-fund-button">Start a GoFundMe</button>
          </span>
        </div>
      </header>
    </div>
  );
};

export default HeaderNav;
