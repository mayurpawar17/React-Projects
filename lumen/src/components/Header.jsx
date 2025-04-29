import React from "react";
import "../assets/styles/header.css";
import lumen from "../assets/img/lumen.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={lumen} alt="Logo" />
        </div>
      </Link>
      <div className="search-setting-container">
        <input type="text" className="search-box" placeholder="Search..." />
      </div>
    </header>
  );
};
