import React from 'react'
import { FaSearch, FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function BlogRight() {
  return (
    <div className='right-section clearfix'>
      <div className="blog-box-tab">
        <h3 className='ttl'>Search</h3>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" /></div>
          <button type="submit" className="btn"><FaSearch /></button>
        </form>
      </div>
      <div className="blog-box-tab">
        <h3 className='ttl'>Follow Us</h3>
        <ul className='social-links'>
          <li><a href="https://www.facebook.com" target='_new'><FaFacebookF /></a></li>
          <li><a href="https://www.google.com" target='_new'><FaGooglePlusG /></a></li>
          <li><a href="https://www.instagram.com" target='_new'><FaInstagram /></a></li>
          <li><a href="https://www.linkedin.com" target='_new'><FaLinkedinIn /></a></li>
          <li><a href="https://www.twitter.com" target='_new'><FaTwitter /></a></li>
        </ul>
      </div>
      <div className="blog-box-tab">
        <h3 className='ttl'>Categories</h3>
        <ul>
          <li>Coding</li>
        </ul>
      </div>
      <div className="blog-box-tab">
        <h3 className='ttl'>Tags</h3>
        <ul className='tags'>
          <li><Link to="/">HTML</Link></li>
          <li><Link to="/">CSS</Link></li>
          <li><Link to="/">JavaScript</Link></li>
          <li><Link to="/">React</Link></li>
        </ul>
      </div>

    </div>
  )
}