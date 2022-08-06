import React from "react";
import "../styles/Featured.scss";
import greenMap from "../images/warhero.png";
import { MdArrowForwardIos } from "react-icons/md";

const Featured = () => {
  const OtherFeaturedPosts = ({ ...props }) => {
    return (
      <div className="otherFeaturedPosts-outer">
        <div className="otherFeaturedPosts-inner">
          <div className="other-featured-image" data-image-src={props.dataImg}>
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
        <div className="grid-display ">
          <div className="first">
            <div className="first-flex">
              <span className="urgent">Urgent Cause</span>
              <div className="featured-image" data-image-src="feat">
                {/* <img alt="" src={greenMap} height={200} /> */}
              </div>
              <div className="first-details-outer">
                <div className=" first-details-inner">
                  <h2>How to help: Donate EPE tokens to flood victims</h2>
                  <p>
                    Donate to verified fundraisers to help the individuals and
                    families affected by widespread flooding across the world
                  </p>
                  <button className="btn">
                    Help Now <MdArrowForwardIos />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <OtherFeaturedPosts
            detailsText="Oak fire relief: How you can help"
            btn="Help now"
            dataImg="one"
          />
          <OtherFeaturedPosts
            detailsText="Helping Orphans all over the globe"
            btn="Dive in!"
            dataImg="two"
          />
          <OtherFeaturedPosts
            detailsText="How one man is preserving hundreds of WWII stories"
            btn="Read more"
            dataImg="three"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
