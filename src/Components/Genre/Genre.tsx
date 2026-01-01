import React, { useEffect, useRef } from 'react'
import shaka from 'shaka-player';
import './Genre.css';
import 'shaka-player/dist/controls.css';

const Genre:React.FC = () => {
    const manifestUri =
    'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8';
    const videoElmnt=useRef<HTMLVideoElement>(null);
    useEffect(()=>{
     initApp();   
    },[])
function initApp() {
  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer();
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error('Browser not supported!');
  }
}

async function initPlayer() {
  // Create a Player instance.
  const video= videoElmnt.current;
  if(video==null)return;
   
  const player = new shaka.Player();
 
  await player.attach(video);

  // Attach player to the window to make it easy to access in the JS console.
 // window.player = player;

  // Listen for error events.
  //player.addEventListener('error', onErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(manifestUri);
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');
  } catch (e) {
    // onError is executed if the asynchronous load fails.
    //onError(e);
    console.log(e);
  }
}

// function onErrorEvent(event:) {
//   // Extract the shaka.util.Error object from the event.
//   onError(event.detail);
// }

// function onError(error) {
//   // Log the error.
//   console.error('Error code', error.code, 'object', error);
// }

  return (
    <div className='shaka-video'>
            <video ref={videoElmnt}
           
          controls></video>
    </div>
  )
}

export default Genre