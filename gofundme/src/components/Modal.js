import React, { useMemo, useState } from "react";
import "../styles/Modal.scss";
import {
  convertEthToUsdt,
  getBalance,
  getEthCurrentAmount,
} from "../utils/utilFunctions";
import { Contract, providers, utils } from "ethers";

const Modal = ({ ...props }) => {
  const [eth, setEth] = useState(0);
  const [walletAccount, setWalletAccount] = useState(0);

  const convertEthToUsdtFunction = (val) => {
    setEth(val);
  };

  useMemo(() => {
    (async () => {
      let newWalletBalance = await getBalance(props.account);
      setWalletAccount(newWalletBalance);
    })();
  }, [props.account]);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="cancel-balance">
          <p>Your Ethereum Balance: {walletAccount}</p>
          <span className="close" onClick={props.toggleModal}>
            &times;
          </span>
        </div>
        <div className="form-input">
          <label>ETH Amount</label>
          <input
            type="number"
            placeholder="Input Amount in ETH"
            value={eth}
            onChange={(e) => convertEthToUsdtFunction(e.target.value)}
          />

          <label>ETH in USDT, using current ETH Price</label>
          <input type="number" value={convertEthToUsdt(eth)} disabled />

          <label>Your Name (optional)</label>
          <input type="text" placeholder="Your Name" />

          <label>Cause, you are donating to!</label>
          <input disabled placeholder={props.cause} />

          <button
            className={
              props.account !== null ? "activatedButton" : "disableButton"
            }
            disabled={props.account !== null ? false : true}
          >
            Donate Ethereum
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
