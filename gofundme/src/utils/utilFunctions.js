import axios from "axios";
import { providers, utils } from "ethers";
import * as Yup from "yup";

const getEthCurrentPrice = async () => {
  let ethPrice = new Promise(async (resolve, reject) => {
    try {
      ethPrice = await axios.get(
        "https://api.coinstats.app/public/v1/coins/ethereum"
      );
    } catch (ex) {
      ethPrice = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (ethPrice) {
      // success
      const json = ethPrice.data.coin.price;
      resolve(json);
    }
  });
  return ethPrice.then(function (value) {
    return value;
  });
};

export const convertEthToUsdt = async (eth) => {
  let ethConvertedToUSD = new Promise(async (resolve, reject) => {
    try {
      ethConvertedToUSD = (await getEthCurrentPrice()) * eth;
    } catch (ex) {
      ethConvertedToUSD = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (ethConvertedToUSD) {
      // success
      const json = ethConvertedToUSD;
      resolve(json);
    }
  });
  return ethConvertedToUSD.then(function (value) {
    return value.toFixed(2);
  });
};

export const getBalance = async (address) => {
  if (address !== null) {
    let walletBalance = 0;
    const provider = new providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const balanceInEth = utils.formatEther(balance);
    walletBalance = balanceInEth;
    return walletBalance;
  } else return "Please Connect Your Wallet";
};

export const yupValidation = (balance) =>
  Yup.object().shape({
    donorName: Yup.string()
      .notRequired()
      .max(15, "Must not exceed 15 characters ")
      .min(3, "Must not be less than 3 characters")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    amountEth: Yup.number()
      .required("required")
      .positive()
      .when(
        "balanceEth",
        (balanceEth, Yup) =>
          balanceEth &&
          Yup.max(
            balanceEth,
            `Your Amount has to be less than or equal to ${balanceEth}`
          )
      ),
  });
