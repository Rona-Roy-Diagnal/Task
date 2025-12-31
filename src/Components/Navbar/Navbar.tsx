import React, { useState } from 'react'
import './Navbar.css'
import { Link, replace, useNavigate } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [sign, setSign] = useState<boolean>(true);
   const [logout, setLogout] = useState<boolean>(true);
 const toggle=true;
  const navigate=useNavigate();
  
  const handleSignin = () => {
    setSign(false);
    

  }
  const handleSignout = () => {
    setSign(true);
    
  }
  const handleContact=()=>{
    navigate('/contact');
  }
  return (
    <div className='navbar'>

      <h1>.FLIX</h1>
    <div>
       <button  className='signin'onClick={handleContact}>CONTACT</button>
      {
        sign && <Link to='/signin' replace={true} ><button onClick={handleSignin} className='signin'>SIGN IN</button></Link>
      
      }
      
      {
         
       !sign   &&<Link to='/' replace={true}> <button onClick={handleSignout} className='signin'>LOGOUT</button></Link>
      }
     </div>
    </div>
  )
}

export default Navbar