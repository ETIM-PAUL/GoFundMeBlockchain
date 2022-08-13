import React, { useState } from "react";
import "../styles/Featured.scss";
import { MdArrowForwardIos } from "react-icons/md";
import Modal from "./Modal";

const Featured = ({ ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [cause, setCause] = useState("");
  const OtherFeaturedPosts = ({ ...props }) => {
    return (
      <div className="otherFeaturedPosts-outer">
        <div className="otherFeaturedPosts-inner">
          <div className="other-featured-image" data-image-src={props.dataImg}>
            <span className="other-urgent">Urgent Cause</span>
          </div>
          <div className="details">
            <p>{props.detailsText}</p>
            <button
              className="btn"
              onClick={() => toggleModalVisibility(props.detailsText)}
            >
              {props.btn} <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    );
  };
  const toggleModalVisibility = (details) => {
    setShowModal(!showModal);
    setCause(details);
  };
  return (
    <>
      <div className="featured-container">
        <div className="container-div">
          <p>Where you can help</p>
          <p>Featured Charities</p>
          <div className="grid-display ">
            <div className="first">
              <div className="first-flex">
                <span className="urgent">Urgent Cause</span>
                <div className="featured-image" data-image-src="feat"></div>
                <div className="first-details-outer">
                  <div className=" first-details-inner">
                    <p>How to help: Donate ETH tokens to flood victims</p>
                    <p className="hide-text-mobile">
                      Donate to verified fundraisers to help the individuals and
                      families affected by widespread flooding across the world
                    </p>
                    <button
                      className="btn"
                      onClick={() =>
                        toggleModalVisibility("Donating to flood victims")
                      }
                    >
                      Help Now <MdArrowForwardIos />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <OtherFeaturedPosts
              detailsText="Oak fire relief: How you can help"
              btn="Donate now"
              dataImg="one"
            />
            <OtherFeaturedPosts
              detailsText="Helping Orphans all over the globe"
              btn="Help out"
              dataImg="two"
            />
            <OtherFeaturedPosts
              detailsText="How one man is preserving hundreds of WWII stories"
              btn="Donate Tokens"
              dataImg="three"
            />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          toggleModalVisibility={toggleModalVisibility}
          cause={cause}
          account={props.account}
        />
      )}
    </>
  );
};

export default Featured;
