import React from 'react'
import './Works.css'
import EdenSpiekermann from '../../img/work_ed.png'
import Civey from '../../img/work_cv.png'
import Brandung from '../../img/work_ag.png'
import Egue from '../../img/work_eg.png'
import LeWagon from '../../img/work_lw.png'
import { themeContext } from '../../Context'
import { useContext } from 'react';
import {motion} from 'framer-motion'

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration: 2, type: 'spring' }
  const finalRot = { rotate:0 }
  const antiRot = {rotate:45}
  return (
    <div className="works">
      <div className="s-left">
        <div className="s-text">
          <span style={darkMode? {color: 'white'} : {color: ''}}>Companies</span>
          <span>I've worked for</span>
          <span>These are some of the companies,<br/>that I have worked for.</span>
        </div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate:-45 }}
          whileInView={{ rotate:0 }}
          viewport={{margin: '-40px'}}
          transition={transition}
          className="w-mainCircle">
          <motion.div
          initial={antiRot}
          whileInView={finalRot}
          transition={transition}
          className="w-secCircle">
            <img src={EdenSpiekermann} alt="" />
          </motion.div>
          <motion.div
          initial={antiRot}
          whileInView={finalRot}
          transition={transition}
          className="w-secCircle">
            <img src={Brandung} alt="" />
          </motion.div>
          <motion.div
          initial={antiRot}
          whileInView={finalRot}
          transition={transition}
          className="w-secCircle">
            <img src={Civey} alt="" />
          </motion.div>
          <motion.div
          initial={antiRot}
          whileInView={finalRot}
          transition={transition}
          className="w-secCircle">
            <img src={Egue} alt="" />
          </motion.div>
          <motion.div
          initial={antiRot}
          whileInView={finalRot}
          transition={transition}
          className="w-secCircle">
            <img src={LeWagon} alt="" />
          </motion.div>

        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
