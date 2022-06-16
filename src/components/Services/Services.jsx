import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

const Services = () => {
  return (
    <div className="services">
      <div className="s-left">
        <div className="s-text">
          <span>My awesome</span>
          <span>Services</span>
          <span>This is a short descriptive text about me,<br/>which makes a lot of sense.</span>
        </div>
      <button className="button s-button">Download CV</button>
      </div>
      <div className="s-right-cards">
      I go to the right!
      </div>
    </div>
  )
}

export default Services
