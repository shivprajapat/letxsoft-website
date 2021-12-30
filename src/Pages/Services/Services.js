import React from "react";
import InnerBanner from "../../components/InnerBanner";
import Service from "../Home/Services/Services";
import InnerHeader from "../../components/Header/InnerHeader";

const Services = () => {
  return (
    <React.Fragment>
      <InnerHeader />
      <InnerBanner heading="Services" />
      <div id="services" className="section_padding">
      <Service />
      </div>
    </React.Fragment>
  );
};

export default Services;
