import React, { useState, useEffect } from "react";
import "./Assets/sass/App.scss";
import "./Assets/sass/responsive.scss";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Routes from "./Routes";
import ScrollToTop from "./ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";
import ScrollButton from "./components/ScrollButton";
import Preloader from "./components/preloader/Preloader";
function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);

    AOS.init();
  }, []);


  return (
    <React.Fragment>
      {/* {loading ?
        <Preloader />
        :  */}
        <Router>
          <ScrollToTop />
          <Routes />
          <Footer />
          <ScrollButton />
        </Router>
        {/*  } */}
    </React.Fragment>
  );
}

export default App;
