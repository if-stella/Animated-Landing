import React from 'react'
import Card from '../Card/Card'
import './Services.css'
import Think from '../../img/service-think.png'
import HTML from '../../img/service-html.png'
import Sketch from '../../img/service-sketch.png'
import { themeContext } from '../../Context'
import { useContext } from 'react';
import {motion} from 'framer-motion'

const Services = () => {
  const transition = {duration: 2, type: 'spring', ease: [0.17, 0.67, 0.90, 0.67] }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
        <div className="w-text">
          <span style={darkMode? {color: 'white'} : {color: ''}}>My awesome</span>
          <span>Services</span>
          <span>This is a short descriptive text about me,<br/>which makes a lot of sense.</span>
        </div>
      <div className="s-right-cards">
        <motion.div
        initial= {{top: '-13rem'}}
        whileInView= {{top: '-17rem'}}
        transition={transition}
        style={{right: '30rem', top: '-17rem'}}>
          <Card
          icon = {Sketch}
          heading = {'Design'}
          detail = {'I design things, I do it good.'}
          className="sercard"
          />
        </motion.div>
        <motion.div
        initial= {{top: '-8rem'}}
        whileInView= {{top: '-12rem'}}
        transition={transition}
        style={{right: '13rem', top: '-12rem'}}>
          <Card
          icon = {HTML}
          heading = {'Code'}
          detail = {'I code things, I do it good.'}
          />
        </motion.div>
        <motion.div
        initial= {{top: '8rem'}}
        whileInView= {{top: '2rem'}}
        transition={transition}
        style={{right: '31rem', top: '2rem'}}>
          <Card
          icon = {Think}
          heading = {'Brain'}
          detail = {"I think about things, that's even better."}
          />
        </motion.div>
      </div>
      <div className="s-b-p"></div>
    </div>
  )
}

export default Services
