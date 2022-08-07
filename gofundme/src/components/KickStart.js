import React from "react";
import child from "../images/child.jpeg";
import "../styles/KickStart.scss";

const KickStart = () => {
  return (
    <div className="kickstart-outer container-div">
      <div className="kickstart-inner ">
        <div className="kickstart-text-btn">
          <h2 className="big-title">
            Ready to get started? Join thousands of other donors today
          </h2>
          <div className="btn-contain">
            <button className="start-fund-btn bg-green">Connect Wallet</button>
            <button className="start-fund-btn bg-white">How it Works</button>
          </div>
        </div>
        <div className="kickstart-side-image"></div>
      </div>
    </div>
  );
};

export default KickStart;
