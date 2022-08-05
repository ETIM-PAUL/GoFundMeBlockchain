import React from "react";
import "../styles/Price.scss";
import { MdArrowForwardIos } from "react-icons/md";

const Price = () => {
  return (
    <section className="container-div">
      <div className="pricing-container">
        <p>Pricing</p>
        <p className="simple">Simple pricing,</p>
        <p className="powerful">powerful fundrising</p>
      </div>
      <button>
        Learn more about pricing
        <MdArrowForwardIos />
      </button>
    </section>
  );
};

export default Price;
