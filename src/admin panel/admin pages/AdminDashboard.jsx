import React, { useEffect, useState } from 'react'
import "../admin css/AdminDashboard.css"
import dashboardImg from "../../images/dashboard-img.png"
import QueryCard from '../admin components/QueryCard'
import dashboardIllustration from "../../images/dashboard-illustration.png"
import ServiceCard from '../admin components/ServiceCard'
import serviceImg from "../../images/serviceImg.jpg"
export default function AdminDashboard() {
    const [queryData , setQueryData] = useState([])
    const [data , setData] = useState({image:"",name:"",description:"",quality1:"",quality2:"",quality3:"",quality4:"",quality5:"",quality6:""})
    const [serviceData , setServiceData] = useState([])

    useEffect(() => {
        const fetchQueryData = async() => {
            try{
                const response = await fetch("https://saga-global-backend.onrender.com/api/read-query" , {
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                const json = await response.json()
                if(json.success){
                    setQueryData(json.data)
                }
            }catch(err){
                console.log(err);
            }
        }

        fetchQueryData()

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
                    console.log("Failed To Retrieve Data");
                }
            }catch(Err){
                console.log(Err);
            }
        }
        
        fetchServiceData()

    } , [])


    const handleChange = (e) => {
        setData({...data , [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch("https://saga-global-backend.onrender.com/api/add-service" , {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
            const json = await response.json()
            if(json.success){
                console.log(json.data);
                alert("Service Added Successfully!!1")
                setData({image:"",name:"",description:"",quality1:"",quality2:"",quality3:"",quality4:"",quality5:"",quality6:""})
                window.location.reload()
            }else{
                alert("FAILED TO ADD SERVICES!!")
            }
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className='admin-dashboard'>
        <div className="admin-dashboard-landing-section">
            <div className="admin-dashboard-landing-section-left">
                <h1>Admin <span> Dashboard</span></h1>
                <p>Welcome to the Admin Dashboard of SAGA Global Consultants. This centralized platform provides you with comprehensive control and oversight of our operations and services. Here's what you can do</p>
                <div className="admin-dashboard-landing-section-left-bottom">
                    <div className="service-management-option">
                        <h3>Manage Services</h3>
                    </div>
                    <div className="service-management-option">
                        <h3>Manage Queries</h3>
                    </div>
                </div>
            </div>
            <div className="admin-dashboard-landing-section-right">
                <img src={dashboardImg} alt="" />
            </div>
        </div>


        <div className="admin-dashboard-service-section">
            <div className="admin-dashboard-service-section-top">
                <h2>Manage <span>Services</span></h2>
                <p>Welcome to the Service Management section of SAGA Global Consultants' admin dashboard. This feature empowers you to efficiently oversee and optimize our suite of services. Here's how you can manage services effectively</p>
            </div>
            <div className="admin-dashboard-service-section-middle">
                <img src={dashboardIllustration} alt="" />
                <form className="service-form" onSubmit={handleSubmit}>
                    <h3>Add Service</h3>
                    <div className="input-box">
                        <p>Image Url*</p>
                        <input type="text" className="input-field" name='image' required onChange={handleChange} value={data.image} />
                    </div>
                    <div className="input-box">
                        <p>Name Of The Service*</p>
                        <input type="text" className="input-field" name='name' required onChange={handleChange} value={data.name} />
                    </div>
                    <div className="input-box">
                        <p>Service Description*</p>
                        <textarea className='input-field' name='description' required onChange={handleChange} value={data.description}></textarea>
                    </div>
                    <div className="row">
                        <div className="input-box key-point-box">
                            <p>Key Point 1</p>
                            <input type="text" className="input-field" name='quality1'onChange={handleChange} value={data.quality1} />
                        </div>
                        <div className="input-box key-point-box">
                            <p>Key Point 2</p>
                            <input type="text" className="input-field" name='quality2' onChange={handleChange} value={data.quality2}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-box key-point-box">
                            <p>Key Point 3</p>
                            <input type="text" className="input-field" name='quality3' onChange={handleChange} value={data.quality3}/>
                        </div>
                        <div className="input-box key-point-box">
                            <p>Key Point 4</p>
                            <input type="text" className="input-field" name='quality4' onChange={handleChange} value={data.quality4}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-box key-point-box">
                            <p>Key Point 5</p>
                            <input type="text" className="input-field" name='quality5' onChange={handleChange} value={data.quality5}/>
                        </div>
                        <div className="input-box key-point-box">
                            <p>Key Point 6</p>
                            <input type="text" className="input-field" name='quality6' onChange={handleChange} value={data.quality6}/>
                        </div>
                    </div>
                    <input type="submit" value="Add Service" className='btn-a' />
                </form>
            </div>
            <div className="admin-dashboard-service-section-bottom">
                {serviceData.map((elem) => (
                    <ServiceCard key={elem._id} image={elem.image} name={elem.name} description={elem.description} id={elem._id}/>
                ))}
                
            </div>
        </div>

        <div className="admin-dashboard-query-section">
            <div className="admin-dashboard-query-section-top">
                <h2>Manage <span>Queries</span></h2>
                <p>Welcome to the Query Management section of the SAGA Global Consultants admin dashboard. This feature empowers you to efficiently handle and respond to queries from clients, partners, and stakeholders.</p>
            </div>
            <div className="admin-dashboard-query-section-bottom">
                {queryData.map((elem) => (
                    <QueryCard key={elem._id} name={elem.name} email={elem.email} contact={elem.contacnt} query ={elem.query} id={elem._id}/>
                ))}
            </div>
        </div>
    </div>
  )
}
