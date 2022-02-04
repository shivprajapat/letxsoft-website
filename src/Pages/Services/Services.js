import React from "react";
import InnerBanner from "../../components/InnerBanner";
import Service from "../Home/Services/Services";
import InnerHeader from "../../components/Header/InnerHeader";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Service || Page</title>
        <meta name="description" content="Service Page" />
      </Helmet>
      <InnerHeader />
      <InnerBanner heading="Services"  name="Home" subname="Services"/>
      <div id="services" className="section_padding">
      <Service />
      </div>
    </React.Fragment>
  );
};

export default Services;
