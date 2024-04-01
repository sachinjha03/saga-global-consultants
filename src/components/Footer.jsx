import React from 'react'
import "../css/component css/Footer.css"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-column" id="footerColumn1">
                <h3>SAGA GLOBAL<br /> <span>CONSULTANTS</span></h3>
                <h5>The Think-Tank for the oil & Gas lndustry</h5>
            </div>
            <div className="footer-column" id="footerColumn2">
                <h4>Important Links</h4>
                <Link to="/" className='link-a'>Home</Link>
                <Link to="/about-us" className='link-a'>About</Link>
                <Link to="/services" className='link-a'>Services</Link>
                <Link to="/contact" className='link-a'>Contact Us</Link>
            </div>
            <div className="footer-column" id="footerColumn3">
                <h4>Address</h4>
                <p>B-608, Western Edge II, Western Express Highway, Borivali (E), Mumbai, Maharashtra 400066</p>
                <p>Sagaconsultants@gmail.com</p>
            </div>
        </div>
        <div className="footer-bottom">
            <h4>Website is Designed and Developed By <span><a href="https://sachinjha.tech/" target='_blank'>Sachin Jha</a></span></h4>
        </div>
    </div>
  )
}
