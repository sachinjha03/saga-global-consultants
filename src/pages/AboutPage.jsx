import React from 'react'
import "../css/page css/AboutPage.css"
import landingSectionImage from "../images/about-page-landing-img.png"
import TestimonialSection from '../components/TestimonialSection'
import sectionImg1 from "../images/about1.jpg"
import sectionImg2 from "../images/about2.jpg"
import sectionImg3 from "../images/about3.jpg"

export default function AboutPage() {
    return (
        <div className="about-page">
    {window.scrollTo(0, 0)}
            <div className="about-page-landing-section">
                <div className="about-page-landing-section-left">
                    <h2>Specialized Area Of Knowledge We Offer</h2>
                    <p>At SAGA Global Consultants, we specialize in providing comprehensive training solutions tailored to the unique needs of our clients. Our expertise spans a diverse range of sectors, enabling us to deliver impactful training programs that drive measurable results. .</p>
                    <p> we understand that every organization has its own distinct requirements and objectives. That's why we offer customized training solutions that address specific challenges and goals, ensuring maximum relevance and effectiveness.</p>
                    <a href="#firstCommonSection" className="btn-a">Explore More</a>
                </div>
                <div className="about-page-landing-section-right">
                    <img src={landingSectionImage} alt="" />
                </div>
            </div>
            <div className="common-section" id='firstCommonSection'>
                <div className="common-section-image">
                    <img src={sectionImg1} alt="" />
                </div>
                <div className="common-section-content">
                    <h2>Vision & Mision</h2>
                    <p>We are a globally preferred knowledge consortium, providing best  in class services in the energy and related sectors.
                        Our	innovative,	committed	and	focused	team,	continuously
                        delight our customers.
                    </p>
                    <p>Sustained	growth	through	customer	delight,	enhanced	market  share & continuous product innovation</p>
                </div>
            </div>
            <div className="common-section">
                <div className="common-section-image">
                    <img src={sectionImg2} alt="" />
                </div>
                <div className="common-section-content">
                    <h2>Our Management</h2>
                    <p>Since inception, we have benefitted from a superior leadership
                        - from our strong, active and independent technical experts to  our experienced management team having over 3 decades of  infield experience
                    </p>
                    <p>We identify, understand and implement services by pooling  together the vast expertise of our technical experts for  discerning global clients in the Hydrocarbon sector.
                    </p>
                </div>
            </div>
            <div className="common-section">
                <div className="common-section-image">
                    <img src={sectionImg3} alt="" />
                </div>
                <div className="common-section-content">
                    <h2>Our Profile</h2>
                    <p>At SAGA Global Consultants, our mission is to develop world-class training institutions where valuable human resources are nurtured and equipped with the latest business tools and skills. We strive to empower individuals and organizations to thrive in today's dynamic business environment through innovative training solutions and personalized support.</p>
                </div>
            </div>
            <TestimonialSection />
        </div>
    )
}
