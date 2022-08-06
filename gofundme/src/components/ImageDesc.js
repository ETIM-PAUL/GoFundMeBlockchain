import React from "react";
import "../styles/ImageDesc.scss";
import crown from "../images/goFundMeCrown.png";
import child from "../images/child.jpeg";
import greenLine from "../images/last-green.svg";

const ImageDesc = () => {
  return (
    <div className="container">
      <div className="flex-container container-div">
        <div className="flex-desc">
          <div className="place-you">
            <p>A place for</p>
            <div class="slogan-flexes">
              <div class="slogan-flex">
                <span class="" data-testid="header-for-friends">
                  friends&nbsp;
                </span>
                <svg width="140" height="20" class="Hero_hero-underline__tLY8k">
                  <path
                    d="M5 8 Q 37 14 133 9"
                    fill="transparent"
                    stroke="#02A95C"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-dasharray="128.2069854736328"
                    stroke-dashoffset="0"
                    class="Hero_hero-underline-path__c0pEx js-hero-underline-path"
                  ></path>
                </svg>
              </div>
              <div class="slogan-flex">
                <span
                  class="js-scroller-text color-gray-dark"
                  data-testid="header-for-charities"
                >
                  charities&nbsp;
                </span>
                <svg width="170" height="20" class="Hero_hero-underline__tLY8k">
                  <path
                    d="M5 7 Q 104 8 163 8"
                    fill="transparent"
                    stroke="#02A95C"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-dasharray="158.0037841796875"
                    stroke-dashoffset="0"
                    class="Hero_hero-underline-path__c0pEx js-hero-underline-path"
                  ></path>
                </svg>
              </div>
              <div class="slogan-flex">
                <span
                  class="js-scroller-text color-gray-dark"
                  data-testid="header-for-dreamers"
                >
                  dreamers&nbsp;
                </span>
                <svg width="185" height="20" class="Hero_hero-underline__tLY8k">
                  <path
                    d="M5 10 Q 160 12 178 7"
                    fill="transparent"
                    stroke="#02A95C"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-dasharray="173.17047119140625"
                    stroke-dashoffset="0"
                    class="Hero_hero-underline-path__c0pEx js-hero-underline-path"
                  ></path>
                </svg>
              </div>
              <div class="slogan-flex">
                <span
                  class="js-scroller-text color-gray-dark"
                  data-testid="header-for-you"
                >
                  you&nbsp;
                </span>
                <svg width="78" height="20" class="Hero_hero-underline__tLY8k">
                  <path
                    d="M5 10 Q 22 6 71 8"
                    fill="transparent"
                    stroke="#02A95C"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-dasharray="66.17276763916016"
                    stroke-dashoffset="0"
                    class="Hero_hero-underline-path__c0pEx js-hero-underline-path"
                  ></path>
                </svg>
              </div>
            </div>
            {/* <div className="green-line">
            </div> */}
            {/* <img src={greenLine} alt="" /> */}
            <button className="start-fund-button">
              <img src={crown} alt="" className="go-icon" />
              <span className="start-btn">Connect Wallet</span>
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
