import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import Career from "./Pages/Career/Career";
import Blog from './Pages/Blog/Blog'
import Contact from "./Pages/Contact/Contact";

import Error from "./components/404Page/Error";
import CareerDetails from "./Pages/Career/CareerDetails";
import ThankYou from "./components/ThankYou";
import Dashborad from "./DashBorad/DashBorad";
import BlogDetails from './Pages/Home/Blog/BlogDetails'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Services} />
      <Route path="/service-details/:id" render={props => (<ServicesDetails {...props} />)} />
      <Route path="/blog" component={Blog} />
      <Route path='/blog-details/:id' render={props => (<BlogDetails {...props} />)} />
      <Route path="/career" component={Career} />
      <Route path='/career-details/:id' render={props => (<CareerDetails {...props} />)} />
      <Route path="/contact" component={Contact} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/dashborad" component={Dashborad} />
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Routes;
