import React from "react";
import { withRouter, matchPath } from "react-router-dom";
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

  const systemColorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const colorMode = match ? match.params.colorMode : systemColorMode;

  return (
    <div className={`app app-${colorMode}`}>
      <header>
        <div className="navigation-menu">
          <a href={`${process.env.PUBLIC_URL}/${colorMode}`}>
            <img src={colorMode === "light" ? btcPayLogo : btcPayLogoWhite} alt="BTCPayServer" />
          </a>
          <div className="nav-items">
            <NavLink className="newentry" exact to={`${process.env.PUBLIC_URL}/${colorMode}/newentry`}>
              New entry
            </NavLink>
            {colorMode === "light" ? (
              <img
                alt="Dark mode"
                src={moonFilled}
                onClick={(e) => props.history.push(getOppositePath(props))}
              />
            ) : (
              <img
                alt="Light mode"
                src={sunFilled2}
                onClick={(e) => props.history.push(getOppositePath(props))}
              />
            )}
          </div>
        </div>
      </header>

      <div className="main-content">
        <Route exact path={`${process.env.PUBLIC_URL}/`}>
          {<Redirect to={`${process.env.PUBLIC_URL}/${systemColorMode}`} />}
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/:colorMode`} component={Directory} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/filter/:filterName`}
          component={Directory}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/:colorMode/filter/:filterName/:subFilterName`}
          component={Directory}
        />
        <Route exact path={`${process.env.PUBLIC_URL}/:colorMode/newentry`} component={NewEntry} />
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
