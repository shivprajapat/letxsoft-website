import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Auther = () => {
  return (
    <div className="author">
      <ul className="social-icons">

        <li><a href="/"><FaLinkedinIn /></a></li>
        <li> <a href="/"><FaTwitter /></a></li>
        <li> <a href="/"><FaInstagram /></a></li>
        <li> <a href="/"><FaFacebookF /></a></li>
      </ul>
      <div className="author_area">
        <div className="author_head">
          <img src={require("../../Assets/images/blog-banner.jpg").default} alt="" />
        </div>

        <div className="author_profile">
          <div className="author_profile_title">
            <img src={require('../../Assets/images/owner.jpeg').default} alt="owner" />
            <h4>Nitesh sharma</h4>
            <span className="d-block">Software developer, Author, Writer</span>
            <p>Chris Orwig is a celebrated Software developer, author, and writer who brings passion to everything he does. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Auther;
