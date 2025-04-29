import React from "react";
import "../assets/styles/about.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>What is Lumen Note?</h2>
      <div className="about-content">
        <p>
          Lumen Note is an intelligent note-taking application that helps you
          organize, search, and connect your ideas effortlessly. With advanced
          AI capabilities, it transforms your notes into actionable insights.
        </p>
        <ul className="features-list">
          <li>📝 Smart text recognition</li>
          <li>🔍 Powerful search functionality</li>
          <li>🌐 Cross-device synchronization</li>
          <li>🤖 AI-powered suggestions</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
