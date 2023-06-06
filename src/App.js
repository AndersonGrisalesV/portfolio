import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Dplace from "./Components/Pages/Dplace";
import HealthyMindset from "./Components/Pages/HealthyMindset";

import "./App.css";
import CodeFinder from "./Components/Pages/CodeFinder";
import GroceryShop from "./Components/Pages/GroceryShop";

function App() {
  const location = useLocation();

  useEffect(() => {
    const currentURL = window.location.href;
    let scrollbarColor = "#038d87";
    let scrollbarColorHover = "#04a39b";

    if (currentURL.includes("home")) {
      scrollbarColor = "#038d87"; // Set the desired color for specific URL
      scrollbarColorHover = "#04c0b7";
    } else if (currentURL.includes("dplace")) {
      scrollbarColor = "#da4453"; // Set the desired color for specific URL
      scrollbarColorHover = "#dd5c69"; // Set the desired hover color for specific URL
    } else if (currentURL.includes("healthy")) {
      scrollbarColor = "#008540"; // Set the desired color for specific URL
      scrollbarColorHover = "#019F4D"; // Set the desired hover color for specific URL
    } else if (currentURL.includes("finder")) {
      scrollbarColor = "#E02C50"; // Set the desired color for specific URL
      scrollbarColorHover = "#F83058"; // Set the desired hover color for specific URL
    } else if (currentURL.includes("grocery")) {
      scrollbarColor = "#2368A8"; // Set the desired color for specific URL
      scrollbarColorHover = "#2979C2"; // Set the desired hover color for specific URL
    }

    document.documentElement.style.setProperty(
      "--scrollbar-color",
      scrollbarColor
    );
    document.documentElement.style.setProperty(
      "--scrollbar-color-hover",
      scrollbarColorHover
    );
  }, [location]);

  return (
    <div className="main__container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects/dplace" element={<Dplace />} />
        <Route path="/projects/healthy_mindset" element={<HealthyMindset />} />
        <Route path="/projects/code_finder" element={<CodeFinder />} />
        <Route path="/projects/grocery_shop" element={<GroceryShop />} />
        <Route path="*" element={<p>Not Found!</p>} />
      </Routes>
    </div>
  );
}

export default App;
