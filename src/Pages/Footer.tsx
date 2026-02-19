import React from 'react'
import { Link } from 'react-router-dom'

const Footer :React.FC= () => {
  return (
    <>
      <Link to={'/contact'}><a href='#'>Contact</a></Link>  
    </>
  )
}

export default Footer