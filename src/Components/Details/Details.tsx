
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import YouTube from 'react-youtube';

import axios from '../../axios';
import './Details.css'
import { imageUrl } from '../../Constant/Constants';
import { movieDetails,movieVideos } from '../../Constant/Url';



const Details:React.FC = () => {
   console.log("details.tsx");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [details,setDetails]=useState<any>(null);
   
    const [uid,setUid]=useState<string|null>(null);
    const {id}=useParams();
    const [playbtn,setPlaybtn]=useState(false)
    
  const navigate= useNavigate();
   const opts = {
      height: '450',
      width: '900',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls:1
      },
    };
    useEffect(()=>{
      if(id==undefined) return;
      //get movie details and set
      axios.get(movieDetails(id)).then(res=>setDetails(res.data));
      axios.get(movieVideos(id)).then(res=> {
          if(res.data.results.length!=0){
              setUid(res.data.results[0]?.key)
          }

      
      });
    },[id])
    const handlePlay=()=>{
      setPlaybtn(true);
     
    }
     const handleGoBack=()=>{
    navigate('/home');
     
    }
    if(!details){
      return(
      <p className='not-available'> Currently Not Available</p>)
    }
    
  return (
    <div className='details'>
     <div className='left-content'>
   {
       !playbtn? <img className='movie-img' src={`${imageUrl + details.poster_path}`}></img> : uid && <div className='youtube'><YouTube  videoId={uid} opts={opts}/></div>
   }
 </div>
      
      
      
   <div className='right-content'>
          <div className='title-rating'>
                <h1>{details.title} </h1>
                <h2>{Math.round(details.vote_average*100)/100+ ' ★'}</h2>
          </div>
      
      
      
    <div className='overview-btn'>
      <p className='genre'>{details.genres[0].name+", "+details.genres[1].name}</p> 
     <p className='overview'>{details.overview}</p>
    
   
    
    {
      !uid && (<p>Video not Available at this moment</p>)
    }
      {
        !playbtn && <button className='play-btn' onClick={handlePlay}>play video</button>
      }
      {
        playbtn && <button className='play-btn' onClick={handleGoBack}>Go Back</button>
      }
      </div>
      </div>
      {/* <div className='play-ut'>
      {
       
         playbtn && uid && (<YouTube className='youtube' videoId={uid} />)
      }
      </div> */}
    </div>
    

    
    
  )
}

export default Details