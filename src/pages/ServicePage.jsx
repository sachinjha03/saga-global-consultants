import React, { useEffect, useState } from 'react'
import "../css/page css/ServicePage.css"
import serviceImg from "../images/serviceImg.jpg"
export default function ServicePage() {
    const [serviceData , setServiceData] = useState([])

    useEffect(() => {
        const fetchServiceData = async() => {
            try{
                const response = await fetch("https://saga-global-backend.onrender.com/api/read-service" , {
                    method:'GET',
                    headers:{
                        'content-type':'application/json'
                    }
                })
                const json = await response.json()
                if(json.success){
                    setServiceData(json.data)
                }else{
                    console.log("failed to fetch service data");
                }
            }catch(err){
                console.log(err);
            }
        }

        fetchServiceData()

    } , [])

  return (
    <div className='service-page'>
    {window.scrollTo(0, 0)}
        <div className="service-page-landing-section">
            <h2>Our Services</h2>
            <p>At SAGA Global Consultants, we are committed to delivering excellence in everything we do. From training programs to consulting services, we partner with our clients to unlock their full potential and drive meaningful results..</p>
        </div>
        <div className="service-page-service-section">
            {serviceData.map((elem) => (
                <div className="service-card">
                    <img src={elem.image} alt="" />
                    <h3>{elem.name}</h3>
                    <p>{elem.description}</p>
                    <ul style={{"list-style-type" : 'square'}}>
                        {elem.quality1.length != 0 ? <li >{elem.quality1}</li> : ""}
                        {elem.quality2.length != 0 ? <li>{elem.quality2}</li> : ""}
                        {elem.quality3.length != 0 ? <li>{elem.quality3}</li> : ""}
                        {elem.quality4.length != 0 ? <li>{elem.quality4}</li> : ""}
                        {elem.quality5.length != 0 ? <li>{elem.quality5}</li> : ""}
                        {elem.quality6.length != 0 ? <li>{elem.quality6}</li> : ""}
                    </ul>
                </div>
                ))}
        </div>
    </div>
  )
}
