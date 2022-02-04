import React from "react";
import { FaCaretRight, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card({
  icon,
  title,
  list,
  list1,
  list2,
  list3,
  list4,
}) {
  return (
    <div className="col-lg-12 home-item">
      <div className="icon">
        <i>{icon}</i>
      </div>
      <h3>{title}</h3>
      <ul className="checklist">
        <li>
          <FaCaretRight /> {list}
        </li>
        <li>
          <FaCaretRight /> {list1}
        </li>
        <li>
          <FaCaretRight /> {list2}
        </li>
        <li>
          <FaCaretRight /> {list3}
        </li>
        <li>
          <FaCaretRight /> {list4}
        </li>
      </ul>
      <Link to='/'>
        <FaLongArrowAltRight />
      </Link>
    </div>
  );
}
