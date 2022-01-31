import React from 'react';
import { FaInstagram ,FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"; 
const Auther = () => {
  return (
    <div className="author">
    <ul className="social-icons">

        <li><a href="/">
            <i><FaLinkedinIn/></i> 
          </a></li>
         <li> <a href="/">
            <i><FaTwitter/></i> 
          </a></li>
         <li> <a href="/">
            <i><FaInstagram/></i> 
          </a></li>
         <li> <a href="/">
            <i><FaFacebookF/></i> 
          </a></li>
    </ul>
      <div className="author_area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      <div className="author_head"></div>
        </ul>
         
      <div className="author_profile">
      <div className="author_profile_title">
      <img src="https://media-exp1.licdn.com/dms/image/C5103AQHayJMH6ENrVQ/profile-displayphoto-shrink_200_200/0/1544196828455?e=1648684800&v=beta&t=fRHoJ31BkH2jidv2j7w_WiiWaDiCUZTb_xmkhiy6bKE" className="shadow-sm" alt="uu" />
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
