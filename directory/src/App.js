import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./App.scss";
import { NavLink, Route } from "react-router-dom";
import Directory from "./components/Directory/Directory";
import NewEntry from "./components/NewEntry/NewEntry";
import btcPayLogo from "./images/btcpay-directory-logo.svg";
import btcPayLogoWhite from "./images/btcpay-directory-logo-white.png";
import moonFilled from "./images/moonFilled.svg";
import sunFilled2 from "./images/sunFilled2.svg";

function App(props) {
  const [colorMode, setColorMode] = useState(props.colorMode);
  const switchColorMode = mode => {
    setColorMode(mode);
    window.localStorage.setItem("colorMode", mode);
  };

  return (
    <div className={`app app-${colorMode}`}>
      <header>
        <div className="navigation-menu">
          <NavLink exact to="/">
            <img src={colorMode === "light" ? btcPayLogo : btcPayLogoWhite} alt="BTCPayServer" />
          </NavLink>
          <div className="nav-items">
            <NavLink className="newentry" exact to="/newentry">
              New entry
            </NavLink>
            {colorMode === "light" ? (
              <img
                alt="Dark mode"
                src={moonFilled}
                onClick={(e) => switchColorMode("dark")}
              />
            ) : (
              <img
                alt="Light mode"
                src={sunFilled2}
                onClick={(e) => switchColorMode("light")}
              />
            )}
          </div>
        </div>
      </header>

      <div className="main-content">
        <Route
          exact
          path="/"
          render={(props) => <Directory {...props} colorMode={colorMode} />}
        />
        <Route
          exact
          path="filter/:filterName"
          render={(props) => <Directory {...props} colorMode={colorMode} />}
        />
        <Route
          exact
          path="/filter/:filterName/:subFilterName"
          render={(props) => <Directory {...props} colorMode={colorMode} />}
        />
        <Route
          exact
          path="/newentry"
          render={(props) => <NewEntry {...props} colorMode={colorMode} />}
        />
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

export default withRouter(App);
