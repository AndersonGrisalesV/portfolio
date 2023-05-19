import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Dplace from "./Components/Pages/Dplace";

import "./App.css";

function App() {
  return (
    <div className="main__container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects/dplace" element={<Dplace />} />
        <Route path="*" element={<p>Not Found!</p>} />
      </Routes>
    </div>
  );
}

export default App;
