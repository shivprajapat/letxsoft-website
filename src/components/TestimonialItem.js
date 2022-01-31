import React from "react";

export default function TestimonialItem({ name, hashtag, desc, img }) {
  return (
    <div className="testimonial_tab">
      <p>{desc}</p>
      <h3>{name}</h3>
      <span>{hashtag}</span>
      <div className="client-img">
        <img src={img} className="review-img back-img" alt="" />
      </div>
    </div>
  );
}
