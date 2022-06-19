import React from 'react'
import './Card.css'
import { themeContext } from '../../Context'
import { useContext } from 'react';

const Card = ({icon, heading, detail}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card" style={darkMode? {background: 'white'} : {color: ''}}>
      <img src={icon} alt=""/>
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">Learn more</button>
    </div>
  )
}

export default Card
