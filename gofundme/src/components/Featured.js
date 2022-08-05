import React from "react";
import "../styles/Featured.scss";
import greenMap from "../images/greenMap.png";
import { MdArrowForwardIos } from "react-icons/md";

const Featured = () => {
  const OtherFeaturedPosts = ({ ...props }) => {
    return (
      <div className="otherFeaturedPosts-outer">
        <div className="otherFeaturedPosts-inner">
          <div className="other-featured-image">
            <span className="other-urgent">Urgent Cause</span>
          </div>
          <div className="details">
            <p>{props.detailsText}</p>
            <button className="btn">
              {props.btn} <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="featured-container">
      <div className="container-div">
        <p>Where you can help</p>
        <p>Featured Charities</p>
        <div className="grid-display x mandatory-scroll-snapping" dir="ltr">
          <div className="first">
            <div className="first-flex">
              <div className="featured-image">
                <img alt="" src={greenMap} />
              </div>
              <div className="first-details-outer">
                <div className=" first-details-inner">
                  <h2>How to help: Donate EPE tokens to flood victims</h2>
                  <p>
                    Donate to verified fundraisers to help the individuals and
                    families affected by widespread flooding across Nigeria
                  </p>
                  <button className="btn">
                    Help Now <MdArrowForwardIos />
                  </button>
                </div>
              </div>
            </div>
            <span className="urgent">Urgent Cause</span>
          </div>
          <OtherFeaturedPosts
            detailsText="Oak fire relief: How you can help"
            btn="Help now"
          />
          <OtherFeaturedPosts
            detailsText="Celebrating Black Joy"
            btn="Dive in!"
          />
          <OtherFeaturedPosts
            detailsText="How one man is preserving hundreds of WWII stories"
            btn="Read more"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
