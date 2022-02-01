import React from 'react'
import { Link } from 'react-router-dom'

export default function Heading({ heading, top_heading,linkTag }) {
    return (
        <div className="heading_tab">
            <Link to={`/${linkTag}`}>
            <h3 className='sub_heading'>{top_heading}</h3>
            </Link>
            <h2 className="heading">{heading}</h2>
        </div>
    )
}
