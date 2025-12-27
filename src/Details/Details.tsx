import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Details:React.FC = () => {
    const [details,setDetails]=useState({})
   const {id}=useParams();
   
  return (
    <div>Details</div>
  )
}

export default Details