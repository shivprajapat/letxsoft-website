import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Error from './components/404Page/Error'
import Blog from "./Pages/Blog/Blog";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Services} />
      <Route path='/blog' component={Blog}/>
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Routes;