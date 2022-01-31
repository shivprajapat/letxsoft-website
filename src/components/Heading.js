import React from 'react'

export default function Heading({ heading, top_heading }) {
    return (
        <div className="heading_tab">
            <h3 className='sub_heading'>{top_heading}</h3>
            <h2 className="heading">{heading}</h2>
        </div>
    )
}
