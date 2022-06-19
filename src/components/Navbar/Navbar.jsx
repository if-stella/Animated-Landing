import React from 'react'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
import { themeContext } from '../../Context'
import { useContext } from 'react';
import './Navbar.css'

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper" style={darkMode? {background: 'rgba(15,0,27,0.75)', borderBottom: '1px solid #0F001B'} : {color: ''}}>
      <div className="n-left">
        <Link spy={true} to='Intro' smooth={true} activeClass='activeClass'><div className="n-name">Stella</div></Link>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to='Services' smooth={true} activeClass='activeClass'><li>Services</li></Link>
            <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'><li>Experience</li></Link>
            <Link spy={true} to='Work' smooth={true} activeClass='activeClass'><li>Work</li></Link>
            <Link spy={true} to='Projects' smooth={true} activeClass='activeClass'><li>Projects</li></Link>
            <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'><li>Testimonials</li></Link>
          </ul>
          <Link spy={true} to='Contact' smooth={true}>
          <button className="button n-button">
            Contact
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
