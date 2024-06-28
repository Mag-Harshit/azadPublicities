import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUsHome from "./AboutUsHome";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUsHome />
      <Services />
    </div>
  );
};

export default Home;
