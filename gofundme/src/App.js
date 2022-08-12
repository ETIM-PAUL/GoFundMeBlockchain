import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import HeaderNav from "./components/HeaderNav";
import ImageDesc from "./components/ImageDesc";
import Steps from "./components/Steps";
import Price from "./components/Price";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import KickStart from "./components/KickStart";
import { Contract, providers } from "ethers";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [loading, setLoading] = useState(false);
  // state for keeping track of current connected account.

  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    } else alert("Please install metamask");
  }, []);

  //function to connect wallet

  async function connectWallet() {
    setLoading(true);
    setTimeout(() => {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => {
          setAccount(accounts[0]);
        })
        .catch((error) => {
          alert("Something went wrong");
        });
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="App" id="expanded-connect">
      <HeaderNav
        account={account}
        isWalletInstalled={isWalletInstalled}
        connectWallet={connectWallet}
        loading={loading}
      />
      <ImageDesc
        account={account}
        isWalletInstalled={isWalletInstalled}
        connectWallet={connectWallet}
      />
      <Steps />
      <Featured account={account} />
      <Price />
      <KickStart
        account={account}
        isWalletInstalled={isWalletInstalled}
        connectWallet={connectWallet}
      />
      <Footer />
    </div>
  );
}

export default App;
