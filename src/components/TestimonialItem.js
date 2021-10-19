import React from 'react'

export default function TestimonialItem({name,hashtag,desc,img}) {
    return (
        <div className="testimonial_tab">
                    <div className="d-flex align-items-center testimonial_tab_item">
                        <div className="testimonial_tab_img">
                            <img
                                src={img}
                                alt=""
                            />
                        </div>
                        <div className='testimonial_tab_info'>
                            <p>{name}</p>
                            <span>{hashtag}</span>
                        </div>
                    </div>
                    <div className='desc'>

<p>{desc}</p>                     </div>
                </div>
    )
}
