import React from "react";
import "./index.css";

import Header from "../src/components/Header";
import Home from "../src/components/Home";
import AboutUs from "./components/AboutUs";
import Img1 from "./components/img1";
import Menu from "./components/Menu";
import Menu2 from "./components/Menu2";
import Hands from "./components/Hands";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Img1 />
      <Home />
      <AboutUs />
      <Menu />
      <Menu2 />
      <Hands />
    </div>
  );
}

export default App;
