import React from "react";
import axios from "axios";
import { Contract, providers, utils } from "ethers";

export const getEthCurrentAmount = () => {
  let ethPrice = 0;
  new Promise(async (resolve, reject) => {
    try {
      ethPrice = await axios.get(
        "https://api.coinmarketcap.com/v1/cryptocurrency/quotes/latest/symbol=ETH",
        {
          header: {
            "X-CMC_PRO_API_KEY": "7512f095-4567-4506-bb40-e4d56695a293",
          },
        }
      );
    } catch (ex) {
      ethPrice = null;
      // error
      console.log(ex);
      reject(ex);
    }
    if (ethPrice) {
      // success
      const json = ethPrice.data;
      console.log(json);
      resolve(json);
    }
  });
  console.log(ethPrice);
  return ethPrice;
};

export const convertEthToUsdt = (eth) => {
  let convertedUsdt = 0;
  const ethPriceInUSD = 1900;
  let newConvertedUsdt = ethPriceInUSD * eth;
  convertedUsdt = newConvertedUsdt;
  return convertedUsdt;
};

export const getBalance = async (address) => {
  if (address !== null) {
    let walletBalance = 0;
    const provider = new providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const balanceInEth = utils.formatEther(balance);
    walletBalance = balanceInEth;
    console.log(walletBalance);
    return `${walletBalance} ETH`;
  } else return "Wallet Not Connected";
};
