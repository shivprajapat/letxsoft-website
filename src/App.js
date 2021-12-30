import React from "react";
import "./sass/App.scss";
import "./sass/responsive.scss";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
