import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
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

const HeaderNav = ({ ...props }) => {
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

  useEffect(() => {
    // function that adds styling to the header navigation section

    const headerNavi = document.getElementById("headerNavi");
    const btnD = document.getElementsByClassName("scroll-btn-color");
    document.addEventListener("scroll", function () {
      if (window.scrollY > 40) headerNavi.classList.add("change-to-white");
      else headerNavi.classList.remove("change-to-white");
      for (let index = 0; index < btnD.length; index++) {
        const element = btnD[index];

        if (window.scrollY > 240) element.classList.add("change-to-green");
        else element.classList.remove("change-to-green");
      }
    });
  }, []);

  return (
    <>
      {/* Desktop and portrait navigation header */}
      {headerNav && (
        <header className="desktop-header" id="headerNavi">
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
              {props.account === null && props.isWalletInstalled && (
                <span className="padd-how">
                  <button
                    className="start-fund-button scroll-btn-color"
                    onClick={props.connectWallet}
                  >
                    <div className="flex-loader">
                      {props.loading && <div className="loader"></div>}
                      {props.loading ? "Connecting Wallet" : "Connect Wallet"}
                    </div>
                  </button>
                </span>
              )}
              {props.account === null && props.isWalletInstalled === false && (
                <span className="padd-how">
                  <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
                    <button className="start-fund-button scroll-btn-color">
                      Install Metamask
                    </button>
                  </a>
                </span>
              )}
              {props.account !== null && (
                <span className="padd-how">
                  <button className="start-fund-button scroll-btn-color truncate">
                    {props.account}
                  </button>
                </span>
              )}
            </div>
          </nav>

          {/* Mobile and tablet header navigation */}
          <nav className="tablet-view container-div navigation-header">
            <BsSearch className="icon-tablet" />
            <img src={logo} alt="fundmeLogo" className="logo" />
            <FcMenu className="header-nav-menu" onClick={() => toggleNav()} />
          </nav>
        </header>
      )}

      {/* Dropdown menu for mobile and tablet view */}
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
                <button
                  className="mobile-connect-wallet-button bg-green scroll-btn-color"
                  onClick={props.connectWallet}
                >
                  {props.account === null
                    ? "Connect your wallet"
                    : props.account}
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
