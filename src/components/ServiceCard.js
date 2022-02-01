import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ServiceCard({ icon, animation, name, desc,id }) {
  return (
    <div className="inner-box" data-aos={animation} data-aos-duration="1000">
      <div className="icon-box">
        <span className="icon">{icon}</span>
      </div>
      <h5>
        <a href="#regin">{name}</a>
      </h5>
      <div className="text">{desc}</div>
      <Link className="arrow" Link to={`/service-details/${id}`}>
        <FaArrowRight />
      </Link>
    </div>
  );
}
