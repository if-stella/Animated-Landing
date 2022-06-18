import React from 'react'
import Card from '../Card/Card'
import './Services.css'
import Think from '../../img/service-think.png'
import HTML from '../../img/service-html.png'
import Sketch from '../../img/service-sketch.png'


const Services = () => {
  return (
    <div className="services">
      <div className="s-left">
        <div className="s-text">
          <span>My awesome</span>
          <span>Services</span>
          <span>This is a short descriptive text about me,<br/>which makes a lot of sense.</span>
        </div>
        <div>
        <button className="button s-button">Contact me!</button>
        </div>
      </div>
      <div className="s-blur"></div>
      <div className="s-right-cards">
      <div style={{right: '30rem', top: '-17rem'}}>
          <Card
          icon = {Sketch}
          heading = {'Design'}
          detail = {'I design things, I do it good.'}
          />
        </div>
        <div style={{right: '13rem', top: '-12rem'}}>
          <Card
          icon = {HTML}
          heading = {'Code'}
          detail = {'I code things, I do it good.'}
          />
        </div>
        <div style={{right: '31rem', top: '2rem'}}>
          <Card
          icon = {Think}
          heading = {'Brain'}
          detail = {"I think about even more, it's even better."}
          />
        </div>
      </div>
    </div>
  )
}

export default Services
