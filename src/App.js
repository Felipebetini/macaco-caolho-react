import React from "react";
import "./index.css";

import Header from "../src/components/Header";
import Home from "../src/components/Home";
import AboutUs from "./components/AboutUs";
import Img1 from "./components/img1";

function App() {
  return (
    <div>
      <Header />
      <Img1 />
      <Home />
      <AboutUs />
    </div>
  );
}

export default App;
