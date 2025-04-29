import React from "react";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Lumen Note</h3>
          <p>Illuminate your ideas</p>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <a href="/help">Help Center</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <a href="https://twitter.com/lumennote">Twitter</a>
          <a href="https://github.com/lumennote">GitHub</a>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Lumen Note. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
