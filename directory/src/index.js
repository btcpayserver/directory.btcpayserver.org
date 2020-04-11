import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

const COLOR_MODES = ["light", "dark"];
const systemColorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const userColorMode = window.localStorage.getItem('colorMode');
const colorMode = COLOR_MODES.includes(userColorMode) ? userColorMode : systemColorMode;

ReactDOM.render(
  <Router>
    {<App colorMode={colorMode} />}
  </Router>,
  document.getElementById("root")
);
