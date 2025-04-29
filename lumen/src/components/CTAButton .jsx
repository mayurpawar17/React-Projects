import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/ctaButton.css";

const CTAButton = () => {
  const navigate = useNavigate();
  return (
    <button className="cta-button" onClick={() => navigate("/lumenNote")}>
      Go to Lumen Note →
    </button>
  );
};

export default CTAButton;
