import logo from "./logo.svg";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import ImageDesc from "./components/ImageDesc";
import Steps from "./components/Steps";
import Price from "./components/Price";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
// import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <ImageDesc />
      <Steps />
      <Featured />
      <Price />
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
