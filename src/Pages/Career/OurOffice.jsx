import React from "react";
import office1 from "../../Assets/images/office/office-img-1.jpg";
import office2 from "../../Assets/images/office/office-img-2.jpg";
import office3 from "../../Assets/images/office/office-img-3.jpg";

const OurOffice = () => {
  const officeImg = [{ img: office1 }, { img: office2 }, { img: office3 }];
  return (
    <section className="our-office py-0">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          {officeImg.map((item, index) => {
            return (
              <div className="col-sm-4" key={index}>
                <div className="partner-image">
                  <img className="img-fluid" src={item.img} alt="Office" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
