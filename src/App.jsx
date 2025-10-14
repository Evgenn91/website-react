import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./sass/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import Addresses from "./pages/Map.jsx";
import Application from "./pages/Application.jsx";
import Requisites from "./pages/Requisites.jsx";
import Documentation from "./pages/documentation.jsx";
import Feedback from "./pages/Feedback.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/application" element={<Application />} />
        <Route path="/requisites" element={<Requisites />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </>
  );
}
