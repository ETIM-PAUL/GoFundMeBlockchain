import logo from "./logo.svg";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import ImageDesc from "./components/ImageDesc";
import Steps from "./components/Steps";
import Price from "./components/Price";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import KickStart from "./components/KickStart";
// import "antd/dist/antd.css";
import React, { useRef, useEffect } from "react";

function App() {
  // useEffect(() => {
  //   let t = document.getElementById("expanded-connect");
  //   console.log(t);
  //   //   window.onscroll = function () {
  //   //     show.innerHTML = document.documentElement.scrollTop || document.body.scrollTop;
  //   // };
  //   document.addEventListener("scroll", (event) => {
  //     let h = t.scrollTop;
  //     console.log(t.documentElement.scrollLeft);
  //     // console.log("h");
  //     // if (this.scrollTop > 147) {
  //     //   wrapper.current.classList.toggle("fix-search");
  //     // } else {
  //     //   wrapper.current.classList.toggle("fix-search");
  //     // }
  //   });
  // }, []);
  return (
    <div className="App" id="expanded-connect">
      <HeaderNav />
      <ImageDesc />
      <Steps />
      <Featured />
      <Price />
      <KickStart />
      <Footer />
      {/* <Router>
        <Routes>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route path="/"></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
