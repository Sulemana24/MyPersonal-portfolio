import React from "react";
import Hero from "../sections/Hero";
import About from "../pages/About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
