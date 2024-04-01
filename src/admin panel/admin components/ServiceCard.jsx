import React, { useState } from 'react'
import "../admin css/ServiceCard.css"
import CloseIcon from '@mui/icons-material/Close';
export default function ServiceCard(props) {
  const { image, name, description , id } = props
  const [editScreen , setEditScreen] = useState(false)
  const [formData , setFormData] = useState({image:"" , name:"" , description:"" , quality1:"",quality2:"",quality3:"",quality4:"",quality5:"",quality6:""})

  const handleDelete = async() => {
    try{
      const response = await fetch(`https://saga-global-backend.onrender.com/api/delete-service/${id}` , {
        method:'DELETE',
        headers:{
          'content-type':'application/json'
        }
      })
      const json = await response.json()
      if(json.success){
        alert("DELETE SUCCESSFULLY!!!")
        window.location.reload()
      }else{
        console.log("server responded with error");
      }
    }catch(Err){
      console.log(Err);
    }
  }
  const handleEdit = async(id) =>{
      setEditScreen(true)
      try{
        const response = await fetch(`https://saga-global-backend.onrender.com/api/read-service/${id}` , {
          method:'GET',
          headers:{
            'content-type':'application/json'
          }
        })
        const json = await response.json()
        if(json.success){
          setFormData({image:json.data[0].image , name:json.data[0].name  , description:json.data[0].description  , quality1:json.data[0].quality1 ,quality2:json.data[0].quality2 ,quality3:json.data[0].quality3 ,quality4:json.data[0].quality4 ,quality5:json.data[0].quality5 ,quality6:json.data[0].quality6 })
        }
      }catch(err){
        console.log(err);
      }
  }
  const closeEditScreen = () =>{
    setEditScreen(false)
  }
  const handleChange = (e) => {
      setFormData({...formData , [e.target.name] : e.target.value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch(`https://saga-global-backend.onrender.com/api/update-service/${id}` , {
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(formData)
      })
      const json = await response.json()
      if(json.success){
        alert("UPDATED SUCCESSFULLY")
        console.log(json.data);
        window.location.reload()
      }else{
        alert("FAILED TO MAKE CHANGES")
      }
    }catch(Err){
      console.log(Err);
    }
  }
  return (
    <div className='admin-service-card'>
      <img src={image} alt="" />
      <div className="service-card-content">
        <h4>{name}</h4>
        <p>{description}</p>
        <div className="row">
          <button className="btn-a" onClick={(e) => {handleEdit(id)}}>Edit</button>
          <button className="btn-a red-btn" onClick={handleDelete}>Delete</button>
        </div>
      </div>
      { editScreen && <div className="edit-screen">
        <form className="service-form" onSubmit={handleSubmit}>
          <CloseIcon className='close-icon' onClick={closeEditScreen} />
          <h3>Edit Screen</h3>
          <div className="row">
            <div className="input-box">
              <p>Image Url*</p>
              <input type="text" className="input-field" name='image' onChange={handleChange} value={formData.image} />
            </div>
            <div className="input-box">
              <p>Name Of The Service*</p>
              <input type="text" className="input-field" name='name' onChange={handleChange} value={formData.name} />
            </div>
          </div>
          <div className="input-box">
            <p>Service Description*</p>
            <textarea className='input-field' name='description' onChange={handleChange} value={formData.description}></textarea>
          </div>
          <div className="row">
            <div className="input-box key-point-box">
              <p>Key Point 1</p>
              <input type="text" className="input-field" name='quality1' onChange={handleChange} value={formData.quality1}/>
            </div>
            <div className="input-box key-point-box">
              <p>Key Point 2</p>
              <input type="text" className="input-field" name='quality2' onChange={handleChange} value={formData.quality2} />
            </div>
            <div className="input-box key-point-box">
              <p>Key Point 3</p>
              <input type="text" className="input-field" name='quality3' onChange={handleChange} value={formData.quality3} />
            </div>
          </div>
          <div className="row">
            <div className="input-box key-point-box">
              <p>Key Point 4</p>
              <input type="text" className="input-field" name='quality4' onChange={handleChange} value={formData.quality4} />
            </div>
            <div className="input-box key-point-box">
              <p>Key Point 5</p>
              <input type="text" className="input-field" name='quality5' onChange={handleChange} value={formData.quality5} />
            </div>
            <div className="input-box key-point-box">
              <p>Key Point 6</p>
              <input type="text" className="input-field" name='quality6' onChange={handleChange} value={formData.quality6} />
            </div>
          </div>
          <input type="submit" value="Save Changes" className='btn-a' />
        </form>
      </div>}
    </div>
  )
}
