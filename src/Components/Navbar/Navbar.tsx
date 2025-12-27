import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar:React.FC = () => {
  return (
    <div className='navbar'>
        <h1>RNA</h1>
       <Link to='/signin'> <a href='#'>SIGN IN</a></Link>
    </div>
  )
}

export default Navbar