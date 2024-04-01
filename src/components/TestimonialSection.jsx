import React from 'react'
import "../css/component css/TestimonialSection.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import TestimonialCard from './TestimonialCard';
import testimonial1 from "../images/testimonial1.jpg"
import testimonial2 from "../images/testimonial2.jpg"
import testimonial3 from "../images/testimonial3.jpg"
import testimonial4 from "../images/testimonial4.jpg"
import testimonial5 from "../images/testimonial5.jpg"

export default function TestimonialSection() {
  return (
    <div className='testimonial-section'>
        <div className="testimonial-section-left">
          <h2>Our <span>Testimonials</span></h2>
          <p>Our clients consistently praise the transformative impact of our tailored training programs. From CEOs to frontline staff, they've experienced firsthand the value of our expert guidance and customized approach. </p>
          <p>Discover why organizations across various sectors trust SAGA Global Consultants for their training needs. Join us on a journey of growth and success, where your satisfaction is our top priority.</p>
          <div className="testimonial-section-left-list">
            <VerifiedIcon className='orange-tick-icon'/>
            <h5>Expertise</h5>
          </div>
          <div className="testimonial-section-left-list">
            <VerifiedIcon className='orange-tick-icon'/>
            <h5>Customization</h5>
          </div>
          <div className="testimonial-section-left-list">
            <VerifiedIcon className='orange-tick-icon'/>
            <h5>Innovation</h5>
          </div>
          <div className="testimonial-section-left-list">
            <VerifiedIcon className='orange-tick-icon'/>
            <h5>Results Oriented</h5>
          </div>
        </div>
        <div className="testimonial-section-right">
          <TestimonialCard image={testimonial1} name="Joes XII" feedback="SAGA's training programs have truly transformed our team's skillset. Their expert guidance and tailored approach have empowered us to navigate the complexities of the industry with confidence."/>
          <TestimonialCard image={testimonial2} name="Keerthy R" feedback="Their trainers are knowledgeable, engaging, and truly care about the success of their students. Thanks to SAGA, our workforce is equipped with the latest tools and techniques to excel in our field."/>
          <TestimonialCard image={testimonial3} name="QrDITS" feedback="SAGA Global Consultants exceeded our expectations with their customized training programs. The hands-on approach and practical insights provided by their instructors have been invaluable to our team's professional development"/>
          <TestimonialCard image={testimonial4} name="Sachin" feedback="Choosing SAGA was one of the best decisions we made for our organization. Their commitment to excellence and dedication to delivering quality training solutions have made a significant impact on our business performance."/>
          <TestimonialCard image={testimonial5} name="LL ltd." feedback="Working with SAGA Global Consultants was a game-changer for our organization. Their trainers are not only knowledgeable but also incredibly engaging, making the learning experience enjoyable and effective."/>
        </div>
    </div>
  )
}
