import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Dplace from "./Components/Pages/Dplace";
import HealthyMindset from "./Components/Pages/HealthyMindset";

import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    const currentURL = window.location.href;
    let scrollbarColor = "#038d87";
    let scrollbarColorHover = "#04a39b";

    let selectionDefaultBackground = "#038d87";

    if (currentURL.includes("home")) {
      scrollbarColor = "#038d87"; // Set the desired color for specific URL
      scrollbarColorHover = "#04c0b7";

      selectionDefaultBackground = "#038d87";
    } else if (currentURL.includes("dplace")) {
      scrollbarColor = "#da4453"; // Set the desired color for specific URL
      scrollbarColorHover = "#dd5c69"; // Set the desired hover color for specific URL

      selectionDefaultBackground = "#DA4453";
    } else if (currentURL.includes("healthy")) {
      scrollbarColor = "#008540"; // Set the desired color for specific URL
      scrollbarColorHover = "#019F4D"; // Set the desired hover color for specific URL

      selectionDefaultBackground = "#349965";
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
      selectionDefaultBackground
    );
  }, [location]);

  return (
    <div className="main__container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects/dplace" element={<Dplace />} />
        <Route path="/projects/healthy_mindset" element={<HealthyMindset />} />
        <Route path="*" element={<p>Not Found!</p>} />
      </Routes>
    </div>
  );
}

export default App;
