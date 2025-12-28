
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import { movieDetails, movieVideos } from '../Constant/Url';
import axios from '../axios';
import './Details.css'
import { imageUrl } from '../Constant/Constants';

const Details:React.FC = () => {
    const [details,setDetails]=useState<any>(null);
    const [uid,setUid]=useState<string|null>(null);
    const {id}=useParams();
    const [playbtn,setPlaybtn]=useState(false)
   
  //  const opts = {
  //     height: '200px',
  //     width: '100%',
  //     playerVars: {
  //       // https://developers.google.com/youtube/player_parameters
  //       autoplay: 0,
  //       controls:1
  //     },
  //   };
    useEffect(()=>{
      if(id==undefined) return;
      axios.get(movieDetails(id)).then(res=>setDetails(res.data));
      axios.get(movieVideos(id)).then(res=> {
          if(res.data.results.length!=0){
              setUid(res.data.results[0]?.key)
          }
      
      }
        
      )
     
      
    },[id])
    const handlePlay=()=>{
      setPlaybtn(true);
     
    }
    if(!details){
      return(
      <p className='not-available'> Currently Not Available</p>)
    }
  return (
    <div className='details'>
      <div className='left-cont'>
   
   <img className='img' src={`${imageUrl + details.poster_path}`}></img>
      </div>
    <div className='right-cont'>
      <h1>{details.title}</h1>
    <p className='overview'>{details.overview}</p><div>
    {
      !uid && (<p>Video not Available at this moment</p>)
    }
{
        <button className='btn' onClick={handlePlay}>play video</button>
      }
      {
       
         playbtn && uid && (<YouTube className='youtube' videoId={uid} />)
      }
      {/* if(!uid){
        <p className='no-video'>Video not Available at this moment</p>
      }else{
        <button className='btn' onClick={handlePlay}>play video</button>
      }
    {
       
         playbtn && uid && (<YouTube videoId={uid} opts={opts}/>)
      } */}
       
    </div>
    

    </div>
    </div>
  )
}

export default Details