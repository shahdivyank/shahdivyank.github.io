import React from "react";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import About from "../components/About";
import Workshops from "../components/Workshops";

const Index = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <Landing />
      <About />
      <Experiences />
      <Projects />
      <Workshops />
      <Footer />
    </div>
  );
};

export default Index;
