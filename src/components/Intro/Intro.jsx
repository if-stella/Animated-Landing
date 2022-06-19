import React from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Girl from '../../img/girl.png'
import Moon from '../../img/intro-moon.png'
import Planet2 from '../../img/intro-planet2.png'
import Planet1 from '../../img/intro-planet1.png'
import Star from '../../img/Star.png'
import Resume from './resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'


const Intro = () => {

  const transition = {duration: 2, type: 'spring', ease: [0.17, 0.67, 0.90, 0.67] }

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkMode? {color: 'white'} : {right: '4px'}}>Hey, I'm</span>
          <span>Stella Raab.</span>
          <span>Ui-Designer turned into a Frontend Developper, based in Berlin. Teaching and learning things at Le Wagon.</span>
        </div>
        <a href={Resume} download>
        <button className="button i-button">Download resume</button>
        </a>
      </div>
      <div className="blur i-b-y"></div>
      <div className="blur i-b-p"></div>
      <div className="i-right">
        <motion.img
        initial= {{left: '-2%', top: '-2%'}}
        whileInView= {{left: '0%', top: '0%'}}
        transition={transition}
        src={Vector2} alt="Vector2"/>
        <motion.img
        initial= {{left: '2%', top: '2%'}}
        whileInView= {{left: '0%', top: '0%'}}
        transition={transition}
        src={Vector1} alt="Vector1"/>
        <img src={Girl} alt="girl"/>
        <motion.img
         initial= {{left: '-12%', top: '-5%'}}
         whileInView= {{left: '0%', top: '0%'}}
         transition={transition}
        src={Star} alt="Star"/>
        <motion.img
        initial= {{left: '-25%', bottom: '-3%'}}
        whileInView= {{left: '0%', bottom: '0%'}}
        transition={transition}
        src={Planet1} alt="Planet 1"/>
        <motion.img
        initial= {{left: '20%', top: '15%'}}
        whileInView= {{left: '15%', top: '5%'}}
        transition={transition}
        src={Planet2} alt="Planet 2"/>
        <motion.img
        initial= {{left: '85%', top: '-5%'}}
        whileInView= {{left: '75%', top: '3%'}}
        transition={transition}
        src={Moon} alt="Moon"/>
      </div>
    </div>
  )
}

export default Intro
