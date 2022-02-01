import React from "react";
import InnerBanner from "../../components/InnerBanner";
import OpenPositions from "./OpenPositions";
import Working from "./Working";
import OurOffice from "./OurOffice";
import InnerHeader from "../../components/Header/InnerHeader";
const Career = () => {
  return (
    <React.Fragment>
      <InnerHeader />
      <InnerBanner heading="Career"  name="Home" subname="Career"/>
      <div id="career">
        <Working />
        <OurOffice />
        <OpenPositions />
      </div>
    </React.Fragment>
  );
};

export default Career;
