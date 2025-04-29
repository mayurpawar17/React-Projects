import React from "react";
import OnBoardingHeader from "../components/OnBoardingHeader";
import Footer from "../components/Footer";
import CTAButton from "../components/CTAButton ";
import About from "../components/About";
import "../assets/styles/onBoardingPage.css";

const OnBoardingPage = () => {
  return (
    <>
      <div className="onboarding-container">
        <OnBoardingHeader />

        <main className="onboarding-content">
          <section className="hero-section">
            <h1>Welcome to Lumen Note</h1>
            <p>Your intelligent note-taking companion</p>
            <CTAButton />
          </section>

          <About />
          {/* <ScreenshotSection /> */}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OnBoardingPage;
