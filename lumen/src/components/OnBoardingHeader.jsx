import React, { useState } from "react";
import "../assets/styles/onBoardingHeader.css";
import lumen from "../assets/img/lumen.svg";
import { Link } from "react-router-dom";

const OnBoardingHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={lumen} alt="lumen logo" />
        </div>
      </Link>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link> {/* Changed to Link */}
        <a href="#about">About</a>
        <Link to="/lumenNote">Lumen Note</Link>
      </nav>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default OnBoardingHeader;
