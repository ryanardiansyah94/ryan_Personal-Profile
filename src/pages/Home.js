import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Portfolio from "../components/portofolio";
import Contact from "../components/contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
