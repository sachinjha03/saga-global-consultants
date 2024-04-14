import React from 'react'
import "../css/component css/TestimonialSection.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import TestimonialCard from './TestimonialCard';
import testimonial1 from "../images/SAGA_CL_logo-1.jpg"
import testimonial2 from "../images/SAGA_CL_logo-2.jpg"
import testimonial3 from "../images/SAGA_CL_logo-3.jpg"
import testimonial4 from "../images/SAGA_CL_logo-4.jpg"
import testimonial5 from "../images/SAGA_CL_logo-5.jpg"
import testimonial6 from "../images/SAGA_CL_logo-6.jpg"
import testimonial7 from "../images/SAGA_CL_logo-7.jpg"
import testimonial8 from "../images/SAGA_CL_logo-8.jpg"
import testimonial9 from "../images/SAGA_CL_logo-9.jpg"
import testimonial10 from "../images/SAGA_CL_logo-10.jpg"
import testimonial11 from "../images/SAGA_CL_logo-11.jpg"
import testimonial12 from "../images/SAGA_CL_logo-12.jpg"
import testimonial13 from "../images/SAGA_CL_logo-13.jpg"
import testimonial14 from "../images/SAGA_CL_logo-14.jpg"
import testimonial15 from "../images/SAGA_CL_logo-15.jpg"
import testimonial16 from "../images/SAGA_CL_logo-16.jpg"
import testimonial17 from "../images/SAGA_CL_logo-17.jpg"
import testimonial18 from "../images/SAGA_CL_logo-18.jpg"
import testimonial19 from "../images/SAGA_CL_logo-19.jpg"
import testimonial20 from "../images/SAGA_CL_logo-20.jpg"
import testimonial21 from "../images/SAGA_CL_logo-21.jpg"
import testimonial22 from "../images/SAGA_CL_logo-22.jpg"
import testimonial23 from "../images/SAGA_CL_logo-23.jpg"
import testimonial24 from "../images/SAGA_CL_logo-24.jpg"
import testimonial25 from "../images/SAGA_CL_logo-25.jpg"
import testimonial26 from "../images/SAGA_CL_logo-26.jpg"
import testimonial27 from "../images/SAGA_CL_logo-27.jpg"
import testimonial28 from "../images/SAGA_CL_logo-28.jpg"

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
          <TestimonialCard image={testimonial6} name="Joes XII" feedback="SAGA's training programs have truly transformed our team's skillset. Their expert guidance and tailored approach have empowered us to navigate the complexities of the industry with confidence."/>
          <TestimonialCard image={testimonial7} name="Keerthy R" feedback="Their trainers are knowledgeable, engaging, and truly care about the success of their students. Thanks to SAGA, our workforce is equipped with the latest tools and techniques to excel in our field."/>
          <TestimonialCard image={testimonial8} name="QrDITS" feedback="SAGA Global Consultants exceeded our expectations with their customized training programs. The hands-on approach and practical insights provided by their instructors have been invaluable to our team's professional development"/>
          <TestimonialCard image={testimonial9} name="Sachin" feedback="Choosing SAGA was one of the best decisions we made for our organization. Their commitment to excellence and dedication to delivering quality training solutions have made a significant impact on our business performance."/>
          <TestimonialCard image={testimonial10} name="LL ltd." feedback="Working with SAGA Global Consultants was a game-changer for our organization. Their trainers are not only knowledgeable but also incredibly engaging, making the learning experience enjoyable and effective."/>
          <TestimonialCard image={testimonial11} name="Joes XII" feedback="SAGA's training programs have truly transformed our team's skillset. Their expert guidance and tailored approach have empowered us to navigate the complexities of the industry with confidence."/>
          <TestimonialCard image={testimonial12} name="Keerthy R" feedback="Their trainers are knowledgeable, engaging, and truly care about the success of their students. Thanks to SAGA, our workforce is equipped with the latest tools and techniques to excel in our field."/>
          <TestimonialCard image={testimonial13} name="QrDITS" feedback="SAGA Global Consultants exceeded our expectations with their customized training programs. The hands-on approach and practical insights provided by their instructors have been invaluable to our team's professional development"/>
          <TestimonialCard image={testimonial14} name="Sachin" feedback="Choosing SAGA was one of the best decisions we made for our organization. Their commitment to excellence and dedication to delivering quality training solutions have made a significant impact on our business performance."/>
          <TestimonialCard image={testimonial15} name="LL ltd." feedback="Working with SAGA Global Consultants was a game-changer for our organization. Their trainers are not only knowledgeable but also incredibly engaging, making the learning experience enjoyable and effective."/>
          <TestimonialCard image={testimonial16} name="Joes XII" feedback="SAGA's training programs have truly transformed our team's skillset. Their expert guidance and tailored approach have empowered us to navigate the complexities of the industry with confidence."/>
          <TestimonialCard image={testimonial17} name="Keerthy R" feedback="Their trainers are knowledgeable, engaging, and truly care about the success of their students. Thanks to SAGA, our workforce is equipped with the latest tools and techniques to excel in our field."/>
          <TestimonialCard image={testimonial18} name="QrDITS" feedback="SAGA Global Consultants exceeded our expectations with their customized training programs. The hands-on approach and practical insights provided by their instructors have been invaluable to our team's professional development"/>
          <TestimonialCard image={testimonial19} name="Sachin" feedback="Choosing SAGA was one of the best decisions we made for our organization. Their commitment to excellence and dedication to delivering quality training solutions have made a significant impact on our business performance."/>
          <TestimonialCard image={testimonial20} name="LL ltd." feedback="Working with SAGA Global Consultants was a game-changer for our organization. Their trainers are not only knowledgeable but also incredibly engaging, making the learning experience enjoyable and effective."/>
          <TestimonialCard image={testimonial21} name="Joes XII" feedback="SAGA's training programs have truly transformed our team's skillset. Their expert guidance and tailored approach have empowered us to navigate the complexities of the industry with confidence."/>
          <TestimonialCard image={testimonial22} name="Keerthy R" feedback="Their trainers are knowledgeable, engaging, and truly care about the success of their students. Thanks to SAGA, our workforce is equipped with the latest tools and techniques to excel in our field."/>
          <TestimonialCard image={testimonial23} name="QrDITS" feedback="SAGA Global Consultants exceeded our expectations with their customized training programs. The hands-on approach and practical insights provided by their instructors have been invaluable to our team's professional development"/>
          <TestimonialCard image={testimonial24} name="Sachin" feedback="Choosing SAGA was one of the best decisions we made for our organization. Their commitment to excellence and dedication to delivering quality training solutions have made a significant impact on our business performance."/>
          <TestimonialCard image={testimonial25} name="LL ltd." feedback="Working with SAGA Global Consultants was a game-changer for our organization. Their trainers are not only knowledgeable but also incredibly engaging, making the learning experience enjoyable and effective."/>
          <TestimonialCard image={testimonial26} name="Joes XII" feedback="SAGA's training programs have truly transformed our team's skillset. Their expert guidance and tailored approach have empowered us to navigate the complexities of the industry with confidence."/>
          <TestimonialCard image={testimonial27} name="Keerthy R" feedback="Their trainers are knowledgeable, engaging, and truly care about the success of their students. Thanks to SAGA, our workforce is equipped with the latest tools and techniques to excel in our field."/>
          <TestimonialCard image={testimonial28} name="QrDITS" feedback="SAGA Global Consultants exceeded our expectations with their customized training programs. The hands-on approach and practical insights provided by their instructors have been invaluable to our team's professional development"/>
        </div>
    </div>
  )
}
