import React from 'react'
import './Intro.css'
import Floatingdiv from "../Floatingdiv/Floatingdiv";
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Girl from '../../img/girl.png'
import Rocket from '../../img/intro-rocket.png'
import Telescope from '../../img/intro-telescope.png'
import Moon from '../../img/intro-moon.png'
import Planet2 from '../../img/intro-planet2.png'
import Planet1 from '../../img/intro-planet1.png'
import Star from '../../img/Star.png'
import Resume from './resume.pdf'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey, I'm</span>
          <span>Stella Raab.</span>
          <span>Ui-Designer turned into a Frontend Developper, based in Berlin. Teaching and learning things at Le Wagon.</span>
        </div>
        <a href={Resume} download>
        <button className="button i-button">Download resume</button>
        </a>
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
      <div className="blur i-b-y"></div>
      <div className="blur i-b-p"></div>
      <div className="i-right">
        <img src={Vector2} alt="Vector2"/>
        <img src={Vector1} alt="Vector1"/>
        <img src={Girl} alt="girl"/>
        <img src={Star} alt="Star"/>
        <img src={Planet1} alt="Planet 1"/>
        <img src={Planet2} alt="Planet 2"/>
        <img src={Moon} alt="Planet 2"/>
        {/*
        <div style={{top: '-4%', left: '68%'}}>
          <Floatingdiv image={Rocket} txt1="Web" txt2="Developper" />
        </div>
        <div style={{top: '18rem', left: '0rem'}}>
          <Floatingdiv image={Telescope} txt1="Best" txt2="practice" />
        </div>
        */}
      </div>
    </div>
  )
}

export default Intro
