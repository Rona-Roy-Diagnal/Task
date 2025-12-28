import React, { useEffect } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
// import { API_KEY } from '../../Constant/Constants'
// import axios from '../../axios'


const LandingPage :React.FC= () => {
  
  return (
    <div>
      <img src='src/assets/landingimg.jpg'></img>
      <div className='btn-above'>
        <Link to='/signin'><button className='signin'>SIGN IN</button></Link>
      </div>
    </div>
  )
}

export default LandingPage