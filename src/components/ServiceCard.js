import React from 'react'
import {FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ icon, name, desc }) {
    return (
        <div className="inner-box">
            <div className="icon-box"><span className="icon">{icon}</span></div>
            <h5><a href="#regin">{name}</a></h5>
            <div className="text">{desc}</div>
            <a className="arrow" href='#regin'><FaArrowRight /></a>
        </div>
    )
}
