import React, { useEffect } from "react";
import "./sass/App.scss";
import "./sass/responsive.scss";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Routes from "./Routes";
import ScrollToTop from "./ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
