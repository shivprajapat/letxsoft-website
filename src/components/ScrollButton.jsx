import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {
  const [backarrow, setBackArrow] = useState(false)

  const hendleChange = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setBackArrow(true)
    }
    else if (scrolled <= 300) {
      setBackArrow(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', hendleChange);


  return (
    <div className='scrollbtn'>
      <button className="blue_btn"
        style={{ display: backarrow ? 'inline' : 'none' }} >
        <FaArrowCircleUp onClick={scrollToTop} />
      </button>
    </div>
  )
}

export default ScrollButton
