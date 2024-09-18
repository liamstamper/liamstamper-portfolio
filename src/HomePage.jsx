import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Projects from "./Components/Projects";
import Hero from "./Components/Hero";
import About from "./Components/About";
import OpenSource from "./Components/OpenSouce";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <OpenSource />
    </div>
  );
};

export default HomePage;
