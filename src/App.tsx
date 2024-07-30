import Navbar from "./components/Navbar";
import Hero from "./views/Hero/Hero";
import About from "./views/About/About";
import Skills from "./views/Skills/Skills";
import Achievements from "./views/Achievements/Achievements";
import Experience from "./views/Experience/Experience";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="content">
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Achievements></Achievements>
        <Experience></Experience>
      </div>
    </>
  );
};

export default App;
