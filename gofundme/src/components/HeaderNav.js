import React, { useRef, useState } from "react";
import logo from "../logo.png";
import "../styles/Header.scss";
import { BsSearch } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropdownItem = ({ ...props }) => {
  const [arrow, setArrow] = useState(true);
  const changeArrow = () => {
    setArrow(!arrow);
  };

  return (
    <li className="hover-grey" onClick={() => changeArrow()}>
      {props.title}
      {props.showDropDown && (
        <div>
          {arrow ? (
            <IoIosArrowDown className="arrow-down" />
          ) : (
            <IoIosArrowUp className="arrow-down" />
          )}
        </div>
      )}
    </li>
  );
};

const HeaderNav = () => {
  const [showDropDownMenu, setShowDropDownMenu] = useState(true);
  const [arrow, setArrow] = useState(true);
  const [headerNav, setHeaderNav] = useState(true);
  const [dropdown, setDropDown] = useState(false);
  const changeDesktopArrow = () => {
    setArrow(!arrow);
  };
  const toggleNav = () => {
    setHeaderNav(!headerNav);
    setDropDown(!dropdown);
  };

  return (
    <>
      {headerNav && (
        <header className="desktop-header">
          <nav className="desktop-view container-div">
            <div className="header-search">
              <div className="search-full">
                <BsSearch className="icon" />
                <span className="search-div">Search</span>
              </div>
              <div className="search-full" onClick={() => changeDesktopArrow()}>
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
                <button className="start-fund-button">Connect Wallet</button>
              </span>
            </div>
          </nav>

          <nav className="tablet-view container-div navigation-header">
            {/* <div className="search-icon"> */}
            <BsSearch className="icon-tablet" />
            {/* </div> */}
            <img src={logo} alt="fundmeLogo" className="logo" />
            <FcMenu className="header-nav-menu" onClick={() => toggleNav()} />
          </nav>
        </header>
      )}

      {dropdown && (
        <header className="tablet-mobile-header dropdown">
          <nav className="container-div">
            <div>
              <FaTimes className="cancel-icon" onClick={() => toggleNav()} />
              <ul style={{}}>
                <li>
                  <img src={logo} alt="fundmeLogo" className="mobile logo" />
                </li>
                <DropdownItem
                  title="Discover"
                  showDropDown={showDropDownMenu}
                />
                <DropdownItem
                  title="Fundraise for"
                  showDropDown={showDropDownMenu}
                />
                <DropdownItem
                  title="How it works"
                  showDropDown={showDropDownMenu}
                />
                <DropdownItem
                  title="Resources"
                  showDropDown={showDropDownMenu}
                />
                <DropdownItem
                  title="For Charities"
                  showDropDown={!showDropDownMenu}
                />
              </ul>
              <div className="mobile-buttons-container">
                <button className="mobile-connect-wallet-button bg-green">
                  Connect your wallet
                </button>
                <button className="mobile-connect-wallet-button bg-white">
                  Sign in
                </button>
              </div>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default HeaderNav;
