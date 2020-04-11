import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const { PUBLIC_URL } = process.env;

ReactDOM.render(
  <Router basename={PUBLIC_URL}>
    {<App />}
  </Router>,
  document.getElementById("root")
);
