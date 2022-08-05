import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import ImageDesc from "./components/ImageDesc";
import Steps from "./components/Steps";
import Price from "./components/Price";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <ImageDesc />
      <Steps />
      <Price />
      <Featured />
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
