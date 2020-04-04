import React from "react";
import "./App.scss";
import { NavLink, Route } from "react-router-dom";
import Directory from "./components/Directory/Directory";
import NewEntry from "./components/NewEntry/NewEntry";
import btcPayLogo from "./images/btcpay-directory-logo.svg";
import darkModeImg from "./images/darkMode.svg";
import TemporaryDrawer from "./components/Drawer/TemporaryDrawer";

function App() {
  const green = "#51B13E";
  const black = "#262626";
  const darkGreen = "#1E7A44";
  const pickedColor = green;

  return (
    <div className="app">
      <header>
        <div className="navigation-menu">
          <a href="/">
            <img src={btcPayLogo} />
          </a>
          <div className="nav-items">
            <NavLink className="newentry" exact to={"/newentry"}>
              Submit an entry
            </NavLink>
            {/* <TemporaryDrawer /> */}
            {/* <img src={darkModeImg} /> */}
          </div>
        </div>
      </header>

      <div className="main-content">
        <Route exact path="/" component={Directory} />
        <Route exact path="/filter/:filterName" component={Directory} />
        <Route exact path="/filter/:filterName/:subFilterName" component={Directory} />
        <Route exact path="/newentry" component={NewEntry} />
      </div>

      <footer>
        <div className="footer-content">
          <p>Content Released under MIT license.</p>
          <p>This website does not use cookies nor collect personal data.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
