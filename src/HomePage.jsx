import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Projects from "./Components/Projects";
import Hero from "./Components/Hero";
import About from "./Components/About";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;
