import React from "react";

export default function Card({ icon, title, desc }) {
  return (
    <div className="col-lg-12 features-item">
      <div className="icon">
        <i>{icon}</i>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
