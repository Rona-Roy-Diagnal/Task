import React, { useEffect } from 'react'
import './LandingPage.css'
import { API_KEY } from '../../Constant/Constants'
import axios from '../../axios'


const LandingPage :React.FC= () => {
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data.results[0])
    })
  },[])
  return (
    <div>

    </div>
  )
}

export default LandingPage