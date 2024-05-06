import React, { useState } from 'react'
import "../css/page css/ContactPage.css"
import TestimonialSection from '../components/TestimonialSection'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
export default function ContactPage() {
    const [formData , setFormData] = useState({name:"" , email:"" , contact:"" , query:""})
    const handleChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch("https://saga-global-backend.onrender.com/api/add-query" , {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body : JSON.stringify(formData)
            })
            const json = await response.json()
            if(json.success){
                alert("Message Sent Successfully")
                setFormData({name:"" , email:"" , contact:"" , query:""})
            }else{
                alert("FAILED TO SENT!!!")
            }
        }catch(err){
            console.log(err);
        }
        console.log(formData);
    }
  return (
    <>
    {window.scrollTo(0, 0)}
    <div className='contact-page'>
      <div className="contact-page-left">
        <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
            <div className="input-box">
                <p>Your Name</p>
                <input type="text" className="input-field" name='name' pattern="[A-Za-z]+" value={formData.name} onChange={handleChange} required/>
            </div>
            <div className="input-box">
                <p>Your Email</p>
                <input type="email" className="input-field" name='email' value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="input-box">
                <p>Your Contact Number</p>
                <input type="number" className="input-field" name='contact' value={formData.contact} onChange={handleChange} required/>
            </div>
            <div className="input-box">
                <p>Your Query</p>
                <textarea className="input-field" name='query' value={formData.query} onChange={handleChange} required></textarea>
            </div>
            <input type="submit" value="Send Message" className='btn-a'/>
        </form>
      </div>
      <div className="contact-page-right">
            <div className="contact-card">
                <div className="contact-card-left">
                    <AttachEmailIcon/>
                </div>
                <div className="contact-card-right">
                    <h4>Email Address</h4>
                    <p>Sagaconsultants@gmail.com</p>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-card-left">
                    <AddLocationAltIcon/>
                </div>
                <div className="contact-card-right">
                    <h4>Office Address</h4>
                    <p>B-608, Western Edge II, Western Express Highway, Borivali (E), Mumbai, Maharashtra 400066</p>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-card-left">
                    <AddIcCallIcon/>
                </div>
                <div className="contact-card-right">
                    <h4>Contact Number</h4>
                    <p>+91 98203 02801</p>
                </div>
            </div>
      </div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4625839722976!2d72.86275437337316!3d19.21866134748202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7325963e981%3A0xb46064c8785d65af!2sSAGA%20Global%20Consultants!5e0!3m2!1sen!2sin!4v1711955342257!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <TestimonialSection/>
    </>
  )
}
