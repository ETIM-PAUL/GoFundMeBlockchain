import React from "react";
import flower from "../images/footer-flower.png";
import "../styles/KickStart.scss";
import { MdArrowForwardIos } from "react-icons/md";

const KickStart = () => {
  return (
    <div className="kickstart-outer container-div">
      <div className="kickstart-inner ">
        <div className="kickstart-text-btn">
          <h2 className="big-title">
            Ready to get started? Join thousands of other donors today
          </h2>
          <div className="btn-contain">
            <button className="start-fund-btn bg-green tablet-btn-full">
              Connect Wallet
            </button>
            <div className="tablet-btn-div">
              <button className="start-fund-btn bg-white tablet-btn">
                How it Works
                <MdArrowForwardIos className="tablet-btn-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="kickstart-side-image">
          <img src={flower} className="flower-image" />
        </div>
      </div>
    </div>
  );
};

export default KickStart;
