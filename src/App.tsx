import Navbar from "./components/Navbar";
import Hero from "./views/Hero/Hero";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Achievements from "./views/Achievements/Achievements";
import Experience from "./views/Experience/Experience";
import Projects from "./views/Projects/Projects";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      anchorPlacement: "top-bottom",
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="content">
        <Hero></Hero>
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Achievements></Achievements>
        <Projects></Projects>
      </div>
    </>
  );
};

export default App;
