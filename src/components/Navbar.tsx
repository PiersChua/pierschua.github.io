import Contact from "./Contact";
import "./Navbar.css";
import NavItem from "./NavItem";
import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Experience",
  ];
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const scrolltoTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="nav-container">
        <a>
          <img
            className="nav-logo"
            data-toggle="tooltip"
            title="Back to start"
            onClick={scrolltoTop}
            src="./LOGO.svg"
            alt="Piers Chua"
          />
        </a>
        <ul className="nav-links">
          {navLinks.map((nav) => (
            <NavItem key={nav} navlink={nav}></NavItem>
          ))}
        </ul>
        <Contact></Contact>
        <span
          className="nav-sidebar-logo bi bi-list"
          onClick={() => setSideBarVisible(!sideBarVisible)}
        ></span>
      </nav>

      <nav className={`nav-sidebar ${sideBarVisible ? "sideBarVisible" : ""} `}>
        <ul className="nav-links-sidebar">
          <span
            onClick={() => setSideBarVisible(!sideBarVisible)}
            className="nav-sidebar-close bi bi-x-lg"
          ></span>
          {navLinks.map((nav) => (
            <NavItem key={nav} navlink={nav}></NavItem>
          ))}
        </ul>
        <Contact isSmallDisplay={true}></Contact>
      </nav>
    </>
  );
};

export default Navbar;
