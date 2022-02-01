import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogSearchInput from '../../../components/BlogSearchInput';
import { Blogdata } from "./data";

export default function BlogRight() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  const filterNames = ({ title }) => {
    return title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  };

  return (
    <div className='right-section clearfix'>
      <div className="blog-box-tab">
        <h3 className='ttl'>Search</h3>
        <BlogSearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="blog-box-tab">
        <h3 className='ttl'>Popular Posts</h3>
        <div className='blog-post'>
          {
            Blogdata.cardData.filter(filterNames).map((blog) => {
              const { title, img, date, id } = blog;
              return (
                <article key={id}>
                  <div className="item">
                    <Link to={`/blog-details/${id}`} className="thumb">
                      <img src={img} alt="" />
                    </Link>
                    <div className="info">
                      <span>{date}</span>
                      <Link to={`/blog-details/${id}`}>{title}</Link>
                    </div>
                  </div>
                </article>
              )
            })
          }

          {/* <article >
            <div className="item">
              <a className="thumb" href="/blog-details/#">
                <img src="https://rewy-gatsby.envytheme.com/static/blog-img9-6c1bc8bf646b7143c670f3a587d5d751.jpg" alt="" />
              </a>
              <div className="info">
                <span>June 10, 2020</span>
                <a href="/blog-details/#">The Data Surrounding Higher Education</a>
              </div>

            </div>
          </article>
          <article >
            <div className="item">
              <a className="thumb" href="/blog-details/#">
                <img src="https://rewy-gatsby.envytheme.com/static/blog-img9-6c1bc8bf646b7143c670f3a587d5d751.jpg" alt="" />
              </a>
              <div className="info">
                <span>June 10, 2020</span>
                <a href="/blog-details/#">The Data Surrounding Higher Education</a>
              </div>

            </div>
          </article>
          <article >
            <div className="item">
              <a className="thumb" href="/blog-details/#">
                <img src="https://rewy-gatsby.envytheme.com/static/blog-img9-6c1bc8bf646b7143c670f3a587d5d751.jpg" alt="" />
              </a>
              <div className="info">
                <span>June 10, 2020</span>
                <a href="/blog-details/#">The Data Surrounding Higher Education</a>
              </div>

            </div>
          </article> */}
        </div>
      </div>
      <div className="blog-box-tab">
        <h3 className='ttl'>Categories</h3>
        <ul className='categories'>
          <li><Link to="/">Business</Link></li>
          <li><Link to="/">Design (03)</Link></li>
          <li><Link to="/">Lifestyle (05) </Link></li>
          <li><Link to="/">Script (10)</Link></li>
          <li><Link to="/">Device (08)</Link></li>
          <li><Link to="/">Tips (01)</Link></li>
        </ul>
      </div>
      <div className="blog-box-tab">
        <h3 className='ttl'>Popular Tags</h3>
        <ul className='tags'>
          <li><Link to="/">Business</Link></li>
          <li><Link to="/">(3) Design  </Link></li>
          <li><Link to="/"> (3) Braike</Link></li>
          <li><Link to="/">(2) Fashion</Link></li>
          <li><Link to="/">(2) Travel </Link></li>
          <li><Link to="/">(1) Smart</Link></li>
          <li><Link to="/">(1) Marketing</Link></li>
          <li><Link to="/">(1) Tips (2)</Link></li>
        </ul>
      </div>

    </div>
  )
}