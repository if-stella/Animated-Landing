import React from 'react'
import './Intro.css'
import Floatingdiv from "../Floatingdiv/Floatingdiv";
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import girl from '../../img/girl.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey, I'm</span>
          <span>Stella Raab.</span>
          <span>Ui-Designer turned into a Frontend Developper, based in Berlin. Teaching and learning things at Le Wagon.</span>
        </div>
        <button className="button i-button">Say hello</button>
        <div className="i-icons">
          <a href='http://lakaeserie.de/' target='blank'>
            <img src={Github} alt="Github-icon"/>
          </a>
          <a href='http://lakaeserie.de/' target='blank'>
            <img src={Linkedin} alt="Linkedin-icon"/>
          </a>
          <a href='http://lakaeserie.de/' target='blank'>
            <img src={Instagram} alt="Instagram-icon"/>
          </a>
        </div>
      </div>
      <div className="i-blur">yuhu</div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1"/>
        <img src={Vector2} alt="Vector2"/>
        <img src={girl} alt="girl"/>
        <img src={glassesimoji} alt="glassesimoji"/>
        <div style={{top: '-4%', left: '68%'}}>
          <Floatingdiv image={crown} txt1="Web" txt2="Developper" />
        </div>
        <div style={{top: '18rem', left: '0rem'}}>
          <Floatingdiv image={thumbup} txt1="Best" txt2="practice" />
        </div>
      </div>
    </div>
  )
}

export default Intro
