import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

//* Remember that BrowserRouter is a router v6 implementation that uses the HTML5 history API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename="">
    <App />
  </HashRouter>
);
