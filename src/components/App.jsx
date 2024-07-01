import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import ServicesMain from "./ServicesMain";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<ServicesMain />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
