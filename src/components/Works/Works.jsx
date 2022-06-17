import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Amazon from '../../img/amazon.png'
import Fiverr from '../../img/fiverr.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

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
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
