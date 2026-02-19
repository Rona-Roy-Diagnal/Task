/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'
import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';
import "video.js/dist/video-js.css";
import "../Styles/Videoplay.css";
import {  setFocus, useFocusable } from '@noriginmedia/norigin-spatial-navigation';




function VideoService(props:any) {
  const videoRef=useRef<HTMLDivElement|null>(null);
  const playerRef=useRef<Player|null>(null);
const {options,onReady}=props;
const playvideo=useFocusable({
  onEnterPress:()=>{TogglePlay()},
  onArrowPress:(direction)=>{
      if(direction=='left'){
      skip(-10);
    }
    else if(direction=='right'){
      skip(10);
    }
    return true;
  }
    
})
  useEffect(() => {
      if(!playerRef.current){
        const videoElement=document.createElement('video-js');
        videoElement.classList.add("vjs-big-play-centered");
          //videoElement.classList.add("vjs-fill");
        if(videoRef.current==null)return;
        videoRef.current.appendChild(videoElement);
       const player=(playerRef.current=videojs(videoElement,options,()=>{
          videojs.log("player initialized");
          onReady && onReady(player);
        }))
       
      }
      else{
        const player=playerRef.current;
        player.autoplay(options.autoplay);
        player.src(options.sources);
        
      }
  }, [options,onReady])
  
   useEffect(() => {
    setFocus(playvideo.focusKey)
        if(!playerRef.current)return;
        if(playvideo.focused)
          playerRef.current.play();
        else
          playerRef.current.pause();
},[playvideo.focused]);

const TogglePlay=()=>{
  if(!playerRef.current)return;
  if(playerRef.current.paused()){
    playerRef.current.play();
  }
  else{
    playerRef.current.pause();
  }
 }
const skip=(second:number)=>{
  if(!playerRef.current)return;
  let current:number|undefined=playerRef.current.currentTime();
  if(current==undefined){
    current=0;
  }
  playerRef.current.currentTime(Math.max(0,current+second))
}
  
   useEffect(()=>{
      const player=playerRef.current;
    return()=>{
      if(player && !player.isDisposed()){
        player.dispose();
        playerRef.current=null;
      }
    }
   },[]); 
  
  return (
    <div ref={playvideo.ref} data-vjs-player>

        <div ref={videoRef} className='video-js'/>
      
    </div>
  )
}

export default VideoService;