import React from "react";
import "../styles/Price.scss";
import { MdArrowForwardIos } from "react-icons/md";

const Price = () => {
  return (
    <div className="price-layout">
      <div className="container-div price-container">
        <div className="pricing-container">
          <p>Pricing</p>
          <p className="simple">Simple pricing,</p>
          <p className="powerful">powerful fundrising</p>
        </div>
        <button>
          Learn more about pricing
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Price;
