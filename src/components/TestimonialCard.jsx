import React from 'react'
import "../css/component css/TestimonialCard.css"
export default function TestimonialCard(props) {
  return (
    <div className='testimonial-card'>
        <div className="testimonial-card-left">
            <img src={props.image} alt="" />
        </div>
        <div className="testimonial-card-right">
            <h4>{props.name}</h4>
            <p>{props.feedback}</p>
        </div>
    </div>
  )
}
