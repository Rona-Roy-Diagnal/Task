import React from 'react'
import './Contact.css'
const Contact :React.FC= () => {
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
      <a href="tel:+911234567890">+91 678** *****</a>
    </div>
    </div>
    
    </div>
  )
}

export default Contact