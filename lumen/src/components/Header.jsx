import React from "react";
import "../assets/styles/header.css";
import lumen from "../assets/img/lumen.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={lumen} alt="Logo" />
      </div>
      <div className="search-setting-container">
        <input type="text" className="search-box" placeholder="Search..." />
      </div>
    </header>
  );
};
