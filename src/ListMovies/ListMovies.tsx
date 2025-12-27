import React, { useEffect, useState } from 'react'
import axios from '../axios';
import { imageUrl } from '../Constant/Constants';
import './ListMovies.css'

interface props {
  url: string;
  title:string;
}
const ListMovies = ({title,url}:props) => {
  const [videos, setVideos] = useState<any[]>([]);
  useEffect(() => {
    axios.get(url).then(res => {
      console.log(res.data.results)
      setVideos(res.data.results)
    }
    )
  }, [url])
  const handleVideo=(id:number)=>{
    console.log(id);
    
  }
  return (
    <div  >
      <h3>{title}</h3>
   <div className='div'>
      {
        videos.map((video) => (
          
            <img onClick={()=>handleVideo(video.id)} className='video-img' src={`${imageUrl + video.poster_path}`}></img>
          
        )

        )
      }
      </div>

    </div>
  )
}

export default ListMovies