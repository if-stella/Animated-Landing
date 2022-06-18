import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="s-left">
        <div className="s-text">
          <span>Get in touch</span>
          <span>and say hello!</span>
        </div>
      </div>
      <div className="c-right">
        <form>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <div className="blur c-b-y"></div>
          <div className="blur c-b-p"></div>
        </form>
      </div>
    </div>
  )
}

export default Contact
