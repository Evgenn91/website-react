import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Addresses from "./pages/Map.jsx";
import Application from "./pages/Application.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addresses" element={<Addresses />} />
        {/* <Route path="/application" element={<Application />} /> */}
      </Routes>
      <div id="wrapper">{/* this is the main content */}</div>
      <Footer />
    </>
  );
}

export default App;
