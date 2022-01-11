import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Career from "./Pages/Career/Career";
import Contact from "./Pages/Contact/Contact";

import Error from "./components/404Page/Error";
import CareerDetails from "./Pages/Career/CareerDetails";
import ThankYou from "./components/ThankYou";
import Dashborad from "./DashBorad/DashBorad";
import BlogDetails from './Pages/Blog/BlogDetails'
const Routes = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Services} />
      <Route path="/career" component={Career} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog-details" component={BlogDetails} />
      <Route path="/career-details" component={CareerDetails} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/" component={Dashborad} />
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Routes;
