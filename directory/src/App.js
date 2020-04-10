import React, { useState } from "react";
import { useParams, withRouter, matchPath } from "react-router-dom";
import "./App.scss";
import { NavLink, Route, Redirect } from "react-router-dom";
import Directory from "./components/Directory/Directory";
import NewEntry from "./components/NewEntry/NewEntry";
import btcPayLogo from "./images/btcpay-directory-logo.svg";
import btcPayLogoWhite from "./images/btcpay-directory-logo-white.png";
import moonFilled from "./images/moonFilled.svg";
import getOppositePath from "./helpers";
import sunFilled2 from "./images/sunFilled2.svg";

function App(props) {
  const match = matchPath(props.history.location.pathname, {
    // You can share this string as a constant if you want
    path: "/:colorMode",
  });
  // const [colorMode, setColorMode] = useState("light");

  const green = "#51B13E";
  const black = "#262626";
  const darkGreen = "#1E7A44";
  const pickedColor = green;
  const colorMode = match ? match.params.colorMode : "light";
  console.log(colorMode);

  return (
    <div className={`app app-${colorMode}`}>
      <header>
        <div className="navigation-menu">
          <a href={`${process.env.PUBLIC_URL}/${colorMode}`}>
            {colorMode === "light" ? (
              <img src={btcPayLogo} />
            ) : (
              <img src={btcPayLogoWhite} />
            )}
          </a>
          <div className="nav-items">
            <NavLink className="newentry" exact to={`/${colorMode}/newentry`}>
              New entry
            </NavLink>
            {colorMode === "light" ? (
              <img
                src={moonFilled}
                onClick={(e) => props.history.push(getOppositePath(props))}
              />
            ) : (
              <img
                src={sunFilled2}
                onClick={(e) => props.history.push(getOppositePath(props))}
              />
            )}
          </div>
        </div>
      </header>

      <div className="main-content">
        <Route exact path="/">
          {<Redirect to="/light" />}
        </Route>
        <Route exact path="/:colorMode" component={Directory} />
        <Route
          exact
          path="/:colorMode/filter/:filterName"
          component={Directory}
        />
        <Route
          exact
          path="/:colorMode/filter/:filterName/:subFilterName"
          component={Directory}
        />
        <Route exact path="/:colorMode/newentry" component={NewEntry} />
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
