import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Assets/sass/App.scss";
import "./Assets/sass/responsive.scss";
import ScrollToTop from "./ScrollToTop";

// import ScrollButton from "./components/ScrollButton";
// import Footer from "./components/Footer";
// import Preloader from "./components/preloader/Preloader";

import Routes from "./routes/Routes";

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
        : */}
      <Router>
        <ScrollToTop />
        <Routes />
        {/* <ScrollButton   /> */}
        {/* <Footer /> */}
      </Router>
      {/* } */}
    </React.Fragment >
  );
}

export default App;


// json server command lime
// json-server --watch db.json