import React from "react";
import { FaCheck } from "react-icons/fa";

export default function Card({ icon, title, list, list1, list2, list3, list4 }) {
  return (
    <div className="col-lg-12 home-item">
      <div className="icon">
        <i>{icon}</i>
      </div>
      <h3>{title}</h3>
      <ul className='checklist'>
        <li><FaCheck /> {list}</li>
        <li><FaCheck /> {list1}</li>
        <li><FaCheck /> {list2}</li>
        <li><FaCheck /> {list3}</li>
        <li><FaCheck /> {list4}</li>
      </ul>
    </div>
  );
}
