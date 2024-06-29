import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUsHome from "./AboutUsHome";
import Services from "./Services";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUsHome />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
