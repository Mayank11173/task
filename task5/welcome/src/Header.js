import React from "react";
import "./headerStyling.css";

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <a className="brand" href="#home">
          Welcome
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
