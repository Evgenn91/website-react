import React, { useState } from "react";
import "./sass/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Addresses from "./pages/Map.jsx";
import Application from "./pages/Application.jsx";
import Requisites from "./pages/Requisites.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/application" element={<Application />} />
        <Route path="/requisites" element={<Requisites />} />
      </Routes>
      <div id="wrapper">{/* this is the main content */}</div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
