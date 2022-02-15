import React from 'react'
import { Switch, Route } from "react-router-dom";
import Protected from "./Protected";
import Error from "../components/404Page/Error";

import Home from "../Pages/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import Career from "../Pages/Career/Career";
import Blog from '../Pages/Blog/Blog'
import Contact from "../Pages/Contact/Contact";
import CareerDetails from "../Pages/Career/CareerDetails";
import ThankYou from "../components/ThankYou";
import BlogDetails from '../Pages/Home/Blog/BlogDetails'
import Login from '../admin/Pages/Login'

import Dashboard from '../admin/Dashboard';
import Logout from '../admin/Pages/Logout';

export default function Routes() {
    return (
        <Switch>
            <Route path="/login" render={props => (<Login {...props} />)} />
            <Route path="/logout" component={Logout} />
            <Protected exact path="/" component={Home} />
            <Protected path="/about" component={About} />
            <Protected path="/service" component={Services} />
            <Route path="/service-details/:id" render={props => (<ServicesDetails {...props} />)} />
            <Protected path="/blog" component={Blog} />
            <Route path='/blog-details/:id' render={props => (<BlogDetails {...props} />)} />
            <Protected path="/career" component={Career} />
            <Route path='/career-details/:id' render={props => (<CareerDetails {...props} />)} />
            <Protected path="/contact" component={Contact} />
            <Protected path="/thank-you" component={ThankYou} />

            {/* dashboard */}
            <Protected path="/dashboard" component={Dashboard} />
            <Protected path="*" component={Error} />
        </Switch>
    )
}
