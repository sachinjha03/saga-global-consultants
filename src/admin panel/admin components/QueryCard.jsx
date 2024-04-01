import React from 'react'
import "../admin css/QueryCard.css"
export default function QueryCard(props) {
    const {name , email , contact , query , id} = props;
    
    const handleDelete = async(e) => {
      try{
        const response = await fetch(`https://saga-global-backend.onrender.com/api/delete-query/${props.id}` , {
          method:'DELETE',
          headers:{
            'content-type':'application/json'
          }
        })
        const json = await response.json()
        if(json.success){
          alert("QUERY DELETED SUCCESSFULLY")
          window.location.reload()
        }
      }catch(Err){
        console.log(Err);
      }
    }

  return (
    <div className='query-card'>
        <h3>{name}</h3>
        <h6>{email}</h6>
        <h6>{contact}</h6>
        <p>{query}</p>
        <button className="btn-a red-btn" onClick={handleDelete}>Delete Query</button>
    </div>
  )
}
