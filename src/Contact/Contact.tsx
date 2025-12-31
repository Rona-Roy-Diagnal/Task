import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className='container'>
        <div className="contact-container">
    <h1>Contact Us</h1>
    <p>We love to hear from you</p>
    
    <div className="contact-item">
      <span>Email</span>
      <a href="mailto:flix@example.com">flix@example.com</a>
    </div>
    <div className="contact-item">
      <span>Phone</span>
      <a href="tel:+917994685453">+91 7994685453</a>
    </div>
    </div>
    
    </div>
  )
}

export default Contact