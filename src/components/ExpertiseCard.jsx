import React from 'react'
import "../css/component css/ExpertiseCard.css"
export default function ExpertiseCard(props) {
  return (
    <div className='expertise-card'>
        <img src={props.image} alt="" />
        <h4>{props.title}</h4>
        <p>{props.description}</p>
    </div>
  )
}
