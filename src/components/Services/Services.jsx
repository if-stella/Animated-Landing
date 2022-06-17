import React from 'react'
import Card from '../Card/Card'
import './Services.css'
import Figma from '../../img/service-figma.png'
import Reacticon from '../../img/service-react.png'
import VSCode from '../../img/service-vscode.png'


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
        <button className="button s-button">Download CV</button>
        </div>
      </div>
      <div className="s-blur"></div>
      <div className="s-right-cards">
      <div style={{right: '40rem', top: '-17rem'}}>
          <Card
          icon = {Figma}
          heading = {'Figma'}
          detail = {'I design things, I do it good.'}
          />
        </div>
        <div style={{left: '-20rem', top: '-12rem'}}>
          <Card
          icon = {Reacticon}
          heading = {'React'}
          detail = {'I code things, I do it good.'}
          />
        </div>
        <div style={{right: '36rem', top: '1rem'}}>
          <Card
          icon = {VSCode}
          heading = {'VSCode'}
          detail = {"I code even more, it's even better."}
          />
        </div>
      </div>
    </div>
  )
}

export default Services
