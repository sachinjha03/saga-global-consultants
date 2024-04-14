import React from 'react'
import "../css/page css/HomePage.css"
import aboutSectionImg from "../images/about-img.jpg"
import Navbar from '../components/Navbar'
import QualitySection from '../components/QualitySection'
import ExpertiseSection from '../components/ExpertiseSection'
import TestimonialSection from '../components/TestimonialSection'
import { Link } from 'react-router-dom'
export default function HomePage() {
  return (
    <div>
    {window.scrollTo(0, 0)}
      <div className="landing-section">
        <h3>Welcome To</h3>
        <h1><span>SAGA</span> INTERNATIONAL</h1>
        <p>We have developed world class, contemporary training institutions where valuable human resources are nurtured and imparted training on the latest business tools and skills.  SAGA has necessary infrastructure  & expertise to provide value added customized training programs in upstream, midstream & downstream sectors</p>
        <a href="#aboutSection" className="btn-a">Explore More</a>
      </div>
      <div className="about-section" id='aboutSection'>
        <div className="about-section-left">
            <h2>Who Are <span> We ?</span></h2>
            <p>SAGA has consulting experience in managerial, technical and support services spread across the globe. SAGA is a pioneer, trusted brand across the Oil Industry. We are not a mere service provider but a partner in value creation and growth of our clients.</p>
            <p>We have developed world class, contemporary training institutions where valuable human resources are nurtured and imparted training on the latest business tools and skills.  SAGA has necessary infrastructure  & expertise to provide value added customized training programs in upstream, midstream & downstream sectors.</p>
            <div className="about-section-left-features">
                <li>Tailored training for evolving industry needs.</li>
                <li>Experienced trainers with industry insights.</li>
                <li>Cutting-edge facilities for immersive learning experiences.</li>
                <li>Customized programs for upstream sector excellence.</li>
                <li>Midstream sector expertise for operational efficiency.</li>
                <li>Downstream sector training for sustainable growth.</li>
                <li>Innovative methodologies for effective skill development.</li>
                <li>Global perspective integrated into every training module.</li>
            </div>
            <Link to="/about-us" className="btn-a">Know More About Us</Link>
        </div>
        <div className="about-section-right">
            <img src={aboutSectionImg} alt="" />
        </div>
      </div>
      <QualitySection/>
      <ExpertiseSection/>
      <TestimonialSection/>
    </div>
  )
}
