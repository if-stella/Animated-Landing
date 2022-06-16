import React from 'react'
import './Card.css'

const Card = ({icon, heading, detail}) => {
  return (
    <div className="card">
      <img src={icon} alt=""/>
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Learn more</button>
    </div>
  )
}

export default Card
