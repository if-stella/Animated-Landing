import React from 'react'
import './Works.css'
import EdenSpiekermann from '../../img/work_ed.png'
import Civey from '../../img/work_cv.png'
import Brandung from '../../img/work_ag.png'
import Egue from '../../img/work_eg.png'
import LeWagon from '../../img/work_lw.png'

const Works = () => {
  return (
    <div className="works">
      <div className="s-left">
        <div className="s-text">
          <span>Brands</span>
          <span>I've worked for</span>
          <span>These are some of the awesome projects,<br/>that I have worked on.</span>
        </div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={EdenSpiekermann} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Brandung} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Civey} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Egue} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={LeWagon} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
