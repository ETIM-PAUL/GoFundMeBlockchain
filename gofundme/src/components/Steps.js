import React from "react";
import "../styles/Steps.scss";
import ridge from "../images/ridge.svg";
import secondRidge from "../images/second-ridge.svg";
import finalRidge from "../images/final-step.svg";
const Steps = () => {
  return (
    <div className="steps-container">
      <div className="container-div">
        <div className="steps-inner">
          <div className="steps-expect-fund">
            <p className="steps-expect">What to expect</p>
            <span className="steps-fund">
              Fundraising on GoFundMe takes just a few minutes
            </span>
          </div>
          <div className="steps-ridge-outer">
            <div className="steps-ridge-inner">
              <div className="step">
                <div className="steps-ridge">
                  <span className="steps-count"></span>
                  <img src={ridge} className="ridge" alt="" />
                </div>
                <div className="steps-desc">
                  <p className="steps-header">Start with the basic.</p>
                  <p className="steps-text">
                    Kick things off with connecting your wallet.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="steps-ridge">
                  <span className="steps-count"></span>
                  <img src={secondRidge} className="second-ridge " alt="" />
                </div>
                <div className="steps-desc second-desc">
                  <p className="steps-header">Select organization.</p>
                  <p className="steps-text">Select the desired benefactor</p>
                </div>
              </div>
              <div className="step">
                <div className="steps-ridge">
                  <span className="steps-count"></span>
                  <img src={finalRidge} className="final-step-ridge" alt="" />
                </div>
                <div className="steps-desc">
                  <p className="steps-header">Donate Tokens</p>
                  <p className="steps-text">Donate any amount of Tokens</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View */}

          <div className="steps-ridge-outer-mobile">
            <div className="steps-ridge-inner-mobile">
              <div className="step-mobile">
                <div className="steps-ridge-mobile">
                  <span className="steps-count-mobile"></span>
                  <div className="steps-desc-mobile">
                    <p className="steps-header-mobile">Start with the basic.</p>
                    <div>
                      <p className="steps-text-mobile">
                        Kick things off with connecting your wallet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-mobile">
                <div className="steps-ridge-mobile">
                  <span className="steps-count-mobile"></span>
                  {/* <img
                    src={secondRidge}
                    className="second-ridge-mobile "
                    alt=""
                  /> */}
                  <div className="steps-desc-mobile second-desc">
                    <p className="steps-header-mobile">Select organization.</p>
                    <p className="steps-text-mobile">
                      Select the organization, you want to send tokens to
                    </p>
                  </div>
                </div>
              </div>
              <div className="step-mobile">
                <div className="steps-ridge-mobile">
                  <span className="steps-count-mobile"></span>
                  {/* <img
                    src={finalRidge}
                    className="final-step-ridge-mobile"
                    alt=""
                  /> */}
                  <div className="steps-desc-mobile">
                    <p className="steps-header-mobile">Donate Tokens</p>
                    <p className="steps-text-mobile">
                      Donate any amount of Tokens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
