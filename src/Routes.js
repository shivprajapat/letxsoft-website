import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Career from './Pages/Career/Career';
import Contact from './Pages/Contact/Contact';

import Error from './components/404Page/Error'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Services} />
      <Route path="/career" component={Career} />
      <Route path="/contact" component={Contact} />
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Routes;