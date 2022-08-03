import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";

function App() {
  return (
    <>
      <HeaderNav />
      <Router>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route path="/"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
