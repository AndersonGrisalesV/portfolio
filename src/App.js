import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Dplace from "./Components/Pages/Dplace";
import HealthyMindset from "./Components/Pages/HealthyMindset";

import "./App.css";
import CodeFinder from "./Components/Pages/CodeFinder";
import GroceryShop from "./Components/Pages/GroceryShop";
import NotFound from "./Components/Pages/NotFound";

function App() {
  const location = useLocation();

  useEffect(() => {
    const currentURL = window.location.href;
    let scrollbarColor = "#038d87";
    let scrollbarColorHover = "#04a39b";
    let selectionColor = "#038d87";
    let link = document.querySelector("link[rel~='icon']");

    link.loading = true;
    if (currentURL.includes("home")) {
      document.title = "Anderson Grisales";

      link.href =
        "https://res.cloudinary.com/doa4qiuc2/image/upload/v1687382248/Portfolio/IconHome_jypgdt.svg";

      scrollbarColor = "#038d87"; // Set the desired color for specific URL
      scrollbarColorHover = "#04c0b7";
    } else if (currentURL.includes("dplace")) {
      document.title = "Project Dplace";

      link.href =
        "https://res.cloudinary.com/doa4qiuc2/image/upload/v1684359106/Portfolio/projects/Dplace/DplaceLogo_jbfqhp.svg";

      scrollbarColor = "#da4453"; // Set the desired color for specific URL
      scrollbarColorHover = "#dd5c69"; // Set the desired hover color for specific URL

      selectionColor = "#da4453";
    } else if (currentURL.includes("healthy")) {
      document.title = "Project Healthy Mindset";

      link.href =
        "https://res.cloudinary.com/doa4qiuc2/image/upload/v1685647871/Portfolio/projects/HealthyMindset/healthyMindsetLogo_vdfbtg.svg";

      scrollbarColor = "#008540"; // Set the desired color for specific URL
      scrollbarColorHover = "#019F4D"; // Set the desired hover color for specific URL
      selectionColor = "#008540";
    } else if (currentURL.includes("finder")) {
      document.title = "Project Code Finder";
      link.href =
        "https://res.cloudinary.com/doa4qiuc2/image/upload/v1687384723/Portfolio/projects/CodeFinder/IconCode_uxay9w.svg";

      scrollbarColor = "#E02C50"; // Set the desired color for specific URL
      scrollbarColorHover = "#F83058"; // Set the desired hover color for specific URL
      selectionColor = "#E02C50";
    } else if (currentURL.includes("grocery")) {
      document.title = "Project Grocery Shop";
      link.href =
        "https://res.cloudinary.com/doa4qiuc2/image/upload/v1687384951/Portfolio/projects/GroceryShop/IconGrocery_g9l1zu.svg";

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
      <Routes>
        <Route
          path="https://andersongrisalesv.github.io/Portfolio/home"
          element={<Home />}
        />
        <Route path="/projects/dplace" element={<Dplace />} />
        <Route path="/projects/healthy_mindset" element={<HealthyMindset />} />
        <Route path="/projects/code_finder" element={<CodeFinder />} />
        <Route path="/projects/grocery_shop" element={<GroceryShop />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<p>Not Found!</p>} /> */}
      </Routes>
    </div>
  );
}

export default App;
