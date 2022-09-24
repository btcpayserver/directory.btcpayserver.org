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
import Supporter from "./components/Supporters/Supporter";

function App() {
  const COLOR_MODES = ["light", "dark"];
  const systemColorMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  const userColorMode = window.localStorage.getItem("colorMode");
  const initialColorMode = COLOR_MODES.includes(userColorMode)
    ? userColorMode
    : systemColorMode;

  const [colorMode, setColorMode] = useState(initialColorMode);
  const switchColorMode = (mode) => {
    setColorMode(mode);
    window.localStorage.setItem("colorMode", mode);
  };

  return (
    <div className={`app app-${colorMode}`}>
      <header>
        <div className="navigation-menu">
          <NavLink exact to="/">
            <img
              src={colorMode === "light" ? btcPayLogo : btcPayLogoWhite}
              alt="BTCPayServer"
            />
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
          path="/filter/:filterName"
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
        <Supporter />
      </div>

      <footer>
        <div className="footer-content">
          <div className="columns">
            <div className="column">
              <h2>Product</h2>
              <a href="https://docs.btcpayserver.org/">Introduction</a>
              <a href="https://docs.btcpayserver.org/UseCase/">Use Case</a>
              <a href="https://docs.btcpayserver.org/Apps/">Apps</a>
              <a href="https://docs.btcpayserver.org/Deployment/">Deployment</a>
              <a href="https://docs.btcpayserver.org/RegisterAccount/">Getting Started</a>
            </div>
            <div className="column">
              <h2>Resources</h2>
              <a href="https://github.com/btcpayserver/">GitHub</a>
              <a href="https://docs.btcpayserver.org/">Docs</a>
              <a href="https://docs.btcpayserver.org/Support/">Support</a>
              <a href="https://docs.btcpayserver.org/FAQ/">FAQ</a>
            </div>
            <div className="column">
              <h2>Community</h2>
              <a href="https://blog.btcpayserver.org/">Blog</a>
              <a href="https://docs.btcpayserver.org/Community/">Social</a>
              <a href="https://docs.btcpayserver.org/Contribute/">Contribute</a>
              <a href="https://btcpayserver.org/donate/">Donate</a>
            </div>
          </div>
          <div className="notes">
            <p>Content Released under MIT license.</p>
            <p>This website does not use cookies nor collect personal data.</p>
            <p>Entries are self-submitted and provided for information purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default withRouter(App);
