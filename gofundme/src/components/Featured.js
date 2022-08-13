import React, { useState, useMemo } from "react";
import "../styles/Featured.scss";
import { MdArrowForwardIos } from "react-icons/md";
import Modal from "./Modal";
import { getDonations } from "../utils/utilFunctions";
import { utils } from "ethers";

const Featured = ({ ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const [cause, setCause] = useState("");
  const [donations, setDonations] = useState([]);
  const OtherFeaturedPosts = ({ ...props }) => {
    return (
      <div className="otherFeaturedPosts-outer">
        <div className="otherFeaturedPosts-inner">
          <div className="other-featured-image" data-image-src={props.dataImg}>
            <span className="other-urgent">Urgent Cause</span>
          </div>
          <div className="details">
            <p>{props.detailsText}</p>
            <div style={{ display: "grid" }}>
              <button
                className="btn"
                onClick={() => toggleModalVisibility(props.detailsText)}
              >
                {props.btn} <MdArrowForwardIos />
              </button>
              {donations.length > 0 && (
                <span>
                  Total Donations: {totalCauseDonations(props.detailsText)}
                  ETH
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  useMemo(() => {
    (async () => {
      setDonations(await getDonations());
    })();
  }, []);
  // console.log(donations);

  const toggleModalVisibility = (details) => {
    setShowModal(!showModal);
    setCause(details);
  };

  //calculate total eth donated to an organization
  const totalCauseDonations = (cause) => {
    let sum = 0;
    const charityDonatedEth = donations.map(
      (donation) =>
        donation.charity === cause &&
        utils.formatEther(parseInt(donation.amount._hex, 16))
    );
    const arrOfNum = [];
    charityDonatedEth.forEach((str) => {
      arrOfNum.push(Number(str));
    });
    for (let i = 0; i < arrOfNum.length; i++) {
      sum += arrOfNum[i];
    }
    return sum;
  };

  totalCauseDonations();

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
                    <div className="btn-funds">
                      <button
                        className="btn"
                        onClick={() =>
                          toggleModalVisibility("Donating to flood victims")
                        }
                      >
                        Help Now <MdArrowForwardIos />
                      </button>
                      {donations.length > 0 && (
                        <span>
                          Total Donations:{" "}
                          {totalCauseDonations("Donating to flood victims")}
                          ETH
                        </span>
                      )}
                    </div>
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
