import React, { useEffect, useState, useMemo } from "react";
import "../styles/Modal.scss";
import {
  convertEthToUsdt,
  donateEth,
  getBalance,
  yupValidation,
} from "../utils/utilFunctions";
import { Formik, Form, useField } from "formik";

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {(meta.touched && meta.error) || (meta.error && meta.value === "") ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Modal = ({ ...props }) => {
  const [eth, setEth] = useState(0);
  const [walletBalance, setWalletBalance] = useState(0);
  const [ethToUSDT, setEthToUSDT] = useState();
  const [loading, setLoading] = useState(false);

  const setDonation = (val) => {
    setEth(val);
  };

  useEffect(() => {
    (async () => {
      let newWalletBalance = await getBalance(props.account);
      setWalletBalance(newWalletBalance);
    })();
  }, [props.account]);

  useMemo(() => {
    (async () => {
      setEthToUSDT(await convertEthToUsdt(eth));
    })();
  }, [eth]);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="cancel-balance">
          <p>Your Ethereum Balance: {walletBalance}ETH</p>
          <span className="close" onClick={props.toggleModalVisibility}>
            &times;
          </span>
        </div>
        {props.account !== null && (
          <Formik
            enableReinitialize
            initialValues={{
              donorName: "",
              amountEth: eth,
              charity: props.cause,
              balanceEth: walletBalance,
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                delete values.balanceEth;
                donateEth(values, setLoading);
                setSubmitting();
                resetForm();
              }, 500);
            }}
            validationSchema={yupValidation}
          >
            <Form className="form-input">
              <MyInput
                label="ETH Amount"
                type="number"
                placeholder="Input Amount in ETH"
                onChange={(e) => setDonation(e.target.value)}
                name="amountEth"
              />
              <MyInput
                type="number"
                name="balanceEth"
                style={{ display: "none" }}
                disabled
              />

              <label>Your Donation in $, using current ETH Price</label>
              <input type="number" value={ethToUSDT} disabled />

              <MyInput
                label="Your Name (optional)"
                type="text"
                placeholder="Your Name"
                name="donorName"
              />

              <label>Cause, you are donating to!</label>
              <input disabled placeholder={props.cause} />

              <button
                className={
                  props.account !== null ? "activatedButton" : "disableButton"
                }
                disabled={props.account !== null ? false : true}
                type="submit"
              >
                <div className="btn-loader">
                  {loading && <div className="loader"></div>}
                  {loading ? "Donating Ethereum" : "Donate Ethereum"}
                </div>
              </button>
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default Modal;
