import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'



const LandingPage :React.FC= () => {
  
  return (
    <div className='cover'>
      
      <div>
        <h2>See What's Next.</h2>
        <p>WATCH ANYWHERE. CANCEL ANYTIME</p>
     <Link to='/register' replace={true}><button className='signup'>SIGN UP</button></Link>
     </div>
    </div>
  )
}

export default LandingPage