import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
import { useContext } from 'react';


const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle">2</div>
        <span>CATS</span>
        <span style={darkMode? {color: 'white'} : {color: ''}}>to feed</span>
      </div>
      <div className="achievement">
        <div className="circle">18+</div>
        <span>PLANTS</span>
        <span style={darkMode? {color: 'white'} : {color: ''}}>to greet</span>
      </div>
      <div className="achievement">
        <div className="circle">123+</div>
        <span>THINGS</span>
        <span style={darkMode? {color: 'white'} : {color: ''}}>to eat</span>
      </div>
    </div>
  )
}

export default Experience
