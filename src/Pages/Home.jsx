import React from "react";
import Services from "./Home/Services/Services";
import HomeCard from "./Home/HomeCard/HomeCard";
import About from "./Home/About";
import Blog from "./Home/Blog/Blog";
import Testimonial from "./Home/testimonial/Testimonial";
import HomeBanner from "./Home/HomeBanner";
import Header from "../components/Header/Header";
const Home = () => {
  return (
    <React.Fragment>
      <Header />
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
