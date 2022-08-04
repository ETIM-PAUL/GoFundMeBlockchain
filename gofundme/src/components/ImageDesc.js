import React from "react";
import "../styles/ImageDesc.scss";
import crown from "../images/goFundMeCrown.png";
import child from "../images/child.jpeg";

const ImageDesc = () => {
  return (
    <div className="container">
      <div className="flex-container">
        <div className="flex-desc">
          <div className="place-you">
            <h2>A place for you</h2>
            <div className="green-line"></div>
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
