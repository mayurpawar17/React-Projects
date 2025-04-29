import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import OnBoardingPage from "./pages/OnBoardingPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnBoardingPage />} />
        <Route path="/lumenNote" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
