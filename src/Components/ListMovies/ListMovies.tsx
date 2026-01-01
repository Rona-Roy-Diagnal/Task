import  React, { useEffect, useState } from 'react'
import axios from '../../axios';
import { imageUrl } from '../../Constant/Constants';
import './ListMovies.css'
import {useNavigate } from 'react-router-dom';

interface props {
  url: string;
  title:string;
}
const ListMovies:React.FC<props>= ({title,url}:props) => {
  const [videos, setVideos] = useState<any[]>([]);
   const navigate= useNavigate();
  useEffect(() => {
    axios.get(url).then(res => {
      console.log(res.data.results)
      setVideos(res.data.results)
      
    }
    )
  }, [url])
  const handleVideo=(id:number)=>{
    console.log(id);
    navigate(`/details/${id}`);
  }

   

  return (
    <div  className='list-container'>
      
      <h2>{title}</h2>
   <div className='div'>
      {
        videos.map((video) => (
          <>
          
       
            <div className='poster-div'>
              <div className='img-rating'>
            <img key={video.id} onClick={()=>handleVideo(video.id)} className='video-img' src={`${imageUrl + video.poster_path}`}></img>
           
           <div className='rating'>{Math.round(( video.vote_average+Number.EPSILON)*100)/100+" ★"}</div>
            </div>
           <div className='poster-title'>
              
            {video.title}
          
            </div>
            
          </div>
          </>
        )

        )
      }
      </div>
      
    </div>
  )
}

export default ListMovies