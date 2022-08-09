import React from "react";
import "../styles/ImageDesc.scss";
import crown from "../assets/logo/goFundMeCrown.png";
import child from "../assets/images/child.jpeg";
import { ReactComponent as FirstHR } from "../assets/GreenHr/first-green.svg";
import { ReactComponent as SecondHR } from "../assets/GreenHr/second-green.svg";
import { ReactComponent as ThirdHR } from "../assets/GreenHr/third-green.svg";
import { ReactComponent as LastHR } from "../assets/GreenHr/last-green.svg";

const ImageDesc = ({ ...props }) => {
  return (
    <div className="container" id="expanded-connect">
      <div className="flex-container container-div">
        <div className="flex-desc">
          <div className="place-you">
            <p>A place for</p>
            <div className="slogan-flexes">
              <div className="slogan-flex">
                <span className="" data-testid="header-for-friends">
                  friends&nbsp;
                </span>
                <FirstHR className="slideGreenLine" />
              </div>
              {/* <div className="slogan-flex">
                <span
                  className="js-scroller-text color-gray-dark"
                  data-testid="header-for-charities"
                >
                  charities&nbsp;
                </span>
                <SecondHR className="slideGreenLine" />
              </div>
              <div className="slogan-flex">
                <span
                  className="js-scroller-text color-gray-dark"
                  data-testid="header-for-dreamers"
                >
                  dreamers&nbsp;
                </span>
                <ThirdHR className="slideGreenLine" />
              </div>
              <div className="slogan-flex">
                <span
                  className="js-scroller-text color-gray-dark"
                  data-testid="header-for-you"
                >
                  you&nbsp;
                </span>
                <LastHR className="slideGreenLine" />
              </div> */}
            </div>
            <button className="start-fund-button slideGreenLine">
              <img src={crown} alt="" className="go-icon" />
              <span className="start-btn " onClick={props.connectWallet}>
                {props.account === null ? "Connect Wallet" : "Wallet Connected"}
              </span>
            </button>
          </div>
        </div>
        <div className="flex-image">
          <img src={child} alt="hero-img" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default ImageDesc;
