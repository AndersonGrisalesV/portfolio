import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Dplace from "./Components/Pages/Dplace";
import HealthyMindset from "./Components/Pages/HealthyMindset";

import "./App.css";
import CodeFinder from "./Components/Pages/CodeFinder";
import GroceryShop from "./Components/Pages/GroceryShop";
import Loader from "./Components/shared/Loaders/Loader";
import Logo from "./imgs/ExpressJS.png";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();

  const handleFavicon = () => {
    // Replace this logic with your own to determine the favicon based on the URL
    const currentUrl = window.location.pathname;
    let faviconPath = "";

    faviconPath = "../src/imgs/favicon.ico";

    return <link rel="icon" type="image/x-icon" href={faviconPath} />;
  };

  useEffect(() => {
    const currentURL = window.location.href;
    let scrollbarColor = "#038d87";
    let scrollbarColorHover = "#04a39b";
    let selectionColor = "#038d87";

    if (currentURL.includes("home")) {
      document.title = "Anderson Grisales";

      scrollbarColor = "#038d87"; // Set the desired color for specific URL
      scrollbarColorHover = "#04c0b7";
    } else if (currentURL.includes("dplace")) {
      document.title = "Project Dplace";

      scrollbarColor = "#da4453"; // Set the desired color for specific URL
      scrollbarColorHover = "#dd5c69"; // Set the desired hover color for specific URL

      selectionColor = "#da4453";
    } else if (currentURL.includes("healthy")) {
      document.title = "Project Healthy Mindset";

      scrollbarColor = "#008540"; // Set the desired color for specific URL
      scrollbarColorHover = "#019F4D"; // Set the desired hover color for specific URL
      selectionColor = "#008540";
    } else if (currentURL.includes("finder")) {
      document.title = "Project Code Finder";

      scrollbarColor = "#E02C50"; // Set the desired color for specific URL
      scrollbarColorHover = "#F83058"; // Set the desired hover color for specific URL
      selectionColor = "#E02C50";
    } else if (currentURL.includes("grocery")) {
      document.title = "Project Grocery Shop";

      scrollbarColor = "#2368A8"; // Set the desired color for specific URL
      scrollbarColorHover = "#2979C2"; // Set the desired hover color for specific URL
      selectionColor = "#2368A8";
    }

    document.documentElement.style.setProperty(
      "--scrollbar-color",
      scrollbarColor
    );
    document.documentElement.style.setProperty(
      "--scrollbar-color-hover",
      scrollbarColorHover
    );
    document.documentElement.style.setProperty(
      "--selection-background-color",
      selectionColor
    );
  }, [location]);

  return (
    <div className="main__container">
      <Helmet>{handleFavicon()} </Helmet>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects/dplace" element={<Dplace />} />
        <Route path="/projects/healthy_mindset" element={<HealthyMindset />} />
        <Route path="/projects/code_finder" element={<CodeFinder />} />
        <Route path="/projects/grocery_shop" element={<GroceryShop />} />
        <Route path="*" element={<Loader />} />
        {/* <Route path="*" element={<p>Not Found!</p>} /> */}
      </Routes>
    </div>
  );
}

export default App;
