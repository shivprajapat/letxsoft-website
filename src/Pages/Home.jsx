import React from "react";
import Services from "./Home/Services/Services";
import HomeCard from "./Home/HomeCard/HomeCard";
import About from './Home/About'
import Blog from "./Home/Blog";
import Testimonial from "./Home/testimonial/Testimonial";
import HomeBanner from "./Home/HomeBanner";
const Home = () => {
  return (
    <React.Fragment>
      <HomeBanner />
      <HomeCard />
      <About />
      <Services />
      <Blog />
      <Testimonial />
    </React.Fragment>
  );
};

export default Home;
